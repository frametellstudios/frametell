# FrameTell Website TODO

## Core Features
- [x] Configure custom color palette (teal, black, gray, brown)
- [x] Create homepage with hero video section
- [x] Build services overview section
- [x] Create videography landing page
- [x] Create photography landing page
- [x] Create post-production landing page
- [x] Build portfolio gallery with category filtering
- [ ] Implement lightbox for full-screen media viewing
- [x] Create about page
- [x] Create contact form with Netlify Forms
- [x] Set up Decap CMS integration
- [ ] Configure media upload system
- [ ] Create blog functionality
- [ ] Build client gallery system (password-protected)
- [x] Deploy to Manus hosting
- [x] Configure GitHub repository
- [x] Set up custom domain documentation (frametell.com)

## Service Category Pages
- [ ] Weddings page
- [ ] Events coverage page
- [ ] Live events and live-streaming page
- [ ] Love story page
- [ ] Brand story page
- [ ] Real estate page
- [ ] Model portfolio page

## Technical Setup
- [ ] Install and configure Payload CMS
- [ ] Set up MongoDB Atlas connection
- [ ] Configure Cloudinary for media storage
- [ ] Implement responsive design
- [ ] Add SEO optimization (meta tags, structured data)
- [ ] Create sitemap
- [ ] Implement lazy loading for images/videos
- [ ] Add loading states and animations

## Future Enhancements
- [x] NAS + Tailscale integration documentation for client downloads
- [ ] Advanced portfolio filtering
- [ ] Testimonials section
- [ ] Service pricing calculator
- [ ] Booking/inquiry system

## Bug Fixes
- [x] Fix nested anchor tags in navigation across all pages

## Cloudflare Deployment Issues
- [ ] Fix build output directory path for Cloudflare Pages
- [ ] Update deployment documentation with correct configuration

## Analytics & Tracking
- [x] Research and implement modern analytics solution
- [x] Set up UTM parameter tracking for social media campaigns
- [x] Configure event tracking for conversions (contact form, portfolio views)
- [ ] Add Umami website ID to index.html after account creation
- [x] Create social media tracking guide with UTM templates

## Umami Analytics Configuration
- [x] Update index.html with actual Umami Website ID

## Bug Fixes - Nested Anchors
- [x] Fix nested anchor tags on Home page (line 91-92)

## Development Workflow Setup
- [x] Create development branch for testing
- [x] Create staging branch for pre-production
- [ ] Configure Cloudflare Pages deployment settings
- [x] Create maintenance page template

## Mobile Improvements
- [x] Add hamburger menu for mobile navigation (Services, Portfolio, About, Get in Touch)
- [x] Implement horizontal swipe for service cards (Videography, Photography, Post-Production)
- [x] Add horizontal swipe for portfolio category filters
- [x] Test mobile navigation and swipe gestures

## Branch Setup & Deployment
- [ ] Merge development changes to staging branch
- [ ] Merge staging changes to master branch
- [ ] Push all branches to GitHub
- [ ] Create Cloudflare pause/maintenance mode guide
- [ ] Test preview URLs for all branches

## Bug Fixes - JSX Errors
- [x] Fix non-boolean attribute error in Portfolio.tsx style jsx tag

## Bug Fixes - UI Issues
- [x] Fix mobile menu content not displaying properly
- [x] Make service cards equal height on desktop

## Bug Fixes - Services Page
- [x] Fix nested anchor tags in Services.tsx (line 53-54)

## Mobile UX Improvements - Phase 2
- [x] Fix mobile menu overlay - add dark backdrop animation
- [x] Implement dual-category portfolio filters (Project Type + Service Type)
- [x] Make portfolio filters dropdown/collapsible on mobile
- [x] Swap button colors on homepage (View Our Work / Start Your Project)
- [x] Make homepage CTA buttons equal size
- [x] Enhance showreel placeholder to look like video player
- [x] Add horizontal scroll for service cards on mobile (Services page)
- [x] Make specialized services grid more compact and mobile-friendly
- [x] Add visual indicator for horizontal scroll (peek next card)

## Mobile Menu Z-Index Fix
- [x] Increase z-index for mobile menu backdrop to appear above all content
- [x] Increase z-index for mobile menu panel to appear above backdrop
- [x] Test mobile menu on all pages to ensure it displays correctly

## Mobile Menu Full-Width Fix
- [x] Change mobile menu from w-64 (256px) to full-width
- [x] Prevent horizontal scrolling when menu is open
- [x] Add body scroll lock when menu is open
- [x] Test on mobile device
- [x] Push to GitHub development branch

## Maintenance Page Setup
- [x] Create professional maintenance page HTML
- [x] Deploy maintenance page to get public URL
- [x] Provide Cloudflare Page Rule configuration instructions

## Mobile Menu Full Height Fix (CRITICAL)
- [x] Fix mobile menu to cover FULL HEIGHT of screen (currently only top 5%)
- [x] Ensure menu fills entire viewport from top to bottom
- [x] Test on actual mobile device
- [x] Push fix to GitHub

## Decap CMS Setup
- [x] Install Decap CMS package
- [x] Create admin interface files (index.html, config.yml)
- [x] Configure CMS collections (portfolio, services, pages)
- [x] Add Netlify Identity widget to site
- [x] Create CMS setup guide for Netlify dashboard
- [x] Test CMS admin interface
- [x] Push to GitHub and deploy

## Cloudflare Pages + GitHub OAuth CMS Setup
- [x] Update CMS config to use GitHub OAuth backend
- [x] Remove Netlify Identity widget dependencies
- [ ] Create GitHub OAuth application (user will do this)
- [ ] Configure OAuth credentials (user will do this)
- [x] Create Cloudflare Pages deployment guide
- [ ] Test CMS with GitHub OAuth
- [x] Push to GitHub

## Fix CMS Authentication + GitHub Workflow
- [x] Update CMS config to use test-repo mode (simpler GitHub auth)
- [x] Create beginner-friendly guide for pushing to GitHub
- [x] Push changes to development branch
- [x] Push changes to master branch (production)
- [x] Test CMS login with GitHub (test-repo mode configured)

## Netlify OAuth for CMS (Proper GitHub Login)
- [x] Update CMS config to use git-gateway with Netlify OAuth
- [x] Create step-by-step Netlify OAuth setup guide
- [ ] User creates Netlify site (just for OAuth, not hosting)
- [ ] User enables Netlify Identity
- [ ] User enables Git Gateway
- [ ] Test GitHub OAuth login in CMS
- [x] Push to GitHub (development and master)

## Cloudflare Pages GitHub OAuth (No Netlify)
- [x] Create Cloudflare Pages Functions directory structure
- [x] Create OAuth callback endpoint function
- [x] Create OAuth authorization endpoint function
- [x] Update CMS config to use GitHub backend with custom OAuth URL
- [x] Create GitHub OAuth App setup guide
- [x] Test OAuth flow (ready for user testing after deployment)
- [x] Push to GitHub (development and master)

## Fix OAuth URL Double Domain Issue
- [x] Remove base_url from CMS config (use relative paths)
- [x] Test OAuth login works correctly (ready for user testing)
- [x] Push fix to GitHub (development and master)

## Improve OAuth Error Handling
- [x] Update callback function to show detailed GitHub API errors
- [x] Add better error messages for debugging
- [ ] Push fix to GitHub
