import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

/**
 * XML sitemap, served at /sitemap.xml and referenced from robots.txt.
 *
 * Only routes that actually render are listed. The `notes` and `work`
 * segments call notFound() until their feature flag is on, so they read the
 * same flags here and join the sitemap automatically when those flip.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/roadmap",
    "/newsletter",
    "/privacy",
    ...(siteConfig.features.notes ? ["/notes"] : []),
    ...(siteConfig.features.work ? ["/work"] : []),
  ];

  return paths.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
  }));
}
