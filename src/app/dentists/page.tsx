import { NichePage, nicheMetadata, type Niche } from "~/app/_components/NichePage";

const NICHE: Niche = {
  slug: "dentists",
  label: "dentists",
  title: "AI receptionist & website for dentists — $149/mo | VilouraAI",
  description:
    "A missed call is a missed patient. VilouraAI answers every call for your dental practice, books cleanings and checkups, answers insurance questions, and texts you a summary. Plus a new website, live in 7 days.",
  heroEyebrow: "For dentists · Website $497 · Receptionist $149/mo",
  heroHeading: "A missed call is a missed patient.",
  heroBody:
    "Your front desk is checking in a patient, and the phone rings. Nobody picks up, and the caller books with the practice down the road. VilouraAI answers every call in a natural voice, books the appointment, answers the insurance and hours questions — and your new website lets patients book online at 10pm.",
  pains: [
    {
      title: "The front desk can't do everything",
      body: "Checking patients in, handling insurance, answering the phone — something gives. Usually it is the phone, and every unanswered call is a patient you may never meet.",
    },
    {
      title: "Insurance questions, ten times a day",
      body: "\"Do you take my insurance?\" The receptionist answers it from the list you give it, and hands the tricky ones to you with a message instead of guessing.",
    },
    {
      title: "No online booking",
      body: "Patients look you up after hours and want to book a cleaning right there. If the only way is to call during office hours, they book with whoever lets them click.",
    },
    {
      title: "Invisible when people ask AI",
      body: "Patients now ask AI assistants which dentist to call. If your practice is not showing up there — no clear site, no reviews, no listing — you are not in the running.",
    },
  ],
  callIntro:
    "A patient calls for a cleaning and wants to know if you take their insurance. This is a written sample — the names, number, and times are made up.",
  sampleCall: [
    {
      speaker: "AI receptionist",
      line: "Hi, thanks for calling Bright Smile Dental — this is Maya. How can I help?",
    },
    {
      speaker: "Caller",
      line: "Hi, I need a cleaning, and I wanted to check — do you take Delta Dental?",
    },
    {
      speaker: "AI receptionist",
      line: "Yes, we do take Delta Dental. I can book your cleaning — I have Thursday at 10:30, or Friday at 2. Which works better?",
    },
    {
      speaker: "Caller",
      line: "Thursday at 10:30, please.",
    },
    {
      speaker: "AI receptionist",
      line: "You're booked for Thursday at 10:30. Can I take your name and number for a reminder text?",
    },
    {
      speaker: "Caller",
      line: "Alex, 214-555-0148.",
    },
    {
      speaker: "AI receptionist",
      line: "Thanks, Alex — you'll get a reminder the day before. Anything else I can help with?",
    },
    {
      speaker: "Caller",
      line: "That's it, thanks!",
    },
  ],
  closing:
    "Book a 15-min call and we will talk through your hours, services, and insurance list. Your site is live in 7 days, and the receptionist is tested with you before it answers a real call. First 14 days free, no setup fee, cancel anytime.",
};

export const metadata = nicheMetadata(NICHE);

export default function DentistsPage() {
  return <NichePage niche={NICHE} />;
}
