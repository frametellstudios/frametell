import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

let r2Client: S3Client | null = null;

function getR2Client() {
  if (!r2Client && process.env.R2_ACCOUNT_ID && process.env.R2_ACCESS_KEY_ID && process.env.R2_SECRET_ACCESS_KEY) {
    r2Client = new S3Client({
      region: "auto",
      endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
      },
    });
  }
  return r2Client;
}

export interface R2Media {
  key: string;
  url: string;
  size: number;
  lastModified: Date;
  type: 'video' | 'image' | 'icon' | 'document' | 'other';
  extension: string;
}

/**
 * Get media type from file extension
 */
function getMediaType(filename: string): { type: R2Media['type']; extension: string } {
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  
  // Video formats
  if (['mp4', 'webm', 'mov', 'avi', 'mkv', 'm4v', 'flv', 'wmv'].includes(ext)) {
    return { type: 'video', extension: ext };
  }
  
  // Image formats
  if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'tiff', 'heic'].includes(ext)) {
    return { type: 'image', extension: ext };
  }
  
  // Icon/Vector formats
  if (['svg', 'ico'].includes(ext)) {
    return { type: 'icon', extension: ext };
  }
  
  // Document formats
  if (['pdf', 'doc', 'docx', 'txt', 'md'].includes(ext)) {
    return { type: 'document', extension: ext };
  }
  
  return { type: 'other', extension: ext };
}

/**
 * List all media files from R2 bucket
 * Returns array of media objects with public URLs and type categorization
 */
export async function listR2Media(): Promise<R2Media[]> {
  const client = getR2Client();
  if (!client) {
    console.warn("[R2] Client not configured. Set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY environment variables.");
    return [];
  }

  const bucketName = process.env.R2_BUCKET_NAME || "frametell-assets";
  const publicDomain = process.env.R2_PUBLIC_DOMAIN; // e.g., https://assets.frametell.com or https://pub-xxx.r2.dev

  try {
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      // Only list video files
      Prefix: "", // You can add a prefix like "videos/" if you organize files in folders
    });

    const response = await client.send(command);
    const mediaFiles: R2Media[] = [];

    if (response.Contents) {
      for (const item of response.Contents) {
        if (!item.Key) continue;
        
        // Get media type and extension
        const { type, extension } = getMediaType(item.Key);
        
        // Skip unsupported file types if needed
        // (currently including all types)

        // Construct public URL
        const url = publicDomain 
          ? `${publicDomain}/${item.Key}`
          : `https://${bucketName}.r2.dev/${item.Key}`; // Fallback to R2.dev domain

        mediaFiles.push({
          key: item.Key,
          url,
          size: item.Size || 0,
          lastModified: item.LastModified || new Date(),
          type,
          extension,
        });
      }
    }

    return mediaFiles.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
  } catch (error) {
    console.error("[R2] Error listing media:", error);
    return [];
  }
}

/**
 * Legacy function for backwards compatibility
 */
export async function listR2Videos() {
  const allMedia = await listR2Media();
  return allMedia.filter(m => m.type === 'video');
}

/**
 * Get public URL for a specific video key
 */
export function getR2VideoUrl(key: string): string {
  const bucketName = process.env.R2_BUCKET_NAME || "frametell-assets";
  const publicDomain = process.env.R2_PUBLIC_DOMAIN;
  
  return publicDomain 
    ? `${publicDomain}/${key}`
    : `https://${bucketName}.r2.dev/${key}`;
}
