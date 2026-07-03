import type { Metadata } from "next";
import { HeroPlayPanel } from "@/components/hero-play-panel";
import { RecommendationCard } from "@/components/recommendation-card";
import { relatedGames } from "@/data/recommendations";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

const homeDescription =
  "Play Cowboy Safari online free on desktop or mobile. Instant iframe play with controls, animals, Sky Zoo planning, source notes, and beginner routes.";


const editorialSections = [
  {
    eyebrow: "Game Overview",
    title: "What is this game?",
    paragraphs: [
      "This is a fast-paced lasso-and-ride browser game set in a frontier-style run. You jump from mount to mount, chase animals, and use a Sky Zoo-style collection loop. This fan hub keeps the advice practical and labels uncertain mechanics instead of pretending to publish official patch data.",
      "The game runs in your browser through a secure iframe from azgames.io. No download, no signup, and no ad units are added by this hub. We keep the frame untouched so input and game state remain with the source provider.",
    ],
  },
  {
    eyebrow: "Controls & Tips",
    title: "How to play",
    paragraphs: [
      "Desktop: WASD or arrow keys to move, Space to jump, and the mouse to throw your lasso. Time your throw so the rope lands while the animal is still calm—wait too long and it bucks you off. Hold the lasso button longer for bigger targets, but watch your stamina bar.",
      "Mobile: tap left or right to steer, tap-and-hold to aim the lasso, and release to throw. Swipe up to jump off a mount and immediately swipe toward the next one to chain rides. The first few runs are tutorial-friendly, so use them to learn the timing before chasing leaderboard scores.",
    ],
  },
  {
    eyebrow: "Animals & Sky Zoo",
    title: "Mounts, habitats, and upgrades",
    paragraphs: [
      "The animal and biome names on this site are player-facing planning labels, not an official database. Use them to think about mount roles: stable starters, faster route choices, and later-run animals that ask for cleaner timing.",
      "For Sky Zoo planning, prioritize reliable captures before speculative rare routes. If the source game changes names, economy values, or unlock order, treat the iframe and source provider as authoritative and use this hub as a beginner decision aid.",
    ],
  },
  {
    eyebrow: "Progression Planning",
    title: "Goals, practice loops, and long-term unlocks",
    paragraphs: [
      "If the game shows rotating goals, use them as practice prompts rather than promises from this site. A safe session plan is simple: learn steering, chain one new mount, then bank progress before chasing a harder route.",
      "Long-term progression is easiest when you turn common captures into repeatable upgrades. If you are stuck, return to safer routes and improve timing instead of forcing rare or late-run attempts that you cannot yet bank.",
    ],
  },
];

const foldSections = [
  {
    title: "Beginner route",
    kicker: "First 10 runs",
    content: [
      "Start with the safest visible route. Your first goal is not distance; it is learning lasso timing and iframe focus. Ride a stable starter mount, then practice catching the next safe animal before speed becomes the main challenge.",
      "After a few clean attempts, move to faster or more crowded routes only when you can dismount and choose the next target without panic. The exact zone names belong to the source game, but the learning order stays useful: stability first, speed second.",
    ],
  },
  {
    title: "Animals & mounts",
    kicker: "Species by biome",
    content: [
      "Plains: Horse (starter, balanced), Buffalo (slow, high stamina), Zebra (fast, bucks quickly). Jungle: Elephant (very slow, invincible to small obstacles), Ostrich (fast, ignores water), Giraffe (tall, sees over crowds).",
      "Later-route labels such as Outback or Mountain are used here as planning shorthand. If your current build exposes different animals, map them into the same roles: jump/control mount, endurance mount, obstacle-safe mount, or late-run challenge mount.",
    ],
  },
  {
    title: "Coins & zoo upgrades",
    kicker: "Economy loop",
    content: [
      "Coins come from two sources: run distance and zoo visitors. Early on, runs are your main income. After you unlock the Sky Zoo, visitors become the passive engine. Prioritize habitat upgrades that increase visitor capacity before cosmetic decorations.",
      "A safer upgrade order is: 1) basic capacity, 2) income multiplier, 3) run stamina, 4) new slots. Avoid exact coin targets unless your current iframe build shows them; balance upgrades around the loop that actually pays back for you.",
    ],
  },
  {
    title: "Common mistakes",
    kicker: "What not to do",
    content: [
      "Mistake 1: Holding the lasso too long on quick targets. Use shorter inputs when the animal turns quickly. Mistake 2: ignoring the collection/economy loop. If a route is not paying back, practice safer captures before chasing flashy runs.",
      "Mistake 3: treating rare animals as the whole game. Rare or late-run targets are exciting, but most players progress faster by mastering stable routes, banking consistent captures, and only then expanding into harder paths.",
    ],
  },
  {
    title: "Similar games decision guide",
    kicker: "If you like Cowboy Safari, try these",
    content: [
      "Rodeo Stampede: Sky Zoo is the closest comparison for lasso riding plus zoo collection. Choose it if you want a mobile-native reference point; use each store listing for current monetization and availability details.",
      "Weird West is a story-driven immersive sim with posse management. Choose it if you want narrative depth and turn-based tactics rather than reflex runs. Hard West 2 adds poker-hand abilities for a tactical twist. Evil West is a co-op brawler with heavy combat—good for players who want action but not the zoo loop.",
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

const searchIntentCards = [
  {
    question: "Can I play Cowboy Safari online free?",
    answer:
      "Yes. Use the play panel above to load the secure azgames.io iframe. This fan hub does not add a signup wall, download prompt, or extra in-page ad layer.",
    href: "#play",
  },
  {
    question: "What are the Cowboy Safari controls?",
    answer:
      "Desktop players use WASD or Arrow Keys, Space to jump or dismount, and mouse input for lasso timing. Mobile players use short taps, tap-and-hold aim, and swipe-style dismount habits.",
    href: "/controls",
  },
  {
    question: "Which Cowboy Safari animals should beginners chase?",
    answer:
      "Start with stable early mounts before faster animals. The animals page explains Horse, Buffalo, Zebra, Jungle mounts, and later-route labels as planning categories rather than official spawn data.",
    href: "/animals",
  },
  {
    question: "How should I upgrade the Sky Zoo?",
    answer:
      "Prioritize reliable captures, capacity-style upgrades, then income or stamina boosts when your current build exposes them. Expand into new slots only after the base loop feels repeatable.",
    href: "/sky-zoo",
  },
];

const serpDifferentiators = [
  {
    title: "Aggregator pages",
    gap: "Usually open with a generic play tile and thin copy.",
    answer:
      "This hub puts the playable iframe, controls, source note, support path, and beginner route links above the fold so search visitors get a complete answer before they leave.",
  },
  {
    title: "Store or fandom pages",
    gap: "Useful for availability or lore, but often far from the browser-play task.",
    answer:
      "Our pages stay focused on the web session: keyboard focus, fullscreen, lasso timing, animals by role, Sky Zoo upgrade order, and iframe troubleshooting.",
  },
  {
    title: "Unsupported exact-stat guides",
    gap: "Exact spawn, coin, or patch claims become stale quickly.",
    answer:
      "We label uncertain mechanics, avoid fake official claims, and update the visible freshness log when evidence changes. The source provider remains authoritative.",
  },
];

const faqItems = [
  {
    question: "How do I play Cowboy Safari in fullscreen?",
    answer:
      "Click the fullscreen button on the iframe, or press F11 on desktop. On mobile, rotate to landscape and use the browser’s full-screen mode. The game HUD auto-adjusts to the new size.",
  },
  {
    question: "What are the controls for Cowboy Safari?",
    answer:
      "Desktop: WASD or arrows to move, Space to jump, mouse to aim and throw the lasso. Mobile: tap left/right to steer, tap-and-hold to aim the lasso, release to throw. Swipe up to dismount and chain to the next animal.",
  },
  {
    question: "How do I upgrade my Sky Zoo?",
    answer:
      "Use the Sky Zoo page as a planning model: stable captures first, then capacity, multiplier, stamina, and new slots when your current build exposes comparable upgrades.",
  },
  {
    question: "Which animal is best for beginners?",
    answer:
      "Choose the most stable early mount available in your current game build. On this hub we use Buffalo as the beginner-safe label because it represents slower, easier lasso practice before switching to faster animals.",
  },
  {
    question: "Why is the game not loading?",
    answer:
      "The iframe streams from azgames.io. If it does not load, check your network, disable aggressive content blockers, or try a different browser. The game requires a stable internet connection and works best on Chrome, Firefox, or Safari.",
  },
  {
    question: "Is Cowboy Safari free?",
    answer:
      "Yes. This page embeds the free browser game with no signup and no in-page ad units added by this hub. Game availability and progress remain with the source provider.",
  },
];

const timelineEvents = [
  {
    version: "2026-07-02 – Search intent and event routing refresh",
    date: "2026-07-02",
    notes:
      "Added answer-first search cards for play, controls, animals, and Sky Zoo intent; routed key CTA and iframe events through both Plausible and GA4 where available.",
  },
  {
    version: "2026-07-01 – Fan hub source-safety refresh",
    date: "2026-07-01",
    notes:
      "Rewrote over-specific game claims into source-aware beginner guidance, added clearer iframe/source disclaimers, and kept the play panel plus analytics events visible above the fold.",
  },
  {
    version: "2026-06-30 – Technical SEO repair retained",
    date: "2026-06-30",
    notes:
      "Kept the single-H1 page structure, clean support routing, sitemap/robots, and extensionless internal links from the previous verified production repair.",
  },
  {
    version: "Source provider remains authoritative",
    date: "ongoing",
    notes:
      "The iframe and its source provider control gameplay, availability, saves, ads inside the frame, and any official patch details. This site only adds navigation, explainers, and fan-support context.",
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
      genre: ["Action", "Arcade", "Zoo Builder"],
      gamePlatform: ["Web Browser", "Desktop", "Mobile"],
      publisher: {
        "@type": "Organization",
        name: "Source game provider",
      },
      developer: {
        "@type": "Organization",
        name: "Source game provider",
      },
      applicationCategory: "Game",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
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
      name: "Cowboy Safari Animals and Mounts",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Horse", description: "Starter mount, balanced speed and stamina." },
        { "@type": "ListItem", position: 2, name: "Buffalo", description: "Slow but stable, ideal for beginners." },
        { "@type": "ListItem", position: 3, name: "Zebra", description: "Fast, bucks quickly." },
        { "@type": "ListItem", position: 4, name: "Elephant", description: "Very slow, invincible to small obstacles." },
        { "@type": "ListItem", position: 5, name: "Ostrich", description: "Fast, ignores water." },
        { "@type": "ListItem", position: 6, name: "Giraffe", description: "Tall, sees over crowds." },
        { "@type": "ListItem", position: 7, name: "Kangaroo", description: "Double-jump ability." },
        { "@type": "ListItem", position: 8, name: "Camel", description: "Long water stamina." },
        { "@type": "ListItem", position: 9, name: "Yak", description: "Ice-proof for mountain biomes." },
        { "@type": "ListItem", position: 10, name: "Eagle", description: "Flies over gaps." },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Play Cowboy Safari",
      step: [
        { "@type": "HowToStep", name: "Start a run", text: "Click the play button or press Space to begin." },
        { "@type": "HowToStep", name: "Steer your mount", text: "Use WASD or arrow keys (desktop) or tap left/right (mobile)." },
        { "@type": "HowToStep", name: "Throw the lasso", text: "Aim with mouse or drag, then click or tap-and-hold to throw." },
        { "@type": "HowToStep", name: "Chain rides", text: "Dismount with Space or swipe up, then lasso the next animal mid-air." },
        { "@type": "HowToStep", name: "Upgrade your zoo", text: "Spend coins on habitat capacity and multipliers between runs." },
      ],
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

export const metadata: Metadata = buildPageMetadata({
  title: "Play Cowboy Safari Online Free | Controls & Sky Zoo",
  description: homeDescription,
  path: "/",
});

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

      <section className="border-y border-[#1f140c]/10 bg-[#fffaf2]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
              Fast Answers
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1f140c]">
              Cowboy Safari search answers before you start a run.
            </h2>
            <p className="mt-4 text-base text-[#1f140c]/80">
              These answer-first cards target the questions players ask most often: play access, controls, animals, and Sky Zoo upgrades. Each answer links to a deeper internal page so new visitors can choose the right next step instead of bouncing back to search.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {searchIntentCards.map((card) => (
              <a
                key={card.question}
                href={card.href}
                className="rounded-3xl border border-[#1f140c]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#b3471b]/40"
              >
                <h3 className="text-lg font-semibold text-[#1f140c]">{card.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[#1f140c]/80">{card.answer}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-[#b3471b]">Read the full route →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#1f140c]/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
              SERP Difference
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1f140c]">
              Why this Cowboy Safari page is not another thin play mirror.
            </h2>
            <p className="mt-4 text-base text-[#1f140c]/80">
              Current search results are dominated by generic aggregators, app-store style pages, and broad wiki content. This page answers the actual browser-player task: play now, understand controls, choose animals, plan Sky Zoo upgrades, and know what this fan hub can verify.
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {serpDifferentiators.map((item) => (
              <article key={item.title} className="rounded-3xl border border-[#1f140c]/10 bg-[#fff8ef] p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1f140c]">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold text-[#b3471b]">Gap: {item.gap}</p>
                <p className="mt-3 text-sm leading-7 text-[#1f140c]/80">{item.answer}</p>
              </article>
            ))}
          </div>
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
              Use the fold-out cards to dive into mechanics, troubleshoot browser/iframe issues, or scan this fan hub&apos;s latest editorial changes. Official gameplay changes remain with the source provider.
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
          <aside className="mt-10 rounded-3xl border border-[#b3471b]/25 bg-white/90 p-6 text-sm leading-7 text-[#1f140c]/80 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b3471b]/80">Source note</p>
            <h3 className="mt-2 text-2xl font-semibold text-[#1f140c]">What this fan hub can and cannot verify</h3>
            <p className="mt-3">
              Verified here: HTTPS iframe source, page availability, browser controls guidance, support route, analytics events, sitemap, and last editorial update. Not verified here: official patch versions, exact spawn rates, exact coin payouts, account state, or provider-side ads inside the iframe. For those, the embedded source game remains authoritative.
            </p>
          </aside>
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
                Games like Cowboy Safari — if you enjoy lasso riding and zoo building.
              </h2>
              <p className="mt-4 text-base text-[#1f140c]/80">
                We keep the list short, annotate why each experience matters, and revisit the lineup monthly so your skillset keeps evolving. Every write-up clarifies which mechanic benefits most, whether it is stamina weaving, multi-target lasso play, or positioning discipline.
              </p>
            </div>
            <div className="rounded-3xl border border-[#1f140c]/10 bg-[#fff8ef] p-6 text-sm text-[#1f140c]/80 lg:max-w-md">
              <p className="font-semibold text-[#1f140c]">Update pledge</p>
              <p className="mt-2">
                Every recommendation stays in rotation only if the link works, the gameplay stays legal, and the skill transfer is obvious. Tap any card to open it in a clean new tab and watch for the compatibility tag we include in each tooltip.
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

      <script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeLdJson) }}
      />
    </>
  );
}
