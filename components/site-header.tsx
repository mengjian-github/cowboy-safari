import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="relative border-b border-[#dfc8a7]/60 bg-[#fff8ef]/95 text-[#1f140c] shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Cowboy Safari Fan Hub home">
          <Image
            src="/logo.png"
            alt="Cowboy Safari badge"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full border border-[#1f140c]/10 bg-white object-contain"
            priority
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b3471b]/80">
              {siteConfig.shortName}
            </p>
            <p className="text-base font-semibold text-[#1f140c]">
              {siteConfig.heroTagline}
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#1f140c]/80 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#b3471b]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full border border-[#1f140c]/15 px-4 py-2 text-sm font-semibold text-[#1f140c]/80 transition hover:border-[#b3471b] hover:text-[#b3471b] lg:inline-flex"
            href={`mailto:${siteConfig.contactEmail}`}
          >
            Contact
          </a>
          <Link
            href="/#play"
            className="rounded-full bg-[#b3471b] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#b3471b]/30 transition hover:-translate-y-0.5"
          >
            Launch Game
          </Link>
        </div>
      </div>
    </header>
  );
}
