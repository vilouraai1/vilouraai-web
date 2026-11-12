import type { Metadata } from "next";

import { DemoForecast } from "~/app/_components/DemoForecast";
import {
  LocationFooter,
  LocationHeader,
} from "~/app/_components/LocationChrome";
import { Reveal } from "~/app/_components/Reveal";

export const metadata: Metadata = {
  title: "Try the forecast on your own numbers | VilouraAI",
  description:
    "Paste 12 weeks of bookings, jobs, or orders and see an instant mini-forecast chart with a 4-week trend projection. Free, in your browser, nothing uploaded.",
  alternates: { canonical: "https://vilouraai.com/demo" },
  openGraph: {
    title: "Try the forecast on your own numbers | VilouraAI",
    description:
      "Paste 12 weeks of your numbers, get an instant mini-forecast chart. Free, in your browser, nothing uploaded.",
    url: "https://vilouraai.com/demo",
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
    title: "Try the forecast on your own numbers | VilouraAI",
    description:
      "Paste 12 weeks of your numbers, get an instant mini-forecast chart. Free, in your browser.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    heading: "Enter your last 12 weeks",
    body: "Bookings, jobs, orders, clients — any weekly count. Paste a column from your spreadsheet or type them in one by one.",
  },
  {
    heading: "See the trend, drawn out",
    body: "A straight line fitted to your 12 weeks, extended 4 weeks ahead. The chart labels what is yours and what is projected.",
  },
  {
    heading: "Decide what it is worth",
    body: "If the projection climbs past your capacity, that is the crunch coming. The $495 Sprint turns the same 12 weeks into a real forecast with probability bands.",
  },
];

const FAQS = [
  {
    q: "Is this the real VilouraAI forecast?",
    a: "No. This is a straight-line sketch so you can feel what a forecast looks like on your own numbers. The real Sprint fits seasonality and holidays and shows probability bands, so you see a range, not one line.",
  },
  {
    q: "What numbers should I enter?",
    a: "Any weekly count that drives your business: bookings, jobs completed, orders, clients seen. Use the same definition every week, and use the most recent 12 weeks.",
  },
  {
    q: "Where do my numbers go?",
    a: "Nowhere. The whole demo runs in your browser. Nothing is uploaded, stored, or sent to us. If you want us to look at your numbers, use the free forecast form on the homepage.",
  },
  {
    q: "What if my numbers are messy or flat?",
    a: "The demo handles it: zeros, flat weeks, and big jumps all draw fine. If a value is not a number 0 or higher, the field tells you and the chart waits until you fix it — nothing breaks.",
  },
];

export default function DemoPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://vilouraai.com/demo#webpage",
        url: "https://vilouraai.com/demo",
        name: "Try the forecast on your own numbers | VilouraAI",
        description:
          "Paste 12 weeks of bookings, jobs, or orders and see an instant mini-forecast chart with a 4-week trend projection. Free, in your browser, nothing uploaded.",
        isPartOf: { "@id": "https://vilouraai.com/#website" },
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
                Interactive demo · Free
              </p>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="max-w-3xl font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl">
                Try the forecast on your own numbers.
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
                Paste your last 12 weeks and watch the next 4 draw themselves.
                A two-minute sketch of what forecasting feels like — before you
                pay for the real thing.
              </p>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="demo-heading" className="border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
            <h2 id="demo-heading" className="sr-only">
              Interactive forecast demo
            </h2>
            <DemoForecast />
          </div>
        </section>

        <section
          aria-labelledby="how-heading"
          className="border-t border-ink/10 bg-parchment/60"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <h2
                id="how-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                How this sketch works
              </h2>
            </Reveal>
            <div className="mt-10">
              {STEPS.map((item, i) => (
                <Reveal key={item.heading} delay={i * 100}>
                  <div className="grid gap-2 border-t border-ink/15 py-8 md:grid-cols-12 md:gap-6">
                    <p
                      className="font-display text-xl font-black text-pine md:col-span-2"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-2xl font-bold tracking-tight md:col-span-4">
                      {item.heading}
                    </h3>
                    <p className="leading-relaxed text-ink/70 md:col-span-6">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-ink/15" aria-hidden="true" />
            </div>
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
