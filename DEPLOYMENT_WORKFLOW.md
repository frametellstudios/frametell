# FrameTell Deployment Workflow Guide

This document outlines the complete deployment workflow for the FrameTell website, including branch management, testing procedures, and production deployment strategies.

## Branch Structure

Your repository now has three branches to support a professional development workflow:

### master (Production)
The **master** branch represents your live production website. Code in this branch is deployed to `frametell.com` and is visible to all visitors. Only thoroughly tested and approved changes should be merged here.

### staging (Pre-Production)
The **staging** branch serves as a final testing environment before production. Use this branch to review changes in a production-like environment and gather feedback from stakeholders. Cloudflare Pages automatically creates a preview deployment for this branch.

### development (Active Development)
The **development** branch is where active development happens. All new features, bug fixes, and experiments start here. This branch has its own preview deployment for testing during development.

## Development Workflow

### Phase 1: Development

When you want to make changes to the website, work on the development branch:

```bash
# Switch to development branch
git checkout development

# Make your changes to files
# ... edit code ...

# Stage and commit changes
git add -A
git commit -m "Descriptive message about changes"

# Push to GitHub
git push github development
```

**What happens:** Cloudflare Pages automatically deploys your changes to a preview URL (e.g., `development.frametell.pages.dev`). You can test the changes immediately without affecting your live site.

### Phase 2: Staging Review

Once development is complete and tested, merge to staging for final review:

```bash
# Switch to staging branch
git checkout staging

# Merge development changes
git merge development

# Push to GitHub
git push github staging
```

**What happens:** Cloudflare creates a staging preview deployment (e.g., `staging.frametell.pages.dev`). Share this URL with your wife or clients for approval before going live.

### Phase 3: Production Deployment

After staging approval, deploy to production:

```bash
# Switch to master branch
git checkout master

# Merge staging changes
git merge staging

# Push to GitHub
git push github master
```

**What happens:** Cloudflare deploys the changes to your live website at `frametell.com`. Changes are visible to all visitors within 2-3 minutes.

### Return to Development

After deploying to production, switch back to development for the next round of changes:

```bash
git checkout development
```

## Cloudflare Pages Configuration

### Recommended Settings

Configure your Cloudflare Pages project with these settings for optimal control:

**Build Configuration:**
- Production branch: `master`
- Build command: `pnpm install && pnpm build`
- Build output directory: `dist/public`
- Root directory: (leave empty)

**Preview Deployments:**
- Enable preview deployments: ✅ Yes
- Preview branches: All branches
- This creates automatic preview URLs for `development` and `staging` branches

**Automatic Deployments:**
For maximum control, consider disabling automatic production deployments:
- Go to Settings → Builds & deployments
- Toggle OFF automatic deployments for production branch
- You'll need to manually trigger deployments from the Cloudflare dashboard

**Manual Deployment Process:**
1. Push changes to `master` branch
2. Go to Cloudflare Pages dashboard
3. Click "Create deployment"
4. Select `master` branch
5. Click "Deploy"

This gives you final approval before changes go live.

## Environment Variables

Your website requires two environment variables in Cloudflare Pages:

```
VITE_APP_TITLE=FrameTell
VITE_APP_LOGO=https://your-r2-url.com/logo.png
```

**How to add:**
1. Cloudflare Pages → Your Project → Settings
2. Scroll to "Environment variables"
3. Click "Add variable"
4. Enter name and value
5. Select both "Production" and "Preview" environments
6. Click "Save"

## Maintenance Mode

### Activating Maintenance Mode

To temporarily take your website offline for maintenance:

**Method 1: Using _redirects File**

1. Create or edit `client/public/_redirects`:
   ```
   /*  /maintenance.html  200
   ```

2. Commit and deploy to production:
   ```bash
   git checkout master
   git add client/public/_redirects
   git commit -m "Enable maintenance mode"
   git push github master
   ```

3. All visitors will see the maintenance page

**Method 2: Cloudflare WAF Rule**

1. Go to Cloudflare Dashboard → frametell.com
2. Click Security → WAF
3. Create custom rule:
   - Rule name: "Maintenance Mode"
   - Expression: `http.host eq "frametell.com"`
   - Action: Block (with custom message) or Challenge
4. Enable the rule

This method doesn't require code changes and can be toggled instantly.

### Deactivating Maintenance Mode

**Method 1:**
1. Delete or comment out the `_redirects` file
2. Commit and deploy

**Method 2:**
1. Go to Cloudflare WAF
2. Disable or delete the maintenance rule

## Rollback Procedures

### Quick Rollback (Cloudflare Pages)

If a deployment causes issues, roll back instantly:

1. Go to Cloudflare Pages → Deployments tab
2. Find the last working deployment
3. Click "..." (three dots) → "Rollback to this deployment"
4. Confirm rollback

**Result:** Your live site reverts to the previous version within 30 seconds, no code changes needed.

### Git Rollback

To revert code changes in your repository:

```bash
# View commit history
git log --oneline

# Revert to specific commit
git checkout master
git revert <commit-hash>
git push github master
```

Or reset to a previous commit (use with caution):

```bash
git reset --hard <commit-hash>
git push github master --force
```

## Testing Checklist

Before deploying to production, verify:

**Functionality:**
- [ ] All navigation links work correctly
- [ ] Contact form submits successfully
- [ ] Portfolio filtering works on all categories
- [ ] Mobile menu opens and closes properly
- [ ] Horizontal swipe works on mobile service cards
- [ ] Horizontal swipe works on mobile portfolio filters

**Mobile Testing:**
- [ ] Test on actual mobile device (iPhone/Android)
- [ ] Verify hamburger menu appears on mobile
- [ ] Test swipe gestures on service cards
- [ ] Test swipe gestures on portfolio filters
- [ ] Check text readability on small screens

**Analytics:**
- [ ] Umami tracking script loads
- [ ] Page views are recorded
- [ ] Contact form submissions tracked
- [ ] Portfolio category views tracked

**Performance:**
- [ ] Page loads in under 3 seconds
- [ ] Images load properly
- [ ] No console errors in browser

**Cross-Browser:**
- [ ] Test in Chrome
- [ ] Test in Safari
- [ ] Test in Firefox
- [ ] Test in Edge

## Preview URLs

Cloudflare Pages automatically creates preview URLs for each branch:

- **Production:** `https://frametell.com` (and `frametell.pages.dev`)
- **Staging:** `https://staging.frametell.pages.dev`
- **Development:** `https://development.frametell.pages.dev`

Share preview URLs with stakeholders for review before production deployment.

## Common Scenarios

### Scenario 1: Quick Bug Fix

```bash
# Fix on development
git checkout development
# ... make fix ...
git add -A
git commit -m "Fix navigation bug"
git push github development

# Test on development preview URL

# Fast-track to production (skip staging if urgent)
git checkout master
git merge development
git push github master
```

### Scenario 2: Major Feature Addition

```bash
# Develop feature
git checkout development
# ... build feature ...
git add -A
git commit -m "Add video gallery feature"
git push github development

# Test thoroughly on development preview

# Stage for review
git checkout staging
git merge development
git push github staging

# Get approval from stakeholders on staging URL

# Deploy to production
git checkout master
git merge staging
git push github master
```

### Scenario 3: Emergency Rollback

```bash
# Option 1: Cloudflare instant rollback (fastest)
# Use Cloudflare dashboard → Deployments → Rollback

# Option 2: Git revert
git checkout master
git revert HEAD
git push github master
```

## Best Practices

### Commit Messages

Write clear, descriptive commit messages:

**Good:**
- "Add horizontal swipe for mobile service cards"
- "Fix contact form validation bug"
- "Update About page with new team photos"

**Bad:**
- "Update"
- "Fix stuff"
- "Changes"

### Deployment Timing

Deploy during low-traffic periods:
- Early morning (6-8 AM local time)
- Late evening (10 PM - midnight)
- Avoid weekends if possible (unless urgent)

### Communication

Before major deployments:
- Notify your wife/team
- Prepare rollback plan
- Have someone available to test immediately after deployment

### Version Control

- Commit frequently with small, focused changes
- Never commit sensitive data (API keys, passwords)
- Use `.gitignore` to exclude temporary files

## Troubleshooting

### Deployment Fails

**Check build logs:**
1. Cloudflare Pages → Deployments
2. Click on failed deployment
3. Review build logs for errors

**Common issues:**
- Missing environment variables
- Build command errors
- Incorrect output directory path

### Changes Not Appearing

**Clear cache:**
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear Cloudflare cache:
   - Cloudflare Dashboard → Caching
   - Click "Purge Everything"

**Check deployment status:**
- Verify deployment completed successfully in Cloudflare
- Check that you're viewing the correct URL (not cached preview)

### DNS Issues

**Verify DNS records:**
1. Go to Cloudflare → DNS
2. Ensure CNAME records point to `frametell.pages.dev`
3. Check propagation at [whatsmydns.net](https://www.whatsmydns.net/)

## Summary

Your FrameTell website now has a professional three-branch workflow that ensures quality and stability. The development branch allows experimentation, staging provides a final review environment, and master represents your production-ready code. Combined with Cloudflare Pages' instant rollback capability, you have complete control over what goes live and when.

**Quick Reference:**

| Branch | Purpose | Preview URL | Deploy To |
|--------|---------|-------------|-----------|
| development | Active development | development.frametell.pages.dev | Automatic |
| staging | Pre-production review | staging.frametell.pages.dev | Automatic |
| master | Production | frametell.com | Manual/Automatic |

Always test on development first, review on staging second, and deploy to master last. When in doubt, use Cloudflare's instant rollback feature to revert to a working version.
