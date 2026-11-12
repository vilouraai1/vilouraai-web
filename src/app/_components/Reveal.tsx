"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  /**
   * Render immediately with no fade. Use for above-the-fold / LCP content
   * (hero headline, subhead, CTA): gating it behind hydration +
   * IntersectionObserver delays Largest Contentful Paint.
   */
  immediate?: boolean;
};

/**
 * Fades and slides content in the first time it scrolls into view.
 * Pure IntersectionObserver, no animation libraries.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={immediate ? undefined : { transitionDelay: `${delay}ms` }}
      className={`${className} ${
        immediate
          ? ""
          : `transition-all duration-700 ease-out will-change-transform ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`
      }`}
    >
      {children}
    </div>
  );
}
