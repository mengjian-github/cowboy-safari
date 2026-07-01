import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

const upgrades = [
  { stage: "1", title: "Stable captures", reason: "Reliable animals create the first repeatable loop.", action: "Practice safer routes before chasing rare or late-run targets." },
  { stage: "2", title: "Capacity-style upgrades", reason: "Capacity turns routine captures into useful progress.", action: "Prioritize whatever your current build uses to hold or reward more animals." },
  { stage: "3", title: "Income or stamina boosts", reason: "Boosts help only after your capture loop works.", action: "Add multipliers or stamina when they clearly improve your repeatable route." },
  { stage: "4", title: "New slots or zones", reason: "Expansion is best after base progress is stable.", action: "Open new paths when earlier routes already fund your next attempts." },
];

const pageDescription =
  "Use this Cowboy Safari Sky Zoo planning guide to prioritize stable captures, capacity-style upgrades, income or stamina boosts, and safer expansion routes.";

const upgradeGuides = [
  {
    title: "Fast answer: the best Sky Zoo upgrade order",
    paragraphs: [
      "Start with stable captures, then capacity-style upgrades, then income or stamina boosts, and only then expand into new slots or harder routes. That order avoids pretending this fan hub knows every current economy value while still giving beginners a reliable decision model.",
      "The common beginner mistake is buying the most exciting visible upgrade instead of the upgrade that improves the next ten runs. A small, repeatable improvement can beat a flashy new slot that sits underfilled because you cannot yet capture enough animals to support it.",
    ],
  },
  {
    title: "Stage 1: stabilize income with capacity",
    paragraphs: [
      "Habitat capacity should be your first priority because early runs are inconsistent. You may crash, miss a rare animal, or leave a biome before the perfect capture appears. Capacity protects you from that variance by making normal captures matter. If your Plains habitat fills too quickly, every extra Horse or Buffalo capture loses economic value. Capacity keeps routine runs useful.",
      "Use the Plains biome until the first capacity upgrade feels paid back. You do not need perfect rare spawns for this stage. You need predictable captures, a simple route, and enough coin flow to stop every purchase from feeling like a reset. Once the base habitat can hold a healthy batch of animals, the rest of the upgrade path becomes easier to fund.",
    ],
  },
  {
    title: "Stage 2: buy multipliers after capacity has volume",
    paragraphs: [
      "Coin multipliers work best when there is already enough animal volume behind them. Buying a multiplier too early can feel disappointing because it multiplies a tiny base. Buying it after capacity gives each run a stronger payoff. This is the first point where Sky Zoo starts to feel like a real engine instead of a side menu.",
      "A practical checkpoint: if you can finish several Plains runs and one Jungle attempt without running out of coin options, start funding multipliers. If you still feel stuck after every crash, stay with capacity and safer animals. Multipliers should accelerate a working loop, not rescue a loop that has not started yet.",
    ],
  },
  {
    title: "Stage 3: add stamina when your controls justify it",
    paragraphs: [
      "Run stamina is powerful, but only after your controls are stable. Extra stamina gives skilled players more time to chain mounts, reach distant animals, and recover from rough traffic. For beginners who still miss basic throws, stamina simply extends a chaotic route. Before buying it heavily, confirm that you can chain three mounts in a run and choose your next animal before dismounting.",
      "Once you meet that benchmark, stamina becomes the bridge between common captures and rare-animal routes. Longer runs increase the number of meaningful decisions you can make before banking. Combine stamina with steady multipliers and the Sky Zoo starts funding deeper biome attempts without forcing reckless play.",
    ],
  },
  {
    title: "Stage 4: open new slots without spreading too thin",
    paragraphs: [
      "New habitat slots are exciting because they suggest new animals and new biomes, but opening too many slots early can dilute your progress. A half-upgraded zoo with many weak habitats earns less than a focused zoo with reliable capacity and multipliers. Add slots when your existing habitats already create enough income to support the next biome.",
      "Think of each slot as a commitment. If you open an Outback or Mountain path, you also need the controls, animal knowledge, and stamina to capture there consistently. If those pieces are missing, keep upgrading the earlier loop. The best Cowboy Safari Sky Zoo plan is not the fastest-looking plan; it is the plan that keeps every run funding the next one.",
    ],
  },
];

const skyZooJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cowboy Safari Sky Zoo upgrade order",
  description: pageDescription,
  step: upgrades.map((upgrade) => ({
    "@type": "HowToStep",
    position: Number(upgrade.stage),
    name: upgrade.title,
    text: `${upgrade.reason} ${upgrade.action}`,
  })),
};

export const metadata: Metadata = buildPageMetadata({
  title: "Cowboy Safari Sky Zoo Upgrade Guide",
  description: pageDescription,
  path: "/sky-zoo",
});

export default function SkyZooPage() {
  return (
    <>
      <section className="bg-[#fff8ef]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b3471b]/80">Sky Zoo</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#1f140c]">Cowboy Safari Sky Zoo upgrade order.</h1>
          <p className="mt-4 max-w-3xl text-base text-[#1f140c]/80">
            Start with route stability, then push into longer runs. This page turns the homepage advice into a source-aware upgrade model so new players know what to improve before chasing rare animals.
          </p>
          <ol className="mt-10 space-y-5">
            {upgrades.map((upgrade) => (
              <li key={upgrade.stage} className="rounded-3xl border border-[#1f140c]/10 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#b3471b] text-lg font-semibold text-white">{upgrade.stage}</span>
                  <div>
                    <h2 className="text-2xl font-semibold text-[#1f140c]">{upgrade.title}</h2>
                    <p className="mt-2 text-sm text-[#1f140c]/80">{upgrade.reason}</p>
                    <p className="mt-2 text-sm font-semibold text-[#1f140c]">Action: {upgrade.action}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/animals" className="rounded-full border border-[#1f140c]/15 px-5 py-3 text-sm font-semibold text-[#1f140c]">Compare animals</Link>
            <Link href="/#play" className="rounded-full bg-[#b3471b] px-5 py-3 text-sm font-semibold text-white">Play and test the route</Link>
          </div>

          <div className="mt-12 space-y-6">
            {upgradeGuides.map((guide) => (
              <article key={guide.title} className="rounded-3xl border border-[#1f140c]/10 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-[#1f140c]">{guide.title}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-[#1f140c]/85">
                  {guide.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#1f140c]/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f140c]">Plan the next Cowboy Safari run</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Link href="/controls" className="rounded-2xl border border-[#1f140c]/10 bg-[#fff8ef] p-4 text-sm font-semibold text-[#1f140c]">Improve route controls</Link>
              <Link href="/animals" className="rounded-2xl border border-[#1f140c]/10 bg-[#fff8ef] p-4 text-sm font-semibold text-[#1f140c]">Choose stable mounts</Link>
              <Link href="/guides" className="rounded-2xl border border-[#1f140c]/10 bg-[#fff8ef] p-4 text-sm font-semibold text-[#1f140c]">Read beginner strategy</Link>
            </div>
          </div>
        </div>
      </section>
      <script id="sky-zoo-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(skyZooJsonLd) }} />
    </>
  );
}
