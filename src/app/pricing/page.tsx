import type { Metadata } from "next";

import {
  LocationFooter,
  LocationHeader,
} from "~/app/_components/LocationChrome";
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  OFFERS,
  PRISQO_URL,
  SERVICE_FAQS,
} from "~/app/_components/offers";
import { Reveal } from "~/app/_components/Reveal";

const PRISQO_FREE_CHECK = `${PRISQO_URL}/free-check?ref=viloura`;
const PHONE_DISPLAY = "(469) 496-5431";
const PHONE_HREF = "tel:+14694965431";

// 47 chars
const PAGE_TITLE = "Pricing — Website $497, AI receptionist $149/mo";
// 141 chars
const PAGE_DESCRIPTION =
  "Website Launch $497 one-time. AI Receptionist $149/mo, first 14 days free. Launch Bundle $597. Free SEO audit. No contracts on the receptionist.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "https://vilouraai.com/pricing" },
  openGraph: {
    title: `${PAGE_TITLE} | VilouraAI`,
    description: PAGE_DESCRIPTION,
    url: "https://vilouraai.com/pricing",
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
    title: `${PAGE_TITLE} | VilouraAI`,
    description: PAGE_DESCRIPTION,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

type PriceCard = {
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  features: string[];
  note?: string;
  cta: string;
  href: string;
  featured?: boolean;
};

// Same prices and wording as the homepage services grid, from offers.ts.
// offers.ts hrefs are "#contact" (homepage-relative); on this page the
// contact form lives on the homepage, so the CTAs point at "/#contact".
const PRICE_CARDS: PriceCard[] = [
  {
    name: "Free SEO audit",
    price: "Free",
    priceNote: "complimentary",
    tagline: "One page, plain words.",
    features: [
      "Titles & descriptions — what Google sees on every page",
      "Local SEO & Google Business Profile check",
      "Speed & mobile — how it reads on a phone",
      "AI visibility — whether AI assistants can recommend you",
      "The three fixes that matter most",
    ],
    cta: "Get my free audit",
    href: "/free-seo-audit",
  },
  {
    name: "Prisqo AI Visibility Report",
    price: "$19",
    priceNote: "one-time",
    tagline: "Does AI recommend your business?",
    features: [
      "Asks AI assistants about businesses like yours",
      "Shows whether yours gets named — and in the top 3",
      "Names who does get recommended instead",
      "What is missing when you are not named",
      "Pay once. No subscription, no account.",
    ],
    cta: "Check AI visibility",
    href: PRISQO_FREE_CHECK,
  },
  {
    name: OFFERS.website.name,
    price: OFFERS.website.price,
    priceNote: OFFERS.website.priceNote,
    tagline: OFFERS.website.tagline,
    features: [...OFFERS.website.features],
    note: OFFERS.website.carePlan,
    cta: OFFERS.website.cta,
    href: "/#contact",
  },
  {
    name: OFFERS.receptionist.name,
    price: OFFERS.receptionist.price,
    priceNote: OFFERS.receptionist.priceNote,
    tagline: OFFERS.receptionist.tagline,
    features: [...OFFERS.receptionist.features],
    note: OFFERS.receptionist.carePlan,
    cta: OFFERS.receptionist.cta,
    href: "/#contact",
  },
  {
    name: OFFERS.bundle.name,
    price: OFFERS.bundle.price,
    priceNote: OFFERS.bundle.priceNote,
    tagline: OFFERS.bundle.tagline,
    features: [...OFFERS.bundle.features],
    note: OFFERS.bundle.carePlan,
    cta: OFFERS.bundle.cta,
    href: "/#contact",
    featured: true,
  },
];

function PricingStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": "https://vilouraai.com/pricing#services",
        name: "VilouraAI pricing",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Service",
              "@id": "https://vilouraai.com/#website-launch",
              name: "Website Launch",
              offers: {
                "@type": "Offer",
                price: "497",
                priceCurrency: "USD",
                description: "Website Launch, one-time.",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Service",
              "@id": "https://vilouraai.com/#ai-receptionist",
              name: "AI Receptionist",
              offers: {
                "@type": "Offer",
                price: "149",
                priceCurrency: "USD",
                description:
                  "AI Receptionist, per month. No setup fee, cancel anytime, first 14 days free.",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Service",
              "@id": "https://vilouraai.com/#launch-bundle",
              name: "Launch Bundle",
              offers: {
                "@type": "Offer",
                price: "597",
                priceCurrency: "USD",
                description: "Launch Bundle, one-time + first month included.",
              },
            },
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://vilouraai.com/pricing#faq",
        mainEntity: SERVICE_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function PricingPage() {
  return (
    <>
      <PricingStructuredData />
      <LocationHeader />
      <main className="pt-16">
        <section
          aria-labelledby="pricing-heading"
          className="scroll-mt-20 border-b border-ink/10"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                Pricing
              </p>
              <h1
                id="pricing-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Start free. Pay when it pays.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
                The audit is free and the forecast is free. The site is $497,
                the receptionist is $149 a month, the bundle is $597 — and
                the receptionist has no contract.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PRICE_CARDS.map((card, i) => (
                <Reveal key={card.name} delay={(i % 3) * 120}>
                  <article
                    className={`flex h-full flex-col rounded-xl border bg-white p-8 ${
                      card.featured
                        ? "border-pine shadow-[0_24px_60px_-30px_rgba(23,96,60,0.45)]"
                        : "border-ink/10"
                    }`}
                  >
                    {card.featured && (
                      <p className="mb-4 inline-flex w-fit rounded-full bg-pine px-3 py-1 text-xs font-bold uppercase tracking-wider text-paper">
                        Best value
                      </p>
                    )}
                    <h2 className="font-display text-xl font-bold">
                      {card.name}
                    </h2>
                    <p className="mt-2 font-display text-5xl font-black tracking-tight">
                      {card.price}
                    </p>
                    <p className="mt-1 text-sm text-ink/60">
                      {card.priceNote} · {card.tagline}
                    </p>
                    <ul className="mt-6 flex-1 space-y-3">
                      {card.features.map((feature) => (
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
                    {card.note && (
                      <p className="mt-5 text-sm leading-relaxed text-ink/60">
                        {card.note}
                      </p>
                    )}
                    <a
                      href={card.href}
                      aria-label={`${card.cta} — ${card.name} ${card.price} ${card.priceNote}`}
                      className={`mt-8 rounded-full px-6 py-3.5 text-center font-display text-base font-bold transition-colors ${
                        card.featured
                          ? "bg-pine text-paper hover:bg-pine-deep"
                          : "border border-ink/20 text-ink hover:border-pine hover:text-pine"
                      }`}
                    >
                      {card.cta}
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink/55">
                Still want the booking forecast? The free 12-week forecast and
                the $495 Forecast Sprint are still available —{" "}
                <a
                  href="/demo"
                  className="font-bold text-pine underline-offset-4 hover:underline"
                >
                  try the forecast demo
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="pricing-faq-heading"
          className="border-b border-ink/10"
        >
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                FAQ
              </p>
              <h2
                id="pricing-faq-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Straight answers
              </h2>
            </Reveal>
            <div className="mt-8">
              {SERVICE_FAQS.map((faq, i) => (
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

        <section aria-labelledby="pricing-contact-heading">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
            <Reveal>
              <h2
                id="pricing-contact-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Not sure which one?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
                Book a 15-minute call and we will tell you which one fits —
                or whether the free audit says you do not need anything yet.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href={BOOKING_URL}
                  className="inline-block rounded-full bg-pine px-8 py-4 text-center font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
                >
                  Book a 15-min call
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-block rounded-full border border-ink/20 px-8 py-4 text-center font-display text-lg font-bold text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <p className="mt-6 text-sm text-ink/60">
                Or call{" "}
                <a
                  href={PHONE_HREF}
                  className="font-bold text-pine underline-offset-4 hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>{" "}
                — every day, 7:00 AM–7:00 PM.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
