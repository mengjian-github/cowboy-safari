import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { label: "Guides", href: "/guides" },
  { label: "Support", href: "/support" },
  { label: "Privacy", href: "/support#privacy" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dfc8a7]/60 bg-[#fff8ef] text-[#1f140c]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b3471b]/70">
              {siteConfig.shortName}
            </p>
            <p className="mt-3 text-lg font-semibold">
              Independent Cowboy Safari coverage with zero pop-up ads.
            </p>
            <p className="mt-2 text-sm text-[#1f140c]/70">
              Fan-built, non-commercial and transparent about the azgames.io iframe source. Reach us
              at{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-[#b3471b]">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </div>
          <div className="space-y-2 text-sm text-[#1f140c]/70">
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
