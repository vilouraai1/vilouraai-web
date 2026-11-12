import type { Metadata } from "next";

import {
  LocationFooter,
  LocationHeader,
} from "~/app/_components/LocationChrome";
import { BOOKING_URL } from "~/app/_components/offers";
import { Reveal } from "~/app/_components/Reveal";

export const metadata: Metadata = {
  title: "AI Receptionist $149/mo — every call answered",
  description:
    "An AI receptionist that answers every call in a natural voice, books appointments, and texts you a summary. $149/mo, no setup fee, first 14 days free.",
  alternates: { canonical: "https://vilouraai.com/ai-receptionist" },
  openGraph: {
    title: "AI Receptionist $149/mo — every call answered, 24/7 | VilouraAI",
    description:
      "Answers every call in a natural voice, books appointments, answers FAQs, and texts you a summary. $149/mo, no setup fee, first 14 days free.",
    url: "https://vilouraai.com/ai-receptionist",
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
    title: "AI Receptionist $149/mo — every call answered, 24/7 | VilouraAI",
    description:
      "Answers every call in a natural voice, books appointments, and texts you a summary. $149/mo, first 14 days free.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const FEATURES = [
  {
    title: "Answers every call, 24/7",
    body: "Evenings, weekends, while you are with another customer. The phone always gets picked up, in a natural voice — not a robot menu.",
  },
  {
    title: "Books the appointment",
    body: "It checks your calendar and books the customer in, then confirms the time with them. No phone tag, no missed booking.",
  },
  {
    title: "Answers the FAQs",
    body: "Hours, prices, insurance, location — the questions you answer ten times a day. You decide what it is allowed to answer.",
  },
  {
    title: "Texts you a summary",
    body: "After every call you get a short text: who called, what they wanted, and what was booked. You are never out of the loop.",
  },
  {
    title: "Missed-call text-back",
    body: "If a call does slip through, the caller gets a text right away offering to book. The customer is not left wondering if anyone is there.",
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

const STEPS = [
  {
    n: "01",
    title: "A 15-min call",
    body: "We learn your hours, services, prices, and the questions customers always ask. You decide what the receptionist is allowed to answer.",
  },
  {
    n: "02",
    title: "We set it up and test it",
    body: "We connect it to your existing business number and your calendar, then test it with you — including the awkward questions — before it answers a real call.",
  },
  {
    n: "03",
    title: "It answers, you get the summary",
    body: "Every call is answered, appointments get booked, and you get a text summary after each one. First 14 days are free.",
  },
];

const FAQS = [
  {
    q: "What if the AI can't answer a question?",
    a: "It does not guess. It takes a message and texts you a summary, so you can call the customer back. We start narrow on purpose — hours, prices, booking — and only add more when you are happy with how it handles them.",
  },
  {
    q: "Do I keep my phone number?",
    a: "Yes. The receptionist answers on your existing business number. Your customers call the same number they always have.",
  },
  {
    q: "Will customers know it is AI?",
    a: "It speaks naturally and introduces itself by name. If a customer asks, it says it is the AI receptionist. It never pretends to be you.",
  },
  {
    q: "Is there a contract?",
    a: "No. Month to month, cancel anytime. No setup fee. The first 14 days are free, so you can hear it work on real calls before you pay anything.",
  },
  {
    q: "What do you do with call data?",
    a: "Call summaries go to you, the owner, and are used only to run your receptionist. We do not sell your data or your customers' data.",
  },
];

export default function AiReceptionistPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vilouraai.com/ai-receptionist#service",
        name: "AI Receptionist",
        description:
          "Answers every call 24/7 in a natural voice, books appointments, answers FAQs (hours, prices, insurance), texts the owner a summary, and sends a missed-call text-back.",
        provider: { "@id": "https://vilouraai.com/#business" },
        areaServed: "Texas",
        offers: {
          "@type": "Offer",
          price: "149",
          priceCurrency: "USD",
          description:
            "AI Receptionist, $149/mo. No setup fee, cancel anytime, first 14 days free.",
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
                AI Receptionist · $149/mo · First 14 days free
              </p>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="max-w-3xl font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl">
                Every call answered. Every appointment booked.
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
                An AI receptionist that answers every call in a natural voice,
                books the appointment, answers the questions you answer ten
                times a day, and texts you a summary — so the customer
                doesn&apos;t call your competitor next.
              </p>
            </Reveal>
            <Reveal immediate delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="/demo#receptionist"
                  className="inline-block rounded-full bg-pine px-8 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
                >
                  Hear the AI receptionist
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-ink/20 px-8 py-4 font-display text-lg font-bold text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  Book a 15-min call
                </a>
              </div>
              <p className="mt-4 text-sm text-ink/60">
                $149/mo · No setup fee · Cancel anytime · First 14 days free
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="does-heading"
          className="border-t border-ink/10 bg-parchment/60"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                What it does
              </p>
              <h2
                id="does-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                The front desk that never steps away.
              </h2>
            </Reveal>
            <div className="mt-10">
              {FEATURES.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 100}>
                  <div className="grid gap-2 border-t border-ink/15 py-8 md:grid-cols-12 md:gap-6">
                    <p
                      className="font-display text-xl font-black text-pine md:col-span-2"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-2xl font-bold tracking-tight md:col-span-4">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-ink/70 md:col-span-6">
                      {feature.body}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-ink/15" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="sample-heading"
          className="border-t border-ink/10"
        >
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                Sample call · Demo transcript
              </p>
              <h2
                id="sample-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                What a call sounds like.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                This is a written sample of a booking call for a dental
                office — not a recording of a real customer. The full demo,
                with the script and the transcript, is on the{" "}
                <a
                  href="/demo#receptionist"
                  className="font-bold text-pine hover:underline"
                >
                  demo page
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 space-y-4 rounded-xl border border-ink/10 bg-white p-7 sm:p-10">
                {SAMPLE_CALL.map((turn, i) => (
                  <p key={i} className="leading-relaxed text-ink/75">
                    <span className="font-bold text-ink">
                      {turn.speaker}:
                    </span>{" "}
                    {turn.line}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="how-heading"
          className="border-t border-ink/10 bg-parchment/60"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                How it works
              </p>
              <h2
                id="how-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Set up with you, not for you.
              </h2>
            </Reveal>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 120}>
                  <li>
                    <p
                      className="font-display text-6xl font-black text-pine/25"
                      aria-hidden="true"
                    >
                      {step.n}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink/70">
                      {step.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
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
            <Reveal delay={120}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-pine px-8 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
              >
                Book a 15-min call
              </a>
              <p className="mt-6 max-w-2xl leading-relaxed text-ink/70">
                The receptionist answers the calls your new site sends it —{" "}
                <a
                  href="/website"
                  className="font-bold text-pine hover:underline"
                >
                  Website Launch is $497, live in 7 days
                </a>
                . Wondering how your current site is doing? Start with a{" "}
                <a
                  href="/free-seo-audit"
                  className="font-bold text-pine hover:underline"
                >
                  free SEO audit
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
