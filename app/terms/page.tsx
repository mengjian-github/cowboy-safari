import type { Metadata } from "next";
import Link from "next/link";
import { TrackedEmailLink } from "@/components/tracked-email-link";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

const pageDescription =
  "Cowboy Safari Fan Hub terms of use covering fan-site scope, iframe provider boundaries, acceptable use, support, takedown requests, and disclaimers.";

export const metadata: Metadata = buildPageMetadata({
  title: "Cowboy Safari Terms of Use | Fan Hub Scope",
  description: pageDescription,
  path: "/terms",
  ogType: "article",
});

const termsSections = [
  {
    title: "1. Fan-site scope",
    body:
      "Cowboy Safari Fan Hub is an independent, non-commercial fan resource. We provide browser access notes, controls guidance, animal and Sky Zoo planning copy, support routing, and source-aware editorial context. We do not claim to be the developer, publisher, distributor, or official support team for Cowboy Safari or Azgames.",
  },
  {
    title: "2. Embedded game provider",
    body:
      "The playable game frame loads from azgames.io over HTTPS. The source provider controls gameplay, saves, ads or monetization inside the iframe, availability, patches, moderation, and account-side data. This site does not proxy, modify, or store iframe gameplay traffic.",
  },
  {
    title: "3. Acceptable use",
    body:
      "Use this hub for personal browsing, learning controls, comparing beginner routes, and contacting us about site accessibility or takedown concerns. Do not use the site to attack the iframe provider, bypass school/work policies, scrape aggressively, impersonate the source provider, or submit abusive support requests.",
  },
  {
    title: "4. Accuracy and updates",
    body:
      "Guides are source-aware fan notes, not official patch notes or guaranteed economy tables. We avoid exact spawn-rate, coin, account, or provider-side claims unless they are visible in the embedded source experience. If the game changes, the current iframe and source provider remain authoritative.",
  },
  {
    title: "5. Privacy and analytics",
    body:
      "We use GA4, Microsoft Clarity, and self-hosted Plausible to understand aggregate page behavior and support issues. The privacy page explains what is collected, how long it is kept, and how to request export or deletion for support messages sent to this hub.",
  },
  {
    title: "6. Takedown and support",
    body:
      `For site bugs, accessibility issues, privacy requests, or rights/takedown concerns, contact ${siteConfig.contactEmail}. Provider-only issues such as game saves, in-frame ads, moderation, or official account access should be handled by the source platform that controls them.`,
  },
  {
    title: "7. No warranties",
    body:
      "The site is provided as-is. We aim to keep routes, links, structured data, and support copy current, but we cannot guarantee uninterrupted iframe availability, source-provider behavior, search ranking, or compatibility with every browser, network, or device policy.",
  },
];

const termsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Cowboy Safari Fan Hub Terms of Use",
  description: pageDescription,
  url: `${siteConfig.baseUrl}/terms`,
  dateModified: siteConfig.lastUpdatedISO,
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#fff8ef]">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b3471b]/80">Terms</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#1f140c]">Cowboy Safari Fan Hub terms of use.</h1>
          <p className="mt-4 text-base leading-7 text-[#1f140c]/80">
            These terms define what this fan hub controls, what the embedded source provider controls, and how to contact us about site-side issues. Last updated {new Date(siteConfig.lastUpdatedISO).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}.
          </p>

          <div className="mt-10 space-y-5">
            {termsSections.map((section) => (
              <article key={section.title} className="rounded-3xl border border-[#1f140c]/10 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-[#1f140c]">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#1f140c]/85">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#b3471b]/25 bg-white p-6 text-sm leading-7 text-[#1f140c]/80 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f140c]">Questions or takedown requests</h2>
            <p className="mt-3">
              Email <TrackedEmailLink page="terms" location="terms_contact" className="font-semibold text-[#b3471b]">Contact Support</TrackedEmailLink> for site-side legal, accessibility, privacy, or takedown questions. Read the <Link href="/privacy" className="font-semibold text-[#b3471b]">Privacy Policy</Link> for analytics and support-message details.
            </p>
          </div>
        </div>
      </section>
      <script id="terms-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }} />
    </>
  );
}
