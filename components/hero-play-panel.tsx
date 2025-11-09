"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

const controlMappings = [
  { action: "Move / Strafe", input: "WASD or Left Stick", note: "Hold Shift for gallop" },
  { action: "Primary Lasso", input: "Mouse Click / RT", note: "Tap to tag, hold to chain" },
  { action: "Dodge Roll", input: "Space or B", note: "i-frames 0.8s" },
  { action: "Gadget Wheel", input: "Q or LB", note: "Rebind in pause menu" },
];

const infoPills = [
  { label: "Build", value: siteConfig.version },
  { label: "Last Updated (UTC)", value: new Date(siteConfig.lastUpdatedISO).toUTCString() },
  { label: "Iframe Source", value: "azgames.io" },
  { label: "Contact", value: siteConfig.contactEmail, href: `mailto:${siteConfig.contactEmail}` },
];

const downloadCards = [
  {
    platform: "Android",
    name: "West Cowboy Rodeo Rider Safari",
    url: siteConfig.downloads.android,
    summary: "Play as a western cowboy rodeo and lasso exotic animals while the challenge ramps up each stage.",
    meta: "Google Play · 3.8★ · 400+ reviews",
    gradient: "linear-gradient(135deg, #fbd8b4, #f38a5d)",
  },
  {
    platform: "iOS",
    name: "Rodeo Stampede: Sky Zoo Safari",
    url: siteConfig.downloads.ios,
    summary: "Ride buffalo, elephants, and sky beasts to chase high scores in a polished Apple Arcade-friendly classic.",
    meta: "App Store · 4.7★ · Editor’s Choice",
    gradient: "linear-gradient(135deg, #f9f1d2, #f0c56d)",
  },
];

export function HeroPlayPanel() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [controlsOpen, setControlsOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [hasTrackedView, setHasTrackedView] = useState(false);

  useEffect(() => {
    const iframeEl = iframeRef.current;
    if (!iframeEl || hasTrackedView) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedView) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "iframe_view",
              game: siteConfig.shortName,
            });
            setHasTrackedView(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(iframeEl);
    return () => observer.disconnect();
  }, [hasTrackedView]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const handleFullscreen = () => {
    const node = iframeRef.current;
    if (!node) return;

    const requestFullscreen =
      node.requestFullscreen ||
      // @ts-expect-error vendor prefixed
      node.webkitRequestFullscreen ||
      // @ts-expect-error vendor prefixed
      node.mozRequestFullScreen;

    if (requestFullscreen) {
      requestFullscreen.call(node);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cta_click",
        cta: "fullscreen",
      });
    } else {
      setToast("Your browser blocked fullscreen. Try manual controls (F11).");
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: siteConfig.name,
      text: "Jump into Cowboy Safari instantly with me.",
      url: siteConfig.baseUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(siteConfig.baseUrl);
        setToast("Link copied for you.");
      } else {
        setToast("Copy this link manually: " + siteConfig.baseUrl);
      }
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "cta_click", cta: "share" });
    } catch {
      setToast("Sharing was canceled.");
    }
  };

  return (
    <section id="play" className="relative overflow-hidden bg-transparent lg:min-h-[100vh]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr),320px] lg:px-8">
        <div className="space-y-4">
          <div className="relative rounded-[32px] border border-[#1f140c]/15 bg-white/90 p-4 shadow-2xl backdrop-blur" aria-live="polite">
            <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/10" aria-hidden="true" />
            <iframe
              ref={iframeRef}
              id="cowboy-safari-iframe"
              title="Play Cowboy Safari online"
              src={siteConfig.iframeSrc}
              loading="lazy"
              allowFullScreen
              className="h-[680px] w-full rounded-[24px] border-0 bg-black"
            />
            <div className="absolute bottom-6 right-6 flex flex-col items-center gap-3">
              <button
                onClick={handleShare}
                aria-label="Share Cowboy Safari session"
                className="rounded-full border border-white/40 bg-[#b3471b]/90 p-3 text-white shadow-lg transition hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="6" cy="12" r="2.5" />
                  <circle cx="18" cy="5" r="2.5" />
                  <circle cx="18" cy="19" r="2.5" />
                  <path d="M8.2 11l6.2-4.2" />
                  <path d="M8.2 13l6.2 4.2" />
                </svg>
              </button>
              <button
                onClick={handleFullscreen}
                aria-label="Fullscreen the Cowboy Safari iframe"
                className="rounded-full border border-white/50 bg-[#1f140c]/90 p-4 text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#1f140c]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 9V4h5" />
                  <path d="M20 9V4h-5" />
                  <path d="M4 15v5h5" />
                  <path d="M20 15v5h-5" />
                </svg>
              </button>
            </div>
            <p className="mt-3 text-xs text-[#1f140c]/60">
              The Cowboy Safari desktop build streams directly from azgames.io via secure HTTPS. No overlays, no intrusive ads—just the pure game feed.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-[28px] border border-[#1f140c]/10 bg-white/80 p-6 shadow-xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b3471b]/80">
              Zero-Delay Lobby
            </p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight text-[#1f140c]">
              Cowboy Safari instant play with fullscreen, control tips, and trustworthy uptime data.
            </h1>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => setControlsOpen((prev) => !prev)}
              className="rounded-2xl border border-[#1f140c]/15 px-4 py-3 text-sm font-semibold text-[#1f140c] transition hover:border-[#b3471b] hover:text-[#b3471b]"
            >
              Toggle Controls Panel
            </button>
            <a
              href="/guides"
              className="rounded-2xl border border-transparent bg-[#1f140c] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-black"
            >
              Browse Guides
            </a>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="rounded-2xl border border-[#1f140c]/15 px-4 py-3 text-center text-sm font-semibold text-[#1f140c] transition hover:border-[#b3471b] hover:text-[#b3471b]"
            >
              Email Support
            </a>
            <a
              href="/support"
              className="rounded-2xl border border-[#1f140c]/15 px-4 py-3 text-center text-sm font-semibold text-[#1f140c] transition hover:border-[#b3471b] hover:text-[#b3471b]"
            >
              Check Uptime Feed
            </a>
          </div>
          {controlsOpen && (
            <div className="rounded-2xl border border-[#1f140c]/10 bg-[#fff8ef] p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#1f140c]">Controller & keyboard layout</p>
                <button
                  className="text-xs font-semibold uppercase tracking-wide text-[#b3471b]"
                  onClick={() => setControlsOpen(false)}
                >
                  Close
                </button>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-[#1f140c]/80">
                {controlMappings.map((mapping) => (
                  <li key={mapping.action} className="rounded-xl bg-white/70 px-3 py-2">
                    <div className="font-semibold text-[#1f140c]">{mapping.action}</div>
                    <p>{mapping.input}</p>
                    <p className="text-xs uppercase tracking-wide text-[#b3471b]">{mapping.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            {downloadCards.map((card) => (
              <a
                key={card.platform}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-[#1f140c]/10 bg-white/90 p-4 text-left shadow-sm"
              >
                <div
                  className="h-24 w-full rounded-2xl"
                  style={{ backgroundImage: card.gradient }}
                  aria-hidden="true"
                />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b3471b]/70">
                  {card.platform}
                </p>
                <p className="mt-1 text-lg font-semibold text-[#1f140c]">{card.name}</p>
                <p className="mt-1 text-sm text-[#1f140c]/80">{card.summary}</p>
                <p className="mt-2 text-xs font-semibold text-[#1f140c]/60">{card.meta}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#b3471b]">
                  Open store page
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {infoPills.map((pill) => (
              <div key={pill.label} className="rounded-2xl border border-[#1f140c]/10 bg-[#fffaf2] px-4 py-3 text-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b3471b]/80">
                  {pill.label}
                </p>
                {pill.href ? (
                  <a
                    href={pill.href}
                    className="mt-1 inline-flex font-semibold text-[#b3471b] underline-offset-4 hover:underline"
                  >
                    {pill.value}
                  </a>
                ) : (
                  <p className="mt-1 font-semibold text-[#1f140c]">{pill.value}</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-[#1f140c]/80">
            Cowboy Safari Fan Hub is operated by players, not the official studio. The iframe stays untouched so you can rely on the same inputs, saves, and achievements you expect on azgames.io. Contact {" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-[#b3471b]">
              {siteConfig.contactEmail}
            </a>{" "}
            for takedowns or latency reports.
          </p>
        </div>
      </div>
      {toast && (
        <div className="pointer-events-none fixed inset-x-0 top-4 flex justify-center px-4">
          <div className="rounded-full bg-[#1f140c] px-4 py-2 text-sm font-semibold text-white shadow-lg">
            {toast}
          </div>
        </div>
      )}
    </section>
  );
}
