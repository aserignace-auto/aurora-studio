"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Sun from "@/components/illustrations/Sun";
import Cloud from "@/components/illustrations/Cloud";
import Sparkle from "@/components/illustrations/Sparkle";
import Vinyl from "@/components/illustrations/Vinyl";
import Monstera from "@/components/illustrations/Monstera";
import Plane from "@/components/illustrations/Plane";
import Squiggle from "@/components/illustrations/Squiggle";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const planeX = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const planeY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const monsteraY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const vinylRotate = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const sparkleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-10 sm:pb-28 sm:pt-36"
    >
      {/* Subtle layered backdrop blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-32 h-[480px] w-[480px] rounded-full bg-peach/35 blur-3xl" />
        <div className="absolute right-[-200px] top-1/3 h-[520px] w-[520px] rounded-full bg-rose/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-sun/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1480px]">
        {/* Floating decorations - sophisticated */}
        <div className="pointer-events-none absolute inset-0">
          {/* Vinyl record - top left */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.7 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ rotate: vinylRotate }}
            className="absolute left-[2%] top-[14%] hidden lg:block"
          >
            <div className="drift-y">
              <Vinyl size={180} label="var(--color-coral)" accent="var(--color-sun)" />
            </div>
          </motion.div>

          {/* Cloud */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="absolute right-[8%] top-4 sm:top-8"
          >
            <div className="drift-x">
              <Cloud size={130} fill="var(--color-cream)" />
            </div>
          </motion.div>

          {/* Monstera leaf - right */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 30 }}
            animate={{ opacity: 1, x: 0, rotate: 22 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ y: monsteraY }}
            className="absolute right-[4%] top-[36%] hidden lg:block"
          >
            <div className="slow-tilt">
              <Monstera size={200} fill="var(--color-sage)" />
            </div>
          </motion.div>

          {/* Paper plane parallax */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            style={{ x: planeX, y: planeY }}
            className="absolute left-[28%] top-[42%] hidden md:block"
          >
            <Plane size={120} fill="var(--color-cream)" trail="var(--color-coral)" />
          </motion.div>

          {/* Sparkles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            style={{ scale: sparkleScale }}
            className="absolute left-[6%] top-[58%] hidden sm:block"
          >
            <div className="twinkle">
              <Sparkle size={36} fill="var(--color-coral)" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="absolute right-[12%] bottom-[14%] hidden sm:block"
          >
            <div className="twinkle" style={{ animationDelay: "-2s" }}>
              <Sparkle size={28} fill="var(--color-cobalt)" />
            </div>
          </motion.div>
        </div>

        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 mx-auto inline-flex w-fit items-center gap-2 rounded-full border-[2px] border-ink bg-cream px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-ink shadow-[2px_2px_0_var(--color-ink)] sm:text-[13px]"
        >
          <span className="block h-2 w-2 rounded-full bg-sage breathe" />
          Independent design studio · Paris
        </motion.div>

        {/* Hero headline + sun */}
        <div className="relative z-10 mt-8 flex flex-col items-center text-center sm:mt-10">
          <h1 className="font-display text-[clamp(56px,11.5vw,180px)] font-medium leading-[0.92] tracking-[-0.025em] text-ink">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              We design{" "}
              <span className="hand-underline italic text-coral">joyful</span>
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-6"
            >
              <span>brand</span>
              <span className="inline-block">
                <Sun size={130} color="var(--color-sun)" rays={16} />
              </span>
              <span className="italic" style={{ color: "var(--color-cobalt)" }}>worlds.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            Marigold is a small, sunny studio of designers and illustrators
            building brands, products, and editorial systems for teams who like
            their work to <span className="font-hand text-2xl font-bold text-coral sm:text-3xl">stand out</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 rounded-full border-[2.5px] border-ink bg-coral px-7 py-3.5 text-base font-bold text-cream shadow-[5px_5px_0_var(--color-ink)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0_var(--color-ink)]"
            >
              See our work
              <svg width="18" height="18" viewBox="0 0 18 18" className="transition-transform group-hover:translate-x-1">
                <path d="M3 9 H 14 M9 4 L 14 9 L 9 14" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="#services"
              className="group inline-flex items-center gap-2.5 rounded-full border-[2.5px] border-ink bg-cream px-7 py-3.5 text-base font-bold text-ink shadow-[5px_5px_0_var(--color-ink)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0_var(--color-ink)]"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-coral text-[12px] font-bold text-cream">+</span>
              What we do
            </a>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="relative z-10 mt-16 flex flex-col items-center gap-5 sm:mt-24 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border-[2px] border-ink bg-rose">
              <Sparkle size={20} fill="var(--color-sun)" stroke="var(--color-ink)" />
            </div>
            <div className="font-hand text-xl text-ink-soft sm:text-2xl">
              Trusted by 28+ ambitious teams
            </div>
          </div>
          <Squiggle width={200} height={20} stroke="var(--color-cobalt)" />
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            Est. 2024 · Paris &amp; everywhere
          </div>
        </motion.div>
      </div>
    </section>
  );
}
