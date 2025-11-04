# GitHub OAuth Setup for Cloudflare Pages (No Netlify!)

**Complete guide to enable GitHub OAuth login in your CMS using only Cloudflare Pages and GitHub - no third-party services needed.**

---

## 🎯 What This Does

Your CMS will have a "Login with GitHub" button that uses **your own OAuth endpoints** running on Cloudflare Pages Functions. Everything stays in your control!

**Time needed:** 20 minutes

---

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Cloudflare Pages account (free)
- ✅ Your site deployed on Cloudflare Pages
- ✅ 20 minutes

---

## Part 1: Create GitHub OAuth App

### Step 1.1: Access GitHub OAuth Settings

1. Go to [GitHub.com](https://github.com) and log in
2. Click your profile picture (top right)
3. Click **Settings**
4. Scroll down in the left sidebar
5. Click **Developer settings** (near the bottom)
6. Click **OAuth Apps**
7. Click **New OAuth App** button

### Step 1.2: Fill in OAuth App Details

You'll see a form with these fields:

**Application name:**
```
FrameTell CMS
```
(Or any name you prefer - this is just for your reference)

**Homepage URL:**
```
https://yoursite.pages.dev
```
⚠️ **Replace `yoursite.pages.dev` with your actual Cloudflare Pages URL!**

**Application description:** (optional)
```
Content management system for FrameTell website
```

**Authorization callback URL:**
```
https://yoursite.pages.dev/api/auth/callback
```
⚠️ **Replace `yoursite.pages.dev` with your actual Cloudflare Pages URL!**

**Important:** The callback URL must be exact - it's `/api/auth/callback` on your domain.

### Step 1.3: Register the Application

1. Click **Register application**
2. You'll be taken to your new OAuth app's page

### Step 1.4: Get Your Credentials

On the OAuth app page, you'll see:

**Client ID:**
- A string like `Iv1.a1b2c3d4e5f6g7h8`
- **Copy this** - you'll need it soon

**Client Secret:**
- Click **Generate a new client secret**
- A secret appears (only shown once!)
- **Copy this immediately** - you can't see it again
- Store it somewhere safe temporarily

⚠️ **Keep these credentials secret!** Never commit them to Git or share them publicly.

---

## Part 2: Configure Cloudflare Pages

### Step 2.1: Access Your Cloudflare Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **Workers & Pages** in the left sidebar
3. Find and click your **frametell** project

### Step 2.2: Add Environment Variables

1. Click the **Settings** tab
2. Scroll down to **Environment variables**
3. Click **Add variables**

Add these two variables:

**Variable 1:**
- **Variable name:** `GITHUB_OAUTH_CLIENT_ID`
- **Value:** (paste your Client ID from Step 1.4)
- **Environment:** Select **Production** (and **Preview** if you want)
- Click **Save**

**Variable 2:**
- Click **Add variable** again
- **Variable name:** `GITHUB_OAUTH_CLIENT_SECRET`
- **Value:** (paste your Client Secret from Step 1.4)
- **Environment:** Select **Production** (and **Preview** if you want)
- **Encrypt:** Make sure this is checked (should be by default)
- Click **Save**

### Step 2.3: Update CMS Config

Before deploying, you need to update one line in your CMS config:

1. Open `client/public/admin/config.yml`
2. Find the line: `base_url: https://yoursite.pages.dev`
3. Replace `yoursite.pages.dev` with your actual Cloudflare Pages URL
4. Save the file
5. Commit and push to GitHub

**Example:**
```yaml
backend:
  name: github
  repo: frametellstudios/frametell
  branch: master
  base_url: https://frametell-abc123.pages.dev  # ← Your actual URL
  auth_endpoint: /api/auth/authorize
```

### Step 2.4: Trigger New Deployment

1. In Cloudflare dashboard, go to **Deployments** tab
2. Click **Create deployment**
3. Select your branch (usually `master` or `main`)
4. Click **Save and Deploy**
5. Wait 2-3 minutes for deployment to complete

**Why redeploy?**
- Environment variables only take effect on new deployments
- The OAuth functions need to be deployed
- CMS config needs to be updated

---

## Part 3: Test Your CMS

### Step 3.1: Access CMS Admin

1. Go to your live site: `https://yoursite.pages.dev`
2. Add `/admin` to the URL: `https://yoursite.pages.dev/admin`
3. You should see the Decap CMS login screen

### Step 3.2: Log In with GitHub

1. Click **Login with GitHub** button
2. You'll be redirected to GitHub
3. GitHub asks: "Authorize FrameTell CMS?"
4. Review the permissions (read/write to your repository)
5. Click **Authorize [your-username]**
6. You'll be redirected back to your CMS
7. You should now be logged in! 🎉

### Step 3.3: Test Content Creation

1. In the CMS, click on a collection (e.g., "Portfolio")
2. Click **New Portfolio**
3. Fill in some test content
4. Click **Publish**
5. Check your GitHub repository - you should see a new commit!

---

## 🔧 How It Works

### The OAuth Flow

1. **User clicks "Login with GitHub"** in CMS
2. **CMS redirects** to `/api/auth/authorize` (your Cloudflare Function)
3. **Your function redirects** to GitHub's authorization page
4. **User authorizes** your app on GitHub
5. **GitHub redirects back** to `/api/auth/callback` with authorization code
6. **Your callback function:**
   - Exchanges code for access token
   - Gets user info from GitHub
   - Sends token back to CMS
7. **CMS uses token** to read/write your GitHub repository
8. **User can now manage content!**

### Your Architecture

```
┌─────────────────┐
│  Cloudflare     │
│  Pages          │
│  (Hosting)      │
└────────┬────────┘
         │
         ├─ /admin (CMS Interface)
         ├─ /api/auth/authorize (OAuth Start)
         └─ /api/auth/callback (OAuth Complete)
                 │
                 ▼
         ┌───────────────┐
         │    GitHub     │
         │    OAuth      │
         └───────┬───────┘
                 │
                 ▼
         ┌───────────────┐
         │  Your GitHub  │
         │  Repository   │
         └───────────────┘
```

**Benefits:**
- ✅ No third-party dependencies
- ✅ Everything under your control
- ✅ Free (Cloudflare Pages free tier)
- ✅ Fast (edge functions)
- ✅ Secure (OAuth 2.0 standard)

---

## 🚨 Troubleshooting

### "GitHub OAuth not configured" Error

**Problem:** Environment variables not set

**Solutions:**
1. Check Cloudflare dashboard → Settings → Environment variables
2. Make sure both `GITHUB_OAUTH_CLIENT_ID` and `GITHUB_OAUTH_CLIENT_SECRET` are set
3. Verify they're set for "Production" environment
4. Trigger a new deployment (variables only apply to new deployments)

### "Redirect URI mismatch" Error

**Problem:** GitHub OAuth callback URL doesn't match

**Solutions:**
1. Go to GitHub → Settings → Developer settings → OAuth Apps
2. Click your app
3. Check "Authorization callback URL" matches exactly: `https://yoursite.pages.dev/api/auth/callback`
4. Make sure there's no trailing slash
5. Make sure the domain matches your Cloudflare Pages URL

### "404 Not Found" on /api/auth/authorize

**Problem:** Cloudflare Functions not deployed

**Solutions:**
1. Check that `functions/api/auth/` folder exists in your repository
2. Make sure `authorize.js` and `callback.js` are in that folder
3. Commit and push to GitHub
4. Trigger new deployment in Cloudflare
5. Wait for deployment to complete

### CMS Shows "Error: Failed to load entries"

**Problem:** Token not working or permissions issue

**Solutions:**
1. Log out and log back in
2. Check GitHub → Settings → Applications → Authorized OAuth Apps
3. Make sure "FrameTell CMS" is listed
4. Revoke and re-authorize if needed
5. Check repository permissions (app needs read/write access)

### "Cannot read property 'access_token'" Error

**Problem:** OAuth exchange failed

**Solutions:**
1. Check that Client Secret is correct in Cloudflare environment variables
2. Make sure Client Secret wasn't regenerated (would invalidate old one)
3. Check browser console for detailed error messages
4. Verify GitHub OAuth app is active (not suspended)

---

## 🔐 Security Best Practices

### Protect Your Credentials

- ✅ **Never commit** Client ID or Secret to Git
- ✅ **Use environment variables** in Cloudflare (encrypted)
- ✅ **Regenerate secrets** if accidentally exposed
- ✅ **Limit OAuth scope** to only what's needed (`repo` scope)

### Repository Access

- ✅ **Only authorize trusted users** to access CMS
- ✅ **Review commits** regularly to see who changed what
- ✅ **Use branch protection** on master branch if needed
- ✅ **Enable 2FA** on your GitHub account

### Monitor Usage

- ✅ **Check GitHub OAuth Apps** periodically (Settings → Applications)
- ✅ **Review Cloudflare logs** for suspicious activity
- ✅ **Revoke access** for users who no longer need it

---

## 👥 Adding Team Members

### How Team Members Access CMS

1. **They need a GitHub account**
2. **They need access to your repository:**
   - Go to your GitHub repository
   - Click **Settings** tab
   - Click **Collaborators** in left sidebar
   - Click **Add people**
   - Enter their GitHub username
   - Select permission level (Write access needed)
   - Click **Add [username] to this repository**
3. **They accept the invitation** (via email or GitHub notifications)
4. **They go to** `yoursite.pages.dev/admin`
5. **They click** "Login with GitHub"
6. **They authorize** your OAuth app
7. **Done!** They can now manage content

### Permission Levels

**Write access:**
- Can create, edit, and delete content
- Changes go directly to repository
- Suitable for content editors

**Admin access:**
- Everything Write can do
- Plus repository settings
- Suitable for developers/managers

---

## 🎓 Advanced Configuration

### Custom Domain

If you add a custom domain to Cloudflare Pages:

1. Update GitHub OAuth app callback URL:
   ```
   https://frametell.com/api/auth/callback
   ```

2. Update CMS config `base_url`:
   ```yaml
   base_url: https://frametell.com
   ```

3. Redeploy

### Multiple Environments

Set up separate OAuth apps for staging/production:

**Production OAuth App:**
- Homepage: `https://frametell.com`
- Callback: `https://frametell.com/api/auth/callback`

**Staging OAuth App:**
- Homepage: `https://staging-frametell.pages.dev`
- Callback: `https://staging-frametell.pages.dev/api/auth/callback`

Use different environment variables in Cloudflare for each environment.

### Webhook Notifications

Get notified when content changes:

1. Go to GitHub repository → Settings → Webhooks
2. Add webhook URL (e.g., Slack, Discord, email service)
3. Select "Push" events
4. Get notifications when CMS publishes content

---

## ✅ Setup Checklist

Track your progress:

**GitHub OAuth App:**
- [ ] Create OAuth app on GitHub
- [ ] Copy Client ID
- [ ] Generate and copy Client Secret
- [ ] Set correct callback URL

**Cloudflare Configuration:**
- [ ] Add GITHUB_OAUTH_CLIENT_ID environment variable
- [ ] Add GITHUB_OAUTH_CLIENT_SECRET environment variable
- [ ] Update config.yml with your actual domain
- [ ] Commit and push changes
- [ ] Trigger new deployment

**Testing:**
- [ ] Access /admin page
- [ ] Click "Login with GitHub"
- [ ] Authorize app on GitHub
- [ ] Successfully log into CMS
- [ ] Create test content
- [ ] Verify commit appears in GitHub

**Team Setup (Optional):**
- [ ] Add collaborators to GitHub repository
- [ ] Team members test CMS access
- [ ] Verify permissions work correctly

---

## 🎉 You're All Set!

Your CMS now has GitHub OAuth authentication running entirely on Cloudflare Pages!

### Quick Reference

**Your Setup:**
- **Website hosting**: Cloudflare Pages
- **CMS authentication**: Custom OAuth (Cloudflare Functions)
- **Content storage**: GitHub repository
- **No third-party dependencies!**

**Important URLs:**
- **Live site**: `https://yoursite.pages.dev`
- **CMS admin**: `https://yoursite.pages.dev/admin`
- **OAuth authorize**: `https://yoursite.pages.dev/api/auth/authorize`
- **OAuth callback**: `https://yoursite.pages.dev/api/auth/callback`

**GitHub OAuth App:**
- **Settings**: GitHub → Settings → Developer settings → OAuth Apps
- **Client ID**: Stored in Cloudflare environment variables
- **Client Secret**: Stored in Cloudflare environment variables (encrypted)

### Your Workflow

1. **Log into CMS** → Go to `/admin`, click "Login with GitHub"
2. **Authorize on GitHub** → First time only
3. **Make changes** → Edit content, upload images
4. **Click Publish** → Changes save to GitHub
5. **Wait 2-3 minutes** → Cloudflare rebuilds site
6. **Changes are live** → Refresh your site to see updates

---

## 📞 Need Help?

**Common Resources:**
- GitHub OAuth Docs: [docs.github.com/apps/oauth-apps](https://docs.github.com/en/developers/apps/building-oauth-apps)
- Cloudflare Pages Functions: [developers.cloudflare.com/pages/platform/functions](https://developers.cloudflare.com/pages/platform/functions/)
- Decap CMS Docs: [decapcms.org/docs](https://decapcms.org/docs/)

**Debugging Tips:**
- Check browser console for JavaScript errors
- Check Cloudflare Functions logs (Real-time logs tab)
- Check GitHub OAuth app settings
- Verify environment variables are set correctly

---

## 🚀 Congratulations!

You now have a **fully self-hosted CMS authentication system** with:
- ✅ No monthly fees
- ✅ No third-party dependencies
- ✅ Full control over your data
- ✅ Professional OAuth 2.0 security
- ✅ Lightning-fast edge functions

Your CMS is production-ready and completely under your control!

---

**Pro Tip:** Bookmark this guide for future reference when setting up additional projects or helping team members troubleshoot login issues.

Happy content managing! 🎨
