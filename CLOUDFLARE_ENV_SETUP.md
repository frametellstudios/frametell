# Cloudflare Pages Environment Variables Setup

## Required Variables for Deployment

For your FrameTell website to work properly on Cloudflare Pages, you need to configure these environment variables.

---

## Minimum Required Variables (Start Here)

These are the only variables you MUST set for the site to deploy and function:

### 1. VITE_APP_TITLE
**Value:** `FrameTell`  
**Purpose:** Your business name, shown in browser tab and page titles  
**Environment:** Production ✅ Preview ✅

### 2. VITE_APP_LOGO
**Value:** `https://pub-xxxxx.r2.dev/logo.png` (your Cloudflare R2 logo URL)  
**Purpose:** Logo/favicon shown in browser tab  
**Environment:** Production ✅ Preview ✅

---

## How to Add Environment Variables in Cloudflare Pages

### Step-by-Step Instructions

1. **Go to your Cloudflare Pages project**
   - Open Cloudflare dashboard
   - Click **Workers & Pages** in left sidebar
   - Click on your **frametell** project

2. **Navigate to Settings**
   - Click **Settings** tab at the top
   - Scroll down to **Environment variables** section

3. **Add each variable**
   - Click **Add variable** button
   - Enter **Variable name** (e.g., `VITE_APP_TITLE`)
   - Enter **Value** (e.g., `FrameTell`)
   - Select environments:
     - ✅ **Production** (for live site)
     - ✅ **Preview** (for test deployments)
   - Click **Save**

4. **Repeat for all variables**

5. **Redeploy your site**
   - Go to **Deployments** tab
   - Find latest deployment
   - Click **⋮** (three dots) → **Retry deployment**
   - This rebuilds your site with the new environment variables

---

## Complete Variable List

### Frontend Variables (Public - Safe to Expose)

These variables are embedded in your frontend code and visible to anyone. They're designed to be public.

#### VITE_APP_TITLE
```
Variable name: VITE_APP_TITLE
Value: FrameTell
Environment: Production ✅ Preview ✅
```
**Purpose:** Website title shown in browser tabs, page titles, and meta tags

#### VITE_APP_LOGO
```
Variable name: VITE_APP_LOGO
Value: https://pub-xxxxx.r2.dev/logo.png
Environment: Production ✅ Preview ✅
```
**Purpose:** Logo/favicon URL. After uploading logo to Cloudflare R2, paste the public URL here.

**How to get R2 URL:**
1. Upload logo to Cloudflare R2 bucket
2. Make bucket public or generate public URL
3. Copy URL (format: `https://pub-xxxxx.r2.dev/your-logo.png`)
4. Paste here

---

## Optional Variables (Add Later)

These variables enable additional features but aren't required for basic functionality.

### Analytics (Umami)

After creating your Umami account at https://cloud.umami.is:

#### Umami Website ID
**How to get it:**
1. Create free account at https://cloud.umami.is
2. Add your website (frametell.com)
3. Copy the **Website ID** (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)
4. Replace `UMAMI_WEBSITE_ID_PLACEHOLDER` in `/client/index.html` with your actual ID

**OR** set as environment variable:
```
Variable name: VITE_UMAMI_WEBSITE_ID
Value: a1b2c3d4-e5f6-7890-abcd-ef1234567890
Environment: Production ✅ Preview ✅
```

Then update `index.html` to use the variable:
```html
<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="%VITE_UMAMI_WEBSITE_ID%"></script>
```

---

## Variables You DON'T Need for Cloudflare Pages

These variables are only needed if you're deploying the full backend server (not applicable for static Cloudflare Pages deployment):

- ❌ `DATABASE_URL` - Only needed for backend database
- ❌ `JWT_SECRET` - Only needed for backend authentication
- ❌ `OAUTH_SERVER_URL` - Only needed for backend OAuth
- ❌ `BUILT_IN_FORGE_API_KEY` - Only needed for backend API calls
- ❌ `BUILT_IN_FORGE_API_URL` - Only needed for backend API calls

**Why?** Cloudflare Pages hosts your **frontend only** (React app). The backend features (database, authentication) aren't used in this deployment model.

---

## Deployment Checklist

Before deploying to Cloudflare Pages:

- [ ] Logo uploaded to Cloudflare R2
- [ ] R2 public URL copied
- [ ] `VITE_APP_TITLE` set to `FrameTell`
- [ ] `VITE_APP_LOGO` set to R2 URL
- [ ] Build output directory set to `dist/public`
- [ ] Build command set to `pnpm install && pnpm build`
- [ ] Deployment triggered
- [ ] Site loads successfully
- [ ] Logo appears in browser tab
- [ ] Title shows "FrameTell"

---

## After Deployment

### Add Umami Analytics (Optional but Recommended)

1. **Create Umami account** (5 minutes)
   - Go to https://cloud.umami.is
   - Sign up for free Hobby plan
   - Verify email

2. **Add website** (2 minutes)
   - Click "Add website"
   - Name: `FrameTell`
   - Domain: `frametell.com`
   - Click "Save"

3. **Get tracking code** (1 minute)
   - Click on your website
   - Click "Settings" → "Tracking code"
   - Copy the **Website ID** (UUID format)

4. **Update website** (3 minutes)
   - Open `/client/index.html` in your code
   - Find `data-website-id="UMAMI_WEBSITE_ID_PLACEHOLDER"`
   - Replace `UMAMI_WEBSITE_ID_PLACEHOLDER` with your actual Website ID
   - Commit and push to GitHub
   - Cloudflare automatically redeploys (2-3 minutes)

5. **Verify tracking** (1 minute)
   - Visit your website
   - Go to Umami dashboard
   - You should see 1 visitor (you!)
   - ✅ Analytics working!

---

## Troubleshooting

### "Site deployed but logo not showing"

**Problem:** `VITE_APP_LOGO` URL is incorrect or R2 bucket isn't public

**Solution:**
1. Check R2 URL is correct (copy-paste from R2 dashboard)
2. Verify R2 bucket is public or URL has public access
3. Test URL in browser (should show logo image)
4. Update environment variable with correct URL
5. Redeploy

### "Site shows 'App' instead of 'FrameTell' in title"

**Problem:** `VITE_APP_TITLE` not set or deployment didn't pick it up

**Solution:**
1. Verify `VITE_APP_TITLE` is set in Cloudflare Pages settings
2. Check it's enabled for **Production** environment
3. Redeploy site (Deployments → Retry deployment)
4. Clear browser cache and reload

### "Analytics not tracking"

**Problem:** Umami Website ID not configured or incorrect

**Solution:**
1. Check `index.html` has correct Website ID (not placeholder)
2. Verify Umami script is loading (View page source, search for "umami")
3. Disable ad blockers (they block analytics)
4. Wait 5 minutes for data to appear in dashboard

### "Build failing after adding variables"

**Problem:** Variable name typo or invalid characters

**Solution:**
1. Check variable names are EXACTLY as shown (case-sensitive)
2. No spaces in variable names
3. Values can have spaces but avoid special characters
4. Review build logs for specific error

---

## Summary

**For immediate deployment:**
1. Set `VITE_APP_TITLE` = `FrameTell`
2. Upload logo to R2, set `VITE_APP_LOGO` = R2 URL
3. Deploy to Cloudflare Pages
4. Site works!

**For analytics tracking:**
5. Create Umami account
6. Get Website ID
7. Update `index.html`
8. Redeploy
9. Track all social media campaigns with UTM links!

**That's it!** Your site is live with full tracking capabilities.
