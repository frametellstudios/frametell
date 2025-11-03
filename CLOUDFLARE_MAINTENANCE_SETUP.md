# Cloudflare Maintenance Page Setup Instructions

This guide will help you temporarily hide your production website while keeping your development environment active.

## 🎯 What This Does

- Visitors to your custom domain will see a professional maintenance page
- You can continue working on the Manus preview URL
- Easy to enable/disable with a single click
- No changes to DNS or hosting required

---

## 📋 Step-by-Step Instructions

### Step 1: Log into Cloudflare

1. Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. Log in with your Cloudflare account
3. Select your domain (e.g., `frametell.com`)

### Step 2: Create a Page Rule

1. In the left sidebar, click **Rules** → **Page Rules**
2. Click **Create Page Rule** button
3. Configure the rule as follows:

**URL Pattern:**
```
*yourdomain.com/*
```
Replace `yourdomain.com` with your actual domain (e.g., `*frametell.com/*`)

**Setting:**
- Select **Forwarding URL** from the dropdown
- Choose **302 - Temporary Redirect**
- Enter the maintenance page URL:
```
https://8080-i11ud9iqh0nxlbgvvl8r4-2005b882.manus-asia.computer
```

4. Click **Save and Deploy**

### Step 3: Verify It Works

1. Open your custom domain in an incognito/private browser window
2. You should see the FrameTell maintenance page
3. Your Manus preview URL still works for development: `https://3000-i11ud9iqh0nxlbgvvl8r4-2005b882.manus-asia.computer`

---

## 🔄 To Disable Maintenance Mode (Go Live)

When you're ready to show your site publicly:

1. Go back to **Rules** → **Page Rules** in Cloudflare
2. Find the forwarding rule you created
3. Click the **Delete** button (trash icon)
4. Confirm deletion

Your site will be live immediately!

---

## 💡 Alternative: Quick Toggle Method

Instead of deleting the rule, you can:

1. Click the **On/Off toggle** next to the Page Rule
2. Turn it **Off** to disable maintenance mode
3. Turn it **On** to re-enable maintenance mode

This way you can quickly switch between maintenance and live modes without recreating the rule.

---

## 🚀 Your Development Workflow

While maintenance mode is active:

✅ **You CAN:**
- Access your site via Manus preview URL
- Push changes to GitHub
- Test all features on the preview URL
- Make updates without affecting visitors

❌ **Visitors CANNOT:**
- Access your custom domain (they see maintenance page)
- See your work-in-progress changes

---

## 📝 Important Notes

1. **Maintenance Page URL**: The maintenance page is hosted on a temporary Manus URL. If you need a permanent solution, consider:
   - Uploading the maintenance.html file to Cloudflare Pages
   - Hosting it on a separate static hosting service
   - Using Cloudflare Workers for a custom maintenance page

2. **302 vs 301 Redirect**:
   - Use **302 (Temporary)** for maintenance mode
   - Never use 301 (Permanent) as it tells search engines your site moved permanently

3. **Free Tier Limit**: Cloudflare Free plan includes 3 Page Rules. This uses 1 of them.

4. **Cache**: If you don't see changes immediately, clear your browser cache or use incognito mode

---

## 🎨 Customizing the Maintenance Page

The maintenance page is located at:
```
/home/ubuntu/frametell/maintenance.html
```

To customize:
1. Edit the HTML file
2. Update contact email, colors, or messaging
3. The changes will reflect immediately on the maintenance URL

---

## ❓ Troubleshooting

**Problem**: Maintenance page doesn't show
- **Solution**: Check the URL pattern includes the asterisks: `*yourdomain.com/*`
- **Solution**: Make sure the Page Rule is toggled **On**

**Problem**: Can't access development site
- **Solution**: Use the Manus preview URL, not your custom domain

**Problem**: Maintenance page shows on preview URL
- **Solution**: Page Rules only affect your custom domain, not Manus URLs

---

## 📞 Need Help?

If you encounter any issues, you can:
- Check Cloudflare's Page Rules documentation
- Verify your DNS settings are correct
- Contact Cloudflare support for Page Rule issues

---

**Created**: November 2025  
**Maintenance Page URL**: https://8080-i11ud9iqh0nxlbgvvl8r4-2005b882.manus-asia.computer  
**Development URL**: https://3000-i11ud9iqh0nxlbgvvl8r4-2005b882.manus-asia.computer
