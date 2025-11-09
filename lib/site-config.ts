export const siteConfig = {
  name: "Cowboy Safari Fan Hub",
  shortName: "Cowboy Safari",
  domain: "cowboysafari.online",
  baseUrl: "https://cowboysafari.online",
  heroTagline: "Play Cowboy Safari Instantly · Fan Hub",
  description:
    "Independent Cowboy Safari fan hub with instant play, spoiler-free guides, parent resources, and zero in-page ads.",
  contactEmail: "support@cowboysafari.online",
  iframeSrc: "https://azgames.io/cowboy-safari.embed",
  version: "1.12.0",
  lastUpdatedISO: "2025-11-08T00:00:00.000Z",
  downloads: {
    ios: "https://apps.apple.com/app/rodeo-stampede-sky-zoo-safari/id993090096",
    android:
      "https://play.google.com/store/apps/details?id=com.integerltd.west.cowboy.rodeo.rider.safari",
  },
  nav: [
    { label: "Play", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Support", href: "/support" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
