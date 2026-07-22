import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import { TrackedEmailLink } from "@/components/tracked-email-link";

const pageDescription =
  "Cowboy Safari Fan Hub privacy policy — what we collect, how long we keep it, third-party iframe data, and how to request export or deletion.";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy – Cowboy Safari Fan Hub",
  description: pageDescription,
  path: "/privacy",
  ogType: "article",
});

const privacyJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy – Cowboy Safari Fan Hub",
  description: pageDescription,
  url: `${siteConfig.baseUrl}/privacy`,
  dateModified: siteConfig.lastUpdatedISO,
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-[#1f140c]/10 bg-[#fff8ef]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
            Privacy & Data
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#1f140c]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-[#1f140c]/80">
            This page explains what data Cowboy Safari Fan Hub collects, how it is used, and your rights regarding that data. This site is an independent fan hub and is not affiliated with the official Cowboy Safari development team or Azgames.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
          {/* Analytics */}
          <article className="rounded-3xl border border-[#1f140c]/10 bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f140c]">Analytics</h2>
            <div className="mt-4 space-y-4 text-sm text-[#1f140c]/85">
              <p>
                We use first-party analytics to understand how visitors use this site. The services in use are:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Google Analytics 4 (GA4)</strong> — measures page views, events (e.g., iframe play clicks, support navigation), and session duration. Data is retained for 14 months.
                </li>
                <li>
                  <strong>Plausible Analytics</strong> (self-hosted at plausible.shipsolo.io) — privacy-focused, cookie-less, no personal identifiers. Aggregated visitor counts and referral sources only.
                </li>
                <li>
                  <strong>Microsoft Clarity</strong> — records anonymized session replays and heatmaps to identify dead clicks and scroll depth. No keystrokes or form inputs are captured.
                </li>
              </ul>
              <p>
                We do not use these tools to fingerprint browsers, build advertising profiles, or sell data.
              </p>
            </div>
          </article>

          {/* Contact / Support data */}
          <article className="rounded-3xl border border-[#1f140c]/10 bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f140c]">Contact & Support Data</h2>
            <div className="mt-4 space-y-4 text-sm text-[#1f140c]/85">
              <p>
                When you email{" "}
                <TrackedEmailLink
                  page="privacy"
                  location="contact_email"
                  className="font-semibold text-[#b3471b]"
                >
                  {siteConfig.contactEmail}
                </TrackedEmailLink>
                {" "}we receive your name, email address, message content, and any optional attachments (e.g., screenshots).
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Retention: support threads are kept for 90 days, then deleted.</li>
                <li>Storage: managed mailbox access controlled by the site operator.</li>
                <li>Access: limited to people maintaining this fan hub.</li>
                <li>We do not add your email to marketing lists or share it with third parties.</li>
              </ul>
            </div>
          </article>

          {/* Third-party iframe */}
          <article className="rounded-3xl border border-[#1f140c]/10 bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f140c]">Third-Party Iframe (azgames.io)</h2>
            <div className="mt-4 space-y-4 text-sm text-[#1f140c]/85">
              <p>
                The Cowboy Safari game embed loads from{" "}
                <code className="rounded bg-[#1f140c]/5 px-1 py-0.5 text-xs">https://azgames.io</code>
                . This is a third-party service outside our control.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Azgames may collect gameplay data, session IDs, and device information according to their own privacy policy.</li>
                <li>We do not proxy or modify the iframe traffic.</li>
                <li>We do not receive gameplay data from Azgames.</li>
              </ul>
              <p>
                If you have questions about Azgames data practices, please contact them directly.
              </p>
            </div>
          </article>

          {/* Data retention & export */}
          <article className="rounded-3xl border border-[#1f140c]/10 bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f140c]">Data Retention, Export & Deletion</h2>
            <div className="mt-4 space-y-4 text-sm text-[#1f140c]/85">
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Access logs</strong> — purged every 7 days.
                </li>
                <li>
                  <strong>Analytics data</strong> — GA4 retained for 14 months; Plausible and Clarity retained according to their respective policies.
                </li>
                <li>
                  <strong>Support emails</strong> — deleted after 90 days.
                </li>
                <li>
                  <strong>Export</strong> — email us with the subject “Cowboy Safari privacy export” and we will confirm what site-support records exist for your email address.
                </li>
                <li>
                  <strong>Deletion</strong> — email us with the subject “Cowboy Safari data deletion” and we will confirm removal within 30 days.
                </li>
              </ul>
            </div>
          </article>

          {/* Not affiliated */}
          <article className="rounded-3xl border border-[#1f140c]/10 bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f140c]">Independent Status</h2>
            <div className="mt-4 space-y-4 text-sm text-[#1f140c]/85">
              <p>
                Cowboy Safari Fan Hub is a player-run, independent website. We are not affiliated with, endorsed by, or sponsored by the official Cowboy Safari development team or Azgames.
              </p>
              <p>
                All trademarks, game names, and related imagery belong to their respective owners.
              </p>
            </div>
          </article>

          {/* Contact */}
          <div className="rounded-3xl border border-[#1f140c]/10 bg-[#fff2e0] p-6">
            <h3 className="text-lg font-semibold text-[#1f140c]">Questions?</h3>
            <p className="mt-2 text-sm text-[#1f140c]/80">
              Contact us at{" "}
              <TrackedEmailLink
                page="privacy"
                location="questions_cta"
                className="font-semibold text-[#b3471b]"
              >
                {siteConfig.contactEmail}
              </TrackedEmailLink>
              {" "}for any privacy-related questions or requests.
            </p>
          </div>
        </div>
      </section>
      <script
        id="privacy-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
      />
    </>
  );
}
