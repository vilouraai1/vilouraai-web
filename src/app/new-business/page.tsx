import { NichePage, nicheMetadata, type Niche } from "~/app/_components/NichePage";

const NICHE: Niche = {
  slug: "new-business",
  label: "new businesses",
  title: "Website & AI receptionist for new businesses | VilouraAI",
  description:
    "Just opened? Look established from day one. VilouraAI builds your first website in 7 days, answers every call from the start, and makes sure Google — and AI assistants — can find you.",
  heroEyebrow: "For new businesses · Website $497 · Receptionist $149/mo",
  heroHeading: "Just opened? Look established from day one.",
  heroBody:
    "Your first customers are Googling you before they ever walk in — and right now there is nothing to find. No website, no listing, no reviews, no way to book. VilouraAI builds your site in 7 days, answers every call from day one, and sets up the listing so people can actually find you.",
  pains: [
    {
      title: "No website at all",
      body: "You opened the doors, but online you do not exist yet. Customers who look you up find nothing — and assume you are not ready.",
    },
    {
      title: "No Google listing",
      body: "No listing means no map pin, no hours, no phone number in search. The customers in your own neighborhood cannot find you.",
    },
    {
      title: "No reviews yet",
      body: "Every business starts at zero reviews. We build the reviews page to collect them honestly from your first customers — no fake reviews, ever.",
    },
    {
      title: "Every call is a first impression",
      body: "Your first callers are deciding whether to trust a brand-new business. A receptionist that answers right away, in a natural voice, and books them in — that is the first impression you want.",
    },
  ],
  callIntro:
    "A first-time customer calls a brand-new salon to ask about hours and book. This is a written sample — the names, number, and times are made up.",
  sampleCall: [
    {
      speaker: "AI receptionist",
      line: "Hi, thanks for calling Fresh Cut Studio — this is Maya. How can I help?",
    },
    {
      speaker: "Caller",
      line: "Hi, I just saw you opened — what are your hours?",
    },
    {
      speaker: "AI receptionist",
      line: "We're open Tuesday to Saturday, 10 to 6. Would you like to book a cut? I have Saturday at 11, or Tuesday at 3.",
    },
    {
      speaker: "Caller",
      line: "Saturday at 11 sounds good. How much is a cut?",
    },
    {
      speaker: "AI receptionist",
      line: "A cut is $35. You're booked for Saturday at 11 — can I take your name and number for a reminder text?",
    },
    {
      speaker: "Caller",
      line: "Pat, 214-555-0183.",
    },
    {
      speaker: "AI receptionist",
      line: "Thanks, Pat — see you Saturday!",
    },
  ],
  closing:
    "Book a 15-min call and we will talk through what you do, your hours, and your prices. Your site is live in 7 days, the receptionist answers from day one, and the bundle — site, first month of receptionist, and a Prisqo visibility report — is $597, or $497 for the first 10 founding clients.",
};

export const metadata = nicheMetadata(NICHE);

export default function NewBusinessPage() {
  return <NichePage niche={NICHE} />;
}
