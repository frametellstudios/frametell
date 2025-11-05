# Cloudflare R2 Setup Guide

This guide will help you configure Cloudflare R2 integration for video management in your CMS.

## Step 1: Get R2 Credentials from Cloudflare

1. Log into your Cloudflare dashboard
2. Go to **R2** in the sidebar
3. Click on your bucket: **frametell-assets**
4. Click **Settings** → **R2 API Tokens**
5. Click **Create API Token**
6. Configure the token:
   - **Token Name**: `frametell-cms-access`
   - **Permissions**: Select "Object Read"
   - **Bucket**: Select "frametell-assets"
7. Click **Create API Token**
8. **IMPORTANT**: Copy and save these values (you won't see them again):
   - Access Key ID
   - Secret Access Key
   - Account ID (shown at the top of the R2 page)

## Step 2: Configure R2 Public Access

For videos to be accessible publicly, you need to set up a custom domain or use R2.dev:

### Option A: Use R2.dev Domain (Quick Setup)
1. In your bucket settings, enable **Public Access**
2. Your bucket will be available at: `https://frametell-assets.r2.dev`
3. Use this URL as your `R2_PUBLIC_DOMAIN`

### Option B: Custom Domain (Recommended for Production)
1. Go to your bucket settings
2. Click **Connect Domain**
3. Enter your custom domain (e.g., `assets.frametell.com`)
4. Follow the DNS setup instructions
5. Use your custom domain as `R2_PUBLIC_DOMAIN`

## Step 3: Add Environment Variables to Manus

1. In your Manus project, click the **Settings** icon (top right)
2. Go to **Settings** → **Secrets**
3. Add the following environment variables:

| Variable Name | Value | Example |
|--------------|-------|---------|
| `R2_ACCOUNT_ID` | Your Cloudflare Account ID | `abc123def456` |
| `R2_ACCESS_KEY_ID` | Your R2 Access Key ID | `a1b2c3d4e5f6` |
| `R2_SECRET_ACCESS_KEY` | Your R2 Secret Access Key | `secretkey123456` |
| `R2_BUCKET_NAME` | Your bucket name | `frametell-assets` |
| `R2_PUBLIC_DOMAIN` | Your public R2 domain | `https://assets.frametell.com` or `https://frametell-assets.r2.dev` |

4. Click **Save** for each variable

## Step 4: Upload Videos to R2

1. Go to your R2 bucket in Cloudflare dashboard
2. Click **Upload**
3. Upload your video files (MP4, WebM, MOV, etc.)
4. Videos will automatically appear in the CMS video selector

## Step 5: Use R2 Videos in CMS

1. Go to your CMS at `/admin`
2. Create or edit a Portfolio item
3. In the **Video URL** field, you'll see:
   - A text input for manual URL entry
   - A list of videos from your R2 bucket
4. Click on any video to select it
5. The video URL will be automatically filled in

## Troubleshooting

### Videos not showing in CMS
- Check that all environment variables are set correctly
- Verify R2 API token has "Object Read" permission
- Ensure bucket has public access enabled
- Check browser console for errors

### Videos not playing
- Verify `R2_PUBLIC_DOMAIN` is correct
- Check that public access is enabled on the bucket
- Ensure video files are in a supported format (MP4, WebM)

### "No videos found" message
- Upload videos to your R2 bucket
- Supported formats: .mp4, .webm, .mov, .avi, .mkv, .m4v
- Refresh the CMS page after uploading

## Video Organization Tips

- Use descriptive filenames (e.g., `wedding-smith-2024.mp4`)
- Organize videos in folders (e.g., `weddings/`, `events/`)
- Keep file sizes reasonable for web playback (< 100MB recommended)
- Use MP4 format with H.264 codec for best compatibility

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all environment variables are set
3. Test R2 access by visiting a video URL directly
4. Contact support with error details
