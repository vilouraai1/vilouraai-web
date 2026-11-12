/**
 * Shared facts for the done-for-you services. Single source of truth so
 * the home page, service pages, pricing page, niche pages, and marketing
 * assets never drift apart on price.
 *
 * Prices (Nov 12, 2026, per adi's brief):
 * - Website Launch $497 one-time; optional care plan $29/mo.
 * - AI Receptionist $149/mo, no setup fee, cancel anytime, first 14 days free.
 * - Launch Bundle $597 (Website Launch + first month of AI Receptionist +
 *   Prisqo AI-visibility report, $19 value).
 * - Founding offer, first 10 clients: bundle $497, receptionist locked at
 *   $129/mo for 12 months. Stated as "10 founding spots" — never show a
 *   countdown or a remaining-spots number, because we do not track it live.
 * - Booking forecast stays a third service: free 12-week forecast,
 *   $495 Forecast Sprint.
 */

export const BOOKING_URL = "https://calendly.com/vilouraai";
export const CONTACT_EMAIL = "vilouraai1@gmail.com";
export const PRISQO_URL = "https://prisqo.vilouraai.com";
export const GOOGLE_PROFILE_URL = "https://share.google/56agIYRJv4O5Jcj5Q";

export const FOUNDING_SPOTS = 10;

export const OFFERS = {
  website: {
    name: "Website Launch",
    price: "$497",
    priceNote: "one-time",
    tagline: "A new site, live in 7 days.",
    features: [
      "Mobile-first 5-page site: home, services, about, reviews, contact / booking",
      "Online booking button, so customers can book without calling",
      "Google Business Profile tune-up",
      "Basic local SEO, so nearby customers can find you",
      "Live in 7 days",
    ],
    carePlan: "Optional care plan $29/mo: hosting, edits, uptime.",
    href: "/website",
    cta: "Get my new site",
  },
  receptionist: {
    name: "AI Receptionist",
    price: "$149",
    priceNote: "/mo",
    tagline: "Every call answered, 24/7.",
    features: [
      "Answers every call 24/7 in a natural voice",
      "Books appointments straight into your calendar",
      "Answers FAQs: hours, prices, insurance",
      "Texts you a summary after every call",
      "Missed-call text-back, so no caller is left hanging",
    ],
    carePlan: "No setup fee. Cancel anytime. First 14 days free.",
    href: "/ai-receptionist",
    cta: "Hear the AI receptionist",
  },
  bundle: {
    name: "Launch Bundle",
    price: "$597",
    priceNote: "one-time + first month included",
    tagline: "The site and the receptionist, together.",
    features: [
      "Everything in Website Launch ($497)",
      "First month of AI Receptionist included ($149 value)",
      "Prisqo AI-visibility report included ($19 value)",
      "One call to set it all up",
    ],
    carePlan:
      "Founding offer: first 10 clients pay $497 for the bundle, and the receptionist stays at $129/mo, locked for 12 months.",
    href: "/bundle",
    cta: "Get the bundle",
  },
  forecast: {
    name: "Booking forecast",
    price: "Free",
    priceNote: "12-week forecast",
    tagline: "See your busy weeks before they hit.",
    features: [
      "Free 12-week booking forecast, built on your numbers",
      "Overbook weeks flagged, with probability bands",
      "$495 Forecast Sprint for the 90-day deep dive",
      "Yours to keep, no strings",
    ],
    carePlan: "Ten minutes and an export. You keep the forecast either way.",
    href: "/demo",
    cta: "Try the forecast demo",
  },
} as const;

export const SERVICE_FAQS: { q: string; a: string }[] = [
  {
    q: "How much does it cost?",
    a: "Website Launch is $497 one-time. AI Receptionist is $149 a month, with no setup fee and the first 14 days free. The Launch Bundle is $597: the site, the first month of the receptionist, and a Prisqo AI-visibility report ($19 value). The booking forecast is still free.",
  },
  {
    q: "Is there a contract?",
    a: "No. The receptionist is month to month and you can cancel anytime. The website is yours once it is built. The optional $29-a-month care plan (hosting, edits, uptime) is month to month too.",
  },
  {
    q: "How fast do I get it?",
    a: "Your new site is live in 7 days from when we have your details and photos. The AI receptionist is set up with your hours, services, and prices, and we test it with you before it answers a real call.",
  },
  {
    q: "What if the AI can't answer a question?",
    a: "It does not guess. It takes a message and texts you a summary, so you can call the customer back. You decide what it is allowed to answer, and we start narrow on purpose.",
  },
  {
    q: "Do I keep my phone number?",
    a: "Yes. The receptionist answers on your existing business number. Your customers call the same number they always have.",
  },
  {
    q: "What do you do with my data?",
    a: "We use your business details only to run your site and answer your calls. We do not sell your data or your customers' data, and we do not share it with anyone except the tools needed to run the service. Ask us anything about this before you sign up.",
  },
  {
    q: "What is the founding offer?",
    a: "The first 10 clients get the Launch Bundle for $497 instead of $597, and the AI Receptionist locked at $129 a month for 12 months. There is no countdown timer on this page — when the 10 spots are gone, the price goes back up and this line changes.",
  },
];
