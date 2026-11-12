import { NichePage, nicheMetadata, type Niche } from "~/app/_components/NichePage";

const NICHE: Niche = {
  slug: "hvac-plumbing",
  label: "HVAC & plumbing",
  title: "AI receptionist & website for HVAC and plumbers | VilouraAI",
  description:
    "When the AC is out or a pipe bursts, customers call — and they call the business that picks up. VilouraAI answers every call for your HVAC or plumbing business, books the job, and gives you a new website, live in 7 days.",
  heroEyebrow: "For HVAC & plumbing · Website $497 · Receptionist $149/mo",
  heroHeading: "When the AC is out, they call whoever picks up.",
  heroBody:
    "You are under a house, on a roof, or driving to the next job. The phone rings, nobody picks up, and the customer calls the next company on the list. VilouraAI answers every call, books the job, and your new website lets customers reach you without calling at all.",
  pains: [
    {
      title: "You can't answer from a crawlspace",
      body: "Emergency calls come when you are already on a job. The customer with no AC in July will not wait for a callback — they call the next company.",
    },
    {
      title: "After-hours calls go nowhere",
      body: "Pipes burst at night. If your phone goes to voicemail after 6pm, that emergency job goes to whoever answered.",
    },
    {
      title: "No website, no quote path",
      body: "Customers Google you before they call. No site, no services, no prices, no way to ask for a quote — and they pick the company that shows up properly.",
    },
    {
      title: "Seasonal rush, same chaos",
      body: "Every summer the phones explode and the schedule fills in the wrong order. The receptionist books jobs as they come in, and you get a text summary after each call.",
    },
  ],
  callIntro:
    "A homeowner calls because the AC stopped working on a hot afternoon. This is a written sample — the names, number, and times are made up.",
  sampleCall: [
    {
      speaker: "AI receptionist",
      line: "Hi, thanks for calling North Texas Air & Plumbing — this is Maya. How can I help?",
    },
    {
      speaker: "Caller",
      line: "Hi, my AC just quit and it's 95 degrees in here. Can someone come out today?",
    },
    {
      speaker: "AI receptionist",
      line: "I'm sorry to hear that — I can get a tech out today between 3 and 5. Can I take your name, address, and number?",
    },
    {
      speaker: "Caller",
      line: "It's Sam, 214-555-0162, 420 Oak Street in Lewisville.",
    },
    {
      speaker: "AI receptionist",
      line: "Thanks, Sam — you're booked for today between 3 and 5, and the tech will call when they're on the way. Anything else?",
    },
    {
      speaker: "Caller",
      line: "No, that's it. Thank you!",
    },
  ],
  closing:
    "Book a 15-min call and we will talk through your services, prices, and service area. Your site is live in 7 days, and the receptionist is tested with you before it answers a real call. First 14 days free, no setup fee, cancel anytime.",
};

export const metadata = nicheMetadata(NICHE);

export default function HvacPlumbingPage() {
  return <NichePage niche={NICHE} />;
}
