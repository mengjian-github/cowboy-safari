"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { trackEvent, trackGA4Event } from "@/lib/analytics";

export function SiteHeader() {
  return (
    <header className="relative overflow-x-clip border-b border-[#dfc8a7]/60 bg-[#fff8ef]/95 text-[#1f140c] shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-3 sm:gap-6 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3" aria-label="Cowboy Safari Fan Hub home">
          <img
            src="/logo.webp"
            alt="Cowboy Safari badge"
            width={56}
            height={56}
            className="h-10 w-10 shrink-0 rounded-full border border-[#1f140c]/10 bg-white object-contain sm:h-12 sm:w-12"
          />
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold uppercase tracking-[0.16em] text-[#b3471b]/80 sm:text-sm sm:tracking-[0.2em]">
              {siteConfig.shortName}
            </p>
            <p className="hidden truncate text-base font-semibold text-[#1f140c] sm:block">
              {siteConfig.heroTagline}
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#1f140c]/80 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => trackGA4Event("navigation_click", { page: "global_header", destination: item.href, label: item.label })}
              className="transition hover:text-[#b3471b]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full border border-[#1f140c]/15 px-4 py-2 text-sm font-semibold text-[#1f140c]/80 transition hover:border-[#b3471b] hover:text-[#b3471b] lg:inline-flex"
            href="/support"
            onClick={() => {
              trackGA4Event("support_click", { page: "global_header", location: "contact_cta" });
            }}
          >
            Contact
          </a>
          <Link
            href="/#play"
            onClick={() => {
              trackEvent("hero_cta_click", { page: "home", location: "header_launch_game", destination: "#play" });
              trackGA4Event("hero_cta_click", { page: "home", location: "header_launch_game", destination: "#play" });
            }}
            className="shrink-0 whitespace-nowrap rounded-full bg-[#b3471b] px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-[#b3471b]/30 transition hover:-translate-y-0.5 sm:px-4 sm:text-sm"
          >
            Launch Game
          </Link>
        </div>
      </div>
    </header>
  );
}
