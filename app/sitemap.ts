import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = ["/", "/guides", "/support"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteConfig.baseUrl}${path === "/" ? "" : path}`,
    lastModified: siteConfig.lastUpdatedISO,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
