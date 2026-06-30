import type { Metadata } from "next";
import { RecommendationCard } from "@/components/recommendation-card";
import { TrackedEmailLink } from "@/components/tracked-email-link";
import { relatedGames } from "@/data/recommendations";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

const pageDescription =
  "Cowboy Safari guides for animal capture, resource loops, and score pushes with printable frameworks plus parent-friendly safety insights updated weekly.";

const guides = [
  {
    slug: "animal-tracking",
    title: "Cowboy Safari Animal Tracking Field Guide",
    focus: "Wildlife capture",
    readingTime: "6 min read",
    difficulty: "Intermediate",
    summary:
      "Prime your scanner, route stamina, and learn the exact chase windows that make herding legendary beasts consistent across biomes.",
    keyTakeaways: [
      "Use altitude pings every 12 seconds to refresh silhouettes",
      "Save a gadget slot for insulated bolas during scorch weather",
      "Chain calm whistles before tossing a lasso to avoid panic auras",
    ],
    body: [
      "Cowboy Safari begins each expedition with a wide-open plain, but the quickest hunters zoom their minimap to 40% scale so rare spoor glows brighter. Keep your thermal scanner pulsing every twelve seconds, because Cowboy Safari encodes fresh hoofprints with a faint cyan edge that fades in under twenty seconds. Add a low camera angle and you will visually separate the target herd from the background shimmer even when the sun blinds every other rider.",
      "Once you tag a lead beast, do not sprint blindly. Cowboy Safari herds love to double back across their old scent trail, so rotate ninety degrees, ping again, and only then trigger your gallop. Use insulated bolas whenever the weather ticker announces Wildfire minutes because the dots apply scorch stacks, and those stacks make frantic animals drop stamina orbs you can convert into bonus route time.",
      "As you enter the corral phase, glance at the aura meter that sits under the bounty timer. Cowboy Safari AI escalates panic when you spam the lasso, so chain two calm whistles first, strafe backward, then throw a single charged tether. That rhythm prevents red rage flares and keeps village NPCs happy enough to hand over route intel for your next capture loop.",
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
      "Treat the first ninety seconds as a combo bank, not a killfest",
      "Stack social boosts right before the canyon gauntlet",
      "Cut particle density to 70% so inputs stay stable at 120 FPS",
    ],
    body: [
      "High scores rarely come from raw aim; they come from pacing. Spend the opening ninety seconds of any Cowboy Safari marathon on setup: lasso a quick trio, slide between cover for the parkour bonus, and keep the multiplier above 2.4x before triggering any elite waves. Cowboy Safari hands out bonus XP when you perform two distinct traversal tricks within ten seconds, so memorize a wall-run into knee slide combo for every biome.",
      "During the canyon gauntlet, pause before the second choke point and equip a community boost. Cowboy Safari lets you trigger alliance buffs even in solo runs, and those buffs stack with the built-in streak meter. If you maintain 120 FPS by dropping particle density to 70%, your dodge input registers faster, which keeps the chain from resetting when sandstorm darts fly in.",
      "Finish the run by cashing out during extraction rather than earlier. Cowboy Safari multiplies your bonus by the number of rescued settlers and the amount of unused gadget energy left in your belt. That means you should hold one grappling hook and one audio decoy until the final thirty seconds, then deploy both while sprinting toward the balloon to push the payout past 4x.",
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
            Cowboy Safari guides curated by real riders, refreshed every Thursday.
          </h1>
          <p className="mt-4 text-base text-[#1f140c]/80">
            Each guide blends hands-on testing, leaderboard replay analysis, and parent-mode notes. Bookmark this hub whenever you need actionable Cowboy Safari advice without wading through cluttered aggregator feeds.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#1f140c]/70">
            <span className="rounded-full bg-white px-4 py-2 font-semibold">Updated {new Date(siteConfig.lastUpdatedISO).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            <span className="rounded-full bg-white px-4 py-2 font-semibold">4 evergreen routes</span>
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
