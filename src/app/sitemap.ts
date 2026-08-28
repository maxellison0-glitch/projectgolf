import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { GUIDES } from "@/data/guides";
import { absoluteUrl } from "@/lib/seo";

const LAST_UPDATED = new Date("2026-08-28T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/shop"), lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/guides"), lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.7 },
    { url: absoluteUrl("/shipping"), lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.4 },
    { url: absoluteUrl("/returns"), lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.4 },
    { url: absoluteUrl("/contact"), lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.3 },
    { url: absoluteUrl("/privacy"), lastModified: LAST_UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/terms"), lastModified: LAST_UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: absoluteUrl(`/product/${product.slug}`),
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly",
    priority: product.slug === "alignment-putting-mat" ? 0.9 : 0.8,
    images: product.images.map(absoluteUrl),
  }));

  const guidePages: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: absoluteUrl(`/guides/${guide.slug}`),
    lastModified: new Date(`${guide.published}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...productPages, ...guidePages];
}
