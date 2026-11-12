import { NichePage, nicheMetadata, type Niche } from "~/app/_components/NichePage";

const NICHE: Niche = {
  slug: "salons",
  label: "salons & barbers",
  title: "AI receptionist & website for salons and barbers | VilouraAI",
  description:
    "Empty chairs cost money. VilouraAI answers every call for your salon or barbershop, books cuts and color, and gives you a new website with online booking — live in 7 days. Website $497, receptionist $149/mo.",
  heroEyebrow: "For salons & barbers · Website $497 · Receptionist $149/mo",
  heroHeading: "Empty chairs cost money. Missed calls fill them — for someone else.",
  heroBody:
    "You are mid-cut, mid-color, hands full. The phone rings, nobody picks up, and the customer books the chair down the street. VilouraAI answers every call, books the appointment, and your new website lets customers book online — even at 10pm.",
  pains: [
    {
      title: "You can't answer mid-appointment",
      body: "Your hands are in someone's hair. The phone rings, and by the time you are free, the caller has already booked somewhere else.",
    },
    {
      title: "No online booking",
      body: "Customers decide on a haircut at night, from the couch. If they cannot book then, they will not remember to call you tomorrow.",
    },
    {
      title: "Instagram is not a website",
      body: "Your work lives on Instagram, but new customers still Google you. No site, no prices, no booking link — and they move on to the salon that has all three.",
    },
    {
      title: "No-shows and empty gaps",
      body: "A gap in the book is money gone. The receptionist confirms bookings and texts reminders, and a missed-call text-back catches the customer who almost gave up.",
    },
  ],
  callIntro:
    "A customer calls to book a cut and color and wants a price. This is a written sample — the names, number, and times are made up.",
  sampleCall: [
    {
      speaker: "AI receptionist",
      line: "Hi, thanks for calling Luxe Hair Studio — this is Maya. How can I help?",
    },
    {
      speaker: "Caller",
      line: "Hi, I'd like to book a cut and color. How much is that?",
    },
    {
      speaker: "AI receptionist",
      line: "A cut and color starts at $85. I have Saturday at 11 in the morning, or Tuesday at 3. Which works better for you?",
    },
    {
      speaker: "Caller",
      line: "Saturday at 11, please.",
    },
    {
      speaker: "AI receptionist",
      line: "You're booked for Saturday at 11. Can I take your name and number for a reminder text?",
    },
    {
      speaker: "Caller",
      line: "Jordan, 214-555-0119.",
    },
    {
      speaker: "AI receptionist",
      line: "Thanks, Jordan — you'll get a reminder the day before. See you Saturday!",
    },
    {
      speaker: "Caller",
      line: "Great, thanks!",
    },
  ],
  closing:
    "Book a 15-min call and we will talk through your services, prices, and chairs. Your site is live in 7 days, and the receptionist is tested with you before it answers a real call. First 14 days free, no setup fee, cancel anytime.",
};

export const metadata = nicheMetadata(NICHE);

export default function SalonsPage() {
  return <NichePage niche={NICHE} />;
}
