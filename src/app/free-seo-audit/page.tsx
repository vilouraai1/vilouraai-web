import type { Metadata } from "next";

import {
  LocationFooter,
  LocationHeader,
} from "~/app/_components/LocationChrome";
import { BOOKING_URL } from "~/app/_components/offers";
import { Reveal } from "~/app/_components/Reveal";

export const metadata: Metadata = {
  title: "Free SEO audit for your business",
  description:
    "A free one-page SEO audit of your website — titles, speed, local listings, and AI visibility — delivered by email. No obligation.",
  alternates: { canonical: "https://vilouraai.com/free-seo-audit" },
  openGraph: {
    title: "Free SEO audit for your business | VilouraAI",
    description:
      "A free one-page SEO audit of your website — titles, speed, local listings, and AI visibility — delivered by email. No obligation.",
    url: "https://vilouraai.com/free-seo-audit",
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
    title: "Free SEO audit for your business | VilouraAI",
    description:
      "A free one-page SEO audit of your website — titles, speed, local listings, and AI visibility — delivered by email. No obligation.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-pine focus:outline-none";

const WHAT_IT_COVERS = [
  {
    title: "Titles & descriptions",
    body: "Whether Google sees a clear title and description on every page — or a doubled brand name and a snippet that cuts off mid-sentence.",
  },
  {
    title: "Local SEO & Google Business Profile",
    body: "Whether your name, phone, hours, and service area match everywhere Google looks — and whether your listing is helping or hurting.",
  },
  {
    title: "Speed & mobile",
    body: "Whether the site loads fast and reads well on a phone, where most of your customers actually find you.",
  },
  {
    title: "AI visibility",
    body: "Whether AI assistants like ChatGPT and Perplexity can find and recommend your business — and what is missing if they cannot.",
  },
];

const FAQS = [
  {
    q: "What do I get?",
    a: "A one-page audit of your website, written in plain words: what is working, what is broken, and the three fixes that matter most. Delivered by email — no dashboard to learn, no logins to hand over.",
  },
  {
    q: "How long does it take?",
    a: "We send the audit by email within a few business days of your request. If your site needs a deeper look, we will say so honestly instead of padding the page.",
  },
  {
    q: "What happens after the audit?",
    a: "Nothing, unless you ask. If the audit shows the site needs real work, the usual next step is Website Launch ($497, live in 7 days) or the AI Receptionist ($149/mo) — or both together in the $597 Launch Bundle. There is no obligation and no follow-up pressure.",
  },
];

export default async function FreeSeoAuditPage({
  searchParams,
}: {
  searchParams?: Promise<{ sent?: string }>;
}) {
  const params = await searchParams;
  const sent = params?.sent === "1";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vilouraai.com/free-seo-audit#service",
        name: "Free SEO audit",
        description:
          "A free one-page SEO audit of a business website — titles, speed, local listings, and AI visibility — delivered by email. No obligation.",
        provider: { "@id": "https://vilouraai.com/#business" },
        areaServed: "Texas",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
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
                Free · No obligation
              </p>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="max-w-3xl font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl">
                A free SEO audit of your website.
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
                One page, plain words: what Google and AI assistants see when
                they look at your site, what is broken, and the three fixes
                that matter most. Delivered by email within a few business
                days. No obligation — if the audit says your site is fine, we
                will say so.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="covers-heading"
          className="border-t border-ink/10 bg-parchment/60"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                What it covers
              </p>
              <h2
                id="covers-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Four checks. One page.
              </h2>
            </Reveal>
            <div className="mt-10">
              {WHAT_IT_COVERS.map((item, i) => (
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
                Request your audit
              </p>
              <h2
                id="form-heading"
                className="font-display text-4xl font-black tracking-tight sm:text-5xl"
              >
                Three fields. That is the whole ask.
              </h2>
            </Reveal>
            {sent ? (
              <div
                role="status"
                className="mt-10 rounded-xl border border-pine/30 bg-paper p-8 text-center"
              >
                <p className="font-display text-3xl font-black tracking-tight">
                  Got it — thank you.
                </p>
                <p className="mt-3 text-ink/70">
                  Your free SEO audit is on its way by email, within a few
                  business days. If you would rather talk it through first,
                  book a 15-min call below.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-pine px-8 py-4 font-display text-base font-bold text-paper transition-colors hover:bg-pine-deep"
                >
                  Book a 15-min call
                </a>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/vilouraai1@gmail.com"
                method="POST"
                className="mt-10 space-y-5"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Free SEO audit request — VilouraAI"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://vilouraai.com/free-seo-audit?sent=1"
                />
                <div>
                  <label
                    htmlFor="business"
                    className="mb-2 block text-sm font-bold"
                  >
                    Business name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="Bright Smile Dental"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="mb-2 block text-sm font-bold"
                  >
                    Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    required
                    autoComplete="url"
                    placeholder="https://yourbusiness.com"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@yourbusiness.com"
                    className={inputClasses}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block rounded-full bg-pine px-8 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
                >
                  Get my free SEO audit
                </button>
                <p className="text-sm text-ink/60">
                  We use your details only to run the audit and email it to
                  you. We do not sell your data.
                </p>
              </form>
            )}
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
              <p className="mt-10 max-w-2xl leading-relaxed text-ink/70">
                If the audit shows the site needs real work, the usual next
                step is{" "}
                <a
                  href="/website"
                  className="font-bold text-pine hover:underline"
                >
                  Website Launch ($497, live in 7 days)
                </a>{" "}
                or the{" "}
                <a
                  href="/ai-receptionist"
                  className="font-bold text-pine hover:underline"
                >
                  AI Receptionist ($149/mo)
                </a>{" "}
                — or both in the{" "}
                <a
                  href="/bundle"
                  className="font-bold text-pine hover:underline"
                >
                  $597 Launch Bundle
                </a>
                . See all the prices on the{" "}
                <a
                  href="/pricing"
                  className="font-bold text-pine hover:underline"
                >
                  pricing page
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
