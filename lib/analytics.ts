declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, properties?: Record<string, string | number>) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, { props: properties });
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, properties);
  }
}
