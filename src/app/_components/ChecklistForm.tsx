"use client";

import { useState, type FormEvent } from "react";

import { api } from "~/trpc/react";

const CHECKLIST_URL = "/12-week-capacity-checklist.pdf";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-pine focus:outline-none";

export function ChecklistForm() {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [already, setAlready] = useState(false);

  const request = api.lead.requestChecklist.useMutation({
    onSuccess: (result) => {
      setFormError(null);
      setAlready(result.already);
    },
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
    request.mutate({ email: email.trim() });
  };

  if (request.isSuccess) {
    return (
      <div
        role="status"
        className="rounded-xl border border-pine/30 bg-paper p-8 text-center"
      >
        <p className="font-display text-3xl font-black tracking-tight">
          {already ? "You already have it." : "Your checklist is ready."}
        </p>
        <p className="mt-3 text-ink/70">
          {already
            ? "That email is already on the list — here is the download again."
            : "One email, stored once. No drip sequence, no spam. Here is the file."}
        </p>
        <a
          href={CHECKLIST_URL}
          download="12-week-capacity-checklist.pdf"
          className="mt-6 inline-block rounded-full bg-pine px-8 py-4 font-display text-base font-bold text-paper transition-colors hover:bg-pine-deep"
        >
          Download the checklist (PDF)
        </a>
        <p className="mt-5 text-sm text-ink/60">
          Want us to turn your 12 weeks of bookings into a forecast?{" "}
          <a
            href="/#contact"
            className="font-medium text-pine underline-offset-4 hover:underline"
          >
            Get your free forecast
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="checklist-email"
          className="mb-2 block text-sm font-bold"
        >
          Email
        </label>
        <input
          id="checklist-email"
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
      {formError && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {formError}
        </p>
      )}
      <button
        type="submit"
        disabled={request.isPending}
        className="w-full rounded-full bg-pine px-6 py-4 font-display text-lg font-bold text-paper transition-colors hover:bg-pine-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {request.isPending ? "Saving..." : "Send me the checklist"}
      </button>
      <p className="text-center text-sm text-ink/60">
        One email, stored once. No drip sequence, no spam.
      </p>
    </form>
  );
}
