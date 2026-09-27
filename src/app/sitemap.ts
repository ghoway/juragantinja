import type { MetadataRoute } from "next";
import { absoluteUrl, galleryPaths, heroImage } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [heroImage, ...galleryPaths].map(absoluteUrl),
    },
  ];
}
