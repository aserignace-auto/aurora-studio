"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-16 pt-32 sm:px-10 sm:pb-24"
    >
      {/* Atmospheric backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-1/4 h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(closest-side,rgba(216,255,58,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(closest-side,rgba(243,236,224,0.07),transparent_70%)] blur-3xl" />
      </div>

      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute left-6 right-6 top-28 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim sm:left-10 sm:right-10 sm:top-32"
      >
        <div className="flex flex-col gap-1">
          <span className="text-bone">N°001 — Independent</span>
          <span>Est. MMXXIV</span>
        </div>
        <div className="hidden flex-col items-end gap-1 sm:flex">
          <span>48.8566° N</span>
          <span>2.3522° E</span>
        </div>
      </motion.div>

      <motion.div style={{ y, opacity, scale }} className="relative z-10">
        <h1 className="line-h-tight font-serif text-bone">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="block text-[clamp(72px,14.5vw,260px)] tracking-[-0.04em]"
            >
              <span className="italic">Aurora</span>
              <span className="font-sans font-light">.</span>
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 1.65, ease: [0.2, 0.8, 0.2, 1] }}
              className="block text-[clamp(72px,14.5vw,260px)] tracking-[-0.04em]"
            >
              <span className="text-bone-dim">A studio for</span>
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 1.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="block text-[clamp(72px,14.5vw,260px)] tracking-[-0.04em]"
            >
              <span className="aurora-text italic">brave</span>{" "}
              <span>brands.</span>
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-12 grid grid-cols-1 gap-10 border-t border-bone/10 pt-8 sm:grid-cols-12"
        >
          <div className="sm:col-span-3 sm:col-start-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
              [01] Manifesto
            </span>
          </div>
          <p className="max-w-md font-serif text-xl leading-snug text-bone sm:col-span-5 sm:text-2xl">
            We design{" "}
            <span className="italic text-lime">brand worlds</span>, digital
            products, and editorial systems for teams who refuse the average.
          </p>
          <div className="sm:col-span-3 sm:col-start-10">
            <a
              href="#work"
              data-cursor-grow
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone hover:text-lime"
            >
              <span>Selected work</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom dotted bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4 }}
        className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint sm:bottom-8 sm:left-10 sm:right-10"
      >
        <span className="hidden sm:inline">Scroll</span>
        <div className="flex h-8 items-end gap-[3px]">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="block w-px bg-bone/30"
              style={{
                height: `${6 + (i % 5) * 4}px`,
                opacity: 0.3 + (i / 24) * 0.7,
              }}
            />
          ))}
        </div>
        <span>{new Date().getFullYear()} ©</span>
      </motion.div>
    </section>
  );
}
