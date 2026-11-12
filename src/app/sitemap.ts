import type { MetadataRoute } from "next";

const CITIES = [
  "dallas",
  "fort-worth",
  "plano",
  "frisco",
  "arlington",
  "lewisville",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vilouraai.com",
      lastModified: new Date("2026-10-15"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://vilouraai.com/compare",
      lastModified: new Date("2026-10-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vilouraai.com/checklist",
      lastModified: new Date("2026-10-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vilouraai.com/demo",
      lastModified: new Date("2026-10-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vilouraai.com/locations",
      lastModified: new Date("2026-10-15"),
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
