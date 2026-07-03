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
  version: "fan-hub-2026.07.03",
  lastUpdatedISO: "2026-07-03T03:05:00.000Z",
  downloads: {
    ios: "",
    android: "",
  },
  nav: [
    { label: "Play", href: "/" },
    { label: "Controls", href: "/controls" },
    { label: "Animals", href: "/animals" },
    { label: "Guides", href: "/guides" },
    { label: "Support", href: "/support" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
