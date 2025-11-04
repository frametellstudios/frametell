# FrameTell CMS Setup Guide

Complete guide to setting up and using your content management system with Netlify Identity.

---

## 🎯 What You'll Get

After following this guide, you'll be able to:
- Access a beautiful admin interface at `yoursite.com/admin`
- Manage portfolio items, blog posts, and site settings
- Upload images and videos
- Make content changes without touching code
- Invite team members to help manage content

---

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ Your FrameTell site deployed to Netlify
- ✅ Access to your Netlify dashboard
- ✅ The latest code pushed to GitHub (we'll do this together)

---

## Step 1: Push CMS Code to GitHub

The CMS files are already set up in your project. Let's push them to GitHub:

```bash
# This will be done automatically when we save the checkpoint
```

**What's included:**
- `/admin` folder with CMS interface
- Configuration for Portfolio, Blog, Pages, and Settings
- Netlify Identity widget integration

---

## Step 2: Enable Netlify Identity

### 2.1 Access Your Netlify Dashboard

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Log in to your account
3. Select your **FrameTell** site from the list

### 2.2 Enable Identity

1. In the top navigation, click **Identity**
2. Click the **Enable Identity** button
3. Wait a few seconds for it to activate

![Identity Tab Location]
- Look for "Identity" in the main navigation tabs
- It's usually between "Functions" and "Forms"

---

## Step 3: Configure Identity Settings

### 3.1 Registration Preferences

1. Still in the **Identity** tab, click **Settings and usage**
2. Scroll to **Registration preferences**
3. Click **Edit settings**
4. Select **Invite only** (recommended for security)
5. Click **Save**

**Why "Invite only"?**
- Prevents random people from creating accounts
- You control who can edit your content
- More secure for your business

### 3.2 Enable Git Gateway

1. In Identity settings, scroll to **Services**
2. Find **Git Gateway**
3. Click **Enable Git Gateway**
4. Confirm the action

**What is Git Gateway?**
- Allows the CMS to save changes to your GitHub repository
- No need for users to have GitHub accounts
- Changes are automatically deployed

### 3.3 External Providers (Optional)

If you want to allow login with Google/GitHub:

1. In Identity settings, find **External providers**
2. Click **Add provider**
3. Select Google, GitHub, or GitLab
4. Follow the setup instructions

**Recommendation:** Start with email/password only, add providers later if needed.

---

## Step 4: Invite Yourself as Admin

### 4.1 Send Invitation

1. Go to the **Identity** tab
2. Click **Invite users**
3. Enter your email address
4. Click **Send**

### 4.2 Accept Invitation

1. Check your email inbox
2. Look for email from Netlify with subject "You've been invited to join..."
3. Click **Accept the invite**
4. Create your password (make it strong!)
5. Click **Sign up**

---

## Step 5: Access Your CMS

### 5.1 Navigate to Admin

1. Go to your live site: `https://yoursite.com`
2. Add `/admin` to the URL: `https://yoursite.com/admin`
3. You should see the Decap CMS login screen

### 5.2 Log In

1. Click **Login with Netlify Identity**
2. Enter the email and password you just created
3. Click **Log in**

**Success!** You should now see your CMS dashboard.

---

## 🎨 Using Your CMS

### Portfolio Management

**Add New Portfolio Item:**
1. Click **Portfolio** in the left sidebar
2. Click **New Portfolio**
3. Fill in the fields:
   - **Title**: Project name
   - **Category**: Select type (weddings, events, etc.)
   - **Type**: Video or Photo
   - **Featured Image**: Upload thumbnail
   - **Description**: Brief description
   - **Gallery Images**: Upload multiple images (optional)
   - **Video URL**: YouTube/Vimeo link (optional)
   - **Date**: Project date
   - **Featured**: Check to show on homepage
4. Click **Publish** (top right)

**Edit Existing Item:**
1. Click **Portfolio**
2. Click on the item you want to edit
3. Make your changes
4. Click **Publish**

**Delete Item:**
1. Open the portfolio item
2. Click **Delete entry** (bottom of page)
3. Confirm deletion

### Blog Posts

**Create New Post:**
1. Click **Blog** in sidebar
2. Click **New Blog**
3. Fill in:
   - **Title**: Post title
   - **Publish Date**: When to publish
   - **Featured Image**: Header image
   - **Excerpt**: Short summary
   - **Body**: Full post content (supports Markdown)
   - **Tags**: Keywords (optional)
4. Click **Publish**

**Markdown Tips:**
- `# Heading` for titles
- `**bold**` for bold text
- `*italic*` for italic
- `[link text](url)` for links
- `![alt text](image-url)` for images

### Pages

**Edit About Page:**
1. Click **Pages** → **About Page**
2. Update content
3. Click **Publish**

**Update Contact Info:**
1. Click **Pages** → **Contact Info**
2. Update email, phone, location, hours
3. Click **Publish**

### Site Settings

**Update Site Info:**
1. Click **Settings** → **Site Settings**
2. Update:
   - Site Title
   - Description
   - Logo (upload new image)
   - Social Media URLs
3. Click **Publish**

---

## 📤 Image Upload Best Practices

### Recommended Sizes

- **Portfolio Thumbnails**: 1920x1080px (landscape)
- **Blog Featured Images**: 1200x630px
- **Gallery Images**: 2000px on longest side
- **Logo**: 500x500px (square, transparent background)

### File Formats

- **Photos**: JPG or PNG
- **Logos**: PNG with transparency
- **Maximum size**: 5MB per image

### Optimization Tips

1. Compress images before uploading (use TinyPNG.com)
2. Use descriptive filenames: `wedding-smith-ceremony.jpg`
3. Don't upload RAW files or huge originals

---

## 👥 Inviting Team Members

### Add Content Editor

1. Go to Netlify Dashboard → **Identity**
2. Click **Invite users**
3. Enter their email
4. They'll receive an invitation email
5. They follow the same acceptance process

### Roles & Permissions

**All users have the same permissions:**
- Create, edit, and delete content
- Upload media
- Change site settings

**To remove access:**
1. Go to **Identity** tab
2. Find the user
3. Click **...** (three dots)
4. Select **Delete user**

---

## 🔄 How Changes Are Published

### Automatic Workflow

1. You make changes in CMS
2. Click **Publish**
3. CMS saves to GitHub (master branch)
4. Netlify detects the change
5. Site automatically rebuilds (1-2 minutes)
6. Changes appear on live site

### Check Deployment Status

1. Go to Netlify Dashboard
2. Click **Deploys** tab
3. See current build status
4. View deploy log if needed

---

## 🎯 CMS Collections Explained

### Portfolio
- **Purpose**: Showcase your video and photo projects
- **Location**: Saved in `content/portfolio/`
- **File naming**: `YYYY-MM-DD-project-name.md`
- **Usage**: Displays on Portfolio page, filtered by category

### Blog
- **Purpose**: News, tips, behind-the-scenes content
- **Location**: Saved in `content/blog/`
- **File naming**: `YYYY-MM-DD-post-title.md`
- **Usage**: Blog listing page, individual post pages

### Pages
- **Purpose**: Static content (About, Contact info)
- **Location**: Saved in `content/pages/`
- **Usage**: About page, contact form data

### Settings
- **Purpose**: Site-wide configuration
- **Location**: Saved in `content/settings/site.json`
- **Usage**: Site title, description, social links, logo

---

## 🚨 Troubleshooting

### Can't Access /admin

**Problem**: 404 error when visiting `/admin`

**Solutions:**
1. Make sure site is deployed to Netlify
2. Check that `/admin` folder exists in `client/public/`
3. Clear browser cache and try again

### Login Button Doesn't Work

**Problem**: Nothing happens when clicking "Login with Netlify Identity"

**Solutions:**
1. Check that Identity is enabled in Netlify dashboard
2. Verify Git Gateway is enabled
3. Make sure you accepted the invitation email
4. Try a different browser

### Changes Don't Appear on Site

**Problem**: Published changes but site looks the same

**Solutions:**
1. Wait 2-3 minutes for deployment to complete
2. Check **Deploys** tab in Netlify for build status
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Check if deploy failed (view logs in Netlify)

### "Error: Failed to persist entry"

**Problem**: Can't save changes in CMS

**Solutions:**
1. Check that Git Gateway is enabled
2. Verify you have internet connection
3. Make sure GitHub repository is accessible
4. Try logging out and back in

### Images Won't Upload

**Problem**: Upload fails or images don't appear

**Solutions:**
1. Check file size (must be under 5MB)
2. Use supported formats (JPG, PNG)
3. Check filename (no special characters)
4. Try a smaller image

---

## 🔐 Security Best Practices

### Password Security
- Use a strong, unique password
- Don't share login credentials
- Change password every 6 months

### Access Control
- Only invite trusted team members
- Remove access immediately when someone leaves
- Use "Invite only" registration

### Backup
- Your content is automatically backed up in GitHub
- Download important images separately
- Keep a local copy of critical content

---

## 📱 Mobile Access

### Using CMS on Phone/Tablet

**Good news:** The CMS works on mobile devices!

**Best practices:**
- Use tablet for better experience
- Portrait mode works better for forms
- Upload images from phone gallery
- Avoid complex formatting on mobile

**Limitations:**
- Markdown editor is harder to use
- Image cropping not available
- Slower on older devices

---

## 🎓 Next Steps

### After Setup

1. ✅ Add 2-3 portfolio items to test
2. ✅ Write your first blog post
3. ✅ Update About page content
4. ✅ Add social media links in Settings
5. ✅ Upload your logo

### Ongoing Maintenance

- **Weekly**: Check for new inquiries, update portfolio
- **Monthly**: Publish blog post, review analytics
- **Quarterly**: Update About page, refresh featured work

### Getting Help

**CMS Documentation:**
- Decap CMS: [https://decapcms.org/docs](https://decapcms.org/docs)
- Netlify Identity: [https://docs.netlify.com/visitor-access/identity](https://docs.netlify.com/visitor-access/identity)

**Common Resources:**
- Markdown Guide: [https://www.markdownguide.org](https://www.markdownguide.org)
- Image Compression: [https://tinypng.com](https://tinypng.com)

---

## ✅ Setup Checklist

Use this to track your progress:

- [ ] Push CMS code to GitHub
- [ ] Enable Netlify Identity in dashboard
- [ ] Set registration to "Invite only"
- [ ] Enable Git Gateway
- [ ] Invite yourself as admin
- [ ] Accept invitation email
- [ ] Log in to `/admin` successfully
- [ ] Add test portfolio item
- [ ] Upload test image
- [ ] Verify changes appear on site
- [ ] Invite team members (if applicable)
- [ ] Update site settings
- [ ] Bookmark `/admin` URL

---

## 🎉 You're All Set!

Your CMS is now ready to use. You can manage your entire FrameTell website without touching code.

**Quick Access:**
- **CMS Admin**: `https://yoursite.com/admin`
- **Netlify Dashboard**: [https://app.netlify.com](https://app.netlify.com)
- **This Guide**: Keep it bookmarked for reference

**Remember:**
- Changes take 1-2 minutes to appear on live site
- All content is automatically backed up to GitHub
- You can always invite team members to help

Happy content managing! 🚀
