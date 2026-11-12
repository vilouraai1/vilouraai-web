"use client";

import { useEffect, useState } from "react";

/**
 * Sticky bottom CTA for mobile. Appears after the hero scrolls away,
 * so the offer is always one tap away on phones.
 */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    let contactVisible = false;

    const onScroll = () =>
      setShow(window.scrollY > 650 && !contactVisible);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let observer: IntersectionObserver | undefined;
    if (contact && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          contactVisible = entries[0]?.isIntersecting ?? false;
          onScroll();
        },
        { threshold: 0.15 },
      );
      observer.observe(contact);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="px-4 pt-3">
        <a
          href="#contact"
          className="block rounded-full bg-pine px-6 py-3.5 text-center font-display text-base font-bold text-paper transition-colors active:bg-pine-deep"
        >
          Book a 15-min call
        </a>
      </div>
    </div>
  );
}
