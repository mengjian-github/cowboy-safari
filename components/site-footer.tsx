import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { label: "Guides", href: "/guides" },
  { label: "Support", href: "/support" },
  { label: "Privacy", href: "/support#privacy" },
];

const friendLinks = [
  { label: "Stunt Simulator 2", href: "https://stunt-simulator.com/" },
  { label: "POE 3.27", href: "https://poe327.net/" },
  { label: "Legion Remix", href: "https://legionremixhub.com/" },
  // Exclude self-link to Cowboy Safari
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dfc8a7]/60 bg-[#fff8ef] text-[#1f140c]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b3471b]/70">
              {siteConfig.shortName}
            </p>
            <p className="mt-3 text-lg font-semibold max-w-prose pr-4">
              Independent Cowboy Safari.
            </p>
            <p className="mt-2 text-sm text-[#1f140c]/70 max-w-prose pr-4">
              Fan-built, non-commercial and transparent about the azgames.io iframe source. Reach us
              at{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-[#b3471b]">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </div>
          <div className="space-y-2 text-sm text-[#1f140c]/70">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f140c]/60">Site</p>
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-medium text-[#1f140c] transition hover:text-[#b3471b]"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="space-y-2 text-sm text-[#1f140c]/70">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f140c]/60">Recommended Sites</p>
            {friendLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block font-medium text-[#1f140c] transition hover:text-[#b3471b]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-[#1f140c]/10 pt-4 text-xs text-[#1f140c]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getUTCFullYear()} {siteConfig.domain}. All rights reserved.
          </p>
          <p>Not affiliated with Azgames or the Cowboy Safari dev team.</p>
        </div>
      </div>
    </footer>
  );
}
