"use client";

import { motion } from "framer-motion";
import Sun from "@/components/illustrations/Sun";
import Cloud from "@/components/illustrations/Cloud";
import Sparkle from "@/components/illustrations/Sparkle";
import Star from "@/components/illustrations/Star";
import Flower from "@/components/illustrations/Flower";
import Heart from "@/components/illustrations/Heart";
import Squiggle from "@/components/illustrations/Squiggle";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-10 sm:pb-24 sm:pt-36"
    >
      {/* Color blobs background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-32 h-[480px] w-[480px] rounded-full bg-peach/40 blur-3xl" />
        <div className="absolute right-[-200px] top-1/3 h-[520px] w-[520px] rounded-full bg-rose/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-sun/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1480px]">
        {/* Floating decorations */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -20 }}
            animate={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute right-[6%] top-2 sm:right-[8%] sm:top-6"
          >
            <Cloud size={130} fill="white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute left-[3%] top-[36%] sticker-soft hidden sm:block"
          >
            <div className="twinkle">
              <Sparkle size={56} fill="var(--color-coral)" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="absolute right-[3%] top-[58%] sticker-soft hidden sm:block"
          >
            <div className="twinkle" style={{ animationDelay: "-1s" }}>
              <Sparkle size={42} fill="var(--color-cobalt)" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="absolute right-[18%] bottom-[12%] sticker-soft"
          >
            <div className="float-bob-2">
              <Star size={64} fill="var(--color-lavender)" />
            </div>
          </motion.div>
        </div>

        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border-[2px] border-ink bg-cream px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-ink shadow-[2px_2px_0_var(--color-ink)] sm:text-[13px]"
        >
          <span className="block h-2 w-2 rounded-full bg-sage pulse-scale" />
          Independent design studio · Paris
        </motion.div>

        {/* Hero headline + sun */}
        <div className="mt-8 flex flex-col items-center text-center sm:mt-10">
          <h1 className="font-display text-[clamp(56px,11.5vw,180px)] font-medium leading-[0.92] tracking-[-0.025em] text-ink">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              We design{" "}
              <span className="relative inline-block">
                <span className="hand-underline italic text-coral">joyful</span>
              </span>
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-6"
            >
              <span>brand</span>
              <motion.span
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 6, scale: 1 }}
                transition={{ duration: 0.7, delay: 1.0, ease: [0.34, 1.56, 0.64, 1] }}
                className="inline-block"
              >
                <span className="float-bob inline-block">
                  <Sun size={140} />
                </span>
              </motion.span>
              <span className="italic" style={{ color: "var(--color-cobalt)" }}>worlds.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            Marigold is a small, sunny studio of designers and illustrators
            building brands, products, and editorial systems for teams who like
            their work to <span className="font-hand text-2xl font-bold text-coral sm:text-3xl">smile back</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
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
              <Heart size={20} fill="var(--color-coral)" />
              What we do
            </a>
          </motion.div>
        </div>

        {/* Bottom line w/ flower */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mt-16 flex flex-col items-center gap-4 sm:mt-24 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="wobble">
              <Flower size={56} petal="var(--color-rose)" center="var(--color-sun)" />
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
