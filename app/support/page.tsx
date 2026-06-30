import type { Metadata } from "next";
import { RecommendationCard } from "@/components/recommendation-card";
import { TrackedEmailLink } from "@/components/tracked-email-link";
import { relatedGames } from "@/data/recommendations";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

const pageDescription =
  "Cowboy Safari support center for fan-hub site issues, privacy requests, embed troubleshooting, and clear source-provider boundaries.";

const commitments = [
  {
    title: "Parent & guardian commitments",
    paragraphs: [
      "Cowboy Safari can be a shared family activity when adults know where play happens and what this fan hub can control. We publish clear reminders, keep the iframe source visible, and separate site-support issues from game-account or provider issues.",
      "This site does not operate Cowboy Safari chat, accounts, moderation queues, or private sessions. If a concern belongs to the source game provider, we tell you that plainly and avoid promising tools we do not own.",
      "For family safety, use browser permissions, device sound controls, and planned breaks. Contact us for site accessibility, broken links, or embed availability; contact the source provider for in-game account or community enforcement.",
    ],
  },
  {
    title: "Privacy & data hygiene",
    paragraphs: [
      "Cowboy Safari progress and gameplay data remain with the source game provider. This fan hub limits data collection to first-party analytics, support email you choose to send, and basic operational logs needed to keep the page working.",
      "When you contact us, include only the details needed to reproduce a site issue: device, browser, page URL, and what you saw. Do not include passwords, payment details, or private game-account information.",
      "If you need a copy or deletion of a message you sent this fan hub, email the support address from the same inbox. We will confirm what site-support records exist and remove what we control.",
    ],
  },
  {
    title: "Reliability & response time",
    paragraphs: [
      "Cowboy Safari availability matters because no one wants to prep for a run just to hit a blank frame. We check the public page and iframe route during routine site reviews, then update copy if a source-side issue persists.",
      "We triage site-support email by impact: broken play iframe, broken navigation, privacy requests, then guide feedback. High-impact site bugs receive the fastest reply; game-account or provider-only issues are redirected instead of over-promised.",
      "The goal is practical transparency, not fake operations theater. We keep the support route lightweight, email-first, and focused on issues this fan hub can actually fix.",
    ],
  },
];

const supportFaq = [
  {
    question: "How do I request an urgent Cowboy Safari takedown?",
    answer:
      "Email support@cowboysafari.online with the subject “Cowboy Safari takedown” plus the URL and screenshots. We can review pages on this fan hub; for source-game or platform content, contact the provider that hosts it.",
  },
  {
    question: "What personal data does this Cowboy Safari site retain?",
    answer:
      "Only the details you choose to share in email plus ordinary analytics and operational logs. Cowboy Safari gameplay data stays with the source provider—we never receive it.",
  },
  {
    question: "Can I limit Cowboy Safari chat or audio from this page?",
    answer:
      "Not directly. This fan hub embeds the game iframe and does not control provider chat or voice systems. Use browser permissions, device sound settings, and any controls exposed inside the source game.",
  },
  {
    question: "How do schools or libraries use Cowboy Safari safely?",
    answer:
      "Use this page as a public browser-play reference only. We do not provide school deployment packets, consent templates, or provider-side firewall support. Review your institution policies before letting students access external game iframes.",
  },
];

const statusBoard = [
  { label: "Embed status", value: "Operational", detail: "Last alert 14 days ago" },
  { label: "Support route", value: "Email-first", detail: "Site issues only" },
  { label: "Game provider", value: "azgames.io", detail: "Iframe source" },
  { label: "Response scope", value: "Best effort", detail: "No provider account access" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: supportFaq.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Support",
          item: `${siteConfig.baseUrl}/support`,
        },
      ],
    },
  ],
};

export const metadata: Metadata = buildPageMetadata({
  title: "Cowboy Safari Support Desk – Parent Center",
  description: pageDescription,
  path: "/support",
  ogType: "article",
});

export default function SupportPage() {
  return (
    <>
      <section className="border-b border-[#1f140c]/10 bg-[#fff8ef]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
            Support & Trust Center
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#1f140c]">
            Cowboy Safari help for parents, players, and partner teams.
          </h1>
          <p className="mt-4 text-base text-[#1f140c]/80">
            This independent fan hub handles site accessibility, broken links, embed availability notes, and privacy requests for messages sent to us. Game-account, moderation, and provider issues should go to the source platform that controls them.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {statusBoard.map((item) => (
              <div key={item.label} className="rounded-3xl border border-[#1f140c]/10 bg-white/90 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b3471b]/80">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#1f140c]">{item.value}</p>
                <p className="mt-1 text-sm text-[#1f140c]/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
          {commitments.map((section) => (
            <article key={section.title} className="rounded-3xl border border-[#1f140c]/10 bg-[#fffaf2] p-6 shadow-sm">
              <h2 className="text-3xl font-semibold text-[#1f140c]">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm text-[#1f140c]/85">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="privacy" className="border-y border-[#1f140c]/10 bg-[#fff2e0]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="rounded-[32px] border border-[#1f140c]/10 bg-white/90 p-8 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
              Email-first support
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1f140c]">
              Tell us what Cowboy Safari help you need.
            </h2>
            <p className="mt-3 text-base text-[#1f140c]/80">
              Skip forms—just email {" "}
              <TrackedEmailLink
                page="support"
                location="email_first_support_copy"
                className="font-semibold text-[#b3471b]"
              >
                Contact Support
              </TrackedEmailLink>{" "}
              with your device, browser, time of issue, and the page URL. Do not send passwords, payment details, or game-account secrets.
            </p>
            <div className="mt-6 space-y-4 text-sm text-[#1f140c]/85">
              <div className="rounded-2xl border border-[#1f140c]/10 bg-[#fff8ef] p-4">
                <p className="text-sm font-semibold text-[#1f140c]">Suggested email template</p>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  <li>Subject: “Cowboy Safari support – <span className="font-semibold">topic</span>”</li>
                  <li>Body: Who is writing, platform, timestamp, short description</li>
                  <li>Attach screenshots or clips if available (HUD visible)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#1f140c]/10 bg-white p-4">
                <p className="text-sm font-semibold text-[#1f140c]">Response pledge</p>
                <p className="mt-2 text-sm">Site bugs and privacy requests are handled first. Provider-only game issues receive a redirect instead of a fake site-side fix.</p>
              </div>
            </div>
            <TrackedEmailLink
              page="support"
              location="compose_email_cta"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[#b3471b] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b3471b]/30 transition hover:-translate-y-0.5"
            >
              Compose Email
            </TrackedEmailLink>
          </div>
          <div className="space-y-6 text-sm text-[#1f140c]/80">
            <div className="rounded-3xl border border-[#1f140c]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#1f140c]">Need live help?</h3>
              <p className="mt-2">
                Email {" "}
                <TrackedEmailLink
                  page="support"
                  location="need_live_help_copy"
                  className="font-semibold text-[#b3471b]"
                >
                  Contact Support
                </TrackedEmailLink>
                . Mention &ldquo;Cowboy Safari&rdquo; in the subject and include the affected URL.
              </p>
              <ul className="mt-4 space-y-2">
                <li>Email-first site support</li>
                <li>No phone support or live chat</li>
                <li>No access to source-game accounts</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-[#1f140c]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#1f140c]">Document checklist</h3>
              <p className="mt-2">Attach these when possible to speed up Cowboy Safari investigations:</p>
              <ul className="mt-3 list-disc pl-5">
                <li>Screenshot or clip with visible HUD</li>
                <li>Browser, device, and connection info</li>
                <li>Time zone plus local time of the incident</li>
                <li>Names of involved Cowboy Safari players</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
              Parent & player FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1f140c]">
              Cowboy Safari help articles answered in plain language.
            </h2>
            <p className="mt-3 text-base text-[#1f140c]/80">
              Use these fast answers before waiting for a reply. We keep the Cowboy Safari knowledge base public so everyone shares the same expectations.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {supportFaq.map((faq) => (
              <details key={faq.question} className="rounded-3xl border border-[#1f140c]/10 bg-[#fffaf2] p-6">
                <summary className="cursor-pointer text-lg font-semibold text-[#1f140c]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-[#1f140c]/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1f140c]/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
                Guided downtime
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1f140c]">
                Rotate to curated titles while Cowboy Safari patches deploy.
              </h2>
              <p className="mt-4 text-base text-[#1f140c]/80">
                Keeping riders busy elsewhere prevents burnout. These recommendations echo the homepage but add notes that focus on patience, communication, and healthy play sessions before the next Cowboy Safari marathon.
              </p>
            </div>
            <p className="rounded-3xl border border-[#1f140c]/10 bg-[#fff8ef] p-6 text-sm text-[#1f140c]/80 lg:max-w-md">
              Share your own Cowboy Safari downtime rituals with {" "}
              <TrackedEmailLink
                page="support"
                location="downtime_rituals_copy"
                className="font-semibold text-[#b3471b]"
              >
                Contact Support
              </TrackedEmailLink>
              . We rotate the advice monthly and credit contributors (first name + city) when permission is granted.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {relatedGames.map((game) => (
              <RecommendationCard key={game.name} game={game} />
            ))}
          </div>
        </div>
      </section>

      <script
        id="support-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
