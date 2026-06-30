import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

const animals = [
  { name: "Horse", biome: "Plains", role: "Starter mount", tip: "Balanced speed and stamina. Use it to learn lasso timing." },
  { name: "Buffalo", biome: "Plains", role: "Beginner-safe mount", tip: "Slow but stable, useful for practicing long throws." },
  { name: "Zebra", biome: "Plains", role: "Fast runner", tip: "Great for distance once you can handle quicker buck timing." },
  { name: "Elephant", biome: "Jungle", role: "Obstacle control", tip: "Slow, sturdy, and forgiving when the path gets crowded." },
  { name: "Ostrich", biome: "Jungle", role: "Speed route", tip: "Fast turns make it strong for score pushes after early upgrades." },
  { name: "Giraffe", biome: "Jungle", role: "Vision helper", tip: "Tall profile helps you read the next target before dismounting." },
  { name: "Kangaroo", biome: "Outback", role: "Jump chaining", tip: "Use it when route spacing demands extra aerial control." },
  { name: "Camel", biome: "Outback", role: "Long route mount", tip: "Pairs well with patient coin farming and habitat upgrades." },
  { name: "Yak", biome: "Mountains", role: "Ice route anchor", tip: "Best saved for later biomes after you understand buck timing." },
];

const pageDescription = "Cowboy Safari animals list with biome, role, and practical mount tips for beginners chasing Sky Zoo upgrades.";

const animalsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Cowboy Safari animals and mounts",
  itemListElement: animals.map((animal, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: animal.name,
    description: `${animal.biome}: ${animal.role}. ${animal.tip}`,
  })),
};

export const metadata: Metadata = buildPageMetadata({
  title: "Cowboy Safari Animals List | Mounts by Biome",
  description: pageDescription,
  path: "/animals",
});

export default function AnimalsPage() {
  return (
    <>
      <section className="bg-[#fff8ef]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b3471b]/80">Animals & Mounts</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#1f140c]">Cowboy Safari animals by biome and role.</h1>
          <p className="mt-4 max-w-3xl text-base text-[#1f140c]/80">
            This list gives players a fast, answer-first view of which mounts to chase, when to switch, and how each animal supports your Sky Zoo route. Exact spawn behavior remains with the source game provider.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {animals.map((animal) => (
              <article key={animal.name} className="rounded-3xl border border-[#1f140c]/10 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b3471b]/80">{animal.biome}</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#1f140c]">{animal.name}</h2>
                <p className="mt-2 text-sm font-semibold text-[#1f140c]/75">{animal.role}</p>
                <p className="mt-3 text-sm text-[#1f140c]/80">{animal.tip}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/controls" className="rounded-full border border-[#1f140c]/15 px-5 py-3 text-sm font-semibold text-[#1f140c]">Read controls</Link>
            <Link href="/sky-zoo" className="rounded-full bg-[#b3471b] px-5 py-3 text-sm font-semibold text-white">Plan Sky Zoo upgrades</Link>
          </div>
        </div>
      </section>
      <script id="animals-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(animalsJsonLd) }} />
    </>
  );
}
