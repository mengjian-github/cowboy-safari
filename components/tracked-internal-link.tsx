"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type TrackedInternalLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  eventName?: string;
  page: string;
  location: string;
  label: string;
};

export function TrackedInternalLink({
  href,
  className,
  children,
  eventName = "internal_answer_click",
  page,
  location,
  label,
}: TrackedInternalLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        trackEvent(eventName, {
          page,
          location,
          label,
          destination: href,
        })
      }
    >
      {children}
    </Link>
  );
}
