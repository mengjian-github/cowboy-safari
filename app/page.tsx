import type { Metadata } from "next";
import { HeroPlayPanel } from "@/components/hero-play-panel";
import { RecommendationCard } from "@/components/recommendation-card";
import { relatedGames } from "@/data/recommendations";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

const homeDescription =
  "Play Cowboy Safari online free on desktop or mobile. Instant iframe play with controls, animals, Sky Zoo upgrades, missions, and beginner routes.";


const editorialSections = [
  {
    eyebrow: "Game Overview",
    title: "What is this game?",
    paragraphs: [
      "This is a fast-paced lasso-and-ride game set in a sprawling frontier. You jump from mount to mount, tame exotic animals, and build your own floating Sky Zoo. Each run mixes reflex-based dodging with light resource decisions: do you push deeper for a rare creature, or bank early coins for a stable upgrade?",
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
      "Every biome hides different species. Plains start with horses and buffalo, but deeper zones unlock elephants, giraffes, and even mythical creatures. Each animal has a speed, stamina, and buckiness rating. Faster mounts help you escape stampedes; calmer ones let you line up perfect lasso chains.",
      "Captured animals go to your Sky Zoo, where you earn coins from visitors. Upgrade habitats to boost coin yield, and expand your zoo to unlock new biomes. The upgrade loop is the long-term engine: better habitats = more coins = longer runs = rarer animals.",
    ],
  },
  {
    eyebrow: "Missions & Progression",
    title: "Daily goals and long-term unlocks",
    paragraphs: [
      "The game hands out daily missions—ride three new species, survive 1,000 meters in one run, or lasso five predators without getting thrown. Completing them earns bonus coins and occasional cosmetic tokens. Missions are the safest way to learn new biomes without risking your high-score attempt.",
      "Long-term progression is driven by zoo level. Each level unlocks a new habitat slot, a coin multiplier, or a permanent stamina boost. If you are stuck on a biome, return to earlier zones and upgrade your habitats instead of forcing harder runs. The math favors steady upgrades over risky pushes.",
    ],
  },
];

const foldSections = [
  {
    title: "Beginner route",
    kicker: "First 10 runs",
    content: [
      "Start in the Plains biome. Your first goal is not distance; it is learning the lasso timing. Ride the starting horse for about 200 meters, then lasso the first buffalo you see. Buffalo are slow but stable, giving you time to practice the throw-and-hold mechanic without getting bucked.",
      "After three runs, switch to the Jungle biome. The animals are faster, but the trees act as natural speed brakes. Use them to learn how to dismount mid-run and chain to a new mount. Once you can chain three animals in a single run without touching the ground, you are ready for the harder zones.",
    ],
  },
  {
    title: "Animals & mounts",
    kicker: "Species by biome",
    content: [
      "Plains: Horse (starter, balanced), Buffalo (slow, high stamina), Zebra (fast, bucks quickly). Jungle: Elephant (very slow, invincible to small obstacles), Ostrich (fast, ignores water), Giraffe (tall, sees over crowds).",
      "Outback: Kangaroo (double-jump), Camel (long water stamina), Wombat (rolls through rocks). Mountains: Yak (ice-proof), Eagle (flies over gaps), Yeti (crushes everything, but rare). Each animal changes your route strategy, so collect them all for the Sky Zoo.",
    ],
  },
  {
    title: "Coins & zoo upgrades",
    kicker: "Economy loop",
    content: [
      "Coins come from two sources: run distance and zoo visitors. Early on, runs are your main income. After you unlock the Sky Zoo, visitors become the passive engine. Prioritize habitat upgrades that increase visitor capacity before cosmetic decorations.",
      "The best upgrade order is: 1) Habitat capacity, 2) Coin multiplier, 3) Run stamina boost, 4) New habitat slots. Decorations are last—they look nice but do not affect gameplay. Save your first 5,000 coins for the Plains habitat upgrade; it pays for itself in about six runs.",
    ],
  },
  {
    title: "Common mistakes",
    kicker: "What not to do",
    content: [
      "Mistake 1: Holding the lasso too long on small animals. Small animals buck faster; tap the button instead of holding it. Mistake 2: Ignoring the zoo. A level-1 zoo gives almost no coins, so you feel broke after the first hour. Upgrade early.",
      "Mistake 3: Always chasing rare animals. Rare spawns are random; forcing deep runs just to find one wastes stamina and usually ends in a crash. Instead, farm the biome you know best, upgrade your zoo, and let the rare animals come naturally through higher-level habitats.",
    ],
  },
  {
    title: "Similar games decision guide",
    kicker: "If you like Cowboy Safari, try these",
    content: [
      "Rodeo Stampede: Sky Zoo is the closest match. Same lasso mechanic, same zoo-building loop, but mobile-native and with more micro-transactions. Choose it if you want offline play and daily login rewards.",
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
      "Captured animals go to your Sky Zoo. Tap the zoo icon between runs, then spend coins on habitat upgrades. Priority order: habitat capacity → coin multiplier → stamina boost → new habitat slots.",
  },
  {
    question: "Which animal is best for beginners?",
    answer:
      "The Buffalo in the Plains biome. It is slow, has high stamina, and rarely bucks. Use it to practice lasso timing before switching to faster animals like the Zebra or Ostrich.",
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
    version: "v1.4.0 – Sky Zoo Expansion",
    date: "2025-11-05",
    notes:
      "Adds the Mountain biome with three new animals: Yak, Eagle, and the rare Yeti. Sky Zoo habitats now support level 5 upgrades, and a new coin multiplier perk is available at zoo level 12.",
  },
  {
    version: "v1.3.2 – Outback Update",
    date: "2025-10-22",
    notes:
      "Introduces the Outback biome with Kangaroo, Camel, and Wombat. New water-terrain mechanics mean some animals ignore shallow rivers, changing optimal routes for speedruns.",
  },
  {
    version: "v1.3.0 – Mission System",
    date: "2025-09-17",
    notes:
      "Daily and weekly missions are now live. Complete them for bonus coins and cosmetic tokens. Missions rotate at 00:00 UTC and scale difficulty based on your highest zoo level.",
  },
  {
    version: "v1.2.0 – Jungle Biome",
    date: "2025-07-30",
    notes:
      "The Jungle biome opens with Elephant, Ostrich, and Giraffe. Tree density creates natural choke points, making dismount-and-chain techniques essential for high scores.",
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
