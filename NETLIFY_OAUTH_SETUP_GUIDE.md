# Netlify OAuth Setup for CMS (Cloudflare Hosted Sites)

**Complete step-by-step guide to enable GitHub OAuth login in your CMS using Netlify's free authentication service.**

---

## 🎯 What This Does

Your website is hosted on **Cloudflare Pages** (fast, great performance).  
Your CMS authentication uses **Netlify Identity** (free OAuth service).

**This is the standard setup** - thousands of sites do this. Netlify provides free OAuth even if you don't host with them.

**Result:** You'll be able to log into `/admin` with a "Login with GitHub" button that actually works!

---

## ⏱️ Time Needed

**15 minutes total**

---

## 📋 What You Need

- ✅ Netlify account (free - we'll create this)
- ✅ Your GitHub repository (frametellstudios/frametell)
- ✅ 15 minutes of your time

---

## Part 1: Create Netlify Account & Site

### Step 1.1: Sign Up for Netlify

1. Go to [https://app.netlify.com/signup](https://app.netlify.com/signup)
2. Click **"Sign up with GitHub"**
3. Authorize Netlify to access your GitHub
4. Complete the signup

**Why GitHub signup?** Makes the next steps easier.

### Step 1.2: Import Your Repository

1. Once logged in, click **"Add new site"** (top right)
2. Select **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Find and select **frametellstudios/frametell**
5. **IMPORTANT:** On the build settings page, click **"Deploy site"** WITHOUT changing anything

**Don't worry about build settings** - we're only using Netlify for authentication, not hosting!

### Step 1.3: Wait for Initial Deploy

1. Netlify will start building your site
2. This will take 2-5 minutes
3. **You can continue to next steps while it builds**

**Note:** This site won't be your production site - it's just for OAuth. Your real site stays on Cloudflare.

---

## Part 2: Enable Netlify Identity

### Step 2.1: Access Identity Settings

1. In your Netlify dashboard, look at the top navigation
2. Click **"Identity"** tab
3. Click **"Enable Identity"** button
4. Wait a few seconds for it to activate

### Step 2.2: Configure Registration

1. Still in the Identity tab, click **"Settings and usage"**
2. Scroll to **"Registration preferences"**
3. Click **"Edit settings"**
4. Select **"Invite only"**
5. Click **"Save"**

**Why "Invite only"?**
- Only you (and people you invite) can access the CMS
- Prevents random people from trying to log in
- More secure

### Step 2.3: Enable Git Gateway

1. In Identity settings, scroll down to **"Services"**
2. Find **"Git Gateway"**
3. Click **"Enable Git Gateway"**
4. A popup appears - click **"Generate access token in GitHub"**
5. GitHub opens - click **"Authorize netlify"**
6. Back in Netlify, the popup should show "Connected"
7. Click **"Save"**

**What is Git Gateway?**
- Allows CMS to save changes directly to your GitHub repository
- Works even though your site is on Cloudflare
- No need for users to have GitHub accounts

---

## Part 3: Invite Yourself as Admin

### Step 3.1: Send Invitation

1. Go back to the **"Identity"** tab
2. Click **"Invite users"** button
3. Enter your email address
4. Click **"Send"**

### Step 3.2: Accept Invitation

1. Check your email inbox
2. Look for email from Netlify:
   - Subject: "You've been invited to join..."
   - From: no-reply@netlify.com
3. Click **"Accept the invite"** button in the email
4. Create a strong password
5. Click **"Sign up"**

**Success!** You now have a Netlify Identity account.

---

## Part 4: Connect Your Cloudflare Site to Netlify OAuth

### Step 4.1: Get Your Netlify Site URL

1. In Netlify dashboard, look at your site name
2. It will be something like: `random-name-123456.netlify.app`
3. **Copy this URL** - you'll need it

### Step 4.2: Update Your Cloudflare Deployment

**Your code is already configured!** I've already added the Netlify Identity widget to your site.

When you deploy to Cloudflare Pages:
1. The CMS will automatically detect Netlify Identity
2. It will connect to your Netlify site for authentication
3. Users will see "Login with Netlify Identity" button

**No additional configuration needed in Cloudflare!**

---

## Part 5: Test Your CMS

### Step 5.1: Deploy to Cloudflare

Follow your Cloudflare Pages deployment guide to get your site live.

### Step 5.2: Access CMS Admin

1. Go to your Cloudflare site: `https://yoursite.pages.dev`
2. Add `/admin` to the URL: `https://yoursite.pages.dev/admin`
3. You should see the Decap CMS login screen

### Step 5.3: Log In

1. Click **"Login with Netlify Identity"**
2. A popup appears asking for your Netlify site URL
3. Enter your Netlify URL: `https://random-name-123456.netlify.app`
4. Click **"Set site's URL"**
5. Login screen appears
6. Enter the email and password you created in Step 3.2
7. Click **"Log in"**

**Success!** You're now in the CMS admin interface! 🎉

---

## Part 6: Configure CMS for Future Logins

### Step 6.1: Set Default Netlify URL (Optional)

To avoid entering the Netlify URL every time:

1. In your CMS config file (`client/public/admin/config.yml`)
2. Add this line under `backend:`:
   ```yaml
   backend:
     name: git-gateway
     branch: master
     site_domain: random-name-123456.netlify.app
   ```
3. Replace `random-name-123456.netlify.app` with your actual Netlify URL
4. Save and redeploy

**Now users won't need to enter the URL manually!**

---

## 🎓 How It Works

### The Authentication Flow

1. **User visits** `yoursite.pages.dev/admin`
2. **Clicks** "Login with Netlify Identity"
3. **Netlify Identity widget** opens login popup
4. **User logs in** with email/password (or GitHub OAuth)
5. **Netlify verifies** credentials
6. **Git Gateway** grants access to GitHub repository
7. **User can now** create/edit content in CMS
8. **Changes are saved** directly to GitHub
9. **Cloudflare detects** GitHub changes
10. **Site automatically rebuilds** and deploys

### Why This Setup?

**Cloudflare Pages:**
- ✅ Hosts your website (fast, global CDN)
- ✅ Automatic deployments from GitHub
- ✅ Free SSL, unlimited bandwidth

**Netlify Identity:**
- ✅ Handles user authentication (free OAuth service)
- ✅ Git Gateway connects CMS to GitHub
- ✅ Works with any hosting platform

**Best of both worlds!**

---

## 👥 Inviting Team Members

### Add Content Editors

1. Go to Netlify dashboard → **Identity** tab
2. Click **"Invite users"**
3. Enter their email address
4. Click **"Send"**
5. They receive invitation email
6. They accept and create password
7. They can now log into CMS

### Remove Access

1. Go to **Identity** tab
2. Find the user
3. Click **"..."** (three dots)
4. Select **"Delete user"**
5. Confirm deletion

---

## 🚨 Troubleshooting

### "Can't find Netlify Identity"

**Problem:** CMS says it can't connect to Netlify

**Solutions:**
1. Make sure you entered the correct Netlify URL
2. Check that Identity is enabled in Netlify dashboard
3. Verify Git Gateway is enabled
4. Try clearing browser cache

### "Authentication Failed"

**Problem:** Login doesn't work

**Solutions:**
1. Check email and password are correct
2. Make sure you accepted the invitation email
3. Verify you're using the email that was invited
4. Try resetting password in Netlify dashboard

### "Error: Failed to persist entry"

**Problem:** Can't save changes in CMS

**Solutions:**
1. Check that Git Gateway is enabled
2. Verify GitHub authorization is still active
3. Check repository permissions
4. Try logging out and back in

### CMS Asks for URL Every Time

**Problem:** Have to enter Netlify URL on every login

**Solution:**
Add `site_domain` to your config.yml (see Step 6.1 above)

### Changes Don't Appear on Site

**Problem:** Saved in CMS but site unchanged

**Solutions:**
1. Wait 2-3 minutes for Cloudflare to rebuild
2. Check Cloudflare deployments tab
3. Hard refresh browser (Ctrl+Shift+R)
4. Check if deployment failed

---

## 🔐 Security Best Practices

### Password Security

- Use strong, unique password for Netlify Identity
- Enable two-factor authentication in Netlify (Settings → Security)
- Don't share login credentials

### Access Control

- Keep registration set to "Invite only"
- Only invite trusted team members
- Remove access immediately when someone leaves
- Regularly review who has access

### GitHub Integration

- Review Git Gateway permissions periodically
- Check GitHub commits to see who changed what
- Use branches for major content updates

---

## 💡 Pro Tips

### Multiple Environments

Create separate Netlify sites for:
- **Production CMS**: Connected to master branch
- **Staging CMS**: Connected to development branch

This lets you test content changes before going live.

### Custom Domain for CMS

You can point a subdomain to your Netlify site:
- `cms.frametell.com` → Netlify site
- `frametell.com` → Cloudflare site

Makes it easier to remember the CMS URL.

### Backup Strategy

Your content is automatically backed up in GitHub! Every CMS change creates a Git commit.

To restore old content:
1. Find the commit in GitHub
2. Revert the file
3. Cloudflare redeploys automatically

---

## ✅ Setup Checklist

Track your progress:

**Netlify Setup:**
- [ ] Create Netlify account
- [ ] Import GitHub repository to Netlify
- [ ] Site deployed on Netlify (even if you don't use it)

**Identity Configuration:**
- [ ] Enable Netlify Identity
- [ ] Set registration to "Invite only"
- [ ] Enable Git Gateway
- [ ] Authorize GitHub access

**User Setup:**
- [ ] Invite yourself via email
- [ ] Accept invitation
- [ ] Create password
- [ ] Save Netlify site URL

**Testing:**
- [ ] Deploy site to Cloudflare
- [ ] Access /admin page
- [ ] Log in with Netlify Identity
- [ ] Create test content
- [ ] Verify changes save to GitHub
- [ ] Verify site rebuilds on Cloudflare

**Optional:**
- [ ] Add site_domain to config.yml
- [ ] Invite team members
- [ ] Enable 2FA on Netlify account

---

## 🎉 You're All Set!

Your CMS now has proper GitHub OAuth authentication via Netlify Identity!

### Quick Reference

**Your Setup:**
- **Website hosting**: Cloudflare Pages (yoursite.pages.dev)
- **CMS authentication**: Netlify Identity (random-name.netlify.app)
- **Content storage**: GitHub (frametellstudios/frametell)

**Access Points:**
- **Live site**: `https://yoursite.pages.dev`
- **CMS admin**: `https://yoursite.pages.dev/admin`
- **Netlify dashboard**: [app.netlify.com](https://app.netlify.com)
- **Cloudflare dashboard**: [dash.cloudflare.com](https://dash.cloudflare.com)

### Your Workflow

1. **Log into CMS** → Go to `/admin`, click "Login with Netlify Identity"
2. **Make changes** → Edit content, upload images
3. **Click Publish** → Changes save to GitHub
4. **Wait 2-3 minutes** → Cloudflare rebuilds site
5. **Changes are live** → Refresh your site to see updates

---

## 📞 Need Help?

**Common Resources:**
- Netlify Identity Docs: [docs.netlify.com/visitor-access/identity](https://docs.netlify.com/visitor-access/identity)
- Git Gateway Docs: [docs.netlify.com/visitor-access/git-gateway](https://docs.netlify.com/visitor-access/git-gateway)
- Decap CMS Docs: [decapcms.org/docs](https://decapcms.org/docs)

**Still stuck?** Just ask me and I'll help you troubleshoot!

---

Happy content managing! 🚀

Your CMS is now production-ready with proper authentication. You can safely invite team members and start managing your content professionally.
