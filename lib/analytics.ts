declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export const eventSchemaVersion = "20260722";

type EventProperties = Record<string, string | number>;

const funnelSteps: Record<string, string> = {
  hero_iframe_visible: "01_iframe_visible",
  tool_start: "02_game_focused",
  tool_result: "03_embed_ready",
  return_to_game_click: "04_return_to_game",
  referral_outbound_click: "04_referral_outbound",
};

function getDeviceCategory() {
  if (typeof window === "undefined") return "unknown";
  if (window.matchMedia("(max-width: 767px)").matches) return "mobile";
  if (window.matchMedia("(max-width: 1023px)").matches) return "tablet";
  return "desktop";
}

function getTrafficSource() {
  if (typeof document === "undefined" || !document.referrer) return "direct";

  try {
    const referrer = new URL(document.referrer);
    if (referrer.hostname === window.location.hostname) return "internal";
    if (/google|bing|duckduckgo|yahoo|baidu|yandex/i.test(referrer.hostname)) return "organic_search";
    return "referral";
  } catch {
    return "unknown";
  }
}

function withEventDefaults(eventName: string, properties?: EventProperties) {
  const runtimeDefaults =
    typeof window === "undefined"
      ? { route: "unknown", device_category: "unknown", traffic_source: "unknown" }
      : {
          route: window.location.pathname,
          device_category: getDeviceCategory(),
          traffic_source: getTrafficSource(),
        };

  return {
    event_schema_version: eventSchemaVersion,
    site: "cowboysafari",
    ...runtimeDefaults,
    ...(funnelSteps[eventName]
      ? { funnel_name: "play_engagement", funnel_step: funnelSteps[eventName] }
      : {}),
    ...properties,
  };
}

/** Generic tracker: sends to both Plausible and GA4. Use for product-level events. */
export function trackEvent(eventName: string, properties?: EventProperties) {
  const enrichedProperties = withEventDefaults(eventName, properties);

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
    | "tool_result"
    | "conversion_goal"
    | "iframe_focus_help"
    | "dead_click_rescue_click"
    | "review_action_click"
    | "long_tail_cta_click"
    | "return_to_game_click"
    | "referral_outbound_click",
  properties?: Record<string, string | number>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, withEventDefaults(eventName, properties));
  }
}
