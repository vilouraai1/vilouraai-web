import type { MetadataRoute } from "next";

const CITIES = [
  "dallas",
  "fort-worth",
  "plano",
  "frisco",
  "arlington",
  "lewisville",
];

const NEW_PAGES: { url: string; priority: number }[] = [
  { url: "https://vilouraai.com/website", priority: 0.9 },
  { url: "https://vilouraai.com/ai-receptionist", priority: 0.9 },
  { url: "https://vilouraai.com/bundle", priority: 0.9 },
  { url: "https://vilouraai.com/pricing", priority: 0.9 },
  { url: "https://vilouraai.com/dentists", priority: 0.8 },
  { url: "https://vilouraai.com/salons", priority: 0.8 },
  { url: "https://vilouraai.com/hvac-plumbing", priority: 0.8 },
  { url: "https://vilouraai.com/auto-repair", priority: 0.8 },
  { url: "https://vilouraai.com/new-business", priority: 0.8 },
  { url: "https://vilouraai.com/free-seo-audit", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vilouraai.com",
      lastModified: new Date("2026-11-12"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...NEW_PAGES.map((page) => ({
      url: page.url,
      lastModified: new Date("2026-11-12"),
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    {
      url: "https://vilouraai.com/compare",
      lastModified: new Date("2026-11-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vilouraai.com/checklist",
      lastModified: new Date("2026-11-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vilouraai.com/demo",
      lastModified: new Date("2026-11-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vilouraai.com/locations",
      lastModified: new Date("2026-11-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...CITIES.map((city) => ({
      url: `https://vilouraai.com/locations/${city}`,
      lastModified: new Date(
        city === "lewisville" ? "2026-10-15" : "2026-10-12",
      ),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
