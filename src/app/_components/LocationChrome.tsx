import { BOOKING_URL, PRISQO_URL } from "~/app/_components/offers";

const GOOGLE_PROFILE_URL = "https://share.google/56agIYRJv4O5Jcj5Q";

export function LocationHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="/"
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

export function LocationFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <p className="font-display text-xl font-black tracking-tight">
          VilouraAI
        </p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6 text-sm text-paper/60">
          <a href="/#services" className="transition-colors hover:text-paper">
            Services
          </a>
          <a href="/pricing" className="transition-colors hover:text-paper">
            Pricing
          </a>
          <a href="/#faq" className="transition-colors hover:text-paper">
            FAQ
          </a>
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
          <a href="/locations" className="transition-colors hover:text-paper">
            Locations
          </a>
          <a href="/compare" className="transition-colors hover:text-paper">
            Compare
          </a>
          <a href="/demo" className="transition-colors hover:text-paper">
            Demo
          </a>
          <a
            href="/free-seo-audit"
            className="transition-colors hover:text-paper"
          >
            Free SEO audit
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
          © 2026 VilouraAI LLC · Lewisville, Texas ·{" "}
          <a href="tel:+14694965431" className="hover:text-paper">
            (469) 496-5431
          </a>{" "}
          · Open daily 7:00 AM–7:00 PM
        </p>
      </div>
    </footer>
  );
}
