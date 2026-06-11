"use client";

import { trackGA4Event } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";

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
      href={`mailto:${siteConfig.contactEmail}`}
      className={className}
      onClick={() =>
        trackGA4Event("support_email", {
          page,
          location,
          destination: siteConfig.contactEmail,
        })
      }
    >
      {children}
    </a>
  );
}
