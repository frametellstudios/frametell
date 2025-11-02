# FrameTell Website Setup & Usage Guide

## Table of Contents

1. [Custom Domain Setup](#1-custom-domain-setup)
2. [Using the CMS to Upload Content](#2-using-the-cms-to-upload-content)
3. [Making Changes to the Website](#3-making-changes-to-the-website)
4. [NAS + Tailscale Setup for Client Downloads](#4-nas--tailscale-setup-for-client-downloads)

---

## 1. Custom Domain Setup

Your website is currently deployed at your Manus subdomain. To use your custom domain **frametell.com**, follow these steps:

### Option A: Using Manus Built-in Domain Management

**Step 1: Configure Domain in Manus**
1. Open the Management UI (right panel in your Manus interface)
2. Click **Settings** → **Domains**
3. Click **"Add Custom Domain"**
4. Enter `frametell.com` and `www.frametell.com`
5. Manus will provide you with DNS records to add

**Step 2: Update DNS Records at Your Domain Registrar (GoDaddy, Namecheap, etc.)**

Add these DNS records in your domain registrar's control panel:

| Type  | Name | Value (provided by Manus) | TTL  |
|-------|------|---------------------------|------|
| A     | @    | [IP address from Manus]   | 3600 |
| CNAME | www  | [CNAME from Manus]        | 3600 |

**Step 3: Wait for DNS Propagation**
- DNS changes typically take 15 minutes to 48 hours
- You can check status at [whatsmydns.net](https://www.whatsmydns.net/)
- Manus will automatically provision SSL certificate once DNS is verified

### Option B: Using Netlify (Alternative)

If you prefer to deploy to Netlify instead:

**Step 1: Deploy to Netlify**
1. Go to [app.netlify.com](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to GitHub and select `frametellstudios/frametell` repository
4. Build settings:
   - **Build command**: `pnpm build`
   - **Publish directory**: `client/dist`
5. Click **"Deploy site"**

**Step 2: Enable Netlify Identity (Required for CMS)**
1. In your Netlify site dashboard, go to **Identity** tab
2. Click **"Enable Identity"**
3. Under **Registration preferences**, select **"Invite only"**
4. Under **External providers**, enable **GitHub** or **Google**
5. Go to **Services** → **Git Gateway** and click **"Enable Git Gateway"**

**Step 3: Invite Yourself as CMS User**
1. In Identity tab, click **"Invite users"**
2. Enter your wife's email address
3. She'll receive an invitation email to set up CMS access

**Step 4: Add Custom Domain in Netlify**
1. Go to **Domain settings** in Netlify dashboard
2. Click **"Add custom domain"**
3. Enter `frametell.com`
4. Netlify will provide DNS records (similar to Option A)
5. Add these records to your domain registrar
6. Netlify will automatically provision SSL certificate

---

## 2. Using the CMS to Upload Content

The website uses **Decap CMS** (formerly Netlify CMS), which provides a user-friendly admin panel for managing content.

### Accessing the CMS

**URL**: `https://your-domain.com/admin` (or `https://frametell.manus.space/admin`)

**First-time setup**:
- If using Netlify: Use the invitation link from your email
- If using Manus: You may need to configure authentication (contact me for setup)

### CMS Dashboard Overview

Once logged in, you'll see these sections in the left sidebar:

1. **Portfolio** - Your work showcase
2. **Blog** - Blog posts and articles
3. **Pages** - About and Contact page content
4. **Settings** - Site-wide settings

### Uploading Portfolio Items

**Step-by-step**:

1. Click **"Portfolio"** in the sidebar
2. Click **"New Portfolio"** button
3. Fill in the form:
   - **Title**: e.g., "Sarah & John's Wedding"
   - **Category**: Select from dropdown (weddings, events, real-estate, etc.)
   - **Type**: Choose "video" or "photo"
   - **Featured Image**: Click to upload thumbnail (recommended size: 1920x1080px)
   - **Description**: Brief description of the project
   - **Gallery Images**: Upload multiple photos (for photo projects)
   - **Video URL**: Paste YouTube, Vimeo, or direct video URL
   - **Date**: Select the project date
   - **Featured**: Toggle ON to show on homepage
4. Click **"Publish"** (top right)

**Important Notes**:
- Images are uploaded to `/client/public/uploads/` in your GitHub repository
- Recommended image formats: JPG (for photos), PNG (for graphics)
- Recommended image sizes:
  - Thumbnails: 1920x1080px (16:9 ratio)
  - Gallery images: 2048px on longest side
  - Maximum file size: 5MB per image
- For videos: Upload to YouTube/Vimeo first, then paste the URL

### Writing Blog Posts

1. Click **"Blog"** in sidebar
2. Click **"New Blog"**
3. Fill in:
   - **Title**: Blog post title
   - **Publish Date**: When to publish
   - **Featured Image**: Blog header image
   - **Excerpt**: Short summary (shows in blog list)
   - **Body**: Full article content (supports Markdown formatting)
   - **Tags**: Optional keywords (comma-separated)
4. Click **"Publish"**

**Markdown Formatting Tips**:
```markdown
# Heading 1
## Heading 2
**Bold text**
*Italic text*
[Link text](https://example.com)
![Image alt text](/uploads/image.jpg)
```

### Editing Pages

**About Page**:
1. Click **"Pages"** → **"About Page"**
2. Edit the content in Markdown
3. Upload a hero image if desired
4. Click **"Publish"**

**Contact Info**:
1. Click **"Pages"** → **"Contact Info"**
2. Update email, phone, location, business hours
3. Click **"Publish"**

### Site Settings

1. Click **"Settings"** → **"Site Settings"**
2. Update:
   - **Site Title**: "FrameTell"
   - **Site Description**: For SEO
   - **Logo**: Upload your logo (recommended: 200x60px PNG with transparency)
   - **Social Media**: Add Instagram, Facebook, YouTube, Vimeo URLs
3. Click **"Publish"**

### CMS Workflow

**Publishing Process**:
1. Make changes in CMS → Click "Publish"
2. CMS commits changes to GitHub repository
3. Manus/Netlify automatically rebuilds the site (takes 2-3 minutes)
4. Changes appear on live website

**Draft Mode**:
- Click **"Save"** instead of "Publish" to save as draft
- Drafts are visible only in CMS, not on live site
- Click **"Publish"** when ready to go live

---

## 3. Making Changes to the Website

### Types of Changes

**Content Changes (Easy - Use CMS)**:
- Adding/editing portfolio items → Use CMS
- Writing blog posts → Use CMS
- Updating contact info → Use CMS
- Changing social media links → Use CMS

**Design Changes (Moderate - Contact Developer)**:
- Changing colors
- Modifying layout
- Adding new sections
- Changing fonts

**Feature Changes (Advanced - Contact Developer)**:
- Adding new pages
- Integrating new services
- Adding e-commerce
- Custom functionality

### How to Request Changes

**Option 1: Chat with Manus AI**
- Open a new conversation with Manus
- Describe the change you want
- Provide examples or screenshots if possible
- Manus will make the changes and create a new checkpoint

**Option 2: Hire a Developer**
- Your code is on GitHub: [https://github.com/frametellstudios/frametell](https://github.com/frametellstudios/frametell)
- Any developer can clone the repository and make changes
- Tech stack: Next.js 15, React 19, TypeScript, Tailwind CSS, Decap CMS

**Option 3: Learn to Code (Long-term)**
- The website is built with modern web technologies
- Resources:
  - [React Documentation](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Next.js Tutorial](https://nextjs.org/learn)

### Emergency Fixes

If something breaks:

1. **Rollback to Previous Version**:
   - Open Management UI → Click on an older checkpoint
   - Click **"Rollback"** button
   - Site will restore to that version

2. **Contact Support**:
   - Manus support: [https://help.manus.im](https://help.manus.im)
   - Provide details about what broke and when

---

## 4. NAS + Tailscale Setup for Client Downloads

This section explains how to set up secure client galleries using your NAS and Tailscale, allowing clients to download their photos/videos without exposing your NAS to the public internet.

### Architecture Overview

**How it works**:
1. Photos/videos stored on your NAS at home
2. Tailscale creates a secure VPN connection
3. Clients access files through a password-protected web interface
4. No static IP required, no port forwarding needed

### Prerequisites

- Synology, QNAP, or similar NAS device
- NAS accessible on your local network
- Admin access to your NAS

### Step 1: Install Tailscale on Your NAS

**For Synology NAS**:
1. Open **Package Center** on your Synology
2. Search for **"Tailscale"** in Community packages
3. If not available, download from [Tailscale's website](https://tailscale.com/download/synology)
4. Install the package
5. Open Tailscale app and click **"Log in"**
6. Follow authentication flow in browser
7. Your NAS will appear in your Tailscale network

**For QNAP NAS**:
1. Open **App Center**
2. Search for **"Container Station"**
3. Install Container Station
4. Create a new container using Tailscale Docker image:
   ```bash
   docker run -d \
     --name=tailscale \
     --restart=unless-stopped \
     --network=host \
     --cap-add=NET_ADMIN \
     --cap-add=SYS_MODULE \
     -v /var/lib/tailscale:/var/lib/tailscale \
     tailscale/tailscale
   ```
5. Authenticate: `docker exec tailscale tailscale up`

**For Other NAS**:
- Check [Tailscale documentation](https://tailscale.com/kb/) for your specific NAS model

### Step 2: Configure File Sharing on NAS

**Create Client Gallery Structure**:
```
/ClientGalleries/
  ├── 2025-01-15-Smith-Wedding/
  │   ├── photos/
  │   └── videos/
  ├── 2025-02-20-Johnson-Event/
  │   ├── photos/
  │   └── videos/
  └── ...
```

**Set Up Shared Folder**:
1. Create a new shared folder called `ClientGalleries`
2. Set permissions:
   - Owner: Your admin account (Read/Write)
   - Guest access: Disabled
   - Create individual user accounts for each client

**Create Client Accounts**:
1. Go to **Control Panel** → **User & Group**
2. Create new user for each client (e.g., `smith_wedding`)
3. Set strong password or generate random password
4. Grant access only to their specific folder

### Step 3: Enable Web File Station

**For Synology**:
1. Install **File Station** from Package Center (usually pre-installed)
2. Go to **Control Panel** → **File Services** → **SMB/AFP/NFS**
3. Enable **WebDAV** (HTTPS recommended)
4. Note the port number (default: 5006 for HTTPS)

**For QNAP**:
1. **File Station** is built-in
2. Go to **Control Panel** → **Network & File Services** → **Web Server**
3. Enable **Web Server**
4. Note the port number

### Step 4: Access via Tailscale

**Get Your NAS Tailscale IP**:
1. Open Tailscale admin console: [https://login.tailscale.com/admin/machines](https://login.tailscale.com/admin/machines)
2. Find your NAS device
3. Copy the Tailscale IP (e.g., `100.x.x.x`)

**Access URL Format**:
```
https://100.x.x.x:5006
```

**Share with Clients**:
1. Install Tailscale on client's device (Windows/Mac/iOS/Android)
2. Share the Tailscale invite link
3. Once connected, provide:
   - Access URL: `https://100.x.x.x:5006`
   - Username: `smith_wedding`
   - Password: `[generated password]`

### Step 5: Alternative - Tailscale Serve (Simpler)

**For easier client access without Tailscale installation**:

1. Enable Tailscale Serve on your NAS:
   ```bash
   tailscale serve https / http://localhost:5006
   ```

2. This creates a public HTTPS URL like:
   ```
   https://nas-name.tailnet-name.ts.net
   ```

3. Clients can access this URL directly without installing Tailscale
4. Still requires username/password authentication

### Step 6: Integrate with Website (Optional)

**Add Client Gallery Page**:

You can add a "Client Login" page to your website that links to the Tailscale gallery:

1. Create a new page in CMS
2. Add instructions for clients
3. Provide the Tailscale URL
4. Include login credentials (sent separately via email)

**Security Best Practices**:
- Never display passwords on the website
- Send credentials via encrypted email or password manager
- Use unique passwords for each client
- Revoke access after download period expires

### Advantages of This Setup

| Feature | Benefit |
|---------|---------|
| **No Static IP Required** | Works with dynamic home IP addresses |
| **No Port Forwarding** | Doesn't expose NAS to internet attacks |
| **Encrypted Connection** | All traffic encrypted via WireGuard |
| **Easy Client Access** | Clients just need Tailscale app or web link |
| **Granular Permissions** | Each client sees only their files |
| **No Monthly Costs** | Tailscale free tier supports up to 100 devices |

### Limitations & Considerations

**Bandwidth**:
- Upload speed limited by your home internet connection
- For large files (4K video), consider:
  - Upgrading home internet plan
  - Using cloud storage (Cloudinary, AWS S3) for large deliveries
  - Physical delivery (USB drive) for very large projects

**Reliability**:
- NAS must be powered on and connected to internet
- Consider UPS (uninterruptible power supply) for NAS
- Set up email alerts for NAS downtime

**Scalability**:
- Works well for small business (5-10 concurrent clients)
- For high volume, consider professional cloud storage

### Alternative Solutions

If NAS + Tailscale doesn't fit your needs:

| Solution | Cost | Pros | Cons |
|----------|------|------|------|
| **Cloudinary** | Free tier: 25GB | Easy integration, fast CDN | Limited free storage |
| **AWS S3 + CloudFront** | ~$0.023/GB | Unlimited scale, fast | Requires technical setup |
| **Dropbox Business** | $15/user/month | Simple, familiar | Ongoing cost |
| **Google Drive** | $9.99/month (2TB) | Easy sharing | Not professional |
| **Pixieset** | $8-40/month | Built for photographers | Monthly subscription |

---

## Summary

**Quick Reference**:

1. **Custom Domain**: Settings → Domains → Add DNS records at registrar
2. **Upload Content**: Visit `/admin` → Use CMS interface
3. **Make Changes**: Chat with Manus AI or edit code on GitHub
4. **Client Downloads**: Set up NAS + Tailscale for secure sharing

**Support Resources**:
- Manus Help: [https://help.manus.im](https://help.manus.im)
- GitHub Repository: [https://github.com/frametellstudios/frametell](https://github.com/frametellstudios/frametell)
- Tailscale Docs: [https://tailscale.com/kb/](https://tailscale.com/kb/)
- Decap CMS Docs: [https://decapcms.org/docs/](https://decapcms.org/docs/)

**Next Steps**:
1. Configure custom domain
2. Set up CMS authentication (if using Netlify)
3. Upload first portfolio items
4. Test client gallery access
5. Launch and share with clients!

---

*Guide created by Manus AI - Last updated: November 2, 2025*
