import type { Metadata } from "next";

import {
  LocationFooter,
  LocationHeader,
} from "~/app/_components/LocationChrome";
import { BOOKING_URL } from "~/app/_components/offers";
import { Reveal } from "~/app/_components/Reveal";

export type Niche = {
  slug: string;
  label: string;
  title: string;
  description: string;
  heroEyebrow: string;
  heroHeading: string;
  heroBody: string;
  pains: { title: string; body: string }[];
  callIntro: string;
  sampleCall: { speaker: string; line: string }[];
  closing: string;
};

export function nicheMetadata(niche: Niche): Metadata {
  return {
    title: `${niche.title} | VilouraAI`,
    description: niche.description,
    alternates: { canonical: `https://vilouraai.com/${niche.slug}` },
    openGraph: {
      title: `${niche.title} | VilouraAI`,
      description: niche.description,
      url: `https://vilouraai.com/${niche.slug}`,
      siteName: "VilouraAI",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "VilouraAI — Stop losing customers to voicemail and a broken website.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${niche.title} | VilouraAI`,
      description: niche.description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
  };
}

export function NichePage({ niche }: { niche: Niche }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://vilouraai.com/${niche.slug}#service`,
        name: `VilouraAI for ${niche.label}`,
        description: niche.description,
        provider: { "@id": "https://vilouraai.com/#business" },
        areaServed: "Texas",
        offers: [
          {
            "@type": "Offer",
            name: "Website Launch",
            price: "497",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "AI Receptionist",
            price: "149",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Launch Bundle",
            price: "597",
            priceCurrency: "USD",
          },
        ],
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
          <div className="mx-auto max-w-6xl px-5 pb-12 pt-12 sm:px-8 sm:pt-16">
            <Reveal immediate>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                {niche.heroEyebrow}
              </p>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="max-w-3xl font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl">
                {niche.heroHeading}
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
                {niche.heroBody}
              </p>
            </Reveal>
            <Reveal immediate delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-pine px-8 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
                >
                  Book a 15-min call
                </a>
                <a
                  href="/demo#receptionist"
                  className="inline-block rounded-full border border-ink/20 px-8 py-4 font-display text-lg font-bold text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  Hear the AI receptionist
                </a>
              </div>
              <p className="mt-4 text-sm text-ink/60">
                Website Launch $497 · AI Receptionist $149/mo · Bundle $597
                ($497 for the first 10 founding clients)
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="pains-heading"
          className="border-t border-ink/10 bg-parchment/60"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                The problem
              </p>
              <h2
                id="pains-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Sound familiar?
              </h2>
            </Reveal>
            <div className="mt-10">
              {niche.pains.map((pain, i) => (
                <Reveal key={pain.title} delay={i * 100}>
                  <div className="grid gap-2 border-t border-ink/15 py-8 md:grid-cols-12 md:gap-6">
                    <p
                      className="font-display text-xl font-black text-pine md:col-span-2"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-2xl font-bold tracking-tight md:col-span-4">
                      {pain.title}
                    </h3>
                    <p className="leading-relaxed text-ink/70 md:col-span-6">
                      {pain.body}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-ink/15" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="call-heading"
          className="border-t border-ink/10"
        >
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                Example call · Sample, not a real call
              </p>
              <h2
                id="call-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                What a call sounds like.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                {niche.callIntro}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 space-y-4 rounded-xl border border-ink/10 bg-white p-7 sm:p-10">
                {niche.sampleCall.map((turn, i) => (
                  <p key={i} className="leading-relaxed text-ink/75">
                    <span className="font-bold text-ink">
                      {turn.speaker}:
                    </span>{" "}
                    {turn.line}
                  </p>
                ))}
                <p className="border-t border-ink/10 pt-4 text-sm text-ink/60">
                  Sample transcript — the names, number, and times are made
                  up. On a real call, the owner gets a text summary right
                  after.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="next-heading"
          className="border-t border-ink/10 bg-parchment/60"
        >
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <h2
                id="next-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                What happens next.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                {niche.closing}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-pine px-8 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
                >
                  Book a 15-min call
                </a>
                <a
                  href="/bundle"
                  className="inline-block rounded-full border border-ink/20 px-8 py-4 font-display text-lg font-bold text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  See the $597 bundle
                </a>
              </div>
              <p className="mt-6 text-sm text-ink/60">
                Or start with the{" "}
                <a
                  href="/demo"
                  className="font-bold text-pine hover:underline"
                >
                  free forecast demo
                </a>{" "}
                — see your busy weeks before they hit.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
