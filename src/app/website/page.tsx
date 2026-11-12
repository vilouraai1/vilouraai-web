import type { Metadata } from "next";

import {
  LocationFooter,
  LocationHeader,
} from "~/app/_components/LocationChrome";
import { BOOKING_URL } from "~/app/_components/offers";
import { Reveal } from "~/app/_components/Reveal";

export const metadata: Metadata = {
  title: "Website Launch $497 — new site, live in 7 days",
  description:
    "A mobile-first 5-page website for your Texas business — home, services, about, reviews, contact and booking. $497 one-time, live in 7 days.",
  alternates: { canonical: "https://vilouraai.com/website" },
  openGraph: {
    title: "Website Launch $497 — new site, live in 7 days | VilouraAI",
    description:
      "A mobile-first 5-page website: home, services, about, reviews, contact and booking, plus a Google Business Profile tune-up and basic local SEO. $497 one-time, live in 7 days.",
    url: "https://vilouraai.com/website",
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
    title: "Website Launch $497 — new site, live in 7 days | VilouraAI",
    description:
      "A mobile-first 5-page website for your Texas business. $497 one-time, live in 7 days.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const PAGES = [
  {
    title: "Home",
    body: "What you do, who it is for, and how to reach you — in the first screen, on a phone.",
  },
  {
    title: "Services",
    body: "Your services and prices, written in plain words, so customers know what they are getting before they call.",
  },
  {
    title: "About",
    body: "Who you are and why people trust you. Real words about a real business — nothing copied from a template.",
  },
  {
    title: "Reviews",
    body: "Your real reviews, front and center. If you do not have many yet, we say so honestly and build the page to collect them.",
  },
  {
    title: "Contact / booking",
    body: "An online booking button and a simple contact form, so customers can book at 10pm from the couch — not just during your working hours.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "A 15-min call",
    body: "We talk about your business, your services, and your prices. You send us photos and your logo if you have one. That is the whole brief.",
  },
  {
    n: "02",
    title: "We build it",
    body: "We write the words, build the five pages, tune up your Google Business Profile, and set up basic local SEO. You check it before it goes live.",
  },
  {
    n: "03",
    title: "Live in 7 days",
    body: "Your site is live a week after we start. Customers can find you, read about you, and book — without calling first.",
  },
];

const FAQS = [
  {
    q: "What do you need from me?",
    a: "Your services and prices, a few photos of your work or your place, and your logo if you have one. No logo and no photos? We start with what you have and say so honestly on the page.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. It is yours once it is built. The optional $29-a-month care plan covers hosting, edits, and uptime — month to month, cancel anytime.",
  },
  {
    q: "What does the Google Business Profile tune-up cover?",
    a: "Your hours, services, photos, and description, checked and fixed so the listing matches the new site. If your profile was suspended, we tell you what to fix — we cannot promise Google will reinstate it.",
  },
  {
    q: "Can I change things later?",
    a: "Yes. The care plan covers edits, or you can ask for a one-off change and we will quote it plainly before doing anything.",
  },
];

export default function WebsitePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vilouraai.com/website#service",
        name: "Website Launch",
        description:
          "Mobile-first 5-page website for Texas local businesses, with an online booking button, Google Business Profile tune-up, and basic local SEO. Live in 7 days.",
        provider: { "@id": "https://vilouraai.com/#business" },
        areaServed: "Texas",
        offers: {
          "@type": "Offer",
          price: "497",
          priceCurrency: "USD",
          description: "Website Launch, one-time. Optional care plan $29/mo.",
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
                Website Launch · $497 one-time
              </p>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="max-w-3xl font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl">
                A new website, live in 7 days.
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
                A mobile-first 5-page site for your business — home, services,
                about, reviews, contact and booking — with an online booking
                button, a Google Business Profile tune-up, and basic local SEO.
                Built for you, not from a template you have to fill in.
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
                  href="/bundle"
                  className="inline-block rounded-full border border-ink/20 px-8 py-4 font-display text-lg font-bold text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  See the $597 bundle
                </a>
              </div>
              <p className="mt-4 text-sm text-ink/60">
                $497 one-time · Optional care plan $29/mo (hosting, edits,
                uptime)
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
                What&apos;s included
              </p>
              <h2
                id="included-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Five pages that do the job.
              </h2>
            </Reveal>
            <div className="mt-10">
              {PAGES.map((page, i) => (
                <Reveal key={page.title} delay={i * 100}>
                  <div className="grid gap-2 border-t border-ink/15 py-8 md:grid-cols-12 md:gap-6">
                    <p
                      className="font-display text-xl font-black text-pine md:col-span-2"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-2xl font-bold tracking-tight md:col-span-4">
                      {page.title}
                    </h3>
                    <p className="leading-relaxed text-ink/70 md:col-span-6">
                      {page.body}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-ink/15" aria-hidden="true" />
            </div>
            <Reveal delay={120}>
              <p className="mt-10 max-w-2xl leading-relaxed text-ink/70">
                Plus the Google Business Profile tune-up and basic local SEO,
                so nearby customers can actually find the new site.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
                A new site works best when the phone gets answered too — pair
                it with the{" "}
                <a
                  href="/ai-receptionist"
                  className="font-bold text-pine hover:underline"
                >
                  AI Receptionist ($149/mo)
                </a>
                . Not sure where your current site stands? Get a{" "}
                <a
                  href="/free-seo-audit"
                  className="font-bold text-pine hover:underline"
                >
                  free SEO audit
                </a>{" "}
                first.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="how-heading"
          className="border-t border-ink/10"
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
                Three steps. You barely lift a finger.
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
