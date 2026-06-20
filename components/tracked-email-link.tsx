"use client";

import { trackGA4Event } from "@/lib/analytics";

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
    <a
      href="/support"
      className={className}
      onClick={() =>
        trackGA4Event("support_page_nav", {
          page,
          location,
        })
      }
    >
      {children}
    </a>
  );
}
