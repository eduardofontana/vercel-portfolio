import type { MetadataRoute } from "next";
import { profile } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: profile.url, changeFrequency: "monthly", priority: 1 }];
}
