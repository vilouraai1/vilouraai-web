import { CONTACT_EMAIL } from "~/app/_components/offers";

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
          href="/#audit"
          className="rounded-full bg-pine px-5 py-2.5 text-sm font-bold text-paper transition-colors hover:bg-pine-deep"
        >
          Get my free SEO audit
        </a>
      </nav>
    </header>
  );
}

export function LocationFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="font-display text-xl font-black tracking-tight">
            VilouraAI
          </p>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6 text-sm text-paper/60">
            <a href="/#services" className="transition-colors hover:text-paper">
              Services
            </a>
            <a href="/#prisqo" className="transition-colors hover:text-paper">
              AI visibility
            </a>
            <a href="/#how-it-works" className="transition-colors hover:text-paper">
              How it works
            </a>
            <a href="/#faq" className="transition-colors hover:text-paper">
              FAQ
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
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper"
            >
              Find us on Google
            </a>
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-6 text-sm text-paper/60 sm:flex-row">
          <p>© 2026 VilouraAI LLC · Lewisville, Texas</p>
          <p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-paper"
            >
              {CONTACT_EMAIL}
            </a>
            {" · "}
            <a
              href="tel:+14694965431"
              className="transition-colors hover:text-paper"
            >
              (469) 496-5431
            </a>
            {" · Daily 7:00 AM–7:00 PM"}
          </p>
        </div>
      </div>
    </footer>
  );
}
