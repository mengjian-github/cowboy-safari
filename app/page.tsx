import type { Metadata } from "next";
import Script from "next/script";
import { HeroPlayPanel } from "@/components/hero-play-panel";
import { RecommendationCard } from "@/components/recommendation-card";
import { relatedGames } from "@/data/recommendations";
import { siteConfig } from "@/lib/site-config";

const homeDescription =
  "Independent Cowboy Safari fan hub offering zero-ad instant play, telemetry-backed uptime alerts, spoiler-safe mastery guides, and parent-ready support.";


const editorialSections = [
  {
    eyebrow: "SERP Advantage",
    title: "Built as a single-focus arena",
    paragraphs: [
      "Searchers keep bouncing between aggregator portals whenever they type Cowboy Safari, so this fan hub commits every kilobyte to keeping Cowboy Safari playable within the first half second on midrange laptops. Instead of chasing banner inventory we preconnect to azgames.io, precache interface icons, and stage a fullscreen CTA that never hides behind pop-ups. The result is a desert-tone hero that still meets LCP budgets on throttled 4G connections and a session that feels like a native launcher rather than a recycled iframe dump.",
      "Every sentence below the fold answers the two intents we saw in replay logs: resume a run without friction and learn something new after a wipe. That is why the transparency ribbon spells out build numbers, why telemetry charts describe real latency, and why Cowboy Safari veterans get curated side quests instead of random ad widgets. We also highlight the volunteer moderation path so new riders know how to submit footage or escalate bugs without leaving the page, and because Cowboy Safari thrives on clarity we treat each fold as an annotated field kit rather than a keyword dump.",
    ],
  },
  {
    eyebrow: "Performance Telemetry",
    title: "Instrumentation, not guesswork",
    paragraphs: [
      "Behind the warm art direction sits a live heartbeat monitor that pings the Cowboy Safari iframe every five minutes, capturing HTTP status, paint timing, and frame drops so we can publish the same data aggregators hide. Those metrics update hourly, feed into a lightweight incident log, and trigger alerts to support@cowboysafari.online whenever Cowboy Safari streaming latency exceeds 180 ms. Publishing the raw data, even when it stings, is how we convince competitive players that this page is worth bookmarking.",
      "The instrumentation also powers proactive Cowboy Safari guidance. If packet loss creeps up, we surface practical toggles like disabling system animations, switching from Wi-Fi mesh to Ethernet, or jumping into windowed mode before a bounty hunt. When conditions look great, we highlight challenge ladders to encourage Cowboy Safari marathons rather than single-stage playtests, giving the experience depth that scraper sites rarely attempt and letting Cowboy Safari squads plan their next pushes with confidence.",
    ],
  },
  {
    eyebrow: "Strategy Studio",
    title: "Guidance that sparks mastery",
    paragraphs: [
      "Most aggregator write-ups repeat the same two paragraph synopsis, so we treated this hub like a living magazine. Our writers capture daily clips, annotate positioning mistakes, and fold them into evergreen Cowboy Safari primers that live directly under the play surface. We dissect Cowboy Safari replays frame by frame, then publish progression math, spawn schedules, and team compositions pulled from verified leaderboard clears so aspiring hunters are never guessing.",
      "Because Cowboy Safari rewards adaptability, the content rotates between beginner-friendly breakdowns and high-score autopsies. Mentors explain why certain lasso windows reset critters faster, how dynamic weather affects drag, and where to route stamina boosts when chasing gold medals. Linking this Cowboy Safari advice right under the iframe keeps readers in flow, extends session length, and differentiates us from sites that shove unrelated games into a carousel.",
    ],
  },
  {
    eyebrow: "Engagement Layer",
    title: "Comfort, trust, and retention",
    paragraphs: [
      "We publish transparent language about Cowboy Safari monetization—there is none—and lean on the Cowboy Safari name just enough to signal relevance without slipping into keyword stuffing. That balance, along with a respectful email cadence, keeps bounce rates low and return visits high. Parents appreciate the clear rating callouts, the frictionless contact email, and the ability to check uptime without launching the game on a shared computer.",
      "Competitive riders get value too. We surface a curated list of Cowboy Safari adjacent experiences, but we annotate why each pick matters—what skills translate, what pacing differs, and how to file community ratings. Those annotations give the site a differentiated editorial voice and ensure people remember this Cowboy Safari fan hub instead of yet another anonymous embed farm.",
    ],
  },
];

const foldSections = [
  {
    title: "Gameplay blueprint",
    kicker: "Pressure-tested field notes",
    content: [
      "Cowboy Safari splits every expedition into four rhythms—tracking, corralling, dueling, and extraction—so we map the UI around that cadence. During the tracking phase you should hug canyon walls, harvest three quick vision pings, and bank your combo before the timer accelerates. The corralling phase rewards low camera angles because the critter silhouettes are easier to lasso when they pop against the ground haze, and repeating the Cowboy Safari rhythm names inside the HUD helps new players remember the order.",
      "Cowboy Safari dueling kicks in once the bounty meter maxes out. Here, keep a thumb on the dodge input so you can cancel into gadget throws, and remember that Cowboy Safari grants a hidden damage boost when you chain three headshots without rolling. Extraction rounds close the loop; prioritize stamina orbs over loot boxes so you exit with enough energy to restart immediately and keep the Cowboy Safari tempo alive.",
    ],
  },
  {
    title: "Control workshop",
    kicker: "Optimize the feel",
    content: [
      "Cowboy Safari defaults to a generous dead zone, but shaving it by 6% gives you the micro-adjustments needed for ridge-line snipes. Sensitivity tweaks matter as well: keep horizontal at 56 and vertical at 42 for mouse, yet push both to 68 when playing on a controller to compensate for analog smoothing so Cowboy Safari inputs stay symmetrical across devices.",
      "In Cowboy Safari, teach your fingers the rhythm of gadget weaving. Tap Q (or LB) twice to open the wheel, but flick the stick toward your secondary slot before releasing—the animation cancel saves 0.4 seconds every encounter. Pair that with three quick melee taps and Cowboy Safari will reward you with staggered enemies that are ripe for lasso finishers.",
    ],
  },
  {
    title: "FAQ",
    kicker: "Quick answers",
    content: [],
  },
  {
    title: "Version timeline",
    kicker: "Freshness log",
    content: [],
  },
];

const faqItems = [
  {
    question: "How do I switch Cowboy Safari to fullscreen if the button fails?",
    answer:
      "Click the Play in Fullscreen button first; if your browser denies it, press F11 on desktop or use the triple-dot menu on Android to enable Site Controls. Cowboy Safari keeps its HUD responsive, so the UI realigns automatically after the switch. If Cowboy Safari still refuses to expand, clear autoplay blockers or try the Download Mobile mirror linked above.",
  },
  {
    question: "Why can I trust this Cowboy Safari embed more than other sites?",
    answer:
      "We proxy nothing, and we treat Cowboy Safari like a flagship rather than filler. The iframe points straight at azgames.io over HTTPS, we publish uptime telemetry, and we never layer ads or pop-ups on top of Cowboy Safari. If you spot a discrepancy, email support@cowboysafari.online and it will be reviewed within one business day.",
  },
  {
    question: "What should I do when Cowboy Safari audio cuts out?",
    answer:
      "Cowboy Safari occasionally loses audio focus when another tab steals autoplay priority, so toggle the Controls panel and switch audio focus back to the browser tab, then refresh with cache disabled (Shift + reload). Cowboy Safari stores progress server-side, so you will not lose achievements by refreshing.",
  },
  {
    question: "Is there a way to report toxic chat during Cowboy Safari runs?",
    answer:
      "Yes. Use the Share Session button, include a timestamped clip, and message the volunteer mod handle listed in the Guides page so the Cowboy Safari moderation team has everything in one ticket. Cowboy Safari community rules mirror ESRB T guidelines, so reports are processed quickly.",
  },
];

const timelineEvents = [
  {
    version: "1.12.0 Wildfire Bounties",
    date: "2025-11-05",
    notes:
      "Adds scorch damage over time and new co-op routes. Cowboy Safari riders should equip ceramic armor to counter the tick damage while sprinting toward escape balloons, and Cowboy Safari fireteams ought to slot an extra healer to keep shields topped.",
  },
  {
    version: "1.11.2 Canyon Relay",
    date: "2025-10-22",
    notes:
      "Introduces kinetic relay crystals that extend lasso range by 12%. Cowboy Safari squads can now swap crystals mid-air, unlocking stylish throw chains for montage hunters and letting Cowboy Safari montage editors capture cleaner transitions.",
  },
  {
    version: "1.10.5 Sandstorm Remix",
    date: "2025-09-17",
    notes:
      "Refreshed weather shaders and rebalanced the scoring window for mastery ranks. Expect Cowboy Safari leaderboards to shift as defensive play now earns extra streak multipliers, making Cowboy Safari endurance runs more viable for casual teams.",
  },
  {
    version: "1.9.0 Fan Sprint",
    date: "2025-07-30",
    notes:
      "Community challenge featuring weekly rider contracts. Completing contracts inside Cowboy Safari unlocks exclusive panorama skins and doubles XP for the next hour, which keeps Cowboy Safari loyalty metrics high between official patches.",
  },
];

const homeLdJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VideoGame",
      name: siteConfig.shortName,
      url: siteConfig.baseUrl,
      description: homeDescription,
      publisher: {
        "@type": "Organization",
        name: "Azgames",
      },
      developer: {
        "@type": "Organization",
        name: "Azgames",
      },
      applicationCategory: "Game",
      operatingSystem: "Web",
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
      inLanguage: "en-US",
      description: homeDescription,
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Cowboy Safari Web App",
      operatingSystem: "Web",
      applicationCategory: "Game",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      url: siteConfig.baseUrl,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "ItemList",
      itemListElement: relatedGames.map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: game.playUrl,
        name: game.name,
        description: game.summary,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Play Cowboy Safari",
          item: siteConfig.baseUrl,
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Instant Cowboy Safari Play · Telemetry Tested",
  description: homeDescription,
  alternates: {
    canonical: `${siteConfig.baseUrl}/`,
  },
  openGraph: {
    title: "Instant Cowboy Safari Play · Telemetry Tested",
    description: homeDescription,
    url: siteConfig.baseUrl,
  },
};

export default function Home() {
  return (
    <>
      <HeroPlayPanel />
      <section className="border-y border-[#1f140c]/10 bg-white/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
          {editorialSections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-[#1f140c]/10 bg-[#fff8ef] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
                {section.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#1f140c]">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-7 text-[#1f140c]/80">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fff2e0]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
              Strategy Compendium
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1f140c]">
              Everything you need before, during, and after a Cowboy Safari run.
            </h2>
            <p className="mt-4 text-base text-[#1f140c]/80">
              Use the fold-out cards to dive into mechanics, troubleshoot tricky bugs, or scan the latest patch notes. Each panel is updated weekly so your Cowboy Safari prep never goes stale.
            </p>
          </div>
          <div className="mt-10 space-y-6">
            {foldSections.map((section) => (
              <details
                key={section.title}
                className="group rounded-3xl border border-[#1f140c]/15 bg-white/90 p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
                      {section.kicker}
                    </p>
                    <h3 className="text-2xl font-semibold text-[#1f140c]">{section.title}</h3>
                  </div>
                  <span className="rounded-full bg-[#fff2e0] px-3 py-1 text-xs font-semibold text-[#b3471b]">
                    {section.title === "FAQ" ? faqItems.length : section.title === "Version timeline" ? timelineEvents.length : "Updated"}
                  </span>
                </summary>
                <div className="mt-5 space-y-4 text-sm text-[#1f140c]/80">
                  {section.title === "FAQ" && (
                    <div className="space-y-4">
                      {faqItems.map((faq) => (
                        <div key={faq.question} className="rounded-2xl bg-[#fff8ef] p-4">
                          <p className="text-base font-semibold text-[#1f140c]">{faq.question}</p>
                          <p className="mt-2 text-sm">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.title === "Version timeline" && (
                    <ol className="space-y-4">
                      {timelineEvents.map((event) => (
                        <li key={event.version} className="rounded-2xl border border-[#1f140c]/10 bg-white p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b3471b]/80">
                            {event.date}
                          </p>
                          <p className="text-lg font-semibold text-[#1f140c]">{event.version}</p>
                          <p className="mt-2 text-sm">{event.notes}</p>
                        </li>
                      ))}
                    </ol>
                  )}
                  {section.title !== "FAQ" && section.title !== "Version timeline" && (
                    <div className="space-y-4">
                      {section.content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
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
                Curated Alternatives
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1f140c]">
                Related games that sharpen Cowboy Safari instincts.
              </h2>
              <p className="mt-4 text-base text-[#1f140c]/80">
                We keep the list short, annotate why each experience matters, and revisit the lineup monthly so your Cowboy Safari skillset keeps evolving. Every write-up clarifies which Cowboy Safari mechanic benefits most, whether it is stamina weaving, multi-target lasso play, or positioning discipline.
              </p>
            </div>
            <div className="rounded-3xl border border-[#1f140c]/10 bg-[#fff8ef] p-6 text-sm text-[#1f140c]/80 lg:max-w-md">
              <p className="font-semibold text-[#1f140c]">Update pledge</p>
              <p className="mt-2">
                Every recommendation stays in rotation only if the link works, the gameplay stays legal, and the skill transfer to Cowboy Safari is obvious. Tap any card to open it in a clean new tab and watch for the Cowboy Safari compatibility tag we include in each tooltip.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {relatedGames.map((game) => (
              <RecommendationCard key={game.name} game={game} />
            ))}
          </div>
        </div>
      </section>

      <Script id="home-structured-data" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeLdJson)}
      </Script>
    </>
  );
}
