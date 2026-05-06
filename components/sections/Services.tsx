"use client";

import { motion } from "framer-motion";
import Sun from "@/components/illustrations/Sun";
import Sparkle from "@/components/illustrations/Sparkle";
import Lightning from "@/components/illustrations/Lightning";
import Heart from "@/components/illustrations/Heart";

const services = [
  {
    title: "Brand worlds",
    desc: "Identity, naming, voice, visual language, packaging. We design brands that feel inevitable.",
    bg: "var(--color-coral)",
    text: "var(--color-cream)",
    tags: ["Identity", "Naming", "Type", "Print"],
    Illu: () => (
      <div className="float-bob">
        <Sun size={130} color="var(--color-sun)" cheek="var(--color-rose)" />
      </div>
    ),
  },
  {
    title: "Digital products",
    desc: "Web, app, design systems, motion. Interfaces designed with as much love as your brand.",
    bg: "var(--color-cobalt)",
    text: "var(--color-cream)",
    tags: ["Web", "App", "System", "Motion"],
    Illu: () => (
      <div className="wobble">
        <Lightning size={120} fill="var(--color-sun)" />
      </div>
    ),
  },
  {
    title: "Illustration",
    desc: "Custom illustration, mascots, editorial drawings, animated characters. The visual cherries on top.",
    bg: "var(--color-sage)",
    text: "var(--color-cream)",
    tags: ["Mascots", "Editorial", "Print", "Motion"],
    Illu: () => (
      <div className="float-bob-2">
        <Heart size={110} fill="var(--color-rose)" />
      </div>
    ),
  },
  {
    title: "Creative direction",
    desc: "Long-term partnerships. We act as your remote creative team for ambitious operators.",
    bg: "var(--color-lavender)",
    text: "var(--color-cream)",
    tags: ["CD", "Sparring", "Hiring", "Workshops"],
    Illu: () => (
      <div className="twinkle">
        <Sparkle size={120} fill="var(--color-sun)" />
      </div>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-12 flex flex-col items-start gap-3 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border-[2px] border-ink bg-sun px-3 py-1 text-[12px] font-semibold uppercase tracking-wider shadow-[2px_2px_0_var(--color-ink)]">
              <span className="block h-2 w-2 rounded-full bg-ink" />
              What we do
            </div>
            <h2 className="mt-5 font-display text-[clamp(48px,8vw,128px)] font-medium leading-[0.92] tracking-tight">
              Things we{" "}
              <span className="italic text-coral">love</span>{" "}
              making.
            </h2>
          </div>
          <p className="max-w-sm text-lg text-ink-soft">
            Four overlapping practices, one studio. Pick the recipe — or all of
            it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-[36px] border-[2.5px] border-ink p-7 shadow-[6px_8px_0_var(--color-ink)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_10px_0_var(--color-ink)] sm:p-9"
              style={{ background: s.bg, color: s.text }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-80">
                    0{i + 1} / 04
                  </div>
                  <h3 className="mt-2 font-display text-[clamp(32px,4vw,52px)] font-medium leading-tight tracking-tight">
                    {s.title}
                  </h3>
                </div>
                <div className="shrink-0">
                  <s.Illu />
                </div>
              </div>

              <p className="mt-5 max-w-md text-base leading-relaxed opacity-90 sm:text-lg">
                {s.desc}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border-[1.5px] border-current px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
