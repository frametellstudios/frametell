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

export interface R2Video {
  key: string;
  url: string;
  size: number;
  lastModified: Date;
}

/**
 * List all videos from R2 bucket
 * Returns array of video objects with public URLs
 */
export async function listR2Videos(): Promise<R2Video[]> {
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
    const videos: R2Video[] = [];

    if (response.Contents) {
      for (const item of response.Contents) {
        if (!item.Key) continue;
        
        // Filter for video file extensions
        const isVideo = /\.(mp4|webm|mov|avi|mkv|m4v)$/i.test(item.Key);
        if (!isVideo) continue;

        // Construct public URL
        const url = publicDomain 
          ? `${publicDomain}/${item.Key}`
          : `https://${bucketName}.r2.dev/${item.Key}`; // Fallback to R2.dev domain

        videos.push({
          key: item.Key,
          url,
          size: item.Size || 0,
          lastModified: item.LastModified || new Date(),
        });
      }
    }

    return videos.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
  } catch (error) {
    console.error("[R2] Error listing videos:", error);
    return [];
  }
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
