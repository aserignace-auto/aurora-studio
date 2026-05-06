"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Sound", href: "#sound" },
  { label: "Color", href: "#color" },
  { label: "Specs", href: "#specs" },
  { label: "Reviews", href: "#reviews" },
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
        className={`flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "border-bone/10 bg-ink/70 backdrop-blur-2xl"
            : "border-bone/5 bg-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="block h-7 w-7 sm:h-8 sm:w-8">
            <svg viewBox="0 0 32 32" className="h-full w-full">
              <circle cx="16" cy="16" r="14" fill="none" stroke="var(--color-electric)" strokeWidth={1.6} />
              <circle cx="16" cy="16" r="6" fill="none" stroke="var(--color-electric)" strokeWidth={1.6} />
              <circle cx="16" cy="16" r="2.5" fill="var(--color-electric)" />
            </svg>
          </span>
          <span className="font-anton text-2xl uppercase leading-none tracking-tight text-bone">
            Aurion
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-cursor="goto"
              className="group relative font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim transition-colors hover:text-bone"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-electric transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#preorder"
          data-cursor="reserve"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-electric bg-electric px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-electric-glow"
        >
          <span className="block h-1.5 w-1.5 rounded-full bg-white" />
          Pre-order
        </a>
      </div>
    </motion.header>
  );
}
