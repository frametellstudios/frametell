# How to Pause Your Live Website in Cloudflare

This guide explains multiple methods to temporarily pause your live FrameTell website while you continue development work. Each method has different use cases and trade-offs.

## Quick Summary

| Method | Speed | Reversible | Affects Development | Best For |
|--------|-------|------------|---------------------|----------|
| Maintenance Page | 2-3 min | Yes | No | Planned maintenance |
| Disable Auto-Deploy | Instant | Yes | No | Freezing production |
| Cloudflare Rule | Instant | Yes | No | Emergency pause |
| Delete Custom Domain | 5 min | Yes (manual) | No | Long-term pause |

---

## Method 1: Deploy Maintenance Page (Recommended)

**Use when:** You want visitors to see a professional "under construction" message while you work.

### How It Works

Your project already includes a maintenance page template at `client/public/maintenance.html`. By creating a redirect rule, all traffic goes to this page instead of your normal website.

### Step-by-Step Instructions

**Option A: Using Cloudflare _redirects File**

1. Open your project and create/edit `client/public/_redirects`:
   ```
   /*  /maintenance.html  200
   ```

2. Commit and push to master:
   ```bash
   git checkout master
   git add client/public/_redirects
   git commit -m "Enable maintenance mode"
   git push github master
   ```

3. Wait 2-3 minutes for Cloudflare Pages to deploy

4. Visit `frametell.com` - you should see the maintenance page

**To Disable:**
1. Delete or comment out the `_redirects` file:
   ```
   # /*  /maintenance.html  200
   ```

2. Commit and push:
   ```bash
   git add client/public/_redirects
   git commit -m "Disable maintenance mode"
   git push github master
   ```

**Option B: Using Cloudflare Page Rules** (Faster)

1. Go to Cloudflare Dashboard → frametell.com
2. Click **Rules** → **Page Rules**
3. Click **Create Page Rule**
4. Enter URL pattern: `frametell.com/*`
5. Select setting: **Forwarding URL**
6. Status code: **302 - Temporary Redirect**
7. Destination URL: `https://frametell.pages.dev/maintenance.html`
8. Click **Save and Deploy**

**Result:** Instant redirect to maintenance page, no code deployment needed.

**To Disable:**
1. Go back to Page Rules
2. Toggle OFF or delete the rule

---

## Method 2: Disable Automatic Deployments

**Use when:** You want to freeze your live site while continuing to push code changes.

### How It Works

Cloudflare Pages normally auto-deploys when you push to the master branch. Disabling this lets you push code without affecting your live site.

### Step-by-Step Instructions

1. Go to **Cloudflare Pages** dashboard
2. Click on your **frametell** project
3. Go to **Settings** tab
4. Scroll to **Builds & deployments** section
5. Find **Automatic deployments**
6. Toggle OFF for **Production branch (master)**
7. Click **Save**

**What Happens:**
- Your live site stays frozen at the current version
- You can push to master without triggering deployments
- Preview branches (development, staging) still auto-deploy
- You manually trigger production deployments when ready

### Manual Deployment Process

When you're ready to update the live site:

1. Go to Cloudflare Pages → **Deployments** tab
2. Click **Create deployment** button
3. Select branch: **master**
4. Click **Deploy**
5. Wait 2-3 minutes for deployment to complete

---

## Method 3: Cloudflare Access Rule (Emergency Pause)

**Use when:** You need to instantly block all traffic (emergency situations).

### How It Works

Creates a security rule that blocks or challenges all visitors to your domain.

### Step-by-Step Instructions

1. Go to **Cloudflare Dashboard** → frametell.com
2. Click **Security** → **WAF**
3. Go to **Custom rules** tab
4. Click **Create rule**
5. Configure:
   - Rule name: `Maintenance Mode`
   - Expression: `(http.host eq "frametell.com")`
   - Action: **Block** (or **Challenge** for less aggressive)
   - Custom response (optional):
     ```
     Website temporarily unavailable for maintenance.
     Please check back soon.
     ```
6. Click **Deploy**

**Result:** Instant blocking of all traffic. Visitors see a Cloudflare error page (or your custom message).

**To Disable:**
1. Go back to WAF → Custom rules
2. Toggle OFF or delete the rule

---

## Method 4: Remove Custom Domain

**Use when:** You want complete isolation during major redesigns (weeks/months of work).

### How It Works

Removes `frametell.com` from Cloudflare Pages, making your site only accessible via the default `frametell.pages.dev` URL.

### Step-by-Step Instructions

1. Go to **Cloudflare Pages** → your project
2. Click **Custom domains** tab
3. Find `frametell.com` and `www.frametell.com`
4. Click **...** (three dots) → **Remove**
5. Confirm removal

**What Happens:**
- `frametell.com` shows "Site not found" error
- Your site is still accessible at `frametell.pages.dev`
- You can continue development normally
- Preview URLs still work (development.frametell.pages.dev, etc.)

**To Re-enable:**
1. Go back to Custom domains
2. Click **Set up a custom domain**
3. Enter `frametell.com`
4. Cloudflare auto-configures DNS (since domain is already in your account)
5. Site is live again in 2-5 minutes

---

## Method 5: Work on Development Branch Only

**Use when:** You want to continue development without touching production at all.

### How It Works

Simply don't merge to master. All your work stays on the development branch with its own preview URL.

### Step-by-Step Instructions

1. Always work on the development branch:
   ```bash
   git checkout development
   # ... make changes ...
   git add -A
   git commit -m "Description"
   git push github development
   ```

2. Test on development preview URL:
   - `https://development.frametell.pages.dev`

3. When ready for production:
   ```bash
   git checkout staging
   git merge development
   git push github staging
   
   # Test on staging.frametell.pages.dev
   
   git checkout master
   git merge staging
   git push github master
   ```

**Benefits:**
- Live site never changes
- You can test freely on development URL
- Share development URL with your wife for approval
- Deploy to production only when ready

---

## Recommended Workflow During Development

Based on your situation, here's what I recommend:

### Phase 1: Pause Live Site

**Choose one:**
- **Quick pause (reversible):** Use Method 2 (Disable Auto-Deploy)
- **Professional pause:** Use Method 1 (Maintenance Page)
- **Complete isolation:** Use Method 4 (Remove Custom Domain)

### Phase 2: Continue Development

1. Work exclusively on development branch:
   ```bash
   git checkout development
   ```

2. Make changes, commit, and push:
   ```bash
   git add -A
   git commit -m "Add new feature"
   git push github development
   ```

3. Test on development preview URL:
   ```
   https://development.frametell.pages.dev
   ```

4. Share with your wife for feedback

### Phase 3: Staging Review

1. Merge to staging when feature is complete:
   ```bash
   git checkout staging
   git merge development
   git push github staging
   ```

2. Final review on staging URL:
   ```
   https://staging.frametell.pages.dev
   ```

### Phase 4: Deploy to Production

1. Merge to master:
   ```bash
   git checkout master
   git merge staging
   git push github master
   ```

2. If auto-deploy is disabled, manually trigger deployment in Cloudflare

3. If using maintenance page, remove the `_redirects` rule

4. If using custom domain removal, re-add the domain

---

## Current Branch Status

Your repository now has all three branches properly set up and pushed to GitHub:

```
✅ development (github/development) - Active development
✅ staging (github/staging) - Pre-production review  
✅ master (github/master) - Production (live site)
```

**Preview URLs (automatically created by Cloudflare):**
- Development: `https://development.frametell.pages.dev`
- Staging: `https://staging.frametell.pages.dev`
- Production: `https://frametell.com` (and `frametell.pages.dev`)

---

## Cloudflare Pages Configuration

### Recommended Settings

Go to Cloudflare Pages → frametell → Settings:

**Production branch:**
- Branch name: `master`
- Build command: `pnpm install && pnpm build`
- Build output directory: `dist/public`

**Preview deployments:**
- Enable preview deployments: ✅ ON
- Preview branches: **All branches**
- This creates automatic previews for development and staging

**Automatic deployments:**
- Production (master): ❌ OFF (for manual control)
- Preview branches: ✅ ON (for testing)

This configuration gives you:
- Manual control over production deployments
- Automatic preview deployments for testing
- Complete safety during development

---

## Quick Reference Commands

### Working on Development
```bash
git checkout development
# ... make changes ...
git add -A
git commit -m "Description"
git push github development
# Test at: development.frametell.pages.dev
```

### Promoting to Staging
```bash
git checkout staging
git merge development
git push github staging
# Test at: staging.frametell.pages.dev
```

### Deploying to Production
```bash
git checkout master
git merge staging
git push github master
# If auto-deploy disabled: manually trigger in Cloudflare UI
```

### Enable Maintenance Mode
```bash
# Create client/public/_redirects with:
# /*  /maintenance.html  200
git checkout master
git add client/public/_redirects
git commit -m "Enable maintenance mode"
git push github master
```

### Disable Maintenance Mode
```bash
# Delete or comment out _redirects file
git add client/public/_redirects
git commit -m "Disable maintenance mode"
git push github master
```

---

## Troubleshooting

### "Changes not appearing on live site"

**Possible causes:**
1. Auto-deploy is disabled → Manually trigger deployment
2. Maintenance mode is active → Remove _redirects rule
3. Browser cache → Hard refresh (Ctrl+Shift+R)
4. Cloudflare cache → Purge cache in Cloudflare dashboard

### "Preview URL not working"

**Check:**
1. Branch exists on GitHub → `git branch -a`
2. Cloudflare Pages has preview deployments enabled
3. Build succeeded → Check Deployments tab in Cloudflare
4. Wait 2-3 minutes after pushing

### "Can't merge branches"

**Solution:**
```bash
# Pull latest changes first
git checkout development
git pull github development

# Then merge
git checkout staging
git merge development
```

---

## Summary

To pause your live website while continuing development:

**Recommended approach:**
1. **Disable automatic deployments** in Cloudflare Pages settings (instant, reversible)
2. **Work on development branch** exclusively
3. **Test on development preview URL** (development.frametell.pages.dev)
4. **When ready to go live:** Manually trigger deployment from Cloudflare dashboard

**Alternative (more visible to users):**
1. **Deploy maintenance page** using _redirects file
2. **Work on development branch**
3. **Remove maintenance page** when ready to launch

Both methods keep your live site frozen while you continue development safely on preview URLs.
