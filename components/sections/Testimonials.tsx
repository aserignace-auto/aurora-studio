"use client";

import { motion } from "framer-motion";
import Star from "@/components/illustrations/Star";

type T = { name: string; role: string; quote: string; bg: string; rotate: string };

const items: T[] = [
  {
    name: "Léa M.",
    role: "Founder, Bloom Beauty",
    quote:
      "We came in nervous about another generic identity. They gave us a brand we actually love showing off.",
    bg: "var(--color-rose)",
    rotate: "-rotate-1",
  },
  {
    name: "Tomas R.",
    role: "Head of brand, Halo",
    quote:
      "Marigold is rare: a studio that thinks like an editor and ships like an engineer. They moved our launch by weeks.",
    bg: "var(--color-cream)",
    rotate: "rotate-1",
  },
  {
    name: "Anaïs P.",
    role: "Creative director, Mellow",
    quote:
      "Working with them feels like collaborating with friends who are also weirdly good at their job. 10/10.",
    bg: "var(--color-sage)",
    rotate: "-rotate-1",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border-[2px] border-ink bg-cobalt px-3 py-1 text-[12px] font-semibold uppercase tracking-wider text-cream shadow-[2px_2px_0_var(--color-ink)]">
            <span className="block h-2 w-2 rounded-full bg-sun" />
            Kind words
          </div>
          <h2 className="mt-5 font-display text-[clamp(48px,8vw,128px)] font-medium leading-[0.92] tracking-tight">
            People say{" "}
            <span className="italic text-coral">nice</span>{" "}
            things.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className={`relative flex flex-col gap-5 rounded-[28px] border-[2.5px] border-ink p-7 shadow-[5px_6px_0_var(--color-ink)] sm:p-8 ${t.rotate}`}
              style={{
                background: t.bg,
                color: t.bg === "var(--color-sage)" || t.bg === "var(--color-cobalt)" ? "var(--color-cream)" : "var(--color-ink)",
              }}
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={22} fill="var(--color-sun)" stroke="var(--color-ink)" />
                ))}
              </div>
              <blockquote className="font-display text-xl leading-snug tracking-tight sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t-[1.5px] border-current/30 pt-4">
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[2px] border-ink"
                  style={{ background: "var(--color-sun)" }}
                >
                  <span className="font-display text-lg font-semibold text-ink">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm opacity-80">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
