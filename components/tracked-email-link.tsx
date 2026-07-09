"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export function TrackedEmailLink({
  location,
  page,
  className,
  children,
}: {
  location: string;
  page: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href="/support"
      className={className}
      onClick={() =>
        trackEvent("support_click", {
          page,
          location,
        })
      }
    >
      {children}
    </Link>
  );
}
