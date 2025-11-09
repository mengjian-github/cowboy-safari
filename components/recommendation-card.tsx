import Image from "next/image";
import Link from "next/link";
import type { RelatedGame } from "@/data/recommendations";

export function RecommendationCard({ game }: { game: RelatedGame }) {
  return (
    <div className="relative flex flex-col gap-4 rounded-3xl border border-[#1f140c]/10 bg-white/90 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={game.image}
          alt={game.imageAlt}
          width={640}
          height={360}
          className="h-40 w-full object-cover"
        />
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b3471b]/80">
          {game.focus}
        </p>
        <h3 className="text-xl font-semibold text-[#1f140c]">{game.name}</h3>
        <p className="text-xs font-semibold text-[#1f140c]/60">{game.platform}</p>
        <p className="text-sm text-[#1f140c]/80">{game.summary}</p>
      </div>
      <div className="flex items-center justify-between text-sm font-semibold text-[#1f140c]">
        <span className="rounded-full bg-[#fef4e7] px-3 py-1 text-xs uppercase tracking-wide">
          {game.difficulty}
        </span>
        <Link
          href={game.playUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#b3471b] underline-offset-4 transition hover:underline"
        >
          Play
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
