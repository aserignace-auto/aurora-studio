"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Hello", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6"
    >
      <div
        className={`flex items-center justify-between rounded-full border-[2.5px] border-ink px-3 py-2 transition-all duration-300 sm:px-5 sm:py-2.5 ${
          scrolled ? "bg-cream shadow-[3px_4px_0_var(--color-ink)]" : "bg-cream/90"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="block h-7 w-7 sm:h-8 sm:w-8">
            <svg viewBox="0 0 32 32" className="h-full w-full">
              <circle cx="16" cy="16" r="9" fill="var(--color-sun)" stroke="var(--color-ink)" strokeWidth={2} />
              <circle cx="13" cy="14.5" r="1.4" fill="var(--color-ink)" />
              <circle cx="19" cy="14.5" r="1.4" fill="var(--color-ink)" />
              <path d="M12 18.5 Q 16 22 20 18.5" fill="none" stroke="var(--color-ink)" strokeWidth={1.6} strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-display text-2xl font-medium leading-none tracking-tight text-ink">
            Marigold
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative text-[15px] font-medium text-ink transition-colors hover:text-coral"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-coral transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-coral px-4 py-1.5 text-[13px] font-bold text-cream shadow-[3px_3px_0_var(--color-ink)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_var(--color-ink)] sm:text-sm"
        >
          <span className="block h-1.5 w-1.5 rounded-full bg-cream" />
          Hire us
        </a>
      </div>
    </motion.header>
  );
}
