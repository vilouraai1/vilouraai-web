"use client";

import { useState, type FormEvent } from "react";

import { api } from "~/trpc/react";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-pine focus:outline-none";

/**
 * Booking link shown on the thank-you panel after a lead submits.
 * Paste a Calendly / Cal.com / SavvyCal event URL here to let new leads
 * book their walkthrough call in the same flow. Empty = panel only.
 */
const BOOKING_URL: string = "https://calendly.com/vilouraai";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
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
    });
  };

  if (submit.isSuccess) {
    return (
      <div
        role="status"
        className="rounded-xl border border-pine/30 bg-paper p-8 text-center"
      >
        <p className="font-display text-3xl font-black tracking-tight">
          You are on the list.
        </p>
        <p className="mt-3 text-ink/70">
          We will reach out within one business day about your free forecast.
          Talk soon, {name.split(" ")[0] || "there"}.
        </p>
        {BOOKING_URL !== "" && (
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-pine px-8 py-4 font-display text-base font-bold text-paper transition-colors hover:bg-pine-deep"
          >
            Pick a time for your walkthrough call
          </a>
        )}
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
        {submit.isPending ? "Sending..." : "Get my free forecast"}
      </button>
      <p className="text-center text-sm text-ink/60">
        Prefer email?{" "}
        <a
          href="mailto:vilouraai3@gmail.com?subject=Free%2012-week%20forecast"
          className="font-medium text-pine underline-offset-4 hover:underline"
        >
          vilouraai3@gmail.com
        </a>
      </p>
    </form>
  );
}
