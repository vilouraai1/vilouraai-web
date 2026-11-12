import type { Metadata } from "next";

import { ChecklistForm } from "~/app/_components/ChecklistForm";
import {
  LocationFooter,
  LocationHeader,
} from "~/app/_components/LocationChrome";
import { Reveal } from "~/app/_components/Reveal";

export const metadata: Metadata = {
  title: "12-Week Capacity Checklist (free PDF) | VilouraAI",
  description:
    "A one-page weekly tracker for local businesses: log bookings vs capacity for 12 weeks, spot the crunch weeks early, and act while there is still time. Free PDF, one email.",
  alternates: { canonical: "https://vilouraai.com/checklist" },
  openGraph: {
    title: "12-Week Capacity Checklist (free PDF) | VilouraAI",
    description:
      "Five minutes a week. No more surprise crunch weeks. A free one-page tracker for local businesses.",
    url: "https://vilouraai.com/checklist",
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
    title: "12-Week Capacity Checklist (free PDF) | VilouraAI",
    description:
      "Five minutes a week. No more surprise crunch weeks. A free one-page tracker.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const INSIDE = [
  {
    heading: "A 12-row weekly tracker",
    body: "One row per week: booked vs capacity, percent full, staff covered, next action. Five minutes from your booking system, once a week.",
  },
  {
    heading: "Five pattern rules",
    body: "What to do when a week crosses 90% full, when one sits under 60%, when three weeks climb in a row, when one week breaks the pattern, and when cancellations spike.",
  },
  {
    heading: "An end-of-12-weeks review",
    body: "Three questions that turn the sheet into a plan: which weeks turned people away, which sat half-empty, and what one change would have fixed both.",
  },
];

const FAQS = [
  {
    q: "Is this really free?",
    a: "Yes. Enter your email, download the PDF, done. Your email is stored once so we know who asked for it. No drip sequence, no spam.",
  },
  {
    q: "Do I need any software to use it?",
    a: "No. Print it, or copy the table into a notebook. The checklist works with whatever booking system you already use — it just needs your weekly booked and capacity numbers.",
  },
  {
    q: "How is this different from the free forecast?",
    a: "The checklist is you watching your own numbers week by week. The forecast is us modeling your last 12 weeks forward with probability bands, so the crunch weeks show up before they happen. The checklist is the habit; the forecast is the head start.",
  },
];

export default function ChecklistPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://vilouraai.com/checklist#webpage",
        url: "https://vilouraai.com/checklist",
        name: "12-Week Capacity Checklist (free PDF) | VilouraAI",
        description:
          "A one-page weekly tracker for local businesses: log bookings vs capacity for 12 weeks and spot the crunch weeks early.",
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
          <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:pb-20">
            <Reveal immediate>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                Free PDF · Lead magnet
              </p>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="max-w-3xl font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl">
                The 12-week capacity checklist.
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
                Five minutes a week. No more surprise crunch weeks. Log your
                bookings against capacity, read the pattern, and act while
                there is still time — before the waitlist forms or the quiet
                week eats your margin.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="inside-heading"
          className="border-t border-ink/10 bg-parchment/60"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <h2
                id="inside-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                What is inside
              </h2>
            </Reveal>
            <div className="mt-10">
              {INSIDE.map((item, i) => (
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
          aria-labelledby="form-heading"
          className="border-t border-ink/10"
        >
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                Get the PDF
              </p>
              <h2
                id="form-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                One email. Your checklist.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                Enter your email and the download unlocks right here. Your
                email is stored once — no drip sequence, no spam.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10">
                <ChecklistForm />
              </div>
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
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
