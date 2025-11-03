# FrameTell Mobile Features Documentation

This document describes the mobile-specific features implemented in the FrameTell website and how they enhance the mobile user experience.

## Overview

The FrameTell website uses a **responsive design approach** with mobile-first optimizations. Rather than maintaining separate codebases for mobile and desktop, the website adapts its layout and interactions based on screen size. This ensures consistency while providing an optimal experience on every device.

## Mobile Navigation

### Hamburger Menu

On mobile devices (screens smaller than 768px), the traditional navigation menu is replaced with a hamburger menu to save screen space and improve usability.

**Features:**
- Slide-out menu panel from the right side
- Smooth animation with backdrop overlay
- Touch-friendly tap targets (minimum 44x44px)
- Clear visual hierarchy with section separation
- Persistent "Get in Touch" CTA button

**Implementation:**
The `MobileMenu` component (`client/src/components/MobileMenu.tsx`) provides a full-height slide-out panel that includes:
- All navigation links (Services, Portfolio, About, Contact)
- Primary call-to-action button
- Close button for easy dismissal
- Backdrop overlay that closes menu when tapped

**User Experience:**
1. User taps hamburger icon (☰) in top-right corner
2. Menu slides in from right with smooth animation
3. Backdrop appears behind menu, dimming main content
4. User can navigate to any page or close menu
5. Menu automatically closes after selecting a destination

## Horizontal Swipe Navigation

### Service Cards (Homepage)

On the homepage, the three service cards (Videography, Photography, Post-Production) are displayed in a horizontal scrollable row on mobile devices instead of stacking vertically.

**Benefits:**
- Faster browsing - swipe through services quickly
- Better visual hierarchy - see one full card at a time
- Native mobile gesture - familiar swipe interaction
- Reduced scrolling - less vertical space needed

**Implementation:**
- Desktop: 3-column grid layout
- Mobile: Horizontal scroll container with cards at 85% viewport width
- Hidden scrollbar for clean appearance
- Smooth touch-based scrolling

**User Experience:**
1. User sees first service card (Videography) prominently displayed
2. Visual hint shows additional cards to the right
3. User swipes left to browse Photography and Post-Production
4. Each card is large enough to read comfortably
5. Tap any card to navigate to full service page

### Portfolio Category Filters

The portfolio page category filters (All Work, Weddings, Events, etc.) use horizontal scrolling on mobile to accommodate all options without wrapping or shrinking.

**Benefits:**
- All categories visible and accessible
- No text truncation or tiny buttons
- Smooth swipe interaction
- Clear active state indication

**Implementation:**
- Desktop: Flex-wrap layout with centered alignment
- Mobile: Horizontal scroll with fixed-width buttons (120px minimum)
- Active category highlighted with primary color
- Smooth scrolling with hidden scrollbar

**User Experience:**
1. User sees category filters in a horizontal row
2. Active category is highlighted in teal
3. User swipes left/right to browse all categories
4. Tap any category to filter portfolio items
5. Portfolio grid updates instantly below

## Responsive Breakpoints

The website uses Tailwind CSS responsive prefixes to adapt layouts:

| Prefix | Screen Size | Description |
|--------|-------------|-------------|
| (none) | 0px+ | Mobile-first default |
| `sm:` | 640px+ | Large phones, small tablets |
| `md:` | 768px+ | Tablets, small laptops |
| `lg:` | 1024px+ | Laptops, desktops |
| `xl:` | 1280px+ | Large desktops |

**Mobile-first approach:** Styles without prefixes apply to all screen sizes. Prefixed styles override them at larger breakpoints.

## Touch Optimization

### Tap Targets

All interactive elements meet or exceed the recommended minimum tap target size of 44x44 pixels:

- Navigation links: 48px height
- Buttons: 44px minimum height
- Service cards: Full card is tappable
- Portfolio items: Full item is tappable
- Menu items: 48px height

### Touch Gestures

**Supported gestures:**
- **Tap:** Navigate, select, activate
- **Swipe:** Scroll horizontally through service cards and category filters
- **Scroll:** Vertical page scrolling
- **Pinch-zoom:** Disabled to prevent accidental zooming

### Hover States

Hover effects are disabled on touch devices to prevent "sticky" hover states:

```css
@media (hover: hover) {
  /* Hover effects only on devices with hover capability */
}
```

## Typography & Readability

### Font Sizes

Text scales appropriately for mobile screens:

| Element | Mobile | Desktop |
|---------|--------|---------|
| H1 (Hero) | 3rem (48px) | 6rem (96px) |
| H2 (Section) | 2.5rem (40px) | 3rem (48px) |
| H3 (Card) | 1.5rem (24px) | 2rem (32px) |
| Body | 1rem (16px) | 1rem (16px) |
| Small | 0.875rem (14px) | 0.875rem (14px) |

### Line Height

Increased line height on mobile improves readability:
- Headings: 1.2
- Body text: 1.6
- Small text: 1.5

### Contrast

All text meets WCAG AA contrast requirements:
- Foreground text: #ECF0F2 on #0D0D0D background (17.6:1 ratio)
- Muted text: #BEBCBA on #0D0D0D background (11.2:1 ratio)
- Primary (teal): #3B8A7F with sufficient contrast on both light and dark backgrounds

## Performance Optimization

### Mobile-Specific Optimizations

**Lazy Loading:**
- Images load only when scrolled into view
- Reduces initial page load time
- Saves mobile data

**Code Splitting:**
- Mobile menu component loaded on demand
- Reduces initial bundle size

**Touch Event Optimization:**
- Passive event listeners for scroll performance
- Prevents scroll jank during swipe gestures

### Loading Performance

Target metrics for mobile (4G connection):
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1

## Testing Mobile Features

### Browser DevTools

Test responsive behavior in Chrome DevTools:

1. Open DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select device preset or set custom dimensions
4. Test at common breakpoints:
   - 375px (iPhone SE, small phones)
   - 390px (iPhone 12/13/14)
   - 414px (iPhone Plus models)
   - 768px (iPad portrait)
   - 1024px (iPad landscape)

### Real Device Testing

Always test on actual devices before deploying:

**Recommended test devices:**
- iPhone (iOS Safari)
- Android phone (Chrome)
- iPad (Safari)
- Android tablet (Chrome)

**Test checklist:**
- [ ] Hamburger menu opens and closes smoothly
- [ ] Service cards swipe horizontally
- [ ] Portfolio filters swipe horizontally
- [ ] All tap targets are easy to hit
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling on pages
- [ ] Forms are easy to fill out
- [ ] Contact button is always accessible

## Customizing Mobile Behavior

### Adding Mobile-Only Elements

To show an element only on mobile:

```tsx
<div className="block md:hidden">
  {/* Visible only on mobile */}
</div>
```

### Adding Desktop-Only Elements

To show an element only on desktop:

```tsx
<div className="hidden md:block">
  {/* Visible only on desktop */}
</div>
```

### Different Layouts

To use different layouts for mobile vs desktop:

```tsx
{/* Mobile: Vertical stack */}
<div className="flex flex-col md:flex-row">
  {/* Content */}
</div>

{/* Mobile: Single column, Desktop: 3 columns */}
<div className="grid grid-cols-1 md:grid-cols-3">
  {/* Content */}
</div>
```

### Different Text Sizes

To use different text sizes:

```tsx
<h1 className="text-3xl md:text-6xl">
  {/* 3rem on mobile, 6rem on desktop */}
</h1>
```

### Different Spacing

To use different spacing:

```tsx
<div className="p-4 md:p-8">
  {/* 1rem padding on mobile, 2rem on desktop */}
</div>
```

## Future Mobile Enhancements

Potential future improvements for mobile experience:

### Progressive Web App (PWA)
- Add to home screen capability
- Offline support
- Push notifications for new portfolio items

### Touch Gestures
- Swipe between portfolio items in lightbox
- Pull-to-refresh on portfolio page
- Long-press for additional options

### Mobile-Specific Features
- Click-to-call phone number
- One-tap email composition
- Native share sheet integration
- Location-based services (if applicable)

### Performance
- Image optimization for mobile (WebP format)
- Adaptive loading based on connection speed
- Reduced motion for users with motion sensitivity

## Component Reference

### MobileMenu Component

**Location:** `client/src/components/MobileMenu.tsx`

**Props:** None

**Usage:**
```tsx
import { MobileMenu } from "@/components/MobileMenu";

<MobileMenu />
```

**Customization:**
Edit the component file to:
- Change menu items
- Modify animation duration
- Adjust colors and styling
- Add/remove sections

### Horizontal Scroll Pattern

**Implementation:**
```tsx
{/* Desktop: Grid */}
<div className="hidden md:grid md:grid-cols-3 gap-8">
  {/* Items */}
</div>

{/* Mobile: Horizontal Scroll */}
<div className="md:hidden overflow-x-auto scrollbar-hide -mx-6 px-6">
  <div className="flex gap-6 pb-4">
    {/* Items with flex-shrink-0 and fixed width */}
  </div>
</div>
```

**Scrollbar Hiding:**
```tsx
<style jsx>{`
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
```

## Accessibility Considerations

### Screen Readers

Mobile menu is fully accessible:
- Semantic HTML structure
- ARIA labels on buttons
- Keyboard navigation support
- Focus management

### Reduced Motion

Respects user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Touch Accessibility

- Large touch targets (44px minimum)
- Clear focus indicators
- No reliance on hover states
- Sufficient spacing between interactive elements

## Summary

The FrameTell website provides an optimized mobile experience through responsive design principles, touch-friendly interactions, and mobile-specific UI patterns. The hamburger menu ensures easy navigation on small screens, while horizontal swipe gestures make browsing service cards and portfolio categories intuitive and efficient. All mobile features are implemented in a single codebase using Tailwind CSS responsive utilities, ensuring consistency and maintainability.

**Key Mobile Features:**
- Hamburger menu navigation
- Horizontal swipe for service cards
- Horizontal swipe for portfolio filters
- Touch-optimized tap targets
- Responsive typography
- Performance optimizations

These features work seamlessly across all devices while providing an experience tailored to each screen size.
