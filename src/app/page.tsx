import { ContactForm } from "~/app/_components/ContactForm";
import { ForecastChart } from "~/app/_components/ForecastChart";
import { Reveal } from "~/app/_components/Reveal";
import { StickyCta } from "~/app/_components/StickyCta";
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  OFFERS,
  PRISQO_URL,
} from "~/app/_components/offers";

const PRISQO_FREE_CHECK = `${PRISQO_URL}/free-check?ref=viloura`;
const GOOGLE_PROFILE_URL = "https://share.google/56agIYRJv4O5Jcj5Q";
const PHONE_DISPLAY = "(469) 496-5431";
const PHONE_HREF = "tel:+14694965431";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pine">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
      {children}
    </h2>
  );
}

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#prisqo", label: "AI visibility" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-display text-xl font-black tracking-tight"
        >
          VilouraAI
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-ink/70 transition-colors hover:text-pine"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#audit"
          className="rounded-full bg-pine px-5 py-2.5 text-sm font-bold text-paper transition-colors hover:bg-pine-deep"
        >
          Free SEO audit
        </a>
      </nav>
    </header>
  );
}

const AUDIT_INPUT_CLASSES =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3.5 text-ink placeholder:text-ink/40 transition-colors focus:border-pine focus:outline-none";

/**
 * The free audit form, posted to FormSubmit (same contract as the
 * /free-seo-audit page). First FormSubmit submission needs activation
 * via vilouraai1@gmail.com.
 */
function AuditForm() {
  return (
    <form
      action="https://formsubmit.co/vilouraai1@gmail.com"
      method="POST"
      className="space-y-4"
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
        value="https://vilouraai.com/?sent=1"
      />
      <div>
        <label htmlFor="audit-business" className="mb-2 block text-sm font-bold">
          Business name
        </label>
        <input
          id="audit-business"
          name="business"
          type="text"
          required
          autoComplete="organization"
          placeholder="Bright Smile Dental"
          aria-label="Business name"
          className={AUDIT_INPUT_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="audit-website" className="mb-2 block text-sm font-bold">
          Website
        </label>
        <input
          id="audit-website"
          name="website"
          type="url"
          required
          autoComplete="url"
          placeholder="https://yourbusiness.com"
          aria-label="Website address"
          className={AUDIT_INPUT_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="audit-email" className="mb-2 block text-sm font-bold">
          Email
        </label>
        <input
          id="audit-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@yourbusiness.com"
          aria-label="Email address"
          className={AUDIT_INPUT_CLASSES}
        />
      </div>
      <button
        type="submit"
        aria-label="Get my free SEO audit"
        className="w-full rounded-full bg-pine px-6 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
      >
        Get my free SEO audit
      </button>
      <p className="text-center text-sm text-ink/60">
        One page, by email, within a few business days. No obligation.
      </p>
    </form>
  );
}

function Hero({ sent }: { sent: boolean }) {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal immediate>
              <Eyebrow>
                VilouraAI · Websites & AI receptionist · Lewisville, TX
              </Eyebrow>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.1rem]">
                A new website in 7 days. Every call answered.
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                VilouraAI builds mobile-first websites for Dallas–Fort Worth
                small businesses and answers every call with an AI
                receptionist that books the appointment. Start with a free
                SEO audit and see exactly what Google and AI assistants think
                of your site today.
              </p>
            </Reveal>
            <Reveal immediate delay={240}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#audit"
                  className="inline-block rounded-full bg-pine px-8 py-4 text-center font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
                >
                  Get my free SEO audit
                </a>
                <a
                  href={PRISQO_FREE_CHECK}
                  className="inline-block rounded-full border border-ink/20 px-8 py-4 text-center font-display text-lg font-bold text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  Check AI Visibility ($19)
                </a>
              </div>
              <p className="mt-4 text-sm text-ink/60">
                Free audit. No logins. No new software. You keep the audit
                either way.
              </p>
            </Reveal>
          </div>
          <Reveal immediate delay={200} className="lg:col-span-5">
            <div
              id="audit"
              className="scroll-mt-24 rounded-xl border border-ink/10 bg-white p-7 shadow-[0_24px_60px_-30px_rgba(28,24,19,0.35)] sm:p-8"
            >
              {sent ? (
                <div role="status" className="py-6 text-center">
                  <p className="font-display text-3xl font-black tracking-tight">
                    Got it — thank you.
                  </p>
                  <p className="mt-3 leading-relaxed text-ink/70">
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
                <>
                  <p className="font-display text-2xl font-bold tracking-tight">
                    Free SEO audit
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    Three fields. We reply by email within a few business
                    days.
                  </p>
                  <div className="mt-6">
                    <AuditForm />
                  </div>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PrisqoSection() {
  return (
    <section
      id="prisqo"
      aria-labelledby="prisqo-heading"
      className="scroll-mt-20 border-t border-ink/10 bg-parchment/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Prisqo · AI visibility</Eyebrow>
              <SectionHeading>
                <span id="prisqo-heading">
                  Does AI recommend your business?
                </span>
              </SectionHeading>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
                Your next customer is asking ChatGPT, Perplexity, and Google
                AI for the best business near them — not scrolling a results
                page. Prisqo asks those AI assistants about businesses like
                yours and shows you, in plain words, whether yours gets
                named. If it does not, the report shows what is missing.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
                One report, $19, one time. No subscription, no account.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={PRISQO_FREE_CHECK}
                  className="inline-block rounded-full bg-pine px-8 py-4 text-center font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
                >
                  Check AI Visibility ($19)
                </a>
                <a
                  href={`${PRISQO_URL}?ref=viloura`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-pine underline-offset-4 hover:underline"
                >
                  Learn more about Prisqo →
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={160} className="lg:col-span-5">
            <div className="rounded-xl border border-ink/10 bg-white p-8">
              <p className="font-display text-xl font-bold tracking-tight">
                What the $19 report tells you
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Whether AI assistants name your business when asked",
                  "Whether you make their top 3 — and who does instead",
                  "What is missing when you are not named",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-ink/75">
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-ink/60">
                Or try the free 10-second check first — same link, no
                payment.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type ServiceCard = {
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

const SERVICE_CARDS: ServiceCard[] = [
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
    href: "#audit",
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
    href: "#contact",
  },
  {
    name: OFFERS.receptionist.name,
    price: OFFERS.receptionist.price,
    priceNote: OFFERS.receptionist.priceNote,
    tagline: OFFERS.receptionist.tagline,
    features: [...OFFERS.receptionist.features],
    note: OFFERS.receptionist.carePlan,
    cta: OFFERS.receptionist.cta,
    href: "#contact",
  },
  {
    name: OFFERS.bundle.name,
    price: OFFERS.bundle.price,
    priceNote: OFFERS.bundle.priceNote,
    tagline: OFFERS.bundle.tagline,
    features: [...OFFERS.bundle.features],
    cta: OFFERS.bundle.cta,
    href: "#contact",
    featured: true,
  },
];

function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 border-t border-ink/10"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <SectionHeading>
            <span id="services-heading">Start free. Pay when it pays.</span>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            The audit is free because it sells itself. If the numbers do
            not make you money, do not spend another dollar with us.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((card, i) => (
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
                <h3 className="font-display text-xl font-bold">{card.name}</h3>
                <p className="mt-2 font-display text-5xl font-black tracking-tight">
                  {card.price}
                </p>
                <p className="mt-1 text-sm text-ink/60">
                  {card.priceNote} · {card.tagline}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-ink/75">
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
  );
}

// Booking forecast — kept from the live site per Kiwi's Nov 12 amendment
// (task muse-seo-1): the redesigned homepage highlights Prisqo, the free SEO
// audit, and the existing forecasting. Copy, chart, routes and prices are the
// live site's own; only the styling matches the new design.
function Forecast() {
  return (
    <section
      id="forecast"
      aria-labelledby="forecast-heading"
      className="scroll-mt-20 border-t border-ink/10"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Booking forecast</Eyebrow>
            <SectionHeading>
              <span id="forecast-heading">
                Your competitors are guessing their next 12 weeks. You
                won&apos;t have to.
              </span>
            </SectionHeading>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              Free booking forecast for Texas businesses. We flag the exact
              weeks you&apos;ll turn customers away, with probability bands
              instead of guesses — so you staff them, price them, and keep
              them before they go to someone else.
            </p>
            <ul className="mt-8 space-y-3 text-base leading-relaxed">
              <li>Free 12-week booking forecast, built on your numbers</li>
              <li>Overbook weeks flagged, with probability bands</li>
              <li>$495 Forecast Sprint for the 90-day deep dive</li>
              <li>Yours to keep, no strings</li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block rounded-full bg-pine px-8 py-4 text-center font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
              >
                Get my free forecast
              </a>
              <a
                href="/demo"
                className="inline-block rounded-full border border-ink/20 px-8 py-4 text-center font-display text-lg font-bold text-ink transition-colors hover:border-pine hover:text-pine"
              >
                Try the forecast demo
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ForecastChart />
            <p className="mt-4 text-sm leading-relaxed text-ink/55">
              Illustrative sample: holiday demand running past capacity. Your
              forecast is built on your bookings, not these numbers.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Submit your URL",
    body: "Send your website address and email. Three fields, two minutes. No logins, no new software.",
  },
  {
    n: "02",
    title: "AI & SEO analysis",
    body: "We check what Google and AI assistants see when they look at your site: titles, local listings, speed, and whether AI recommends you.",
  },
  {
    n: "03",
    title: "Actionable report & growth plan",
    body: "You get a one-page audit by email: what is working, what is broken, and the three fixes that matter most. No obligation — if the audit says your site is fine, we will say so.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-20 border-t border-ink/10 bg-parchment/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <SectionHeading>
            <span id="how-heading">Three steps. No new software.</span>
          </SectionHeading>
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
                <p className="mt-3 leading-relaxed text-ink/70">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "How much does it cost?",
    a: "Website Launch is $497 one-time. AI Receptionist is $149 a month, with no setup fee and the first 14 days free. The Launch Bundle is $597: the site, the first month of the receptionist, and a Prisqo AI-visibility report ($19 value). The free SEO audit and the booking forecast cost nothing.",
  },
  {
    q: "How fast do I get it?",
    a: "Your free SEO audit arrives by email within a few business days. Your new site is live in 7 days from when we have your details and photos. The AI receptionist is set up with your hours, services, and prices, and we test it with you before it answers a real call.",
  },
  {
    q: "Is there a contract? What about the 14-day trial?",
    a: "No contract. The receptionist is month to month and you can cancel anytime — the first 14 days are free, so you can hear it answer real calls before you pay. The website is yours once it is built. The optional $29-a-month care plan (hosting, edits, uptime) is month to month too.",
  },
  {
    q: "What does the free SEO audit deliver?",
    a: "A one-page audit of your website, written in plain words: what is working, what is broken, and the three fixes that matter most. It covers titles and descriptions, local SEO and your Google Business Profile, speed and mobile, and AI visibility. Delivered by email — no dashboard to learn, no logins to hand over.",
  },
  {
    q: "What if the AI receptionist can't answer a question?",
    a: "It does not guess. It takes a message and texts you a summary, so you can call the customer back. You decide what it is allowed to answer, and we start narrow on purpose.",
  },
  {
    q: "Do I keep my phone number?",
    a: "Yes. The receptionist answers on your existing business number. Your customers call the same number they always have.",
  },
];

function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-20 border-t border-ink/10"
    >
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <SectionHeading>
            <span id="faq-heading">Straight answers</span>
          </SectionHeading>
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
  );
}

function Founder() {
  return (
    <section aria-labelledby="founder-heading" className="border-t border-ink/10 bg-parchment/60">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>Who we are</Eyebrow>
          <SectionHeading>
            <span id="founder-heading">One person. One standard.</span>
          </SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            VilouraAI is run by Adharsh J., who goes by Jim, out of
            Lewisville, Texas. The rule here is simple: the numbers have to
            be useful or we do not ship them. That is the whole business
            model.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-ink/10"
    >
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <SectionHeading>
            <span id="contact-heading">Tell us what you need</span>
          </SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Pick a service and we reply within one business day. Or call{" "}
            <a
              href={PHONE_HREF}
              className="font-bold text-pine underline-offset-4 hover:underline"
            >
              {PHONE_DISPLAY}
            </a>{" "}
            — every day, 7:00 AM–7:00 PM.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 rounded-xl border border-ink/10 bg-white p-7 shadow-[0_24px_60px_-30px_rgba(28,24,19,0.3)] sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="font-display text-xl font-black tracking-tight">
            VilouraAI
          </p>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6 text-sm text-paper/60">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/locations"
              className="transition-colors hover:text-paper"
            >
              Locations
            </a>
            <a href="/compare" className="transition-colors hover:text-paper">
              Compare
            </a>
            <a
              href="/checklist"
              className="transition-colors hover:text-paper"
            >
              Checklist
            </a>
            <a href="/demo" className="transition-colors hover:text-paper">
              Demo
            </a>
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper"
            >
              Find us on Google
            </a>
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-6 text-sm text-paper/60 sm:flex-row">
          <p>© 2026 VilouraAI LLC · Lewisville, Texas</p>
          <p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-paper"
            >
              {CONTACT_EMAIL}
            </a>
            {" · "}
            <a
              href={PHONE_HREF}
              className="transition-colors hover:text-paper"
            >
              {PHONE_DISPLAY}
            </a>
            {" · Daily 7:00 AM–7:00 PM"}
          </p>
        </div>
      </div>
    </footer>
  );
}

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ sent?: string }>;
}) {
  const params = await searchParams;
  const sent = params?.sent === "1";
  return (
    <>
      <StructuredData />
      <Nav />
      <main>
        <Hero sent={sent} />
        <PrisqoSection />
        <Services />
        <Forecast />
        <HowItWorks />
        <Faq />
        <Founder />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
