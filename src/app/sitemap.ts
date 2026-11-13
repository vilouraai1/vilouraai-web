import type { MetadataRoute } from "next";

const CITIES = [
  "dallas",
  "fort-worth",
  "plano",
  "frisco",
  "arlington",
  "lewisville",
];

const UPDATED = new Date("2026-11-12");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vilouraai.com",
      lastModified: UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://vilouraai.com/pricing",
      lastModified: UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://vilouraai.com/free-seo-audit",
      lastModified: UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://vilouraai.com/compare",
      lastModified: UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vilouraai.com/checklist",
      lastModified: UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vilouraai.com/demo",
      lastModified: UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vilouraai.com/locations",
      lastModified: UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...CITIES.map((city) => ({
      url: `https://vilouraai.com/locations/${city}`,
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
