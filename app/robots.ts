import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

/**
 * robots.txt. Nothing here is private, so everything is crawlable; the only
 * real job is pointing crawlers at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
  };
}
