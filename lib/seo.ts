import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type OgType = "website" | "article";

type PageMetadataOptions = {
  title: string;
  description: string;
  /**
   * Relative path from the site root (e.g., '/', '/support').
   */
  path?: string;
  /**
   * Optional override for the Open Graph image path. Can be absolute or relative.
   */
  imagePath?: string;
  /**
   * Override the Open Graph type when a page needs something more specific than `website`.
   */
  ogType?: OgType;
};

const defaultOgImagePath = "/og-image.png";

export function buildPageMetadata({
  title,
  description,
  path = "/",
  imagePath = defaultOgImagePath,
  ogType = "website",
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
  const absoluteOgImage = imagePath.startsWith("http")
    ? imagePath
    : `${siteConfig.baseUrl}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;

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
      type: ogType,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [
        {
          url: absoluteOgImage,
          secureUrl: absoluteOgImage,
          type: "image/png",
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
      images: [absoluteOgImage],
    },
  };
}
