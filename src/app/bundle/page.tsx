import type { Metadata } from "next";

import {
  LocationFooter,
  LocationHeader,
} from "~/app/_components/LocationChrome";
import { BOOKING_URL } from "~/app/_components/offers";
import { Reveal } from "~/app/_components/Reveal";

export const metadata: Metadata = {
  title: "Launch Bundle $597 — website + AI receptionist + visibility report | VilouraAI",
  description:
    "Website Launch ($497) plus the first month of AI Receptionist ($149 value) plus a Prisqo AI-visibility report ($19 value) — $597. First 10 founding clients pay $497, with the receptionist locked at $129/mo for 12 months.",
  alternates: { canonical: "https://vilouraai.com/bundle" },
  openGraph: {
    title: "Launch Bundle $597 — website + AI receptionist + visibility report | VilouraAI",
    description:
      "Website Launch plus the first month of AI Receptionist plus a Prisqo AI-visibility report — $597. First 10 founding clients pay $497.",
    url: "https://vilouraai.com/bundle",
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
    title: "Launch Bundle $597 — website + AI receptionist + visibility report | VilouraAI",
    description:
      "Website Launch plus the first month of AI Receptionist plus a Prisqo AI-visibility report — $597.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const INCLUDED = [
  {
    title: "Website Launch — $497",
    body: "Mobile-first 5-page site (home, services, about, reviews, contact / booking), online booking button, Google Business Profile tune-up, basic local SEO. Live in 7 days.",
    href: "/website",
  },
  {
    title: "First month of AI Receptionist — $149 value",
    body: "Answers every call 24/7 in a natural voice, books appointments, answers FAQs, texts you a summary after every call, and sends a missed-call text-back.",
    href: "/ai-receptionist",
  },
  {
    title: "Prisqo AI-visibility report — $19 value",
    body: "A check of whether AI assistants recommend your business when people ask — and what to fix if they do not. Read the free check at prisqo.vilouraai.com.",
    href: "https://prisqo.vilouraai.com",
  },
];

const FAQS = [
  {
    q: "What do I pay after the first month?",
    a: "The receptionist continues at $149 a month, month to month, cancel anytime. Founding clients — the first 10 — keep it at $129 a month, locked for 12 months. The website is yours; the optional care plan is $29 a month.",
  },
  {
    q: "How fast does the bundle go live?",
    a: "The site is live in 7 days from when we have your details and photos. The receptionist is set up and tested with you in the same week, before it answers a real call.",
  },
  {
    q: "Can I get just one part of the bundle?",
    a: "Yes. Website Launch is $497 on its own, and the AI Receptionist is $149 a month with the first 14 days free. The bundle saves you $68 against buying the pieces separately — $497 + $149 + $19 is $665.",
  },
  {
    q: "What is the founding offer?",
    a: "The first 10 clients pay $497 for the bundle instead of $597, and the receptionist stays at $129 a month for 12 months. There is no countdown timer on this page — when the 10 spots are gone, the price goes back up and this page changes.",
  },
];

export default function BundlePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vilouraai.com/bundle#service",
        name: "Launch Bundle",
        description:
          "Website Launch plus the first month of AI Receptionist plus a Prisqo AI-visibility report ($19 value).",
        provider: { "@id": "https://vilouraai.com/#business" },
        areaServed: "Texas",
        offers: {
          "@type": "Offer",
          price: "597",
          priceCurrency: "USD",
          description:
            "Launch Bundle, $597. First 10 founding clients pay $497, with the AI Receptionist locked at $129/mo for 12 months.",
        },
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
                Launch Bundle · $597 · Most popular
              </p>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="max-w-3xl font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl">
                The site and the receptionist, together.
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
                A new website live in 7 days, an AI receptionist answering
                every call from day one, and a report showing whether AI
                assistants recommend you when people ask. One call to set it
                all up.
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
                  href="/pricing"
                  className="inline-block rounded-full border border-ink/20 px-8 py-4 font-display text-lg font-bold text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  See all pricing
                </a>
              </div>
              <p className="mt-4 text-sm text-ink/60">
                $597 · Founding offer: first 10 clients pay $497, receptionist
                locked at $129/mo for 12 months
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="included-heading"
          className="border-t border-ink/10 bg-parchment/60"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                What&apos;s inside
              </p>
              <h2
                id="included-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Three things, one price.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
                Bought separately, the pieces come to $665 ($497 + $149 +
                $19). The bundle is $597 — and $497 for the first 10 founding
                clients.
              </p>
            </Reveal>
            <div className="mt-10">
              {INCLUDED.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="grid gap-2 border-t border-ink/15 py-8 md:grid-cols-12 md:gap-6">
                    <p
                      className="font-display text-xl font-black text-pine md:col-span-2"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-2xl font-bold tracking-tight md:col-span-4">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-ink/70 md:col-span-6">
                      {item.body}{" "}
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="font-bold text-pine hover:underline"
                      >
                        Learn more →
                      </a>
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-ink/15" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="founding-heading"
          className="border-t border-ink/10"
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
                First 10 clients pay $497.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                The first 10 clients get the Launch Bundle for $497 instead
                of $597, and the AI Receptionist locked at $129 a month for 12
                months. No countdown timer here — when the 10 spots are gone,
                the price goes back up and this page changes.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                No testimonials yet, because there are no past clients to
                quote. When the first founding clients are up and running,
                their words go here — with their permission, and only their
                real words.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="faq-heading"
          className="border-t border-ink/10 bg-parchment/60"
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
            <Reveal delay={120}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-pine px-8 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
              >
                Book a 15-min call
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
