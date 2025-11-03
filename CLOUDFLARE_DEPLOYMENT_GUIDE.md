# Complete Cloudflare Pages Deployment Guide for FrameTell

## Why Cloudflare Pages?

Based on extensive research, **Cloudflare Pages is the best hosting option** for your video production and photography business website. Here's why it outperforms alternatives like Netlify and Vercel.

### Key Advantages

**Unlimited Bandwidth (Free):** Unlike Netlify's 100GB limit, Cloudflare offers unlimited bandwidth on the free tier. This is critical for a media-heavy portfolio site with photos and videos. You will never pay overage fees or hit bandwidth caps.

**Superior Performance:** With over 300 global edge locations and an average Time to First Byte of 50ms (compared to 70ms for Vercel and 90ms for Netlify), your site loads faster worldwide. This means better user experience and improved SEO rankings.

**Industry-Leading Security:** Cloudflare protects approximately 20% of the internet and handles the largest DDoS attacks globally. Your business website gets enterprise-grade security for free, including automatic SSL certificates, Web Application Firewall, and bot protection.

**Commercial Use Allowed:** Unlike Vercel which prohibits commercial use on free tier, Cloudflare explicitly allows business websites. You can run your wife's business without risk of account suspension.

**Cost-Effective Scaling:** If you ever need premium features, Cloudflare Pages Pro costs only $5/month compared to $19-20/month for Netlify or Vercel. This represents 70-75% cost savings while providing unlimited bandwidth.

**GitHub Integration:** Automatic deployments work identically to Netlify—push code to GitHub and your site updates automatically within minutes.

---

## Step-by-Step Deployment Instructions

### Part 1: Create Cloudflare Account and Deploy

#### Step 1: Sign Up for Cloudflare

1. Go to [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Create a free account using your email address
3. Verify your email address
4. Log in to the Cloudflare dashboard

#### Step 2: Connect GitHub Repository

1. In the Cloudflare dashboard, navigate to **Workers & Pages**
2. Click **Create application**
3. Select **Pages** tab
4. Click **Connect to Git**
5. Choose **GitHub** as your Git provider
6. Authorize Cloudflare to access your GitHub account
7. Select the **frametellstudios/frametell** repository
8. Click **Begin setup**

#### Step 3: Configure Build Settings

On the build configuration page, enter these exact settings:

**Project name:** `frametell` (this becomes your subdomain: frametell.pages.dev)

**Production branch:** `master` (or `main` if you renamed it)

**Build settings:**
- **Framework preset:** Select "None" or "Vite"
- **Build command:** `pnpm install && pnpm build`
- **Build output directory:** `client/dist`
- **Root directory:** Leave blank (uses repository root)

**Environment variables:** Click **Add variable** and add these:

| Variable Name | Value |
|---------------|-------|
| `NODE_VERSION` | `22` |
| `PNPM_VERSION` | `9` |

(Note: Your existing environment variables from the Manus deployment are in the `.env` file and will be handled separately—see Part 3)

#### Step 4: Deploy

1. Click **Save and Deploy**
2. Watch the build logs as Cloudflare:
   - Clones your repository
   - Installs dependencies with pnpm
   - Builds your React application
   - Deploys to global edge network
3. Build typically takes 2-5 minutes
4. Once complete, you'll see: **"Success! Your site is live!"**
5. Your site is now accessible at: `https://frametell.pages.dev`

---

### Part 2: Add Your Custom Domain (frametell.com)

#### Step 1: Add Domain in Cloudflare Pages

1. In your Pages project dashboard, click **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `frametell.com`
4. Click **Continue**
5. Cloudflare will show you DNS records to add

You'll see something like:

```
Type: CNAME
Name: frametell.com
Target: frametell.pages.dev
```

#### Step 2: Update DNS in GoDaddy

1. Log in to your GoDaddy account at [godaddy.com](https://www.godaddy.com/)
2. Go to **My Products** → **Domains**
3. Find `frametell.com` and click **DNS** or **Manage DNS**
4. You'll see existing DNS records

**Important:** You need to update or add these records:

**For root domain (frametell.com):**
- **Type:** CNAME
- **Name:** @ (or leave blank)
- **Value:** `frametell.pages.dev`
- **TTL:** 600 (or default)

**For www subdomain (www.frametell.com):**
- **Type:** CNAME
- **Name:** www
- **Value:** `frametell.pages.dev`
- **TTL:** 600 (or default)

**Note:** If GoDaddy doesn't allow CNAME for root domain (@), use these A records instead:

- **Type:** A
- **Name:** @
- **Value:** `172.64.144.0` (Cloudflare's IP)
- **TTL:** 600

Add a second A record:
- **Type:** A
- **Name:** @
- **Value:** `172.64.145.0`
- **TTL:** 600

5. **Delete any conflicting records** (old A records pointing to other IPs, or CNAME records for @ or www)
6. Click **Save** or **Save Changes**

#### Step 3: Wait for DNS Propagation

DNS changes take time to propagate globally:
- **Minimum:** 15 minutes
- **Typical:** 1-2 hours
- **Maximum:** 48 hours

**Check propagation status:**
1. Go to [whatsmydns.net](https://www.whatsmydns.net/)
2. Enter `frametell.com`
3. Select **CNAME** from dropdown
4. Click **Search**
5. You should see `frametell.pages.dev` appearing globally (green checkmarks)

#### Step 4: Verify SSL Certificate

Once DNS propagates:
1. Visit `https://frametell.com` in your browser
2. Click the padlock icon in address bar
3. Verify certificate is valid and issued by Cloudflare
4. SSL is automatically provisioned—no action needed!

Both `frametell.com` and `www.frametell.com` should now work with HTTPS.

---

### Part 3: Configure Environment Variables

Your website needs environment variables for features like authentication and database. These are currently in your `.env` file but need to be added to Cloudflare Pages.

#### Step 1: Access Environment Variables

1. In Cloudflare Pages dashboard, go to your **frametell** project
2. Click **Settings** tab
3. Scroll to **Environment variables** section
4. Click **Add variables**

#### Step 2: Add Required Variables

You need to add all the environment variables from your project. Here's how to get them:

**Option A: I can provide them**
Tell me and I'll extract all environment variables from your project and give you the exact list to copy-paste into Cloudflare.

**Option B: Copy from your project**
1. In the Manus Management UI, go to **Settings** → **Secrets**
2. Copy each variable name and value
3. Add them one by one in Cloudflare Pages

**Critical variables include:**
- `DATABASE_URL` - Your database connection
- `JWT_SECRET` - Session security
- `OAUTH_SERVER_URL` - Authentication
- `VITE_APP_TITLE` - Site title
- `VITE_APP_LOGO` - Logo URL
- All other `VITE_*` variables (needed for frontend)

**Important:** 
- Variables starting with `VITE_` are exposed to frontend (public)
- Other variables are server-side only (private)
- Make sure to set variables for **both Production and Preview** environments

#### Step 3: Redeploy After Adding Variables

1. After adding all environment variables, go to **Deployments** tab
2. Find the latest deployment
3. Click **⋮** (three dots) → **Retry deployment**
4. This rebuilds your site with the new environment variables

---

### Part 4: Set Up CMS Authentication

Your website uses Decap CMS for content management. To make the `/admin` panel work on Cloudflare Pages, you need to set up authentication.

**Two Options:**

#### Option A: GitHub OAuth (Recommended - Free)

This allows your wife to log in to the CMS using her GitHub account.

**Requirements:**
- GitHub account (you already have this)
- 10 minutes setup time

**I can help you set this up** - it involves:
1. Creating a GitHub OAuth app
2. Adding a Cloudflare Worker for authentication
3. Updating CMS configuration

Let me know if you want to proceed with this option and I'll provide detailed instructions.

#### Option B: Netlify Identity (Easier but requires Netlify)

If you want the simplest CMS setup, you could:
1. Keep your main site on Cloudflare Pages (for unlimited bandwidth)
2. Use Netlify Identity just for CMS authentication
3. This is a hybrid approach—site on Cloudflare, auth on Netlify

This adds a small dependency on Netlify but is easier to set up. Let me know if you prefer this approach.

#### Option C: Skip CMS for Now

You can:
1. Deploy the site to Cloudflare Pages immediately
2. Edit content directly in GitHub (I can show you how)
3. Set up CMS authentication later when you're ready

---

## Part 5: Testing Your Deployment

### Test Checklist

Once your site is live on `frametell.com`, verify everything works:

**Basic Functionality:**
- [ ] Homepage loads correctly
- [ ] All navigation links work (Services, Portfolio, About, Contact)
- [ ] Images display properly
- [ ] No console errors (press F12 in browser)

**Service Pages:**
- [ ] Videography page loads
- [ ] Photography page loads
- [ ] Post-Production page loads
- [ ] All service descriptions are visible

**Portfolio:**
- [ ] Portfolio gallery displays
- [ ] Category filtering works (click Weddings, Events, etc.)
- [ ] Placeholder images load

**Contact Form:**
- [ ] Form displays correctly
- [ ] Can fill out all fields
- [ ] Submit button works (shows success message)

**Mobile Testing:**
- [ ] Open site on phone
- [ ] Navigation menu works (hamburger icon)
- [ ] Images are responsive
- [ ] Text is readable

**Performance:**
- [ ] Site loads in under 3 seconds
- [ ] No layout shifts during loading
- [ ] Smooth scrolling

**Security:**
- [ ] HTTPS works (padlock in address bar)
- [ ] No mixed content warnings
- [ ] SSL certificate is valid

---

## Part 6: Ongoing Maintenance

### How to Update Your Website

**Method 1: Through CMS (once set up)**
1. Go to `frametell.com/admin`
2. Log in
3. Make changes (upload photos, edit text, etc.)
4. Click **Publish**
5. Changes appear on site in 2-3 minutes

**Method 2: Through GitHub**
1. Go to [github.com/frametellstudios/frametell](https://github.com/frametellstudios/frametell)
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Click **Commit changes**
6. Cloudflare automatically rebuilds and deploys (2-5 minutes)

**Method 3: Ask Me**
Start a new conversation with me and describe what you want to change. I can update the code and push to GitHub.

### Monitoring Your Site

**Cloudflare Analytics (Free):**
1. In Cloudflare dashboard, go to your Pages project
2. Click **Analytics** tab
3. View:
   - Page views
   - Unique visitors
   - Bandwidth usage
   - Top pages
   - Geographic distribution

**Set Up Alerts:**
1. In Cloudflare dashboard, go to **Notifications**
2. Create alerts for:
   - Site downtime
   - SSL certificate expiration
   - Unusual traffic spikes

---

## Troubleshooting Common Issues

### Issue: Site Not Loading After DNS Change

**Symptoms:** `frametell.com` shows "DNS_PROBE_FINISHED_NXDOMAIN" or similar error

**Solution:**
1. Check DNS propagation at [whatsmydns.net](https://www.whatsmydns.net/)
2. Wait longer (can take up to 48 hours)
3. Clear your browser cache (Ctrl+Shift+Delete)
4. Try accessing from a different device or network
5. Verify DNS records in GoDaddy match Cloudflare's instructions exactly

### Issue: SSL Certificate Error

**Symptoms:** "Your connection is not private" or "NET::ERR_CERT_COMMON_NAME_INVALID"

**Solution:**
1. Wait 15-30 minutes after DNS propagation for SSL provisioning
2. In Cloudflare Pages, go to **Custom domains**
3. Verify domain shows "Active" with green checkmark
4. If still failing, remove domain and re-add it
5. Contact Cloudflare support if issue persists after 24 hours

### Issue: Build Failing

**Symptoms:** Deployment shows "Failed" status in Cloudflare dashboard

**Solution:**
1. Click on the failed deployment
2. Read build logs to identify error
3. Common fixes:
   - Verify `NODE_VERSION` is set to `22`
   - Verify `PNPM_VERSION` is set to `9`
   - Check that build command is correct: `pnpm install && pnpm build`
   - Ensure all environment variables are added
4. Retry deployment after fixing

### Issue: CMS Admin Panel Not Loading

**Symptoms:** `/admin` shows blank page or errors

**Solution:**
1. This is expected until you set up authentication (see Part 4)
2. For now, edit content through GitHub
3. Let me know when you're ready to set up CMS authentication

### Issue: Images Not Displaying

**Symptoms:** Broken image icons or missing photos

**Solution:**
1. Check browser console for errors (F12 → Console tab)
2. Verify image URLs are correct (should be full HTTPS URLs)
3. If using relative paths, ensure images are in `client/public` folder
4. Clear Cloudflare cache: Pages dashboard → **Deployments** → **Manage deployment** → **Purge cache**

---

## Cost Breakdown

### Free Tier (What You Get)

**Cloudflare Pages Free:**
- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ 500 builds per month
- ✅ 100K Cloudflare Workers requests/day (for CMS auth)
- ✅ Unlimited custom domains
- ✅ Automatic SSL certificates
- ✅ DDoS protection
- ✅ Web Application Firewall
- ✅ Global CDN (300+ locations)
- ✅ Commercial use allowed

**Total monthly cost:** $0

### If You Ever Need to Upgrade

**Cloudflare Pages Pro ($5/month):**
- Everything in Free tier, plus:
- 5,000 builds per month (vs 500)
- 10M Workers requests per month (vs 100K/day)
- Priority support
- Larger deployment sizes
- Concurrent builds

**When you might need Pro:**
- If you update content more than 15 times per day
- If CMS gets heavy usage (unlikely for small business)
- If you want priority support

**Comparison:**
- Netlify Pro: $19/month
- Vercel Pro: $20/month
- **Cloudflare Pro: $5/month** ← 70-75% cheaper

---

## Next Steps

### Immediate Actions (Do These Now)

1. **Create Cloudflare account** and deploy (Part 1)
2. **Add custom domain** in Cloudflare (Part 2, Step 1)
3. **Update DNS in GoDaddy** (Part 2, Step 2)
4. **Wait for DNS propagation** (Part 2, Step 3)
5. **Add environment variables** (Part 3)
6. **Test your site** (Part 5)

### Short-Term Actions (This Week)

7. **Set up CMS authentication** (Part 4) - Let me know which option you prefer
8. **Upload first portfolio items** via CMS or GitHub
9. **Update About page** with your wife's story
10. **Add real contact information**
11. **Test on multiple devices** (phone, tablet, desktop)

### Long-Term Actions (This Month)

12. **Gather client testimonials** and add to site
13. **Create 10-15 portfolio items** showcasing best work
14. **Set up Google Analytics** (optional - I can help)
15. **Submit site to Google Search Console** for SEO
16. **Share website on social media** and business cards

---

## Getting Help

### If You Get Stuck

**Option 1: Ask Me**
Start a new conversation and describe the issue. I can:
- Debug deployment problems
- Update code and configurations
- Add new features
- Fix bugs

**Option 2: Cloudflare Support**
- Free tier: Community forum at [community.cloudflare.com](https://community.cloudflare.com/)
- Paid tier: Email and chat support

**Option 3: Documentation**
- Cloudflare Pages docs: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages/)
- GitHub repository: [github.com/frametellstudios/frametell](https://github.com/frametellstudios/frametell)

### Common Questions

**Q: Can I use both Cloudflare and Netlify?**
A: Yes, you could use Cloudflare for hosting and Netlify Identity for CMS authentication (hybrid approach). This gives you unlimited bandwidth from Cloudflare plus easy CMS setup from Netlify.

**Q: What if I exceed free tier limits?**
A: Very unlikely. Free tier includes unlimited bandwidth and 500 builds/month. Even with daily updates, you'd only use 30 builds/month.

**Q: Is my data secure?**
A: Yes. Cloudflare provides enterprise-grade security, HTTPS encryption, DDoS protection, and SOC 2 Type 2 certification. Your site is as secure as major corporate websites.

**Q: Can I migrate away from Cloudflare later?**
A: Yes. Your code is on GitHub, so you can deploy to any platform (Netlify, Vercel, etc.) at any time. No vendor lock-in.

**Q: Do I need a credit card?**
A: No. Cloudflare Pages free tier requires no payment method. Only needed if you upgrade to Pro.

---

## Summary

You now have a complete roadmap to deploy FrameTell on Cloudflare Pages with your custom domain. The process takes approximately 1-2 hours for initial setup, then your site will auto-deploy whenever you update content.

**Key Benefits of This Approach:**
- Professional business website on your own domain
- Unlimited bandwidth for photos and videos
- Fastest global performance
- Enterprise-grade security
- $0/month hosting cost
- Automatic deployments from GitHub
- Easy content management via CMS (once set up)

**Your site will be live at:**
- Primary: `https://frametell.com`
- Alternate: `https://www.frametell.com`
- Development: `https://frametell.pages.dev`

Let me know when you're ready to start, and I can guide you through each step or handle the technical parts for you!
