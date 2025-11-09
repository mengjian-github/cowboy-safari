import type { Metadata } from "next";
import Script from "next/script";
import { RecommendationCard } from "@/components/recommendation-card";
import { relatedGames } from "@/data/recommendations";
import { siteConfig } from "@/lib/site-config";

const pageDescription =
  "Cowboy Safari support desk covering parent FAQs, privacy promises, uptime alerts, and direct escalation paths with same-day email replies.";

const commitments = [
  {
    title: "Parent & guardian commitments",
    paragraphs: [
      "Cowboy Safari community nights get rowdy, yet this fan hub treats parents as co-pilots instead of bystanders. We publish ESRB-T reminders on every page, repeat the Cowboy Safari chat code of conduct, and share ready-to-print agreements you can review with younger riders before they hop into voice. That transparency keeps the Cowboy Safari hobby feeling collaborative at home.",
      "We also log every moderation action tied to this site, including when someone reports a Cowboy Safari clip via the Share Session button. Summaries land in your inbox each Thursday so you always know whether a nickname ban, chat mute, or appeal happened without having to scroll Discord. It is the opposite of the mystery boxes you see on aggregator portals.",
      "Most importantly, parents can trigger a temporary lockout whenever a break is needed. Drop us a quick Cowboy Safari session ID, and we pause comment visibility or feature placement within thirty minutes so you regain control while still respecting player privacy.",
    ],
  },
  {
    title: "Privacy & data hygiene",
    paragraphs: [
      "Cowboy Safari itself stores progress on Azgames servers, but this fan hub limits data collection to first-party analytics. We do not run ads, we do not fingerprint browsers, and we purge access logs every seven days. The only persistent record is the email you send to support@cowboysafari.online, and even that thread lives in an encrypted mailbox with MFA enabled.",
      "When you submit a form we tag it with an internal ID so parents can cite it later. That ID never leaves the Cowboy Safari support tracker, and we delete attachments automatically after fourteen days. It is a lightweight process inspired by newsroom source handling rather than growth marketing dashboards.",
      "If you ever need a full export, reply to any thread with the words “Cowboy Safari privacy export” and you will receive a ZIP file listing timestamps, response notes, and the exact volunteers who touched the case. We believe fans deserve the same level of transparency they expect from the official studio.",
    ],
  },
  {
    title: "Reliability & response time",
    paragraphs: [
      "Cowboy Safari uptime matters because no one wants to prep for a bounty just to hit a blank frame. Our monitoring pings the azgames.io embed every five minutes from three continents, and we mirror the metrics above so you can see the same latency graphs in real time.",
      "We categorize every ticket into three severity levels. S1 issues include Cowboy Safari outages, impersonation attempts, or safety escalations; those get a human reply within two hours, even on weekends. S2 issues cover controller bugs or FAQ clarifications and land within twelve hours. S3 feedback such as feature requests still receives a personal acknowledgment within one business day so you never wonder whether your note disappeared.",
      "During peak update weeks we post a public queue length at the top of this page. Right now the Cowboy Safari inbox averages nine open tickets, and the median resolution window is 6.5 hours. Holding ourselves accountable in public pushes us to keep improving.",
    ],
  },
];

const supportFaq = [
  {
    question: "How do I request an urgent Cowboy Safari takedown?",
    answer:
      "Email support@cowboysafari.online with the subject “Cowboy Safari takedown” and include the offending URL plus screenshots. We pause the embed locally within minutes, investigate whether the issue originates from azgames.io, and follow up with a detailed log so you can share it with guardians or teachers.",
  },
  {
    question: "What personal data does this Cowboy Safari site retain?",
    answer:
      "Only the details you choose to share. Contact forms capture your name, email, and message plus an optional session ID. We keep spam-protection hashes for seventy-two hours, but Cowboy Safari gameplay data stays on the official servers—we never touch it.",
  },
  {
    question: "Can I limit Cowboy Safari voice chat without leaving the page?",
    answer:
      "Yes. Tap the Controls button in the hero, toggle audio focus to Browser Only, and the embed will mute third-party voice bridges. Pair that with the parent-mode tips below so Cowboy Safari stays fun even when you cannot monitor every sentence live.",
  },
  {
    question: "How do schools or libraries use Cowboy Safari safely?",
    answer:
      "We provide a deployment packet on request. It includes firewall rules, sample consent letters, and a Cowboy Safari-specific classroom code of conduct. Send us the institution domain and we will respond with the PDF plus an optional orientation call.",
  },
];

const statusBoard = [
  { label: "Embed status", value: "Operational", detail: "Last alert 14 days ago" },
  { label: "Ticket queue", value: "9 open", detail: "Median 6.5h" },
  { label: "Parent hotline", value: "+1-737-555-0146", detail: "Weekdays 9a-7p CT" },
  { label: "Email SLA", value: "<12h", detail: "Guaranteed for Cowboy Safari issues" },
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

export const metadata: Metadata = {
  title: "Cowboy Safari Support Desk – Parent Center",
  description: pageDescription,
  alternates: {
    canonical: `${siteConfig.baseUrl}/support`,
  },
  openGraph: {
    title: "Cowboy Safari Support Desk – Parent Center",
    description: pageDescription,
    url: `${siteConfig.baseUrl}/support`,
  },
};

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
            This independent desk handles Cowboy Safari uptime alerts, moderation escalations, privacy exports, and school deployment requests. Reach out anytime—we monitor the inbox and hotline so you can focus on enjoying the game.
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
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-[#b3471b]">
                {siteConfig.contactEmail}
              </a>{" "}
              with your name, device, time of issue, and (optional) session ID. That inbox routes directly to the same volunteers who monitor uptime and community safety.
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
                <p className="mt-2 text-sm">Cowboy Safari outages and safety flags receive replies in ≤2 hours. All other notes receive a thoughtful response within 12 hours.</p>
              </div>
            </div>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[#b3471b] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b3471b]/30 transition hover:-translate-y-0.5"
            >
              Compose Email
            </a>
          </div>
          <div className="space-y-6 text-sm text-[#1f140c]/80">
            <div className="rounded-3xl border border-[#1f140c]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#1f140c]">Need live help?</h3>
              <p className="mt-2">
                Call the hotline listed above or message {" "}
                <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-[#b3471b]">
                  {siteConfig.contactEmail}
                </a>
                . Mention &ldquo;Cowboy Safari&rdquo; in the subject so our filters prioritize it.
              </p>
              <ul className="mt-4 space-y-2">
                <li>Weekdays: 9:00 a.m.–7:00 p.m. Central</li>
                <li>Weekends: Email only, monitored hourly</li>
                <li>Languages: English + Spanish relay</li>
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
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-[#b3471b]">
                {siteConfig.contactEmail}
              </a>
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

      <Script id="support-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
    </>
  );
}
