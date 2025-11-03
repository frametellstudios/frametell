# Complete Umami Analytics Setup Guide for FrameTell

## Introduction

This guide walks you through setting up Umami Analytics for your FrameTell video production and photography business. Umami provides privacy-friendly, GDPR-compliant analytics without cookies, allowing you to track social media campaigns, measure conversions, and understand your marketing ROI.

**What you'll accomplish:**
- Set up free Umami Cloud account
- Install tracking on your website
- Track social media campaigns with UTM parameters
- Measure contact form conversions
- Understand which marketing channels drive business results

**Time required:** 30 minutes initial setup, 15 minutes/week ongoing

---

## Part 1: Create Umami Account (5 minutes)

### Step 1: Sign Up

Navigate to the Umami Cloud website at https://cloud.umami.is and create a free account. The Hobby plan provides 100,000 events per month at no cost, which accommodates approximately 3,300 daily visits for a small business. This generous free tier eliminates concerns about traffic limits during your initial growth phase.

**Account creation process:**
1. Visit https://cloud.umami.is
2. Click "Sign up" in the top-right corner
3. Enter your email address
4. Create a secure password (minimum 8 characters)
5. Click "Create account"
6. Check your email for verification link
7. Click the verification link to activate your account

### Step 2: Log In

After verifying your email, return to https://cloud.umami.is and log in with your credentials. You will be directed to the Umami dashboard, which initially appears empty because no websites have been added yet.

---

## Part 2: Add Your Website (5 minutes)

### Step 1: Create Website Entry

From the Umami dashboard, you need to register your FrameTell website to receive a unique tracking ID.

**Website setup:**
1. Click the "Add website" button (usually in the top-right or center of empty dashboard)
2. Fill in the website details:
   - **Name:** `FrameTell` (this is just for your reference in the dashboard)
   - **Domain:** `frametell.com` (your actual domain, without https://)
   - **Timezone:** Select your local timezone (e.g., `Pacific/Auckland` for New Zealand)
3. Click "Save" or "Add website"

### Step 2: Get Tracking Code

Once your website is created, Umami generates a unique Website ID for tracking purposes. This ID connects all analytics data to your FrameTell website.

**Retrieve your Website ID:**
1. In the dashboard, click on your "FrameTell" website
2. Click "Settings" in the left sidebar or top menu
3. Click "Tracking code" tab
4. You'll see a script tag that looks like this:

```html
<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="a1b2c3d4-e5f6-7890-abcd-ef1234567890"></script>
```

5. **Copy the Website ID** (the long UUID string in `data-website-id`)
   - Format: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`
   - This is unique to your website

**Important:** Keep this Website ID handy. You'll need it in the next step.

---

## Part 3: Install Tracking on Your Website (10 minutes)

### Option A: Update Code and Redeploy (Recommended)

If you have access to the website code or can ask me to update it:

**Step 1: Update index.html**

The tracking script is already in your website's `/client/index.html` file, but it has a placeholder that needs to be replaced with your actual Website ID.

**Find this line in `/client/index.html`:**
```html
<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="UMAMI_WEBSITE_ID_PLACEHOLDER"></script>
```

**Replace with:**
```html
<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="a1b2c3d4-e5f6-7890-abcd-ef1234567890"></script>
```
(Use your actual Website ID, not this example)

**Step 2: Commit and Push**

If you're comfortable with Git:
```bash
git add client/index.html
git commit -m "Add Umami analytics tracking"
git push
```

Or ask me to make this change for you.

**Step 3: Redeploy**

Cloudflare Pages automatically detects the GitHub commit and redeploys your site within two to three minutes. You can monitor the deployment progress in your Cloudflare Pages dashboard under the Deployments tab.

### Option B: Manual Script Injection (Quick Test)

If you want to test Umami before permanently adding it to your code:

**Use browser developer tools:**
1. Visit your website (frametell.com)
2. Open browser developer console (F12 or right-click → Inspect)
3. Go to "Console" tab
4. Paste this code (with your Website ID):
```javascript
var script = document.createElement('script');
script.defer = true;
script.src = 'https://cloud.umami.is/script.js';
script.setAttribute('data-website-id', 'YOUR_WEBSITE_ID_HERE');
document.head.appendChild(script);
```
5. Press Enter
6. Navigate around your site
7. Check Umami dashboard for tracking data

**Note:** This is temporary and only works for your current browser session. Use Option A for permanent tracking.

---

## Part 4: Verify Tracking Works (5 minutes)

### Step 1: Visit Your Website

Open your deployed website (frametell.com) in a new browser tab or incognito window. Browse around naturally—visit the homepage, click through to the portfolio page, view the contact page. This generates real tracking events that Umami will capture.

### Step 2: Check Umami Dashboard

Return to your Umami dashboard at https://cloud.umami.is and navigate to your FrameTell website. The dashboard updates in real-time, so you should see your visit appear within seconds.

**What you should see:**
- **Visitors:** 1 (you)
- **Pageviews:** 3-5 (depending on how many pages you visited)
- **Bounce rate:** 0% (you visited multiple pages)
- **Visit duration:** A few minutes

**Dashboard sections:**
- **Realtime:** Shows current visitors (you should see yourself)
- **Pages:** Lists which pages were viewed (/, /portfolio, /contact, etc.)
- **Referrers:** Shows where traffic came from (will be "Direct" for your test)
- **Browsers:** Your browser type (Chrome, Firefox, Safari, etc.)
- **Operating Systems:** Your OS (Windows, macOS, Linux, iOS, Android)
- **Devices:** Desktop, mobile, or tablet

### Step 3: Test Event Tracking

To verify that custom events are working:

**Test contact form tracking:**
1. Go to your Contact page (frametell.com/contact)
2. Fill out the contact form with test data
3. Click "Send Message"
4. In Umami dashboard, go to "Events" section
5. You should see: `contact_form_submit` event with properties:
   - `service`: The service you selected
   - `source`: `contact_page`

**Test portfolio tracking:**
1. Go to Portfolio page (frametell.com/portfolio)
2. Click on different category filters (Weddings, Events, Real Estate, etc.)
3. In Umami dashboard, check "Events" section
4. You should see: `portfolio_view` events with `category` property

**Test phone/email tracking:**
1. Go to Contact page
2. Click on the email address link
3. Click on the phone number link
4. In Umami dashboard, check "Events"
5. You should see: `email_click` and `phone_click` events

**If you see these events, tracking is fully functional!** ✅

### Troubleshooting

**Problem: No data showing in dashboard**

**Possible causes and solutions:**

**Ad blocker enabled:** Many ad blockers (uBlock Origin, AdBlock Plus, Brave browser) block analytics scripts by default. Disable your ad blocker temporarily or add an exception for cloud.umami.is and your website domain. Test in an incognito/private window without extensions to isolate the issue.

**Website ID incorrect:** Double-check that the Website ID in your HTML exactly matches the ID shown in your Umami dashboard settings. Even a single character difference will prevent tracking from working. The ID should be a UUID format like `a1b2c3d4-e5f6-7890-abcd-ef1234567890`.

**Script not loaded:** Open your website and view the page source (right-click → View Page Source). Search for "umami" in the source code. You should find the script tag with your Website ID. If it's missing, the deployment didn't include your changes—redeploy the site.

**Caching issues:** Your browser might be showing an old cached version of the site without the tracking script. Hard refresh the page by pressing Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac). Alternatively, test in an incognito/private window which doesn't use cache.

**Deployment not complete:** If you just updated the code, Cloudflare Pages might still be deploying. Check your Cloudflare Pages dashboard under Deployments to confirm the latest deployment succeeded. Wait until it shows "Success" status, then test again.

---

## Part 5: Set Up UTM Campaign Tracking (5 minutes)

UTM parameters are tags added to URLs that track where traffic originates. When someone clicks a UTM-tagged link, Umami automatically captures the source, medium, and campaign information. This allows you to measure the effectiveness of your social media posts, ads, and email campaigns without any additional configuration.

### Understanding UTM Parameters

**The five UTM parameters:**

**utm_source** identifies the platform or website sending traffic to your site. Examples include `instagram`, `facebook`, `tiktok`, `linkedin`, `google`, or `newsletter`. This tells you which platform your visitors came from.

**utm_medium** describes the marketing channel or type of traffic. Common values include `social` for organic social media posts, `cpc` for paid advertising (cost-per-click), `email` for email marketing, and `referral` for links from other websites. This categorizes how the traffic reached you.

**utm_campaign** names the specific marketing campaign or initiative. Examples include `wedding_portfolio_jan2025`, `spring_promo_2025`, or `new_website_launch`. This lets you compare performance across different campaigns.

**utm_content** (optional) differentiates similar content within the same campaign. Use values like `feed_post`, `story`, `reel`, `carousel`, or `video_ad` to see which content format performs best.

**utm_term** (optional) tracks paid search keywords. This is primarily used for Google Ads or other search advertising to identify which keywords drive conversions.

### Creating Your First UTM Link

**Example scenario:** You want to post a wedding portfolio showcase on Instagram and track how many people visit your site from that post.

**Step 1: Choose your destination page**
```
Base URL: https://frametell.com/portfolio
```

**Step 2: Add UTM parameters**
```
?utm_source=instagram&utm_medium=social&utm_campaign=wedding_showcase_feb2025&utm_content=feed_post
```

**Step 3: Complete URL**
```
https://frametell.com/portfolio?utm_source=instagram&utm_medium=social&utm_campaign=wedding_showcase_feb2025&utm_content=feed_post
```

**Step 4: Use in Instagram**
- Update your Instagram bio link to this URL
- Post your wedding showcase content
- In the caption, write: "Link in bio to see more wedding films! 💍✨"
- Users click your bio link
- Umami tracks: "Visit from Instagram, social media, wedding showcase campaign, feed post"

### Quick UTM Builder Tool

Instead of manually typing UTM parameters, use Google's Campaign URL Builder:

**URL:** https://ga-dev-tools.google/campaign-url-builder/

**How to use:**
1. **Website URL:** Enter your destination page (e.g., `https://frametell.com/portfolio`)
2. **Campaign Source:** Enter the platform (e.g., `instagram`)
3. **Campaign Medium:** Enter the channel type (e.g., `social`)
4. **Campaign Name:** Enter your campaign name (e.g., `wedding_showcase_feb2025`)
5. **Campaign Content:** (Optional) Enter content type (e.g., `feed_post`)
6. Click "Generate URL"
7. Copy the generated URL
8. Use it in your social media bio, posts, or ads

### UTM Naming Best Practices

**Use lowercase:** Always use lowercase letters to maintain consistency. Write `instagram` not `Instagram`, and `wedding_showcase` not `Wedding_Showcase`. This prevents duplicate tracking entries caused by case sensitivity.

**Use underscores:** Separate words with underscores instead of hyphens or spaces. Write `wedding_showcase_feb2025` not `wedding-showcase-feb2025` or `wedding showcase feb2025`. Underscores are URL-safe and easier to read in analytics reports.

**Be specific:** Use descriptive campaign names that clearly indicate the purpose and timeframe. Write `wedding_portfolio_jan2025` not just `campaign1` or `test`. Specific names make it easy to identify campaigns months later when reviewing historical data.

**Include dates:** Add month and year to campaign names for easy chronological tracking. Write `spring_promo_2025` or `feb2025_launch` so you can compare performance across different time periods.

**Be consistent:** Establish naming conventions and stick to them across all campaigns. If you use `utm_source=instagram` for one campaign, don't switch to `utm_source=ig` or `utm_source=insta` for another. Consistency enables accurate aggregation and comparison.

---

## Part 6: Track Social Media Campaigns (Ongoing)

### Instagram Strategy

Instagram doesn't allow clickable links in post captions, so all traffic must flow through your bio link or stories (for accounts with 10,000+ followers or verification). Update your bio link with UTM parameters to track which posts drive traffic.

**Bio link strategy:**

Update your Instagram bio link weekly or per campaign. When you post wedding content, use a wedding-focused UTM link. When you post corporate content, switch to a corporate-focused link. This creates a direct connection between your posts and your analytics.

**Example workflow:**

**Week 1 - Wedding Campaign:**
- Bio link: `https://frametell.com/videography?utm_source=instagram&utm_medium=social&utm_campaign=wedding_feb2025&utm_content=bio_link`
- Post 3-4 wedding-related reels and feed posts
- Each post caption includes: "Link in bio to book your wedding film!"
- Track results in Umami: "wedding_feb2025" campaign

**Week 2 - Corporate Campaign:**
- Bio link: `https://frametell.com/videography?utm_source=instagram&utm_medium=social&utm_campaign=corporate_feb2025&utm_content=bio_link`
- Post 3-4 corporate event videos
- Each post caption includes: "Link in bio for business video services"
- Track results in Umami: "corporate_feb2025" campaign

**Instagram Stories (10K+ followers):**

If you have swipe-up capability, create unique UTM links for each story:
```
https://frametell.com/portfolio?utm_source=instagram&utm_medium=social&utm_campaign=wedding_feb2025&utm_content=story
```

### Facebook Strategy

Facebook allows clickable links in post text and comments, giving you more flexibility than Instagram. You can create unique UTM links for each post and track individual post performance.

**Organic posts:**

When sharing portfolio work or business updates, include a UTM-tagged link directly in the post text:

```
Just finished editing this stunning wedding film! 🎥✨
Watch the full video: https://frametell.com/portfolio?utm_source=facebook&utm_medium=social&utm_campaign=wedding_showcase_feb2025&utm_content=page_post
```

**Facebook Ads:**

For paid advertising, Facebook's Ads Manager allows you to set the destination URL. Use UTM parameters to track ad performance and calculate ROI:

```
https://frametell.com/contact?utm_source=facebook&utm_medium=cpc&utm_campaign=wedding_leads_feb2025&utm_content=video_ad_30sec
```

**Tracking ad ROI:**

After running the ad for two weeks, check Umami dashboard:
- Campaign: `wedding_leads_feb2025`
- Visits: 150
- Contact form submissions: 8
- Ad spend: $200
- Conversion rate: 5.3%
- Cost per lead: $25

If those 8 leads result in 2 wedding bookings at $3,000 each, your ROI is 30x ($6,000 revenue from $200 spend).

### TikTok Strategy

TikTok allows one clickable link in your bio, similar to Instagram. Update this link with UTM parameters to track which TikTok videos drive traffic.

**Bio link:**
```
https://frametell.com?utm_source=tiktok&utm_medium=social&utm_campaign=bts_feb2025&utm_content=bio_link
```

**Content strategy:**

TikTok excels at behind-the-scenes content and educational videos. Create content showing your filming process, gear reviews, or editing tutorials. In each video, mention "Link in bio for wedding videography" and track how many viewers convert to website visitors.

**Example TikTok campaign:**

- Campaign name: `bts_drone_footage_feb2025` (behind-the-scenes drone content)
- Post 5-7 TikToks showing drone filming techniques
- Each video mentions: "Link in bio to book drone videography"
- Bio link: `https://frametell.com/videography?utm_source=tiktok&utm_medium=social&utm_campaign=bts_drone_footage_feb2025&utm_content=bio_link`
- Track results: 890 visits, 3 contact forms (0.3% conversion)
- Insight: TikTok drives awareness but not immediate conversions—use for brand building

### LinkedIn Strategy

LinkedIn is ideal for corporate and business event videography. The platform allows clickable links in posts and articles, and the audience is more business-focused than other social platforms.

**Post strategy:**

Share case studies, client testimonials, or corporate event highlights with UTM-tagged links:

```
We recently covered XYZ Company's annual conference with multi-camera setup and live streaming. See the results: https://frametell.com/portfolio?utm_source=linkedin&utm_medium=social&utm_campaign=corporate_showcase_feb2025&utm_content=case_study_post
```

**Article strategy:**

Write longer-form content about video production best practices, then link to your services:

```
https://frametell.com/videography?utm_source=linkedin&utm_medium=social&utm_campaign=thought_leadership_feb2025&utm_content=article
```

**Expected results:**

LinkedIn typically drives lower traffic volume than Instagram or TikTok, but higher conversion rates. A campaign might generate only 80 visits but result in 6 contact forms (7.5% conversion rate) because the audience is actively seeking business services.

---

## Part 7: Measure Conversions and ROI

### Understanding Conversion Tracking

A conversion is any valuable action a visitor takes on your website. For FrameTell, the primary conversion is contact form submission, which represents a potential client inquiry. Secondary conversions include phone clicks, email clicks, and portfolio category views, which indicate interest even if the visitor doesn't immediately submit a form.

### Viewing Conversion Data

**Access event tracking:**
1. Log into Umami dashboard
2. Click on your FrameTell website
3. Navigate to "Events" in the left sidebar
4. You'll see a list of all tracked events

**Key events to monitor:**

**contact_form_submit:** This is your most important conversion event. Each submission represents a potential client reaching out for services. The event includes properties showing which service they're interested in and which page they submitted from.

**phone_click:** Indicates a mobile user clicked your phone number to call. This is a high-intent action showing immediate interest. Mobile users often prefer calling over filling out forms.

**email_click:** Shows someone clicked your email address to send a message. Like phone clicks, this represents direct contact intent and should be counted as a conversion.

**portfolio_view:** Tracks which service categories interest visitors most. If "weddings" has 200 views but "corporate" has only 30 views, you know where to focus your marketing efforts.

### Calculating Campaign ROI

**Example: Facebook Wedding Ad Campaign**

**Campaign setup:**
- Campaign name: `wedding_leads_feb2025`
- Ad spend: $200
- Duration: 2 weeks
- Target audience: Engaged couples in Auckland, ages 25-35
- Ad content: 30-second wedding highlight reel with CTA "Book Your Wedding Film"

**Tracking in Umami:**

After two weeks, filter Umami data by UTM campaign `wedding_leads_feb2025`:

**Traffic metrics:**
- Total visits: 320
- Unique visitors: 285
- Bounce rate: 35%
- Average session duration: 2 minutes 15 seconds

**Conversion metrics:**
- Contact form submissions: 18
- Phone clicks: 7
- Email clicks: 3
- Total conversions: 28
- Conversion rate: 8.75% (28 conversions / 320 visits)

**Business outcomes:**
- Inquiries followed up: 28
- Consultations booked: 12
- Proposals sent: 8
- Contracts signed: 3
- Average wedding package: $3,500
- Total revenue: $10,500

**ROI calculation:**
- Ad spend: $200
- Revenue: $10,500
- Profit (assuming 60% margin): $6,300
- ROI: 31.5x return ($6,300 profit / $200 spend)
- Cost per acquisition: $66.67 ($200 / 3 bookings)

**Decision:** This campaign performed exceptionally well. Increase budget to $500/month and create similar ads targeting different wedding styles (rustic, luxury, destination).

### Comparing Channel Performance

**Monthly channel comparison:**

After tracking for one month across all platforms, aggregate your data:

**Instagram:**
- Visits: 450
- Contact forms: 12
- Conversion rate: 2.7%
- Cost: $0 (organic)
- ROI: Infinite (no ad spend)

**Facebook Ads:**
- Visits: 320
- Contact forms: 18
- Conversion rate: 5.6%
- Cost: $200
- ROI: 31.5x

**LinkedIn:**
- Visits: 80
- Contact forms: 6
- Conversion rate: 7.5%
- Cost: $0 (organic)
- ROI: Infinite (no ad spend)

**TikTok:**
- Visits: 890
- Contact forms: 3
- Conversion rate: 0.3%
- Cost: $0 (organic)
- ROI: Infinite (no ad spend, but low conversion)

**Insights:**

**LinkedIn has the highest conversion rate** (7.5%) despite the lowest traffic volume. This indicates that LinkedIn visitors are highly qualified leads actively seeking business services. Recommendation: Increase LinkedIn posting frequency and consider LinkedIn Ads for corporate video services.

**Facebook Ads deliver strong ROI** (31.5x) with a healthy 5.6% conversion rate. The paid traffic converts better than organic Instagram traffic, justifying the ad spend. Recommendation: Maintain or increase Facebook ad budget, test new ad creative and audiences.

**Instagram drives moderate traffic and conversions** (2.7% conversion rate) at zero cost. This is solid performance for organic social media. Recommendation: Continue consistent posting, focus on wedding content which resonates with Instagram's audience.

**TikTok generates high traffic but low conversions** (0.3% conversion rate). The platform is excellent for brand awareness and reaching new audiences, but viewers aren't ready to book immediately. Recommendation: Use TikTok for top-of-funnel awareness, not direct lead generation. Focus on entertaining and educational content.

**Strategic allocation:**

Based on these insights, allocate your time and budget:
- **40% effort on LinkedIn** (highest conversion rate, untapped potential)
- **30% budget on Facebook Ads** (proven ROI, scalable)
- **20% effort on Instagram** (consistent organic results)
- **10% effort on TikTok** (brand awareness, long-term investment)

---

## Part 8: Weekly Analytics Review (15 minutes)

Establish a weekly routine to review analytics and adjust your marketing strategy. Consistent monitoring allows you to identify trends early and capitalize on what's working while quickly abandoning ineffective tactics.

### Monday Morning Analytics Routine

**Step 1: Log into Umami** (2 minutes)

Visit https://cloud.umami.is and navigate to your FrameTell website dashboard. Set the date range to "Last 7 days" to review the previous week's performance.

**Step 2: Review Top-Level Metrics** (3 minutes)

**Visitors:** How many unique people visited your site? Compare to previous week. A 20% increase week-over-week indicates growing brand awareness. A decline might signal reduced social media activity or seasonal trends.

**Pageviews:** Total pages viewed across all visitors. Higher pageviews per visitor suggest engaging content that encourages exploration. If pageviews are high but conversions are low, visitors might be confused or not finding what they need.

**Bounce rate:** Percentage of visitors who leave after viewing only one page. A bounce rate below 40% is excellent for a service business. Above 60% suggests visitors aren't finding relevant content or the page loads too slowly.

**Average visit duration:** How long visitors stay on your site. For a video production portfolio, 2-3 minutes is healthy—enough time to view several portfolio pieces. Under 30 seconds indicates visitors are leaving immediately, possibly due to misleading ads or poor first impressions.

**Step 3: Analyze Traffic Sources** (3 minutes)

Navigate to the "Referrers" section to see where visitors came from:

**Direct traffic:** Visitors who typed your URL directly or used a bookmark. This represents brand awareness and returning visitors. High direct traffic indicates strong brand recognition.

**Social media:** Break down by platform (Instagram, Facebook, TikTok, LinkedIn). Which platform drove the most traffic this week? Which had the best engagement (lowest bounce rate, highest pages per visit)?

**Search engines:** Organic search traffic from Google, Bing, etc. Growing search traffic indicates improving SEO and content relevance. If search traffic is low, consider adding more blog content or optimizing existing pages.

**Referral sites:** Traffic from other websites linking to you. This might include wedding vendor directories, venue websites, or industry blogs. Cultivate these relationships for ongoing referral traffic.

**Step 4: Review UTM Campaigns** (4 minutes)

Go to "Reports" → "UTM Parameters" to see campaign performance:

**Best performing campaign:** Which campaign drove the most traffic? Which had the highest conversion rate? Double down on what's working by creating similar content or increasing ad spend.

**Underperforming campaigns:** Which campaigns generated traffic but no conversions? Analyze why—was the landing page relevant? Was the offer clear? Did the ad target the right audience? Either optimize or pause these campaigns.

**Content type analysis:** Compare `utm_content` values (feed_post vs story vs reel vs video_ad). Which content format resonates most with your audience? Create more of that format.

**Step 5: Check Conversion Events** (3 minutes)

Navigate to "Events" and review conversion data:

**Contact form submissions:** How many inquiries did you receive? Which services were most requested? Which campaigns drove these conversions? Follow up promptly with all leads.

**Phone and email clicks:** How many people clicked to call or email directly? These are high-intent actions that should be followed up immediately if you have call tracking or email monitoring.

**Portfolio views:** Which service categories are most popular? If "weddings" dominates views, focus more marketing on wedding content. If "corporate" is underviewed, either increase promotion or consider whether it's a viable market.

### Weekly Action Items

Based on your review, create 2-3 action items for the coming week:

**Example actions:**
- "Instagram reels drove 45 visits and 3 conversions last week. Create 5 new reels this week."
- "LinkedIn conversion rate is 7.5% but traffic is low. Post 3 times on LinkedIn this week."
- "Facebook ad campaign 'wedding_feb2025' has 31x ROI. Increase budget from $200 to $350."
- "TikTok traffic is high but conversions are low. Add stronger CTAs to TikTok bio and videos."
- "Portfolio 'real estate' category had only 12 views. Create 2 new real estate posts to test interest."

---

## Part 9: Advanced Features

### Custom Events

Beyond the pre-configured events (contact form, phone click, email click, portfolio view), you can track any custom event that matters to your business.

**Example: Track video plays**

If you embed videos directly on your site (not YouTube/Vimeo), track when visitors click play:

```typescript
import { trackVideoPlay } from "@/lib/analytics";

// When video play button is clicked
trackVideoPlay("Sarah & John Wedding Film", "weddings");
```

This creates an event in Umami showing:
- Event name: `video_play`
- Video title: "Sarah & John Wedding Film"
- Category: "weddings"

**Use case:** Identify which portfolio videos are most engaging. If one wedding video has 50 plays while others have 5-10, that video style resonates with your audience—create more like it.

### Goals and Funnels

Umami Pro ($20/month) includes goals and funnel tracking. If you upgrade, you can set conversion goals and track the user journey from landing page to conversion.

**Example funnel:**
1. Homepage visit
2. Services page visit
3. Portfolio page visit
4. Contact page visit
5. Contact form submission

**Funnel analysis shows:**
- 100 visitors start at homepage
- 60 visit services page (60% continue)
- 40 visit portfolio page (66% continue)
- 25 visit contact page (62% continue)
- 10 submit contact form (40% convert)

**Insight:** The biggest drop-off is from homepage to services page (40% leave). Improve homepage CTAs and navigation to guide more visitors to services page.

### API Access

Umami provides an API for programmatic access to your analytics data. This allows you to build custom dashboards, integrate with CRM systems, or automate reporting.

**Example use case:** Automatically send weekly analytics reports to your email:

```javascript
// Fetch last 7 days of data from Umami API
const response = await fetch('https://cloud.umami.is/api/websites/YOUR_WEBSITE_ID/stats', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN'
  }
});

const data = await response.json();

// Send email with summary
sendEmail({
  to: 'you@frametell.com',
  subject: 'Weekly Analytics Report',
  body: `
    Last 7 days:
    - Visitors: ${data.visitors}
    - Conversions: ${data.events.contact_form_submit}
    - Top campaign: ${data.topCampaign}
  `
});
```

---

## Part 10: Privacy and Compliance

### Why Umami is Privacy-Friendly

Umami is designed to respect user privacy while still providing actionable analytics. Unlike Google Analytics, Umami doesn't track individual users across websites or sell data to advertisers.

**Key privacy features:**

**No cookies:** Umami doesn't set cookies in visitors' browsers. Instead, it uses a daily-rotating anonymous identifier that can't track users across sessions or websites. This means you don't need cookie consent banners, which improves user experience and conversion rates.

**No personal data:** Umami doesn't collect IP addresses, user agents, or any personally identifiable information. All data is aggregated and anonymous. You can see that 100 people visited your site, but you can't identify who those individuals are.

**GDPR compliant:** Umami meets all GDPR requirements without requiring consent banners. The data collected is purely statistical and can't be used to identify individuals.

**CCPA compliant:** Umami doesn't "sell" user data (the legal definition under CCPA), so no opt-out mechanism is required.

**Data ownership:** Your analytics data belongs to you, not Umami. You can export it anytime and delete it if needed.

### Legal Considerations for New Zealand

As a New Zealand business, you're subject to the Privacy Act 2020. Umami's privacy-first approach aligns with New Zealand privacy principles:

**Principle 1 (Purpose):** Umami collects data solely for website analytics, not for surveillance or profiling.

**Principle 3 (Collection):** Data collection is minimal and anonymous, meeting the "least intrusive" standard.

**Principle 11 (Disclosure):** Your analytics data isn't shared with third parties or advertisers.

**Principle 13 (Security):** Umami uses encryption and secure infrastructure to protect your data.

**Recommendation:** Add a simple privacy notice to your website footer:

```
"This website uses privacy-friendly analytics to improve user experience. 
No personal data is collected or shared. Learn more: [Privacy Policy]"
```

### Client Trust

For a video production business, client trust is paramount. Using privacy-friendly analytics demonstrates your commitment to respecting privacy, which extends to how you handle client footage and personal information.

**Marketing angle:** Mention your privacy-first approach in client communications:

```
"At FrameTell, we respect your privacy. Our website uses cookie-free analytics, 
and we apply the same privacy standards to your wedding footage and personal information."
```

---

## Summary and Next Steps

### What You've Accomplished

You now have a complete analytics system that tracks:
- ✅ Website traffic from all sources
- ✅ Social media campaign performance with UTM parameters
- ✅ Conversion events (contact forms, phone clicks, email clicks)
- ✅ Portfolio category interest
- ✅ User behavior and engagement

### Immediate Next Steps

**This week:**
1. Create your first UTM-tagged link using the templates in `UTM_LINK_GENERATOR.md`
2. Update your Instagram bio link with UTM parameters
3. Post 2-3 pieces of content directing traffic to your bio link
4. Check Umami dashboard daily to see traffic coming in
5. Celebrate your first tracked conversion! 🎉

**This month:**
1. Create UTM links for all social media platforms (Instagram, Facebook, TikTok, LinkedIn)
2. Launch your first paid ad campaign on Facebook with UTM tracking
3. Establish weekly analytics review routine (Monday mornings, 15 minutes)
4. Compare campaign performance and identify top performers
5. Adjust marketing strategy based on data

### Long-Term Strategy

**Month 1-3: Data collection**

Focus on gathering data across all channels. Don't make major decisions yet—you need a baseline to understand normal performance. Post consistently, use UTM links religiously, and track everything.

**Month 4-6: Optimization**

Analyze which channels, campaigns, and content types drive the best results. Double down on winners, pause or optimize losers. Increase ad spend on high-ROI campaigns, reduce or eliminate low-performers.

**Month 7-12: Scaling**

Scale what works. If Facebook ads deliver 30x ROI at $200/month, test $500/month. If LinkedIn drives high-quality corporate leads, post daily instead of weekly. Use data to guide every marketing decision.

### Getting Help

**Umami documentation:** https://umami.is/docs  
**UTM link generator:** https://ga-dev-tools.google/campaign-url-builder/  
**FrameTell UTM templates:** See `UTM_LINK_GENERATOR.md` in your project  
**Need assistance:** Ask me anytime for help with campaigns, tracking, or analytics interpretation

---

**You're now equipped to track, measure, and optimize your marketing with confidence. Every social media post, every ad campaign, every piece of content—you'll know exactly what drives business results. Use this power wisely, and watch your video production business grow! 🚀📊**
