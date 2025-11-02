# FrameTell Website User Guide

## Website Overview

**Purpose**: Professional portfolio website showcasing video production and photography services for FrameTell business.

**Access**: Public website accessible at your Manus subdomain (and custom domain once configured).

## Powered by Manus

FrameTell is built with cutting-edge web technologies for optimal performance and user experience. The frontend leverages **React 19** with **TypeScript** for type-safe component development, styled with **Tailwind CSS 4** for responsive design across all devices. The UI components are built on **shadcn/ui** for consistent, accessible interactions.

Content management is powered by **Decap CMS**, a git-based headless CMS that stores all content directly in your GitHub repository with full version control. The backend runs on **Express 4** with **tRPC 11** for end-to-end type-safe API communication, connected to a **MySQL/TiDB** database via **Drizzle ORM**. User authentication is handled through **Manus OAuth** with JWT session management.

The entire stack is deployed on **auto-scaling infrastructure with global CDN**, ensuring fast load times worldwide. All assets are served through Manus S3-compatible storage with automatic optimization.

## Using Your Website

The website features a clean, minimalist design with teal accent colors that guide visitors through your services and portfolio.

**Homepage Navigation**: Visitors land on a hero section with the tagline "Stories Worth Telling" and can immediately "View Our Work" or "Start Your Project". The homepage showcases three main service categories with icons and descriptions, making it easy to understand your offerings at a glance.

**Exploring Services**: Click "Services" in the top navigation to see the full services overview page. From there, visitors can dive into detailed pages for "Videography", "Photography", or "Post-Production". Each service page includes specific offerings, pricing considerations, and clear calls-to-action to "Book a Session" or "Get Started".

**Portfolio Gallery**: The "Portfolio" link opens a filterable gallery where visitors can browse your work by category—weddings, events, real estate, brand stories, love stories, and model portfolios. Click any portfolio item to view it in detail. The filter buttons at the top allow quick navigation between categories.

**About Page**: The "About" section tells your story, explains your values (Passion, Excellence, Collaboration), and outlines your comprehensive service offering. This page helps potential clients understand your approach and expertise.

**Contact Form**: Click "Get in Touch" or navigate to "Contact" to access the inquiry form. Visitors fill in their name, email, phone, service interest, and project details. The form includes FAQ sections addressing common questions about turnaround times, travel, equipment, and revisions.

## Managing Your Website

All website management happens through two interfaces: the **Management UI** (right panel in Manus) and the **CMS Admin Panel** (at `/admin` on your live site).

**Management UI Panels**:
- **Preview**: Live preview of your website with real-time updates
- **Code**: Browse and download all website files
- **Dashboard**: View site analytics (unique visitors, page views) and manage visibility settings
- **Settings**: Configure site title, logo, custom domains, and environment variables
- **Database**: Direct access to manage database records if needed

**Content Management via CMS**:
Visit `your-domain.com/admin` to access the Decap CMS interface. Here you can upload portfolio items by clicking "Portfolio" → "New Portfolio", then filling in the title, category, type, and uploading images or video URLs. For blog posts, click "Blog" → "New Blog" and write your content using Markdown formatting. Update contact information and site settings through the "Pages" and "Settings" sections. All changes are automatically saved to GitHub and trigger a site rebuild within 2-3 minutes.

**Custom Domain Setup**:
To use your `frametell.com` domain, go to Settings → Domains in the Management UI. Add your custom domain and follow the instructions to update DNS records at your domain registrar (GoDaddy, Namecheap, etc.). SSL certificates are automatically provisioned once DNS verification completes.

## Next Steps

Talk to Manus AI anytime to request changes or add features. The website is fully customizable—you can adjust colors, layouts, add new pages, or integrate additional services like e-commerce or booking systems.

Start by uploading your first portfolio items through the CMS admin panel. Add high-quality images and videos that showcase your best work. Once you have 5-10 portfolio items, your website will truly come alive and attract potential clients.

---

*Built with Manus AI - Professional web development made simple*
