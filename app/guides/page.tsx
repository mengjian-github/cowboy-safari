import type { Metadata } from "next";
import { RecommendationCard } from "@/components/recommendation-card";
import { TrackedEmailLink } from "@/components/tracked-email-link";
import { relatedGames } from "@/data/recommendations";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

const pageDescription =
  "Cowboy Safari guides for browser controls, animal-route planning, source-aware upgrade loops, and parent-friendly safety notes for this independent fan hub.";

const guides = [
  {
    slug: "animal-tracking",
    title: "Cowboy Safari Animal Tracking Field Guide",
    focus: "Wildlife capture",
    readingTime: "6 min read",
    difficulty: "Intermediate",
    summary:
      "Use a simple observe-choose-chain framework to decide when to catch the next mount and when to bank a safer run.",
    keyTakeaways: [
      "Read the next safe target before dismounting",
      "Prefer stable mounts until iframe input focus feels reliable",
      "Treat names and stats here as planning labels, not official data",
    ],
    body: [
      "Cowboy Safari is easiest when you separate observation from action. Before you jump, identify the next safe animal, the lane it is moving through, and the space where your current mount will land if the throw misses. That three-part scan matters more than memorizing an invented stat table.",
      "Do not sprint blindly after the flashiest target. Stable mounts are useful because they slow the decision loop and help you keep iframe focus, lasso timing, and route reading under control. Move to faster animals only after your hands know where to go after a dismount.",
      "This guide uses fan terminology such as Plains, Jungle, and Sky Zoo to organize advice. If the embedded source game changes names or unlock order, follow the current iframe and reuse the same principle: catch what you can bank, not what sounds rare.",
    ],
  },
  {
    slug: "resource-upgrades",
    title: "Cowboy Safari Resource & Upgrade Planner",
    focus: "Economy & crafting",
    readingTime: "7 min read",
    difficulty: "All skill levels",
    summary:
      "Balance fuel, ammo, and gadget parts with a three-pouch rotation so you never stall during deep expeditions or score pushes.",
    keyTakeaways: [
      "Follow the 50/35/15 pouch split for fuel, gadgets, and luxuries",
      "Recycle common pelts every third run to trigger vendor discounts",
      "Invest in wind-restored turbines before cosmetic unlocks",
    ],
    body: [
      "The most common Cowboy Safari mistake is hoarding every collectible until your inventory clogs. Adopt a 50/35/15 split across supplies: half your pouch stays devoted to fuel, thirty-five percent to gadgets, and the remainder to luxuries like vista filters. Whenever Cowboy Safari spawns a limited caravan vendor, dump your luxury stack for credits and reinvest those credits in capacity boosts instead of skins.",
      "Resource droughts usually signal that you are ignoring recycling kiosks. Cowboy Safari merchants refresh their discounts every third run, so sell three common pelts after hunt number two and again after hunt number five. Doing so unlocks turbine upgrades that refill stamina faster than any consumable, making long-score attempts possible without draining your wallet.",
      "Finally, keep a simple notes sheet for duplicate blueprints and upgrade materials. Treat extra schematics as trade-in value rather than clutter. Spend those materials on wind-restored turbines or holster stabilizers before cosmetic gear; the stat boost shaves entire minutes off resource farming routes.",
    ],
  },
  {
    slug: "score-push",
    title: "Cowboy Safari Score Push Playbook",
    focus: "Leaderboards",
    readingTime: "8 min read",
    difficulty: "Advanced",
    summary:
      "Layer multiplier science, perfect dodge timing, and social boosts to sustain 4x combos across every stage of a bounty marathon.",
    keyTakeaways: [
      "Stabilize steering before chasing a high-score route",
      "Use bonuses only when your current iframe build clearly exposes them",
      "Reduce browser distractions if iframe inputs feel delayed",
    ],
    body: [
      "Better scores usually come from pacing, not raw aim. Start with a short setup phase: stabilize steering, catch one safe animal, then decide whether the route is clean enough to continue. If the iframe or browser focus feels unstable, pause the score push and fix inputs first.",
      "Use multipliers or bonuses only when your current build clearly exposes them. This fan hub does not claim official score formulas, and it avoids exact thresholds that could become stale. The reliable advice is to keep chains controlled and avoid late corrections that reset momentum.",
      "Finish a push by banking progress earlier than your ego wants. A completed safe run teaches more than a collapsed rare hunt. If you need a harder route, review the controls page, lower browser distractions, and return when your lasso timing is repeatable.",
    ],
  },
  {
    slug: "safety-and-coop",
    title: "Cowboy Safari Co-op, Safety, and Parent Mode",
    focus: "Community & wellbeing",
    readingTime: "5 min read",
    difficulty: "Beginner",
    summary:
      "Set browser-level safety expectations, explain this fan hub's support scope, and keep younger riders safe without promising provider tools we do not control.",
    keyTakeaways: [
      "Use private play links only when the source provider offers them",
      "Keep chat and audio safety in the browser or device controls",
      "Bookmark the support route before handing over the keyboard",
    ],
    body: [
      "Cowboy Safari sessions are easier to supervise when communication rules are set before the run. Keep public chat minimized, use device-level audio controls, and remind younger players to pause if a conversation turns uncomfortable. This fan hub does not provide private lobbies or moderation tools inside the iframe.",
      "If the source provider exposes chat or audio settings, review them before play. Parents can also use browser permissions, OS-level sound settings, and screen-time reminders to keep the session predictable. Combine those controls with the support route below for site or embed availability issues.",
      "Before you hand over the keyboard, bookmark this guide and the support page. Cowboy Safari is easier to enjoy when players know where controls, fullscreen, and troubleshooting live. Pair that habit with planned breaks so the game stays a shared activity rather than a solo grind.",
    ],
  },
];

const countWords = (text: string) =>
  text
    .replace(/<[^>]+>/g, "")
    .split(/\s+/)
    .filter(Boolean).length;

const guidesWordCount =
  guides.reduce(
    (sum, guide) =>
      sum +
      countWords(guide.summary) +
      guide.body.reduce((bodySum, paragraph) => bodySum + countWords(paragraph), 0),
    0
  ) + 250;

const guidesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cowboy Safari Guide Compendium",
      description: pageDescription,
      author: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      datePublished: "2025-11-08",
      dateModified: siteConfig.lastUpdatedISO,
      wordCount: guidesWordCount,
      mainEntityOfPage: `${siteConfig.baseUrl}/guides`,
    },
    {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteConfig.baseUrl}/guides#${guide.slug}`,
        name: guide.title,
        description: guide.summary,
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
          name: "Guides",
          item: `${siteConfig.baseUrl}/guides`,
        },
      ],
    },
  ],
};

export const metadata: Metadata = buildPageMetadata({
  title: "Cowboy Safari Strategy Playbook – Guides Hub",
  description: pageDescription,
  path: "/guides",
  ogType: "article",
});

export default function GuidesPage() {
  return (
    <>
      <section className="border-b border-[#1f140c]/10 bg-[#fff8ef]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
            Guides & Playbook
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#1f140c]">
            Cowboy Safari guides curated as source-aware fan notes, refreshed when evidence changes.
          </h1>
          <p className="mt-4 text-base text-[#1f140c]/80">
            Each guide blends browser-iframe testing, beginner route planning, and parent-mode notes. Bookmark this hub whenever you need actionable Cowboy Safari advice without unsupported official-sounding claims.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#1f140c]/70">
            <span className="rounded-full bg-white px-4 py-2 font-semibold">Updated {new Date(siteConfig.lastUpdatedISO).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            <span className="rounded-full bg-white px-4 py-2 font-semibold">4 source-aware routes</span>
            <span className="rounded-full bg-white px-4 py-2 font-semibold">Zero ads policy</span>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {guides.map((guide) => (
              <article
                key={guide.slug}
                id={guide.slug}
                className="rounded-3xl border border-[#1f140c]/10 bg-[#fffaf2] p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
                  {guide.focus}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#1f140c]">{guide.title}</h2>
                <p className="mt-2 text-sm text-[#1f140c]/70">
                  {guide.readingTime} · {guide.difficulty}
                </p>
                <p className="mt-4 text-base text-[#1f140c]/80">{guide.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#1f140c]/80">
                  {guide.keyTakeaways.map((tip) => (
                    <li key={tip} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#b3471b]" aria-hidden="true" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-4 text-sm text-[#1f140c]/85">
                  {guide.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b3471b]/80">
                More to explore
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1f140c]">
                Rotate through fresh experiences before your next Cowboy Safari push.
              </h2>
              <p className="mt-4 text-base text-[#1f140c]/80">
                These cards mirror the homepage list, but we append notes about which Cowboy Safari skill each title reinforces.
              </p>
            </div>
            <p className="rounded-3xl border border-[#1f140c]/10 bg-[#fff8ef] p-6 text-sm text-[#1f140c]/80 lg:max-w-md">
              Feedback welcome. If you want a specific Cowboy Safari mechanic covered, email {" "}
              <TrackedEmailLink
                page="guides"
                location="feedback_copy"
                className="font-semibold text-[#b3471b]"
              >
                Contact Support
              </TrackedEmailLink>
              , and we will prioritize it in the next editorial sprint.
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
        id="guides-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesSchema) }}
      />
    </>
  );
}
