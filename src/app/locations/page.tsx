import type { Metadata } from "next";

import { CITIES } from "~/app/locations/cities";
import {
  LocationFooter,
  LocationHeader,
} from "~/app/_components/LocationChrome";
import { Reveal } from "~/app/_components/Reveal";

export const metadata: Metadata = {
  title: "Websites and AI receptionists across DFW",
  description:
    "Websites, AI receptionists, and free 12-week booking forecasts for DFW businesses — Dallas, Fort Worth, Plano, Frisco, Arlington, Lewisville.",
  alternates: { canonical: "https://vilouraai.com/locations" },
  openGraph: {
    title: "Websites and AI receptionists across DFW",
    description:
      "Websites, AI receptionists, and free 12-week booking forecasts for DFW businesses — Dallas, Fort Worth, Plano, Frisco, Arlington, Lewisville.",
    url: "https://vilouraai.com/locations",
    siteName: "VilouraAI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "VilouraAI — New website in 7 days. Every call answered.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites and AI receptionists across DFW",
    description:
      "Websites, AI receptionists, and free 12-week booking forecasts for DFW businesses — Dallas, Fort Worth, Plano, Frisco, Arlington, Lewisville.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function LocationsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": "https://vilouraai.com/locations#cities",
        name: "Cities served in Dallas–Fort Worth",
        itemListElement: CITIES.map((city, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://vilouraai.com/locations/${city.slug}`,
          name: `Demand forecasting in ${city.name}`,
        })),
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://vilouraai.com/#business",
        name: "VilouraAI LLC",
        url: "https://vilouraai.com",
        description:
          "VilouraAI builds new mobile-first websites in 7 days and answers every call with an AI receptionist that books the appointment — for Texas local businesses. Website Launch $497, AI Receptionist $149/mo, Launch Bundle $597. Free 12-week booking forecast.",
        areaServed: "Dallas–Fort Worth",
        priceRange: "Free - $597",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LocationHeader />
      <main>
        <section className="pt-16">
          <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:pb-20">
            <Reveal immediate>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                Service area · Dallas–Fort Worth
              </p>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="max-w-3xl font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl">
                Forecasting for the whole Metroplex.
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
                Every DFW city runs on its own calendar — stadium weekends in
                Arlington, appointment books in Plano, tourist waves in Fort
                Worth. Pick your city for the local version of the story, then
                get your free 12-week forecast.
              </p>
            </Reveal>
          </div>
        </section>
        <section aria-labelledby="cities-heading" className="border-t border-ink/10 bg-parchment/60">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <h2 id="cities-heading" className="sr-only">
              Cities we serve
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {CITIES.map((city, i) => (
                <Reveal key={city.slug} delay={i * 80}>
                  <article className="flex h-full flex-col rounded-xl border border-ink/10 bg-white p-8">
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      Demand forecasting in {city.name}
                    </h3>
                    <p className="mt-3 flex-1 leading-relaxed text-ink/70">
                      {city.heroIntro.split(". ")[0]}.
                    </p>
                    <a
                      href={`/locations/${city.slug}`}
                      className="mt-6 w-fit rounded-full border border-ink/20 px-6 py-3 text-center font-display text-base font-bold transition-colors hover:border-pine hover:text-pine"
                    >
                      {city.name} forecast →
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-ink/10">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
            <Reveal>
              <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
                Your city not listed?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
                We work across DFW from our base in Lewisville. If your
                business is in the Metroplex, the free forecast applies to
                you.
              </p>
              <a
                href="/#contact"
                className="mt-9 inline-block rounded-full bg-pine px-8 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
              >
                Get my free forecast
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
