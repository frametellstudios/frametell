# Cloudflare R2 Setup Guide

This guide will help you configure Cloudflare R2 integration for video management in your CMS.

## Step 1: Get R2 Credentials from Cloudflare

1. Log into your Cloudflare dashboard
2. Go to **R2** in the sidebar
3. On the R2 page, click **Manage R2 API Tokens** (button on the right side)
4. Click **Create API Token**
5. Configure the token:
   - **Token name**: `frametell-cms`
   - **Permissions**: Choose **Object Read & Write** (or just **Object Read** if you only want browsing)
   - **Specify bucket(s)**: Select your `frametell-assets` bucket
   - **TTL**: Leave as default or set to never expire
6. Click **Create API Token**
7. **IMPORTANT**: Copy and save these values (you won't see them again):
   - **Access Key ID** (looks like: `abc123def456...`)
   - **Secret Access Key** (looks like: `xyz789secretkey...`)
8. **Find your Account ID**:
   - Look at the **Endpoint URL** shown after creating the token
   - It will be like: `https://[ACCOUNT_ID].r2.cloudflarestorage.com`
   - Or find it in your R2 overview page URL

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

## Step 4: Upload Media to R2

1. Go to your R2 bucket in Cloudflare dashboard
2. Click **Upload**
3. Upload your media files:
   - **Videos**: MP4, WebM, MOV, AVI, MKV, M4V, FLV, WMV
   - **Images**: JPG, PNG, GIF, WebP, BMP, TIFF, HEIC
   - **Icons**: SVG, ICO
   - **Documents**: PDF, DOC, DOCX, TXT, MD
4. All files will automatically appear in the CMS media browser

## Step 5: Use R2 Media in CMS

### Universal Media Browser

1. Go to your CMS at `/admin`
2. Create or edit a Portfolio item
3. You'll see two widgets:
   - **Video URL**: Uses `r2-video` widget (videos only)
   - **Featured Image** & **Gallery**: Can use `r2-media` widget (all media types)

### Using the Universal Media Browser (r2-media widget)

1. Click on a field that uses the `r2-media` widget
2. You'll see:
   - **Manual URL input**: Enter any URL directly
   - **Filter buttons**: All, Videos, Images, Icons, Docs
   - **Media browser**: Scrollable list with thumbnails
3. Click a filter to show only that type of media
4. Click any media item to select it
5. The URL will be automatically filled in

### Features

- **Thumbnails**: Images and icons show preview thumbnails
- **File info**: See file type, size, and upload date
- **Type icons**: Videos (🎥), Images (🖼️), Icons (✨), Documents (📄)
- **Smart filtering**: Quickly find the media you need

## Troubleshooting

### Media not showing in CMS
- Check that all environment variables are set correctly
- Verify R2 API token has "Object Read" permission
- Ensure bucket has public access enabled
- Check browser console for errors
- Try refreshing the CMS page

### Media not loading/displaying
- Verify `R2_PUBLIC_DOMAIN` is correct
- Check that public access is enabled on the bucket
- Ensure files are in supported formats
- Test by opening a media URL directly in your browser

### "No media found" message
- Upload files to your R2 bucket
- Supported formats:
  - Videos: MP4, WebM, MOV, AVI, MKV, M4V, FLV, WMV
  - Images: JPG, PNG, GIF, WebP, BMP, TIFF, HEIC
  - Icons: SVG, ICO
  - Documents: PDF, DOC, DOCX, TXT, MD
- Refresh the CMS page after uploading

### Filters not working
- Clear browser cache
- Check browser console for JavaScript errors
- Ensure both widget scripts are loaded (check Network tab)

## Media Organization Tips

- **Use descriptive filenames**: e.g., `wedding-smith-2024.mp4`, `logo-white.svg`
- **Organize in folders**: e.g., `videos/weddings/`, `images/logos/`, `icons/`
- **Optimize file sizes**:
  - Videos: < 100MB for web playback
  - Images: < 5MB, use WebP for better compression
  - Icons: Use SVG for scalability
- **Use web-friendly formats**:
  - Videos: MP4 (H.264 codec) for best compatibility
  - Images: WebP > JPG > PNG
  - Icons: SVG for logos and graphics

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all environment variables are set
3. Test R2 access by visiting a video URL directly
4. Contact support with error details
