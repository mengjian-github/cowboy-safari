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

const pageDescription = "Cowboy Safari controls guide for desktop and mobile: steering, jumping, lasso timing, fullscreen, and beginner input tips.";

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
        </div>
      </section>
      <script id="controls-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(controlsJsonLd) }} />
    </>
  );
}
