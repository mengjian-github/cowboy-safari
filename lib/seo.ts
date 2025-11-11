import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadataOptions = {
  title: string;
  description: string;
  /**
   * Relative path from the site root (e.g., '/', '/support').
   */
  path?: string;
};

const ogImagePath = `${siteConfig.baseUrl}/og-image.png`;

export function buildPageMetadata({
  title,
  description,
  path = "/",
}: PageMetadataOptions): Metadata {
  const normalizedPath =
    path === "/"
      ? "/"
      : path.startsWith("/")
        ? path
        : `/${path}`;
  const url =
    normalizedPath === "/"
      ? `${siteConfig.baseUrl}/`
      : `${siteConfig.baseUrl}${normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: siteConfig.name,
      locale: "en_US",
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: "Cowboy Safari Fan Hub hero collage",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@cowboysafari",
      creator: "@cowboysafari",
      title,
      description,
      images: [ogImagePath],
    },
  };
}
