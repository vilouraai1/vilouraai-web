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
          href="/#contact"
          className="rounded-full bg-pine px-5 py-2.5 text-sm font-bold text-paper transition-colors hover:bg-pine-deep"
        >
          Get my free forecast
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
        <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm text-paper/60">
          <a href="/#how-it-works" className="transition-colors hover:text-paper">
            How it works
          </a>
          <a href="/#pricing" className="transition-colors hover:text-paper">
            Pricing
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
        <p className="text-sm text-paper/60">
          © 2026 VilouraAI LLC · Lewisville, Texas
        </p>
      </div>
    </footer>
  );
}
