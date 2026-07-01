declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Generic tracker: sends to both Plausible and GA4. Use for product-level events. */
export function trackEvent(eventName: string, properties?: Record<string, string | number>) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, { props: properties });
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, properties);
  }
}

/** GA4-only tracker for mission-critical custom events. Avoids inflating Plausible with iframe/playback noise. */
export function trackGA4Event(
  eventName:
    | "hero_iframe_visible"
    | "hero_cta_click"
    | "iframe_loaded"
    | "fullscreen_click"
    | "controls_open"
    | "controls_close"
    | "controls_copy"
    | "share_click"
    | "guide_click"
    | "support_click"
    | "support_email"
    | "outbound_app_store"
    | "outbound_click"
    | "navigation_click"
    | "guide_expand",
  properties?: Record<string, string | number>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, properties);
  }
}
