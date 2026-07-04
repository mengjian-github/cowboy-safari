declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export const eventSchemaVersion = "20260704";

function withEventDefaults(properties?: Record<string, string | number>) {
  return {
    event_schema_version: eventSchemaVersion,
    site: "cowboysafari",
    ...properties,
  };
}

/** Generic tracker: sends to both Plausible and GA4. Use for product-level events. */
export function trackEvent(eventName: string, properties?: Record<string, string | number>) {
  const enrichedProperties = withEventDefaults(properties);

  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, { props: enrichedProperties });
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, enrichedProperties);
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
    | "guide_expand"
    | "tool_start"
    | "tool_result",
  properties?: Record<string, string | number>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, withEventDefaults(properties));
  }
}
