import { NichePage, nicheMetadata, type Niche } from "~/app/_components/NichePage";

const NICHE: Niche = {
  slug: "auto-repair",
  label: "auto repair",
  title: "AI receptionist & website for auto repair shops | VilouraAI",
  description:
    "Drivers call when the car breaks — not when it suits you. VilouraAI answers every call for your auto shop, books the bay, and gives you a new website with online booking, live in 7 days.",
  heroEyebrow: "For auto repair · Website $497 · Receptionist $149/mo",
  heroHeading: "Drivers call when the car breaks, not when it suits you.",
  heroBody:
    "You are under a car, hands full of grease. The phone rings, nobody picks up, and the driver calls the shop down the road. VilouraAI answers every call, books the bay, answers the estimate questions — and your new website lets customers book a diagnostic online.",
  pains: [
    {
      title: "You can't answer from under a car",
      body: "The phone rings while you are mid-job. By the time you wipe your hands, the driver has already booked with the shop that answered.",
    },
    {
      title: "“How much will it cost?” — ten times a day",
      body: "The receptionist answers the common price and service questions from the list you give it, and books the diagnostic for the rest.",
    },
    {
      title: "No online booking",
      body: "Drivers look you up on their phone, in the parking lot, right after the warning light comes on. If they cannot book then, they will not call later.",
    },
    {
      title: "No website, no trust signal",
      body: "No site, no reviews page, no services listed — and the driver picks the shop that looks like a real business online.",
    },
  ],
  callIntro:
    "A driver calls about a brake noise and wants to book a diagnostic. This is a written sample — the names, number, and times are made up.",
  sampleCall: [
    {
      speaker: "AI receptionist",
      line: "Hi, thanks for calling Lewisville Auto Care — this is Maya. How can I help?",
    },
    {
      speaker: "Caller",
      line: "Hi, my brakes are making a grinding noise. Can I bring it in?",
    },
    {
      speaker: "AI receptionist",
      line: "Yes — I can book a brake check for tomorrow at 9 in the morning, or today at 4. Which works better?",
    },
    {
      speaker: "Caller",
      line: "Tomorrow at 9, please. What does the check cost?",
    },
    {
      speaker: "AI receptionist",
      line: "The brake inspection is $49, and it's applied to the repair if you go ahead. Can I take your name and number?",
    },
    {
      speaker: "Caller",
      line: "Chris, 214-555-0137.",
    },
    {
      speaker: "AI receptionist",
      line: "Thanks, Chris — you're booked for tomorrow at 9. You'll get a reminder text tonight. Anything else?",
    },
    {
      speaker: "Caller",
      line: "No, thanks!",
    },
  ],
  closing:
    "Book a 15-min call and we will talk through your services, prices, and bays. Your site is live in 7 days, and the receptionist is tested with you before it answers a real call. First 14 days free, no setup fee, cancel anytime.",
};

export const metadata = nicheMetadata(NICHE);

export default function AutoRepairPage() {
  return <NichePage niche={NICHE} />;
}
