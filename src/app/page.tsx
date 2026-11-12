import { ContactForm } from "~/app/_components/ContactForm";
import { ForecastChart } from "~/app/_components/ForecastChart";
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  GOOGLE_PROFILE_URL,
  OFFERS,
  PRISQO_URL,
  SERVICE_FAQS,
} from "~/app/_components/offers";
import { Reveal } from "~/app/_components/Reveal";
import { StickyCta } from "~/app/_components/StickyCta";

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
  { href: "/pricing", label: "Pricing" },
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
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-pine px-5 py-2.5 text-sm font-bold text-paper transition-colors hover:bg-pine-deep"
        >
          Book a 15-min call
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal immediate>
              <Eyebrow>
                VilouraAI · Websites &amp; AI receptionist · Lewisville, TX
              </Eyebrow>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="font-display text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.1rem]">
                Stop losing customers to voicemail and a broken website.
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                VilouraAI builds your new site in 7 days and gives you an AI
                receptionist that answers every call and books the
                appointment, so the customer doesn&apos;t call your competitor
                next.
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
                  href="/demo#receptionist"
                  className="inline-block rounded-full border border-ink/20 px-8 py-4 font-display text-lg font-bold text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  Hear the AI receptionist
                </a>
              </div>
              <p className="mt-4 text-sm text-ink/60">
                Local to Lewisville, TX · I reply within one business day
              </p>
            </Reveal>
          </div>
          <Reveal immediate delay={200} className="lg:col-span-5">
            <figure className="overflow-hidden rounded-xl border border-ink/10 bg-white px-4 pt-4 shadow-[0_24px_60px_-30px_rgba(28,24,19,0.35)]">
              <ForecastChart />
              <figcaption className="border-t border-ink/10 px-5 py-4 text-sm leading-relaxed text-ink/60">
                Illustrative sample: holiday demand running past capacity.
                Your forecast is built on your bookings, not these numbers.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const PROBLEMS = [
  {
    title: "Missed calls",
    body: "You are with a customer, on a ladder, or driving between jobs. The phone rings, nobody picks up, and the caller tries the next business on the list. Most of them do not leave a voicemail.",
  },
  {
    title: "No website — or a broken one",
    body: "No site at all, a site from 2012, or one that Google has suspended. Either way, the customer who looked you up before calling has already made up their mind.",
  },
  {
    title: "No online booking",
    body: "People book at 10pm from the couch. If the only way to book is to call during your working hours, you lose every customer who tried after hours.",
  },
  {
    title: "Not showing up when people ask AI",
    body: "Customers now ask ChatGPT or Google's AI who to call. If your business is invisible there — no clear site, no reviews, no listing — you are not in the running at all.",
  },
];

function ProblemsWeFix() {
  return (
    <section
      aria-labelledby="problems-heading"
      className="border-t border-ink/10 bg-parchment/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>The problem</Eyebrow>
          <SectionHeading>
            <span id="problems-heading">Problems we fix</span>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            None of this is your fault. You are busy doing the work. But
            every one of these quietly hands your customers to the business
            down the road.
          </p>
        </Reveal>
        <div className="mt-10">
          {PROBLEMS.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 100}>
              <div className="grid gap-2 border-t border-ink/15 py-8 md:grid-cols-12 md:gap-6">
                <p
                  className="font-display text-xl font-black text-pine md:col-span-2"
                  aria-hidden="true"
                >
                  0{i + 1}
                </p>
                <h3 className="font-display text-2xl font-bold tracking-tight md:col-span-4">
                  {problem.title}
                </h3>
                <p className="leading-relaxed text-ink/70 md:col-span-6">
                  {problem.body}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-ink/15" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

const SERVICES = [OFFERS.website, OFFERS.receptionist, OFFERS.bundle];

function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-ink/10"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>Done for you</Eyebrow>
          <SectionHeading>
            <span id="services-heading">
              Two services. One fixes the phone, one fixes the website.
            </span>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            We build it, we set it up, we test it with you. You keep running
            your business. The booking forecast is still there too — free, as
            always.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={i * 120}>
              <article className="flex h-full flex-col rounded-xl border border-ink/10 bg-white p-8">
                <h3 className="font-display text-xl font-bold">
                  {service.name}
                </h3>
                <p className="mt-2 font-display text-5xl font-black tracking-tight">
                  {service.price}
                  <span className="ml-2 align-middle font-sans text-base font-bold text-ink/50">
                    {service.priceNote}
                  </span>
                </p>
                <p className="mt-1 text-sm text-ink/60">{service.tagline}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {service.features.map((feature) => (
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
                <p className="mt-6 text-sm text-ink/60">{service.carePlan}</p>
                <a
                  href={service.href}
                  className="mt-6 rounded-full border border-ink/20 px-6 py-3.5 text-center font-display text-base font-bold text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  {service.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/70">
            Plus the{" "}
            <a href="/demo" className="font-bold text-pine hover:underline">
              free 12-week booking forecast
            </a>{" "}
            — see your busy weeks before they hit, with probability bands
            instead of guesses. Try the demo, then keep the forecast.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const TRAP_POINTS = [
  {
    title: "Discounts train customers to wait",
    body: "Every promo teaches your regulars one lesson: never pay full price. The margin you give away in December does not come back in January.",
  },
  {
    title: "Turned-away bookings do not come back",
    body: "When you are overbooked, the clients you cannot fit do not wait politely. They book with whoever had a chair open.",
  },
  {
    title: "Someone else sees it coming",
    body: "The businesses that plan their busy weeks open extra hours and hold full price. The rest discount blindly and wonder where the margin went.",
  },
];

function DiscountTrap() {
  return (
    <section
      aria-labelledby="trap-heading"
      className="border-t border-ink/10 bg-parchment/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>The problem</Eyebrow>
          <SectionHeading>
            <span id="trap-heading">The discount trap</span>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            Slow week? Drop a discount. Busy week? Turn people away at the
            door. Most local businesses run this playbook on instinct, which
            means discounting the weeks that need help and giving away margin
            in the weeks that do not. Nobody can feel the difference coming.
            A forecast can.
          </p>
        </Reveal>
        <div className="mt-10">
          {TRAP_POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 100}>
              <div className="grid gap-2 border-t border-ink/15 py-8 md:grid-cols-12 md:gap-6">
                <p
                  className="font-display text-xl font-black text-pine md:col-span-2"
                  aria-hidden="true"
                >
                  0{i + 1}
                </p>
                <h3 className="font-display text-2xl font-bold tracking-tight md:col-span-4">
                  {point.title}
                </h3>
                <p className="leading-relaxed text-ink/70 md:col-span-6">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-ink/15" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Share 12 weeks of bookings",
    body: "A simple export from whatever you already use. No logins, no new software. Ten minutes of your time.",
  },
  {
    n: "02",
    title: "We model what comes next",
    body: "Our forecasting engine reads your seasonal patterns and flags the exact weeks that will overbook, with probability bands instead of guesses.",
  },
  {
    n: "03",
    title: "You decide what to do with it",
    body: "Run the playbook yourself, or keep us on monthly. Either way, the forecast is yours to keep.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="border-t border-ink/10"
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

const PRICING_TIERS = [
  OFFERS.website,
  { ...OFFERS.bundle, featured: true },
  OFFERS.receptionist,
];

function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="border-t border-ink/10 bg-parchment/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>Pricing</Eyebrow>
          <SectionHeading>
            <span id="pricing-heading">Plain prices. No contract.</span>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            The receptionist is month to month and you can cancel anytime.
            The website is yours once it is built. The forecast is free.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => {
            const featured =
              "featured" in tier && tier.featured === true;
            return (
              <Reveal key={tier.name} delay={i * 120}>
                <article
                  className={`flex h-full flex-col rounded-xl border bg-white p-8 ${
                    featured
                      ? "border-pine shadow-[0_24px_60px_-30px_rgba(23,96,60,0.45)]"
                      : "border-ink/10"
                  }`}
                >
                  {featured && (
                    <p className="mb-4 inline-flex w-fit rounded-full bg-pine px-3 py-1 text-xs font-bold uppercase tracking-wider text-paper">
                      Most popular
                    </p>
                  )}
                  <h3 className="font-display text-xl font-bold">
                    {tier.name}
                  </h3>
                  <p className="mt-2 font-display text-5xl font-black tracking-tight">
                    {tier.price}
                    <span className="ml-2 align-middle font-sans text-base font-bold text-ink/50">
                      {tier.priceNote}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-ink/60">{tier.tagline}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((feature) => (
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
                  <p className="mt-6 text-sm text-ink/60">{tier.carePlan}</p>
                  <a
                    href={tier.href}
                    className={`mt-6 rounded-full px-6 py-3.5 text-center font-display text-base font-bold transition-colors ${
                      featured
                        ? "bg-pine text-paper hover:bg-pine-deep"
                        : "border border-ink/20 text-ink hover:border-pine hover:text-pine"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <p className="mt-10 max-w-2xl leading-relaxed text-ink/70">
            Founding offer: the first 10 clients get the Launch Bundle for
            $497 instead of $597, and the AI Receptionist locked at $129 a
            month for 12 months. Full details on the{" "}
            <a href="/pricing" className="font-bold text-pine hover:underline">
              pricing page
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const MATH_STATS = [
  {
    value: "~$16k",
    label: "turned away in 12 weeks",
    note: "At 70 appointment slots a week",
  },
  {
    value: "~$1,800",
    label: "at stake in the single worst week",
    note: "One week. One schedule. Real money.",
  },
  {
    value: "12 wks",
    label: "of warning before it hits",
    note: "Time to open hours, not panic",
  },
];

function IllustrativeMath() {
  return (
    <section aria-labelledby="math-heading" className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>Illustrative example</Eyebrow>
          <SectionHeading>
            <span id="math-heading">What the math looks like</span>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            Modeled figures for a typical local business. Not a promise and
            not your numbers. Your forecast is built on your bookings, and it
            replaces every figure on this page.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {MATH_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <div className="border-t-2 border-pine pt-6">
                <p className="font-display text-6xl font-black tracking-tight text-pine">
                  {stat.value}
                </p>
                <p className="mt-3 font-bold">{stat.label}</p>
                <p className="mt-1 text-sm text-ink/60">{stat.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY_NOW_STATS = [
  {
    value: "20–50%",
    label: "fewer forecasting errors with AI-driven methods",
    note: "McKinsey industry research, vs traditional forecasting",
  },
  {
    value: "65%",
    prefix: "up to",
    label: "reduction in lost sales and unavailability",
    note: "McKinsey industry research, AI-driven forecasting",
  },
  {
    value: "Close to 3 in 4",
    label: "of supply-chain functions still rely on spreadsheets",
    note: "McKinsey — that gap is your opening",
  },
];

function WhyNow() {
  return (
    <section
      aria-labelledby="whynow-heading"
      className="border-t border-ink/10 bg-parchment/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>Why now</Eyebrow>
          <SectionHeading>
            <span id="whynow-heading">
              In the AI age, this stopped being optional.
            </span>
          </SectionHeading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            AI-driven forecasting used to be a big-company luxury. Now it
            runs on twelve weeks of booking history — data you already have.
            The businesses adopting it aren&apos;t just more efficient;
            they&apos;re playing a faster game than everyone still planning
            on gut feel. Every quarter you wait, the gap gets harder to
            close.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {WHY_NOW_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <div className="border-t-2 border-pine pt-6">
                <p className="font-display text-6xl font-black tracking-tight text-pine">
                  {stat.prefix && (
                    <span className="mr-2 align-middle font-sans text-xl font-bold uppercase tracking-wider text-ink/50">
                      {stat.prefix}
                    </span>
                  )}
                  {stat.value}
                </p>
                <p className="mt-3 font-bold">{stat.label}</p>
                <p className="mt-1 text-sm text-ink/60">{stat.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink/55">
            General industry figures, not promises and not your numbers. Your
            free forecast replaces every one of them with the real thing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const SECTORS = [
  {
    title: "Med spas and salons",
    body: "Holiday rushes, membership demand, and the weeks your chairs fill themselves. Know which ones before you discount them.",
    href: "/salons",
  },
  {
    title: "Home services",
    body: "Seasonal swings you can staff for instead of react to. Summer does not have to surprise you every year.",
    href: "/hvac-plumbing",
  },
  {
    title: "Dentists and clinics",
    body: "Missed calls are missed patients. A receptionist that answers every call and books the appointment keeps the schedule full.",
    href: "/dentists",
  },
  {
    title: "Auto repair",
    body: "Drivers call when the car breaks, not when it suits you. Answer every call, book the bay, and text the owner the summary.",
    href: "/auto-repair",
  },
];

function Sectors() {
  return (
    <section aria-labelledby="sectors-heading" className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>Who it fits</Eyebrow>
          <SectionHeading>
            <span id="sectors-heading">
              If your weeks are not all the same, this pays for itself.
            </span>
          </SectionHeading>
        </Reveal>
        <div className="mt-10">
          {SECTORS.map((sector, i) => (
            <Reveal key={sector.title} delay={i * 100}>
              <div className="grid gap-2 border-t border-ink/15 py-7 md:grid-cols-12 md:gap-6">
                <h3 className="font-display text-2xl font-bold tracking-tight md:col-span-4">
                  <a href={sector.href} className="hover:text-pine">
                    {sector.title}
                  </a>
                </h3>
                <p className="leading-relaxed text-ink/70 md:col-span-8">
                  {sector.body}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-ink/15" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

const FORECAST_FAQS = [
  {
    q: "What data do you need for the forecast?",
    a: "Twelve weeks of booking history. A CSV export works. If you can count appointments per week, you have enough.",
  },
  {
    q: "How long does the forecast take?",
    a: "The free forecast takes a few days once we have your export. The Forecast Sprint runs inside two weeks.",
  },
  {
    q: "Do you need my logins?",
    a: "No. We never ask for your passwords or account access. You send an export, we send a forecast.",
  },
  {
    q: "What kinds of businesses is the forecast for?",
    a: "Any business where busy weeks and slow weeks look different: salons, med spas, home services, restaurants, studios. If your schedule is not flat, forecasting pays for itself.",
  },
  {
    q: "What does the free forecast cost me?",
    a: "Ten minutes and an export. You keep the forecast either way, even if you never pay us a dollar.",
  },
  {
    q: "What happens after the free forecast?",
    a: "If the numbers show money being left on the table, most owners book the $495 Forecast Sprint: a 90-day capacity plan, a staffing and hours roadmap, and your automation opportunities mapped. If the forecast does not impress you, you keep it and we part friends.",
  },
];

const FAQS = [...SERVICE_FAQS, ...FORECAST_FAQS];

function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-ink/10 bg-parchment/60"
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

function FoundingClients() {
  return (
    <section
      aria-labelledby="founding-heading"
      className="border-t border-ink/10"
    >
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>Founding clients</Eyebrow>
          <SectionHeading>
            <span id="founding-heading">Be one of the first 10.</span>
          </SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            These services are new, and our first 10 clients get the founding
            price: the Launch Bundle for $497 instead of $597, and the AI
            Receptionist locked at $129 a month for 12 months. In return, we
            learn what works for your kind of business — and you get a direct
            line to the person building it.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            No testimonials on this page yet, because there are no past
            clients to quote. When the first founding clients are up and
            running, their words go here — with their permission, and only
            their real words.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-pine px-8 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep"
          >
            Book a 15-min call
          </a>
        </Reveal>
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
            Lewisville, Texas. The rule here is simple: it has to be useful
            or we do not ship it. That is the whole business model.
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
      className="border-t border-ink/10"
    >
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <SectionHeading>
            <span id="contact-heading">Tell us what you need</span>
          </SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Five fields. We reply within one business day. Or skip the form
            and{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-pine hover:underline"
            >
              book a 15-min call
            </a>{" "}
            directly.
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
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <p className="font-display text-xl font-black tracking-tight">
          VilouraAI
        </p>
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-6 text-sm text-paper/60"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          <a href="/website" className="transition-colors hover:text-paper">
            Website Launch
          </a>
          <a
            href="/ai-receptionist"
            className="transition-colors hover:text-paper"
          >
            AI Receptionist
          </a>
          <a href="/bundle" className="transition-colors hover:text-paper">
            Launch Bundle
          </a>
          <a href="/demo" className="transition-colors hover:text-paper">
            Demo
          </a>
          <a
            href={PRISQO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-paper"
          >
            Free AI-visibility check
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
        <p className="text-sm text-paper/60">
          © 2026 VilouraAI LLC · Lewisville, Texas
        </p>
      </div>
    </footer>
  );
}

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://vilouraai.com/#business",
        name: "VilouraAI LLC",
        url: "https://vilouraai.com",
        description:
          "VilouraAI builds a new mobile-first website in 7 days and answers every call with an AI receptionist that books the appointment — for Texas local businesses. Website Launch $497, AI Receptionist $149/mo, Launch Bundle $597. Free 12-week booking forecast.",
        email: CONTACT_EMAIL,
        sameAs: ["https://share.google/56agIYRJv4O5Jcj5Q"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lewisville",
          addressRegion: "TX",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 33.0,
          longitude: -96.98,
        },
        areaServed: [
          "Dallas",
          "Fort Worth",
          "Plano",
          "Frisco",
          "Lewisville",
          "Southlake",
          "Arlington",
          "Irving",
        ],
        priceRange: "Free - $597",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Website Launch",
              price: "497",
              priceCurrency: "USD",
              description:
                "Mobile-first 5-page site, online booking button, Google Business Profile tune-up, basic local SEO, live in 7 days.",
            },
            {
              "@type": "Offer",
              name: "AI Receptionist",
              price: "149",
              priceCurrency: "USD",
              description:
                "Answers every call 24/7, books appointments, answers FAQs, texts the owner a summary, missed-call text-back. No setup fee, cancel anytime, first 14 days free.",
            },
            {
              "@type": "Offer",
              name: "Launch Bundle",
              price: "597",
              priceCurrency: "USD",
              description:
                "Website Launch plus the first month of AI Receptionist plus a Prisqo AI-visibility report ($19 value).",
            },
            {
              "@type": "Offer",
              name: "Free 12-week forecast",
              price: "0",
              priceCurrency: "USD",
              description:
                "A free 12-week booking forecast built on your own numbers, with the weeks you'll overbook flagged.",
            },
            {
              "@type": "Offer",
              name: "Forecast Sprint",
              price: "495",
              priceCurrency: "USD",
              description:
                "A 90-day capacity plan, a staffing and hours roadmap, and your automation opportunities mapped.",
            },
          ],
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main>
        <Hero />
        <ProblemsWeFix />
        <Services />
        <DiscountTrap />
        <HowItWorks />
        <Pricing />
        <IllustrativeMath />
        <WhyNow />
        <Sectors />
        <Faq />
        <FoundingClients />
        <Founder />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
