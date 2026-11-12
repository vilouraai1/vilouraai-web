import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CITIES, getCity } from "~/app/locations/cities";
import {
  LocationFooter,
  LocationHeader,
} from "~/app/_components/LocationChrome";
import { Reveal } from "~/app/_components/Reveal";

export function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const url = `https://vilouraai.com/locations/${city.slug}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url,
      siteName: "VilouraAI",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "VilouraAI — Your competitors are guessing their next 12 weeks. You won't have to.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: city.metaTitle,
      description: city.metaDescription,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  const others = CITIES.filter((c) => c.slug !== city.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://vilouraai.com/locations/${city.slug}#webpage`,
        url: `https://vilouraai.com/locations/${city.slug}`,
        name: city.metaTitle,
        description: city.metaDescription,
        isPartOf: { "@id": "https://vilouraai.com/#website" },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://vilouraai.com/#business",
        name: "VilouraAI LLC",
        url: "https://vilouraai.com",
        description:
          "AI booking forecasts for local businesses. Free 12-week forecast, $495 Forecast Sprint, and monthly forecasting partnerships.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lewisville",
          addressRegion: "TX",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          addressRegion: "TX",
          addressCountry: "US",
        },
        priceRange: "Free - $1000",
      },
      {
        "@type": "FAQPage",
        mainEntity: city.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
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
                {city.heroEyebrow}
              </p>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="max-w-3xl font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl">
                {city.heroTitle}
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
                {city.heroIntro}
              </p>
            </Reveal>
            <Reveal immediate delay={240}>
              <div className="mt-9">
                <a
                  href="/#contact"
                  className="inline-block rounded-full bg-pine px-8 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
                >
                  Get my free forecast
                </a>
                <p className="mt-4 text-sm text-ink/60">
                  Free 12-week forecast. No logins. No new software. You keep
                  the numbers either way. I personally reply within one
                  business day.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="angles-heading" className="border-t border-ink/10 bg-parchment/60">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                Why {city.name}
              </p>
              <h2
                id="angles-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                What makes {city.name} different
              </h2>
            </Reveal>
            <div className="mt-10">
              {city.angles.map((angle, i) => (
                <Reveal key={angle.heading} delay={i * 100}>
                  <div className="grid gap-2 border-t border-ink/15 py-8 md:grid-cols-12 md:gap-6">
                    <p className="font-display text-xl font-black text-pine md:col-span-2" aria-hidden="true">
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-2xl font-bold tracking-tight md:col-span-4">
                      {angle.heading}
                    </h3>
                    <p className="leading-relaxed text-ink/70 md:col-span-6">
                      {angle.body}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-ink/15" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section aria-labelledby="patterns-heading" className="border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                Local demand patterns
              </p>
              <h2
                id="patterns-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                The weeks to watch in {city.name}
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {city.patterns.map((pattern, i) => (
                <Reveal key={pattern.heading} delay={i * 120}>
                  <div className="border-t-2 border-pine pt-6">
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {pattern.heading}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink/70">
                      {pattern.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="how-heading" className="border-t border-ink/10 bg-parchment/60">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                How it works
              </p>
              <h2
                id="how-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Three steps. No new software.
              </h2>
            </Reveal>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Share 12 weeks of bookings",
                  body: "A simple export from whatever you already use. No logins, no new software. Ten minutes of your time.",
                },
                {
                  n: "02",
                  title: "We model what comes next",
                  body: "Our forecasting engine reads your seasonal patterns and flags the exact weeks that will overbook, with probability bands instead of guesses.",
                },
                {
                  n: "03",
                  title: "You decide what to do with it",
                  body: "Run the playbook yourself, or keep us on monthly. Either way, the forecast is yours to keep.",
                },
              ].map((step, i) => (
                <Reveal key={step.n} delay={i * 120}>
                  <li>
                    <p className="font-display text-6xl font-black text-pine/25" aria-hidden="true">
                      {step.n}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink/70">{step.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="border-t border-ink/10">
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                FAQ
              </p>
              <h2
                id="faq-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                {city.name} questions
              </h2>
            </Reveal>
            <div className="mt-8">
              {city.faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 60}>
                  <details className="faq-item group border-t border-ink/15 py-6 last:border-b">
                    <summary className="flex items-center justify-between gap-4 font-display text-xl font-bold tracking-tight">
                      {faq.q}
                      <span className="faq-chevron shrink-0 text-3xl font-light text-pine" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-2xl leading-relaxed text-ink/70">
                      {faq.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="cta-heading" className="border-t border-ink/10 bg-parchment/60">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
            <Reveal>
              <h2
                id="cta-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                See your next 12 weeks in {city.name}.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
                Free forecast, built on your bookings. Start with the form on
                the homepage — three fields, one business day.
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

        <section aria-labelledby="nearby-heading" className="border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <Reveal>
              <h2
                id="nearby-heading"
                className="font-display text-2xl font-bold tracking-tight"
              >
                Also serving nearby
              </h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {others.map((other) => (
                  <li key={other.slug}>
                    <a
                      href={`/locations/${other.slug}`}
                      className="inline-block rounded-full border border-ink/20 px-5 py-2.5 text-sm font-bold transition-colors hover:border-pine hover:text-pine"
                    >
                      Demand forecasting in {other.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
