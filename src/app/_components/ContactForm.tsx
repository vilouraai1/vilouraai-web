"use client";

import { useState, type FormEvent } from "react";

import { api } from "~/trpc/react";
import { BOOKING_URL, CONTACT_EMAIL } from "~/app/_components/offers";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-pine focus:outline-none";

const NEED_OPTIONS = [
  "Website Launch — $497",
  "AI Receptionist — $149/mo",
  "Launch Bundle — $597",
  "Booking forecast — free",
  "Something else",
] as const;

/**
 * Booking link shown on the thank-you panel after a lead submits.
 * Calendly (free tier) event URL. Empty = panel only.
 */
const CALENDLY_URL: string = BOOKING_URL;

export function ContactForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState<string>(NEED_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const submit = api.lead.submit.useMutation({
    onSuccess: () => setFormError(null),
    onError: (err) => {
      const fieldError = err.data?.zodError?.fieldErrors;
      const first = fieldError
        ? Object.values(fieldError).flat()[0]
        : undefined;
      setFormError(
        typeof first === "string" ? first : "Something went wrong. Try again.",
      );
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);
    submit.mutate({
      name: name.trim(),
      email: email.trim(),
      business: business.trim() || undefined,
      phone: phone.trim() || undefined,
      need,
      message: message.trim() || undefined,
    });
  };

  if (submit.isSuccess) {
    return (
      <div
        role="status"
        className="rounded-xl border border-pine/30 bg-paper p-8 text-center"
      >
        <p className="font-display text-3xl font-black tracking-tight">
          Got it — thank you.
        </p>
        <p className="mt-3 text-ink/70">
          We will reach out within one business day about your {need}. Talk
          soon, {name.split(" ")[0] || "there"}.
        </p>
        {CALENDLY_URL !== "" && (
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-pine px-8 py-4 font-display text-base font-bold text-paper transition-colors hover:bg-pine-deep"
          >
            Book a 15-min call
          </a>
        )}
        <p className="mt-4 text-sm text-ink/60">
          Prefer email?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`VilouraAI — ${need}`)}`}
            className="font-medium text-pine underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-sm font-bold"
        >
          Your name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jordan Lee"
          className={inputClasses}
        />
      </div>
      <div>
        <label
          htmlFor="contact-business"
          className="mb-2 block text-sm font-bold"
        >
          Business
        </label>
        <input
          id="contact-business"
          type="text"
          required
          maxLength={200}
          autoComplete="organization"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          placeholder="Bluebonnet Home Services, Dallas"
          className={inputClasses}
        />
      </div>
      <div>
        <label
          htmlFor="contact-phone"
          className="mb-2 block text-sm font-bold"
        >
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          required
          maxLength={30}
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(214) 555-0148"
          className={inputClasses}
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-sm font-bold"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourbusiness.com"
          className={inputClasses}
        />
      </div>
      <div>
        <label
          htmlFor="contact-need"
          className="mb-2 block text-sm font-bold"
        >
          What you need
        </label>
        <select
          id="contact-need"
          value={need}
          onChange={(e) => setNeed(e.target.value)}
          className={inputClasses}
        >
          {NEED_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-bold"
        >
          Anything else? <span className="font-normal">(optional)</span>
        </label>
        <textarea
          id="contact-message"
          rows={3}
          maxLength={2000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="e.g. My site was suspended last month, and I miss calls every afternoon."
          className={inputClasses}
        />
      </div>
      {formError && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {formError}
        </p>
      )}
      <button
        type="submit"
        disabled={submit.isPending}
        className="w-full rounded-full bg-pine px-6 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submit.isPending ? "Sending..." : "Send — I'll reply within one business day"}
      </button>
      <p className="text-center text-sm text-ink/60">
        Prefer email?{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("VilouraAI — new enquiry")}`}
          className="font-medium text-pine underline-offset-4 hover:underline"
        >
          {CONTACT_EMAIL}
        </a>{" "}
        · Or{" "}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-pine underline-offset-4 hover:underline"
        >
          book a 15-min call
        </a>
      </p>
    </form>
  );
}
