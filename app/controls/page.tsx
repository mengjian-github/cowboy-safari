import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

const controls = [
  { action: "Steer", desktop: "WASD or Arrow Keys", mobile: "Tap left / right", note: "Use short inputs when animals bunch up." },
  { action: "Jump / Dismount", desktop: "Space", mobile: "Swipe up", note: "Dismount early to chain the next ride." },
  { action: "Aim lasso", desktop: "Mouse move", mobile: "Drag toward target", note: "Lead fast animals before releasing." },
  { action: "Throw lasso", desktop: "Click or hold", mobile: "Tap-and-hold, then release", note: "Small animals need quick throws; large animals need charge time." },
  { action: "Fullscreen", desktop: "Hero fullscreen button or F11", mobile: "Rotate landscape, then use browser controls", note: "Fullscreen works best after the iframe finishes loading." },
];

const pageDescription =
  "Learn Cowboy Safari controls for desktop and mobile with lasso timing, fullscreen setup, input fixes, route drills, and beginner-safe ride chaining tips.";

const controlLessons = [
  {
    title: "Fast answer: the safest control setup",
    paragraphs: [
      "On desktop, start with WASD or Arrow Keys for steering, Space for jump or dismount, and the mouse for lasso aim. Keep your cursor slightly ahead of the animal instead of directly on top of it. Cowboy Safari rewards early reading more than late correction, so the best first habit is steering with small taps while your aim hand prepares the next throw.",
      "On mobile, use short left and right taps, then tap-and-hold only long enough to line up the rope. Long presses feel powerful but often make beginners miss small animals because the target has already bucked or crossed the path. If you only remember one rule, make it this: quick steering, calm aim, release before the animal starts its sharp dodge.",
    ],
  },
  {
    title: "Lasso timing by animal size",
    paragraphs: [
      "Small animals need fast throws. Horses, zebras, and ostriches usually punish over-aiming because their buck windows arrive quickly. For these mounts, tap the lasso, aim slightly ahead, and accept a shorter charge. Big animals such as buffalo, elephants, and yaks give you more time, so holding the button a little longer can produce a cleaner catch without making the ride unstable.",
      "Do not treat the lasso like a single universal button. The control is closer to a rhythm tool: quick tap for fast or nervous targets, measured hold for heavy targets, and emergency release when traffic closes in. When a route gets crowded, prioritize a safe mount over a rare mount. Staying alive for another chain usually earns more coins than forcing one risky throw.",
    ],
  },
  {
    title: "Dismount and chain rides without panic",
    paragraphs: [
      "The jump or dismount input is the control that separates short runs from useful runs. Press Space or swipe up before your current animal is fully out of stamina. Waiting until the last possible second leaves no room to aim. A better pattern is ride, scan, dismount early, then aim while you are still airborne. The next animal should already be selected before your feet touch the path.",
      "Practice three-mount chains in the Plains biome before moving into harder areas. The goal is not a record distance; the goal is learning where your hands go after the first jump. If you can chain horse to buffalo to zebra without losing direction, Jungle and Outback routes become much less chaotic because you already know the control sequence under pressure.",
    ],
  },
  {
    title: "Fullscreen, browser focus, and input fixes",
    paragraphs: [
      "Fullscreen is optional, but it helps if your browser chrome hides too much of the iframe. Click the fullscreen button after the Cowboy Safari iframe has loaded, or use F11 on desktop. If keyboard input does not respond, click once inside the game frame, wait a second, and try again. Browser games often need focus before they accept movement keys.",
      "If mobile controls feel delayed, rotate to landscape, close extra tabs, and avoid aggressive battery-saver modes while playing. If desktop keys scroll the page instead of moving the mount, the iframe has probably lost focus. Click the play area again rather than refreshing immediately. Refreshing can restart the run, while refocusing usually preserves the current browser session.",
    ],
  },
  {
    title: "Beginner drills before chasing rare animals",
    paragraphs: [
      "Run one: steer only and avoid obstacles for 200 meters. Run two: catch the first safe animal even if it is not rare. Run three: dismount early and chain one new mount. Run four: open fullscreen and repeat the same route. These drills sound simple, but they remove the biggest beginner mistake: trying to learn steering, lasso charge, dismount timing, and rare-spawn hunting all at once.",
      "After the fourth run, review the animals and Sky Zoo pages before spending coins. Controls and upgrades are connected. A player with calm inputs can benefit from stamina upgrades; a player still missing basic throws gets more value from habitat income and practice routes. Use this controls page as the mechanical baseline, then move to strategy once the inputs feel automatic.",
    ],
  },
];

const controlsJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cowboy Safari Controls",
  description: pageDescription,
  step: controls.map((item, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: item.action,
    text: `${item.desktop} on desktop. ${item.mobile} on mobile. ${item.note}`,
  })),
};

export const metadata: Metadata = buildPageMetadata({
  title: "Cowboy Safari Controls | Desktop & Mobile Guide",
  description: pageDescription,
  path: "/controls",
});

export default function ControlsPage() {
  return (
    <>
      <section className="bg-[#fff8ef]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b3471b]/80">Controls</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#1f140c]">Cowboy Safari controls for desktop and mobile.</h1>
          <p className="mt-4 max-w-3xl text-base text-[#1f140c]/80">
            Use this quick reference before you press Play. The iframe runs from azgames.io, so this guide focuses on safe browser inputs, fullscreen handling, and lasso timing instead of pretending to change the source game.
          </p>
          <div className="mt-8 grid gap-4">
            {controls.map((item) => (
              <article key={item.action} className="rounded-3xl border border-[#1f140c]/10 bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-semibold text-[#1f140c]">{item.action}</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <p className="rounded-2xl bg-[#fff8ef] p-4 text-sm"><strong>Desktop:</strong> {item.desktop}</p>
                  <p className="rounded-2xl bg-[#fff8ef] p-4 text-sm"><strong>Mobile:</strong> {item.mobile}</p>
                  <p className="rounded-2xl bg-[#fff8ef] p-4 text-sm"><strong>Tip:</strong> {item.note}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/#play" className="mt-8 inline-flex rounded-full bg-[#b3471b] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b3471b]/25">
            Play Cowboy Safari now
          </Link>

          <div className="mt-12 space-y-6">
            {controlLessons.map((lesson) => (
              <article key={lesson.title} className="rounded-3xl border border-[#1f140c]/10 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-[#1f140c]">{lesson.title}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-[#1f140c]/85">
                  {lesson.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#1f140c]/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f140c]">Next steps after controls feel stable</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Link href="/animals" className="rounded-2xl border border-[#1f140c]/10 bg-[#fff8ef] p-4 text-sm font-semibold text-[#1f140c]">Compare animals by biome</Link>
              <Link href="/sky-zoo" className="rounded-2xl border border-[#1f140c]/10 bg-[#fff8ef] p-4 text-sm font-semibold text-[#1f140c]">Plan Sky Zoo upgrades</Link>
              <Link href="/guides" className="rounded-2xl border border-[#1f140c]/10 bg-[#fff8ef] p-4 text-sm font-semibold text-[#1f140c]">Read full beginner guides</Link>
            </div>
          </div>
        </div>
      </section>
      <script id="controls-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(controlsJsonLd) }} />
    </>
  );
}
