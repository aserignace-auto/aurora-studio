"use client";

import { motion } from "framer-motion";
import Sun from "@/components/illustrations/Sun";
import Cloud from "@/components/illustrations/Cloud";
import Sparkle from "@/components/illustrations/Sparkle";
import Heart from "@/components/illustrations/Heart";
import Flower from "@/components/illustrations/Flower";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-coral px-5 pt-24 sm:px-10 sm:pt-36"
    >
      {/* Floating decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-12 wobble-slow">
          <Cloud size={140} fill="var(--color-cream)" />
        </div>
        <div className="absolute right-[8%] top-20 wobble">
          <Cloud size={110} fill="var(--color-cream)" />
        </div>
        <div className="absolute left-[12%] bottom-24 twinkle">
          <Sparkle size={48} fill="var(--color-sun)" />
        </div>
        <div className="absolute right-[14%] top-1/2 twinkle" style={{ animationDelay: "-1s" }}>
          <Sparkle size={60} fill="var(--color-cream)" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1480px]">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            className="mx-auto mb-8 flex justify-center"
          >
            <div className="float-bob">
              <Sun size={170} color="var(--color-sun)" cheek="var(--color-rose)" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-[clamp(56px,12vw,200px)] font-medium leading-[0.88] tracking-tight text-cream"
          >
            <span className="block">Let&apos;s make</span>
            <span className="block">
              <span className="italic">something</span>{" "}
              <span className="text-sun">sunny</span>.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-7 max-w-xl text-lg text-cream/90 sm:text-xl"
          >
            Tell us about your project, your weather, your favourite snack.
            We reply within{" "}
            <span className="font-hand text-2xl font-bold text-sun">two days max</span>.
          </motion.p>

          <motion.a
            href="mailto:hello@marigold.studio"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full border-[2.5px] border-ink bg-cream px-7 py-4 font-display text-2xl font-medium text-ink shadow-[6px_8px_0_var(--color-ink)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_10px_0_var(--color-ink)] sm:text-3xl"
          >
            <Heart size={28} fill="var(--color-coral)" />
            hello@marigold.studio
          </motion.a>
        </div>

        {/* Footer info row */}
        <div className="mt-24 grid grid-cols-1 gap-8 border-t-[2.5px] border-ink/30 pt-12 sm:mt-32 sm:grid-cols-12">
          <div className="sm:col-span-4">
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-cream/70">
              Studio
            </div>
            <p className="mt-3 font-display text-2xl font-medium leading-snug text-cream">
              42 rue de Turenne
              <br />
              75003 Paris, FR
            </p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1 text-sm text-cream">
              <span className="block h-2 w-2 rounded-full bg-sun pulse-scale" />
              Open for Q3 2026 projects
            </div>
          </div>

          <div className="sm:col-span-4 sm:col-start-6">
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-cream/70">
              Follow along
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { name: "Instagram", icon: "ig" },
                { name: "Are.na", icon: "an" },
                { name: "LinkedIn", icon: "in" },
                { name: "Dribbble", icon: "dr" },
              ].map((s) => (
                <li key={s.name}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 rounded-full border-[2px] border-cream/40 bg-cream/5 px-3 py-2 text-sm font-bold text-cream transition-all hover:border-cream hover:bg-cream/10"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sun text-[10px] font-bold uppercase text-ink">
                      {s.icon}
                    </span>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-3 sm:col-start-10 sm:text-right">
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-cream/70">
              Find us
            </div>
            <div className="mt-3 inline-flex items-center gap-2">
              <Flower size={36} petal="var(--color-sun)" center="var(--color-cream)" />
              <span className="font-hand text-2xl font-bold text-cream">
                Made with love
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t-[2.5px] border-ink/30 py-8 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60 sm:flex-row sm:items-center">
          <span>© Marigold Studio 2026</span>
          <span>Independent · Paris &amp; everywhere</span>
          <span>Built with sunshine ☀</span>
        </div>
      </div>
    </section>
  );
}
