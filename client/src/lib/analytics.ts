/**
 * Umami Analytics Integration
 * 
 * This module provides a simple interface for tracking events with Umami Analytics.
 * Umami automatically tracks pageviews and UTM parameters, so you only need to
 * call these functions for custom events like form submissions and interactions.
 */

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, string | number | boolean>) => void;
    };
  }
}

/**
 * Track a custom event in Umami Analytics
 * 
 * @param eventName - Name of the event (e.g., "contact_form_submit", "portfolio_view")
 * @param eventData - Optional additional data to track with the event
 * 
 * @example
 * trackEvent("contact_form_submit", { category: "wedding" });
 * trackEvent("portfolio_view", { service: "videography", category: "weddings" });
 * trackEvent("video_play", { video_title: "Sarah & John Wedding Film" });
 */
export function trackEvent(
  eventName: string,
  eventData?: Record<string, string | number | boolean>
): void {
  if (typeof window !== "undefined" && window.umami) {
    try {
      window.umami.track(eventName, eventData);
    } catch (error) {
      console.warn("Failed to track event:", eventName, error);
    }
  }
}

/**
 * Track contact form submission
 * 
 * @param formData - Data about the form submission
 * 
 * @example
 * trackContactFormSubmit({ service: "wedding_videography", source: "portfolio_page" });
 */
export function trackContactFormSubmit(formData?: {
  service?: string;
  source?: string;
  [key: string]: string | undefined;
}): void {
  trackEvent("contact_form_submit", formData as Record<string, string>);
}

/**
 * Track portfolio item view
 * 
 * @param category - Portfolio category (e.g., "weddings", "corporate", "real_estate")
 * @param title - Optional title of the portfolio item
 * 
 * @example
 * trackPortfolioView("weddings", "Sarah & John Wedding");
 */
export function trackPortfolioView(category: string, title?: string): void {
  trackEvent("portfolio_view", {
    category,
    ...(title && { title }),
  });
}

/**
 * Track video play event
 * 
 * @param videoTitle - Title of the video
 * @param category - Category of the video
 * 
 * @example
 * trackVideoPlay("Wedding Highlight Reel", "weddings");
 */
export function trackVideoPlay(videoTitle: string, category?: string): void {
  trackEvent("video_play", {
    video_title: videoTitle,
    ...(category && { category }),
  });
}

/**
 * Track service page view
 * 
 * @param service - Service name (e.g., "videography", "photography", "post_production")
 * 
 * @example
 * trackServiceView("videography");
 */
export function trackServiceView(service: string): void {
  trackEvent("service_view", { service });
}

/**
 * Track external link click (e.g., social media, YouTube, Vimeo)
 * 
 * @param platform - Platform name (e.g., "youtube", "instagram", "facebook")
 * @param url - URL being clicked
 * 
 * @example
 * trackExternalLink("youtube", "https://youtube.com/watch?v=...");
 */
export function trackExternalLink(platform: string, url: string): void {
  trackEvent("external_link_click", {
    platform,
    url,
  });
}

/**
 * Track phone number click (mobile call intent)
 * 
 * @example
 * trackPhoneClick();
 */
export function trackPhoneClick(): void {
  trackEvent("phone_click");
}

/**
 * Track email click
 * 
 * @example
 * trackEmailClick();
 */
export function trackEmailClick(): void {
  trackEvent("email_click");
}

/**
 * Track CTA button click
 * 
 * @param ctaName - Name/location of the CTA (e.g., "hero_cta", "footer_cta")
 * @param destination - Where the CTA leads to
 * 
 * @example
 * trackCTAClick("hero_get_started", "/contact");
 */
export function trackCTAClick(ctaName: string, destination: string): void {
  trackEvent("cta_click", {
    cta_name: ctaName,
    destination,
  });
}
