import type { Metadata } from "next";

import {
  LocationFooter,
  LocationHeader,
} from "~/app/_components/LocationChrome";
import { Reveal } from "~/app/_components/Reveal";

export const metadata: Metadata = {
  title: "VilouraAI vs spreadsheets vs gut feel | VilouraAI",
  description:
    "Compare VilouraAI's 12-week booking forecast with spreadsheets and gut feel: probability bands vs static rows, your real numbers vs memory, a plan vs a hunch.",
  alternates: { canonical: "https://vilouraai.com/compare" },
  openGraph: {
    title: "VilouraAI vs spreadsheets vs gut feel | VilouraAI",
    description:
      "Compare VilouraAI's 12-week booking forecast with spreadsheets and gut feel: probability bands vs static rows, your real numbers vs memory, a plan vs a hunch.",
    url: "https://vilouraai.com/compare",
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
    title: "VilouraAI vs spreadsheets vs gut feel | VilouraAI",
    description:
      "Compare VilouraAI's 12-week booking forecast with spreadsheets and gut feel.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const ROWS: { label: string; vilouraai: string; spreadsheet: string; gut: string }[] = [
  {
    label: "What it runs on",
    vilouraai: "Your last 12 weeks of real bookings, modeled forward",
    spreadsheet: "Your past numbers, typed into rows by hand",
    gut: "Memory and feel",
  },
  {
    label: "How far ahead it sees",
    vilouraai: "12 weeks, with the crunch weeks flagged",
    spreadsheet: "As far back as you entered — it looks backward, not forward",
    gut: "This week, maybe next",
  },
  {
    label: "How sure it is",
    vilouraai: "Probability bands: a range that shows the uncertainty",
    spreadsheet: "One number per cell — no sense of how sure to be",
    gut: "No measure at all",
  },
  {
    label: "What happens when demand shifts",
    vilouraai: "The forecast updates with your new bookings",
    spreadsheet: "Stale the moment you stop maintaining it",
    gut: "You notice after the waitlist forms",
  },
  {
    label: "What it tells you to do",
    vilouraai: "Which weeks to open hours, staff up, or run an offer",
    spreadsheet: "What happened — you decide what it means",
    gut: "Discount now, hope later",
  },
  {
    label: "Time it costs you",
    vilouraai: "Ten minutes to send an export",
    spreadsheet: "Hours of building and upkeep, every month",
    gut: "None — and it shows",
  },
  {
    label: "What it costs",
    vilouraai: "Free for the 12-week forecast",
    spreadsheet: "Your evenings",
    gut: "The margin on every week you misread",
  },
];

const DETAILS = [
  {
    heading: "Spreadsheets tell you what happened",
    body: "A spreadsheet is a ledger, not a forecast. It shows last month's bookings accurately — and says nothing about next month's. Keeping one alive costs hours of manual entry, and the moment you stop, it goes stale. It has no probability bands, no seasonality it figured out on its own, and no way to flag the week that is about to overflow. If you already keep one, good: that export is exactly what we build your forecast from. The spreadsheet did the recording. We do the looking ahead.",
  },
  {
    heading: "Gut feel tells you what you hope",
    body: "Gut feel is fast and confident and wrong in the same direction every time: it remembers the busy weeks, forgets the quiet ones, and turns a good month into a permanent expectation. It is also how discounts happen — a slow Tuesday feels like a crisis, so you cut prices on a week that would have filled on its own. Gut feel is not useless; it is just not a plan. A forecast gives your instincts something to check against: real numbers, with the uncertainty shown.",
  },
  {
    heading: "VilouraAI tells you what is coming",
    body: "Twelve weeks of your bookings, modeled forward, with probability bands instead of a single made-up number. The crunch weeks get flagged while you can still open hours, staff up, and hold full price. The quiet weeks get flagged too, so your offers land where they actually earn their keep. You keep the forecast either way — the free version is yours whether or not you ever pay us a dollar.",
  },
];

const FAQS = [
  {
    q: "I already have a spreadsheet. Do I still need this?",
    a: "Yes — and your spreadsheet is the raw material. Send us the export and we turn the history it recorded into a forward-looking forecast with probability bands. The spreadsheet looks backward. We look ahead.",
  },
  {
    q: "Is this just a fancier spreadsheet?",
    a: "No. A spreadsheet shows one number per cell and no sense of how sure to be. A forecast shows a range, flags the weeks that will overbook, and updates as your bookings change. Different job, different tool.",
  },
  {
    q: "What if my gut feel has worked so far?",
    a: "Then your forecast will mostly confirm it — and the weeks where it disagrees are exactly the weeks worth knowing about. The forecast does not replace your judgment. It gives your judgment better evidence.",
  },
];

export default function ComparePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://vilouraai.com/compare#webpage",
        url: "https://vilouraai.com/compare",
        name: "VilouraAI vs spreadsheets vs gut feel | VilouraAI",
        description:
          "Compare VilouraAI's 12-week booking forecast with spreadsheets and gut feel.",
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
                Compare · VilouraAI vs the usual ways
              </p>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="max-w-3xl font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl">
                Three ways to plan your next 12 weeks. Only one looks ahead.
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
                Most local businesses plan with a spreadsheet, their gut, or
                nothing at all. Here is what each one actually gives you — and
                what a forecast built on your real bookings gives you instead.
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
                  the numbers either way.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="table-heading" className="border-t border-ink/10 bg-parchment/60">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <h2
                id="table-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Side by side
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-12 overflow-x-auto rounded-xl border border-ink/10 bg-white">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-ink/10">
                      <th scope="col" className="px-6 py-5 font-display text-lg font-bold">
                        <span className="sr-only">Aspect</span>
                      </th>
                      <th scope="col" className="bg-pine px-6 py-5 font-display text-lg font-bold text-paper">
                        VilouraAI
                      </th>
                      <th scope="col" className="px-6 py-5 font-display text-lg font-bold">
                        Spreadsheet
                      </th>
                      <th scope="col" className="px-6 py-5 font-display text-lg font-bold">
                        Gut feel
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((row) => (
                      <tr key={row.label} className="border-b border-ink/10 last:border-b-0">
                        <th scope="row" className="px-6 py-5 align-top font-bold">
                          {row.label}
                        </th>
                        <td className="bg-pine/5 px-6 py-5 align-top leading-relaxed">
                          {row.vilouraai}
                        </td>
                        <td className="px-6 py-5 align-top leading-relaxed text-ink/70">
                          {row.spreadsheet}
                        </td>
                        <td className="px-6 py-5 align-top leading-relaxed text-ink/70">
                          {row.gut}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="details-heading" className="border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <h2
                id="details-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                The honest version
              </h2>
            </Reveal>
            <div className="mt-10">
              {DETAILS.map((detail, i) => (
                <Reveal key={detail.heading} delay={i * 100}>
                  <div className="grid gap-2 border-t border-ink/15 py-8 md:grid-cols-12 md:gap-6">
                    <p className="font-display text-xl font-black text-pine md:col-span-2" aria-hidden="true">
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-2xl font-bold tracking-tight md:col-span-4">
                      {detail.heading}
                    </h3>
                    <p className="leading-relaxed text-ink/70 md:col-span-6">
                      {detail.body}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-ink/15" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="border-t border-ink/10 bg-parchment/60">
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

        <section aria-labelledby="cta-heading" className="border-t border-ink/10">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
            <Reveal>
              <h2
                id="cta-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Try the one that looks ahead.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
                Three fields. One business day. A forecast built on your
                bookings, yours to keep either way.
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
