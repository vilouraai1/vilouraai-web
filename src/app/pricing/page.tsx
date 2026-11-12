import type { Metadata } from "next";

import {
  LocationFooter,
  LocationHeader,
} from "~/app/_components/LocationChrome";
import {
  BOOKING_URL,
  OFFERS,
  SERVICE_FAQS,
} from "~/app/_components/offers";
import { Reveal } from "~/app/_components/Reveal";

export const metadata: Metadata = {
  title: "Pricing — Website $497, AI Receptionist $149/mo",
  description:
    "Plain prices, no contract. Website Launch $497 one-time, AI Receptionist $149/mo, first 14 days free, Launch Bundle $597.",
  alternates: { canonical: "https://vilouraai.com/pricing" },
  openGraph: {
    title: "Pricing: Website Launch $497, AI Receptionist $149/mo | VilouraAI",
    description:
      "Plain prices, no contract. Website Launch $497, AI Receptionist $149/mo, Launch Bundle $597 — $497 for the first 10 founding clients.",
    url: "https://vilouraai.com/pricing",
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
    title: "Pricing: Website Launch $497, AI Receptionist $149/mo | VilouraAI",
    description:
      "Plain prices, no contract. Website Launch $497, AI Receptionist $149/mo, Launch Bundle $597.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const TIERS = [
  OFFERS.website,
  { ...OFFERS.bundle, featured: true },
  OFFERS.receptionist,
];

const FAQS = SERVICE_FAQS.filter((faq) =>
  [
    "How much does it cost?",
    "Is there a contract?",
    "How fast do I get it?",
    "What is the founding offer?",
  ].includes(faq.q),
);

export default function PricingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://vilouraai.com/pricing#webpage",
        url: "https://vilouraai.com/pricing",
        name: "Pricing: Website Launch $497, AI Receptionist $149/mo | VilouraAI",
        description:
          "Plain prices, no contract. Website Launch $497 one-time, AI Receptionist $149/mo, Launch Bundle $597.",
        isPartOf: { "@id": "https://vilouraai.com/#website" },
      },
      {
        "@type": "Offer",
        name: "Website Launch",
        price: "497",
        priceCurrency: "USD",
        url: "https://vilouraai.com/website",
        description:
          "Mobile-first 5-page site, online booking button, Google Business Profile tune-up, basic local SEO, live in 7 days.",
      },
      {
        "@type": "Offer",
        name: "AI Receptionist",
        price: "149",
        priceCurrency: "USD",
        url: "https://vilouraai.com/ai-receptionist",
        description:
          "Answers every call 24/7, books appointments, answers FAQs, texts the owner a summary, missed-call text-back. No setup fee, cancel anytime, first 14 days free.",
      },
      {
        "@type": "Offer",
        name: "Launch Bundle",
        price: "597",
        priceCurrency: "USD",
        url: "https://vilouraai.com/bundle",
        description:
          "Website Launch plus the first month of AI Receptionist plus a Prisqo AI-visibility report ($19 value).",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
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
          <div className="mx-auto max-w-6xl px-5 pb-12 pt-12 sm:px-8 sm:pt-16">
            <Reveal immediate>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                Pricing · No contract
              </p>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="max-w-3xl font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl">
                Plain prices. No contract.
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
                The receptionist is month to month — cancel anytime. The
                website is yours once it is built. The booking forecast is
                still free.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="plans-heading"
          className="border-t border-ink/10"
        >
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
            <h2 id="plans-heading" className="sr-only">
              Plans
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {TIERS.map((tier, i) => {
                const featured =
                  "featured" in tier && tier.featured === true;
                return (
                  <Reveal key={tier.name} delay={i * 120}>
                    <article
                      className={`flex h-full flex-col rounded-xl border bg-white p-8 ${
                        featured
                          ? "border-pine shadow-[0_24px_60px_-30px_rgba(23,96,60,0.45)]"
                          : "border-ink/10"
                      }`}
                    >
                      {featured && (
                        <p className="mb-4 inline-flex w-fit rounded-full bg-pine px-3 py-1 text-xs font-bold uppercase tracking-wider text-paper">
                          Most popular
                        </p>
                      )}
                      <h3 className="font-display text-xl font-bold">
                        {tier.name}
                      </h3>
                      <p className="mt-2 font-display text-5xl font-black tracking-tight">
                        {tier.price}
                        <span className="ml-2 align-middle font-sans text-base font-bold text-ink/50">
                          {tier.priceNote}
                        </span>
                      </p>
                      <p className="mt-1 text-sm text-ink/60">
                        {tier.tagline}
                      </p>
                      <ul className="mt-6 flex-1 space-y-3">
                        {tier.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex gap-3 text-ink/75"
                          >
                            <svg
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                              className="mt-1 h-4 w-4 shrink-0 text-pine"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2.5}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M2.5 8.5l3.5 3.5 7-8" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 text-sm text-ink/60">
                        {tier.carePlan}
                      </p>
                      <a
                        href={tier.href}
                        className={`mt-6 rounded-full px-6 py-3.5 text-center font-display text-base font-bold transition-colors ${
                          featured
                            ? "bg-pine text-paper hover:bg-pine-deep"
                            : "border border-ink/20 text-ink hover:border-pine hover:text-pine"
                        }`}
                      >
                        {tier.cta}
                      </a>
                    </article>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={120}>
              <p className="mt-10 max-w-2xl leading-relaxed text-ink/70">
                The booking forecast is free: a 12-week forecast built on
                your numbers, or the $495 Forecast Sprint for the 90-day deep
                dive.{" "}
                <a href="/demo" className="font-bold text-pine hover:underline">
                  Try the forecast demo
                </a>
                . Not sure your current site is worth keeping? Get a{" "}
                <a
                  href="/free-seo-audit"
                  className="font-bold text-pine hover:underline"
                >
                  free SEO audit
                </a>{" "}
                first — then compare it with the{" "}
                <a
                  href="/bundle"
                  className="font-bold text-pine hover:underline"
                >
                  $597 Launch Bundle
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="founding-heading"
          className="border-t border-ink/10 bg-parchment/60"
        >
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                Founding offer
              </p>
              <h2
                id="founding-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                First 10 clients pay less.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                The first 10 clients get the Launch Bundle for $497 instead
                of $597, and the AI Receptionist locked at $129 a month for 12
                months. No countdown timer here — when the 10 spots are gone,
                the price goes back up and this page changes.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-pine px-8 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
              >
                Book a 15-min call
              </a>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="faq-heading"
          className="border-t border-ink/10"
        >
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                FAQ
              </p>
              <h2
                id="faq-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Fair questions
              </h2>
            </Reveal>
            <div className="mt-8">
              {FAQS.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 60}>
                  <details className="faq-item group border-t border-ink/15 py-6 last:border-b">
                    <summary className="flex items-center justify-between gap-4 font-display text-xl font-bold tracking-tight">
                      {faq.q}
                      <span
                        className="faq-chevron shrink-0 text-3xl font-light text-pine"
                        aria-hidden="true"
                      >
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
      </main>
      <LocationFooter />
    </>
  );
}
