# FrameTell - Cloudflare Pages + CMS Complete Setup Guide

Complete walkthrough for deploying your FrameTell website to Cloudflare Pages with a fully functional CMS using GitHub OAuth authentication.

---

## 🎯 What You'll Get

After following this guide:
- ✅ Website deployed on Cloudflare Pages (fast, free, global CDN)
- ✅ Automatic deployments when you push to GitHub
- ✅ CMS admin interface at `yoursite.com/admin`
- ✅ Manage portfolio, blog, and content without code
- ✅ GitHub OAuth authentication (secure, no extra accounts needed)
- ✅ Custom domain support
- ✅ Free SSL certificate

---

## 📋 Prerequisites

- ✅ GitHub account (you already have: frametellstudios)
- ✅ Cloudflare account (free tier is fine)
- ✅ Your code is on GitHub (already done!)
- ⏱️ Time needed: 15-20 minutes

---

## Part 1: Create GitHub OAuth Application

### Step 1.1: Access GitHub Developer Settings

1. Go to GitHub and log in
2. Click your profile picture (top right)
3. Select **Settings**
4. Scroll down in left sidebar
5. Click **Developer settings** (near bottom)
6. Click **OAuth Apps**
7. Click **New OAuth App** button

### Step 1.2: Fill in OAuth App Details

**Application name:**
```
FrameTell CMS
```

**Homepage URL:**
```
https://frametell.pages.dev
```
*(Or your custom domain if you have one, e.g., `https://frametell.com`)*

**Application description:** (optional)
```
Content management system for FrameTell website
```

**Authorization callback URL:**
```
https://api.netlify.com/auth/done
```

**Important:** Yes, use `api.netlify.com` even though you're on Cloudflare! Decap CMS uses Netlify's OAuth service regardless of where you host.

### Step 1.3: Register Application

1. Click **Register application**
2. You'll see your new OAuth app page

### Step 1.4: Generate Client Secret

1. On the OAuth app page, you'll see **Client ID** (copy this!)
2. Click **Generate a new client secret**
3. Copy the **Client Secret** immediately (you won't see it again!)

**Save these somewhere safe:**
```
Client ID: [your-client-id]
Client Secret: [your-client-secret]
```

---

## Part 2: Deploy to Cloudflare Pages

### Step 2.1: Access Cloudflare Dashboard

1. Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. Log in to your Cloudflare account
3. In the left sidebar, click **Workers & Pages**

### Step 2.2: Create New Pages Project

1. Click **Create application** button
2. Select **Pages** tab
3. Click **Connect to Git**

### Step 2.3: Connect GitHub Repository

1. Click **Connect GitHub** (if not already connected)
2. Authorize Cloudflare to access your GitHub
3. Select **frametellstudios/frametell** repository
4. Click **Begin setup**

### Step 2.4: Configure Build Settings

**Project name:**
```
frametell
```
*(This will be your subdomain: frametell.pages.dev)*

**Production branch:**
```
master
```
*(Or `development` if you prefer)*

**Build command:**
```
cd client && npm install && npm run build
```

**Build output directory:**
```
client/dist
```

**Root directory:** (leave empty)

**Environment variables:**
Click **Add variable** and add these:

```
NODE_VERSION = 22
```

### Step 2.5: Deploy!

1. Click **Save and Deploy**
2. Wait 3-5 minutes for first build
3. Watch the build log (optional but fun!)

**Success!** Your site is now live at `https://frametell.pages.dev`

---

## Part 3: Set Up CMS Authentication

### Step 3.1: Add OAuth Credentials to Cloudflare

1. Go back to your Cloudflare Pages project
2. Click **Settings** tab
3. Scroll to **Environment variables**
4. Click **Add variables**

Add these two variables:

**Variable 1:**
```
Name: OAUTH_GITHUB_CLIENT_ID
Value: [paste your Client ID from Step 1.4]
```

**Variable 2:**
```
Name: OAUTH_GITHUB_CLIENT_SECRET
Value: [paste your Client Secret from Step 1.4]
```

5. Click **Save**

### Step 3.2: Create OAuth Endpoint

Cloudflare Pages needs a serverless function to handle OAuth.

**Don't worry - I'll create this file for you in the next checkpoint!**

The file will be at: `functions/auth/[[path]].js`

This handles the OAuth callback from GitHub.

---

## Part 4: Access Your CMS

### Step 4.1: Navigate to Admin

1. Go to your live site: `https://frametell.pages.dev`
2. Add `/admin` to the URL: `https://frametell.pages.dev/admin`

### Step 4.2: Log In with GitHub

1. You'll see the Decap CMS login screen
2. Click **Login with GitHub**
3. Authorize the OAuth app (first time only)
4. You're in! 🎉

---

## Part 5: Using Your CMS

### Managing Portfolio Items

**Add New Project:**
1. Click **Portfolio** in sidebar
2. Click **New Portfolio**
3. Fill in details:
   - Title, Category, Type
   - Upload featured image
   - Add gallery images (optional)
   - Video URL (optional)
   - Set as featured (optional)
4. Click **Publish**

**Edit Project:**
1. Click **Portfolio**
2. Click the project
3. Make changes
4. Click **Publish**

### Managing Blog Posts

**Create Post:**
1. Click **Blog**
2. Click **New Blog**
3. Write content (supports Markdown)
4. Upload featured image
5. Add tags
6. Click **Publish**

### Updating Pages

**Edit About Page:**
1. Click **Pages** → **About Page**
2. Update content
3. Click **Publish**

**Update Contact Info:**
1. Click **Pages** → **Contact Info**
2. Update details
3. Click **Publish**

### Site Settings

**Update Settings:**
1. Click **Settings** → **Site Settings**
2. Change site title, description
3. Upload logo
4. Add social media URLs
5. Click **Publish**

---

## Part 6: Custom Domain (Optional)

### Step 6.1: Add Custom Domain

1. In Cloudflare Pages project, click **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter your domain: `frametell.com`
4. Click **Continue**

### Step 6.2: Configure DNS

Cloudflare will automatically configure DNS if your domain is already on Cloudflare.

**If domain is elsewhere:**
1. Add these DNS records at your registrar:
   ```
   Type: CNAME
   Name: @
   Value: frametell.pages.dev
   ```

2. For www subdomain:
   ```
   Type: CNAME
   Name: www
   Value: frametell.pages.dev
   ```

### Step 6.3: Update OAuth App

1. Go back to GitHub OAuth App settings
2. Update **Homepage URL** to your custom domain
3. Update **Authorization callback URL** (keep the netlify.com part)
4. Save changes

---

## 🔄 How Deployments Work

### Automatic Workflow

1. **You make changes in CMS** → Click "Publish"
2. **CMS commits to GitHub** → Changes saved to repository
3. **Cloudflare detects change** → Triggers automatic build
4. **Site rebuilds** → Takes 2-3 minutes
5. **Changes go live** → Automatically deployed

### Manual Deployments

**Push code to GitHub:**
```bash
git push origin master
```

**Cloudflare automatically:**
- Detects the push
- Builds your site
- Deploys to production

### Check Deployment Status

1. Go to Cloudflare Pages project
2. Click **Deployments** tab
3. See list of all builds
4. Click any deployment to view logs

---

## 📊 CMS Collections Explained

### Portfolio Collection
- **Location**: `content/portfolio/`
- **File format**: Markdown with frontmatter
- **Fields**: Title, category, type, images, video URL, date, featured flag
- **Usage**: Displays on portfolio page with filtering

### Blog Collection
- **Location**: `content/blog/`
- **File format**: Markdown
- **Fields**: Title, date, featured image, excerpt, body, tags
- **Usage**: Blog listing and individual post pages

### Pages Collection
- **Location**: `content/pages/`
- **Files**: `about.md`, `contact.md`
- **Usage**: Static page content

### Settings Collection
- **Location**: `content/settings/site.json`
- **Fields**: Site title, description, logo, social links
- **Usage**: Global site configuration

---

## 🚨 Troubleshooting

### CMS Login Fails

**Problem**: "Error: Failed to authenticate"

**Solutions:**
1. Check OAuth Client ID and Secret are correct
2. Verify callback URL is `https://api.netlify.com/auth/done`
3. Make sure OAuth app is not suspended
4. Try logging out of GitHub and back in

### Changes Don't Appear

**Problem**: Published changes but site unchanged

**Solutions:**
1. Wait 2-3 minutes for build to complete
2. Check Deployments tab for build status
3. Hard refresh browser (Ctrl+Shift+R)
4. Check if build failed (view logs)

### Build Fails

**Problem**: Deployment fails in Cloudflare

**Solutions:**
1. Check build logs for specific error
2. Verify build command is correct
3. Ensure `NODE_VERSION` environment variable is set
4. Try re-running the deployment

### Images Won't Upload

**Problem**: Image upload fails in CMS

**Solutions:**
1. Check file size (keep under 5MB)
2. Use JPG or PNG format
3. Ensure filename has no special characters
4. Check GitHub repository permissions

### 404 on /admin

**Problem**: Admin page not found

**Solutions:**
1. Verify `/admin` folder exists in `client/public/`
2. Check build output includes admin files
3. Clear Cloudflare cache
4. Trigger new deployment

---

## 🔐 Security Best Practices

### Repository Access

- Keep your repository private if possible
- Only grant access to trusted collaborators
- Review commits regularly

### OAuth Security

- Never share Client Secret publicly
- Rotate secrets if compromised
- Use environment variables (never commit secrets)

### Content Review

- Review changes before publishing
- Use branches for major content updates
- Keep backups of important content

---

## 💡 Pro Tips

### Performance

- Compress images before uploading (use TinyPNG.com)
- Use WebP format for better compression
- Lazy load images in gallery

### SEO

- Fill in meta descriptions for all pages
- Use descriptive image alt text
- Keep URLs clean and readable

### Workflow

- Draft posts in CMS before publishing
- Use consistent naming for portfolio items
- Tag blog posts for better organization

### Cloudflare Features

- Enable **Auto Minify** (CSS, JS, HTML)
- Use **Rocket Loader** for faster JS loading
- Enable **Brotli compression**
- Set up **Web Analytics** (free, privacy-friendly)

---

## 📱 Mobile CMS Access

### Using CMS on Mobile

**Good news:** The CMS works on mobile browsers!

**Tips:**
- Use tablet for better experience
- Landscape mode for editing
- Upload photos directly from camera roll
- Save drafts frequently

**Limitations:**
- Markdown editor is basic on mobile
- Image cropping not available
- Slower on older devices

---

## 🎓 Advanced Features

### Preview Deployments

Cloudflare creates preview URLs for every branch:
- Push to a branch (e.g., `staging`)
- Get automatic preview URL
- Test before merging to master

### Custom Build Commands

Need custom build steps? Update in Pages settings:
```bash
npm run lint && npm run build && npm run postbuild
```

### Environment Variables

Add different variables for production vs preview:
- Production: `master` branch
- Preview: all other branches

### Webhooks

Trigger builds from external services:
1. Go to Settings → Builds & deployments
2. Create deploy hook
3. Use webhook URL in external services

---

## ✅ Setup Checklist

Track your progress:

**GitHub OAuth:**
- [ ] Create OAuth application
- [ ] Copy Client ID and Secret
- [ ] Set callback URL correctly

**Cloudflare Pages:**
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Add environment variables
- [ ] Deploy successfully

**CMS:**
- [ ] Access /admin page
- [ ] Log in with GitHub
- [ ] Add test portfolio item
- [ ] Upload test image
- [ ] Verify changes deploy

**Optional:**
- [ ] Add custom domain
- [ ] Update OAuth app URLs
- [ ] Enable Cloudflare optimizations
- [ ] Set up Web Analytics

---

## 🎉 You're All Set!

Your FrameTell website is now:
- ✅ Deployed on Cloudflare Pages (lightning fast)
- ✅ CMS-powered for easy content management
- ✅ Automatically deploying on every change
- ✅ Secured with GitHub OAuth
- ✅ Ready for your custom domain

### Quick Reference

**Live Site:** `https://frametell.pages.dev`  
**CMS Admin:** `https://frametell.pages.dev/admin`  
**Cloudflare Dashboard:** [dash.cloudflare.com](https://dash.cloudflare.com)  
**GitHub Repo:** [github.com/frametellstudios/frametell](https://github.com/frametellstudios/frametell)

### Your Workflow

1. **Update content** → Go to `/admin`, make changes, click Publish
2. **Wait 2-3 minutes** → Cloudflare builds and deploys
3. **Changes are live** → Refresh your site to see updates

---

## 📞 Need Help?

**Common Resources:**
- Cloudflare Pages Docs: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- Decap CMS Docs: [decapcms.org/docs](https://decapcms.org/docs)
- GitHub OAuth Docs: [docs.github.com/en/developers/apps/building-oauth-apps](https://docs.github.com/en/developers/apps/building-oauth-apps)

**Troubleshooting:**
- Check build logs in Cloudflare
- Review GitHub commits for CMS changes
- Test OAuth app in GitHub settings

---

Happy content managing! 🚀

Your website is now professional, fast, and easy to update. Focus on creating amazing content while Cloudflare and the CMS handle the technical stuff.
