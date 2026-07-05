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

const pageDescription =
  "Explore the Cowboy Safari animals list by biome, mount role, beginner priority, Sky Zoo value, and practical tips for safer lasso chains and upgrades.";

const animalGuides = [
  {
    title: "Fast answer: which Cowboy Safari animal should beginners chase first?",
    paragraphs: [
      "Start with the Buffalo, not the fastest mount. Buffalo gives beginners the most control time because it is stable, slow enough to read the next lane, and forgiving when the lasso throw is late. A fast Zebra looks exciting, but speed creates more decisions per second. If you are still learning dismount timing, a stable mount usually produces longer runs and steadier coin income.",
      "Use Horse for basic movement, Buffalo for safe practice, and Zebra only when you can already chain two mounts without touching the ground. That order teaches the actual Cowboy Safari loop: survive, read traffic, catch a better animal, then bring the captured animals back into your Sky Zoo economy.",
    ],
  },
  {
    title: "Plains animals: the training biome",
    paragraphs: [
      "The Plains biome is where most players should build confidence. Horse is balanced and makes route reading simple. Buffalo has the best beginner safety profile because it gives you time to charge the lasso and recover from a bad line. Zebra is the first real speed test. It can carry a run farther, but only if you stop overcorrecting and trust small steering inputs.",
      "Do not leave Plains just because you unlocked another biome. Plains animals fund the early Sky Zoo loop. A few clean Plains captures often produce more progress than a messy Jungle attempt where you crash before banking anything useful. Treat Plains as a repeatable practice route until your lasso release feels automatic.",
    ],
  },
  {
    title: "Jungle animals: crowd control and speed discipline",
    paragraphs: [
      "Jungle mounts ask for better spacing. Elephant is slow but helps you survive crowded routes, so use it when obstacles make small animals feel too twitchy. Ostrich is a speed route mount; it is strong when you can already read ahead. Giraffe gives a useful visual rhythm because its tall profile makes the next target easier to track during chaotic chains.",
      "The main Jungle mistake is treating every animal as a score push. If you catch an Elephant, use the stability to set up the next chain instead of forcing maximum distance. If you catch an Ostrich, stop making wide turns. Fast mounts punish dramatic steering. A short, clean adjustment usually beats a full correction after you have already drifted off line.",
    ],
  },
  {
    title: "Outback and Mountain animals: when to move up",
    paragraphs: [
      "Kangaroo and Camel are useful once you understand why route spacing matters. Kangaroo supports jump chaining and helps when gaps appear between safe targets. Camel is better for patient long-route play, especially after your Sky Zoo income can absorb a few failed attempts. Yak belongs later because ice or mountain-style routes punish players who are still unsure about buck timing.",
      "Move into these biomes when you can answer three questions during a run: what animal am I riding, what animal am I catching next, and where will I land if the throw misses? If any answer is unclear, return to Plains or Jungle. Cowboy Safari progression is less about rushing into the rarest zone and more about building repeatable routes that turn captured animals into upgrades.",
    ],
  },
  {
    title: "How animals connect to Sky Zoo upgrades",
    paragraphs: [
      "Captured animals matter because the Sky Zoo is the long-term income engine. Early on, capture variety is helpful, but stable repeat captures are more valuable than reckless rare hunting. A route that brings back common animals consistently can unlock habitat capacity and coin multipliers faster than a route that fails while chasing a rare mount.",
      "Use the animal list as a spending guide. If your captures are mostly Plains animals, upgrade Plains capacity before opening too many new slots. If you are regularly surviving Jungle chains, start preparing stamina and multiplier upgrades. If rare animals appear but you crash before banking them, the problem is not the animal list; it is usually control timing or route discipline.",
    ],
  },
];

const animalsFaq = [
  {
    question: "What is the best Cowboy Safari animal for beginners?",
    answer:
      "Buffalo is the safest beginner label because it is slower and gives players more time to aim. Use Horse for baseline movement, then move to Zebra only after lasso timing is stable.",
  },
  {
    question: "Are these Cowboy Safari animal names official?",
    answer:
      "Treat them as fan planning labels. The embedded source game remains authoritative for current names, spawn behavior, unlock order, and any official patch changes.",
  },
  {
    question: "How do animals affect Sky Zoo progress?",
    answer:
      "Stable repeat captures usually matter more than rare misses. Use common animals to fund capacity and income upgrades, then chase harder biome animals once your route is reliable.",
  },
];

const animalsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Cowboy Safari animals and mounts",
      itemListElement: animals.map((animal, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: animal.name,
        description: `${animal.biome}: ${animal.role}. ${animal.tip}`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: animalsFaq.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
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

          <div className="mt-12 space-y-6">
            {animalGuides.map((guide) => (
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
            <h2 className="text-2xl font-semibold text-[#1f140c]">Cowboy Safari animals FAQ</h2>
            <div className="mt-5 grid gap-4">
              {animalsFaq.map((faq) => (
                <article key={faq.question} className="rounded-2xl bg-[#fff8ef] p-4 text-sm leading-7 text-[#1f140c]/85">
                  <h3 className="text-base font-semibold text-[#1f140c]">{faq.question}</h3>
                  <p className="mt-2">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-[#1f140c]/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f140c]">Browse the full Cowboy Safari route plan</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Link href="/controls" className="rounded-2xl border border-[#1f140c]/10 bg-[#fff8ef] p-4 text-sm font-semibold text-[#1f140c]">Master lasso controls</Link>
              <Link href="/sky-zoo" className="rounded-2xl border border-[#1f140c]/10 bg-[#fff8ef] p-4 text-sm font-semibold text-[#1f140c]">Use animals for upgrades</Link>
              <Link href="/guides" className="rounded-2xl border border-[#1f140c]/10 bg-[#fff8ef] p-4 text-sm font-semibold text-[#1f140c]">Read strategy guides</Link>
            </div>
          </div>
        </div>
      </section>
      <script id="animals-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(animalsJsonLd) }} />
    </>
  );
}
