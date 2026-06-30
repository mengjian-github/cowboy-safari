import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

const upgrades = [
  { stage: "1", title: "Habitat capacity", reason: "More animals create the first reliable coin loop.", action: "Upgrade Plains capacity before chasing rare spawns." },
  { stage: "2", title: "Coin multiplier", reason: "Multiplier upgrades shorten the grind between runs.", action: "Buy multiplier boosts once capacity starts paying back." },
  { stage: "3", title: "Run stamina", reason: "Longer runs unlock better animal chains and route learning.", action: "Add stamina after you can chain three mounts consistently." },
  { stage: "4", title: "New habitat slots", reason: "Slots expand the zoo only after base income is stable.", action: "Open new habitats when earlier zones already fund upgrades." },
];

const pageDescription = "Cowboy Safari Sky Zoo upgrade guide with capacity, coin multiplier, stamina, and habitat slot priorities for new players.";

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
            Start with income stability, then push into longer runs. This page turns the homepage advice into a focused upgrade path so new players know what to buy before chasing rare animals.
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
        </div>
      </section>
      <script id="sky-zoo-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(skyZooJsonLd) }} />
    </>
  );
}
