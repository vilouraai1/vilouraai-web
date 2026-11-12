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
    "Paste 12 weeks of bookings, jobs, or orders and see an instant mini-forecast chart with a 4-week trend projection. Free, in your browser, nothing uploaded. Plus a sample AI receptionist call script and transcript demo.",
  alternates: { canonical: "https://vilouraai.com/demo" },
  openGraph: {
    title: "Try the forecast on your own numbers | VilouraAI",
    description:
      "Paste 12 weeks of your numbers, get an instant mini-forecast chart. Free, in your browser, nothing uploaded. Plus a sample AI receptionist call demo.",
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
      "Paste 12 weeks of your numbers, get an instant mini-forecast chart. Free, in your browser. Plus a sample AI receptionist call demo.",
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

const RECEPTIONIST_FAQS = [
  {
    q: "Is this a recording of a real call?",
    a: "No. There is no recording yet. What you see below is a written sample script and transcript, made up to show how a booking call runs. A real call also ends with a text summary to the owner — that part is real, and it happens after every call.",
  },
  {
    q: "What does the receptionist do when it can't answer?",
    a: "It does not guess. It takes a message and texts the owner a summary, so the owner can call the customer back.",
  },
];

const SAMPLE_CALL: { speaker: string; line: string }[] = [
  {
    speaker: "AI receptionist",
    line: "Hi, thanks for calling Bright Smile Dental — this is Maya. How can I help?",
  },
  {
    speaker: "Caller",
    line: "Hi, do you have anything open this week for a cleaning?",
  },
  {
    speaker: "AI receptionist",
    line: "Yes — I have Thursday at 10:30 in the morning, or Friday at 2. Which works better for you?",
  },
  {
    speaker: "Caller",
    line: "Thursday at 10:30 is great.",
  },
  {
    speaker: "AI receptionist",
    line: "Done — you are booked for Thursday at 10:30. Can I take your name and number for a reminder text?",
  },
  {
    speaker: "Caller",
    line: "Sure, it's Alex, 214-555-0148.",
  },
  {
    speaker: "AI receptionist",
    line: "Thanks, Alex. You will get a reminder the day before. Anything else I can help with?",
  },
  {
    speaker: "Caller",
    line: "No, that's it. Thanks!",
  },
  {
    speaker: "AI receptionist",
    line: "You're welcome — see you Thursday!",
  },
];

const CALL_SCRIPT_STEPS = [
  {
    heading: "Greet by business name",
    body: "The receptionist answers with your business name and a first name, so the caller hears a person, not a menu.",
  },
  {
    heading: "Ask what they need",
    body: "Booking, hours, prices, insurance — it listens first, then answers from the facts you gave it.",
  },
  {
    heading: "Offer two times",
    body: "For a booking it offers two open slots, books the one the caller picks, and confirms it on the spot.",
  },
  {
    heading: "Take the details",
    body: "Name and number for a reminder text. If it cannot answer something, it takes a message instead of guessing.",
  },
  {
    heading: "Text the owner a summary",
    body: "After the call, you get a short text: who called, what they wanted, and what was booked.",
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
                pay for the real thing. Further down the page, there is a
                sample AI receptionist call too.
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
          id="receptionist"
          aria-labelledby="receptionist-heading"
          className="border-t border-ink/10 bg-parchment/60"
        >
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                Demo · AI receptionist · Sample, not a real call
              </p>
              <h2
                id="receptionist-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Hear the AI receptionist.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                There is no recording yet, so this is a written sample: the
                script the receptionist follows, and a transcript of a
                booking call for a dental office. It is made up to show how a
                call runs — the names, number, and times are not real.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10">
                {CALL_SCRIPT_STEPS.map((item, i) => (
                  <div
                    key={item.heading}
                    className="grid gap-2 border-t border-ink/15 py-7 md:grid-cols-12 md:gap-6"
                  >
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
                ))}
                <div className="border-t border-ink/15" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 space-y-4 rounded-xl border border-ink/10 bg-white p-7 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-pine">
                  Sample transcript · Demo only
                </p>
                {SAMPLE_CALL.map((turn, i) => (
                  <p key={i} className="leading-relaxed text-ink/75">
                    <span className="font-bold text-ink">
                      {turn.speaker}:
                    </span>{" "}
                    {turn.line}
                  </p>
                ))}
                <p className="border-t border-ink/10 pt-4 text-sm text-ink/60">
                  Text to the owner after this call: “New booking — Alex,
                  cleaning, Thu 10:30. Reminder text sent. Number:
                  214-555-0148.” (Sample text; the number above is not real.)
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8">
                {RECEPTIONIST_FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="faq-item group border-t border-ink/15 py-6 last:border-b"
                  >
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
                ))}
              </div>
              <a
                href="/ai-receptionist"
                className="mt-10 inline-block rounded-full bg-pine px-8 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
              >
                AI Receptionist — $149/mo
              </a>
            </Reveal>
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
