"use client";

import { motion } from "framer-motion";

const awards = [
  { n: "01", year: "2026", title: "ADC France · Gold", project: "Atelier Mineral / Identity" },
  { n: "02", year: "2026", title: "Awwwards · SOTD", project: "Halo Capital / Web" },
  { n: "03", year: "2025", title: "CSSDA · Innovation", project: "Halo Capital / Motion" },
  { n: "04", year: "2025", title: "Brand New / Notable", project: "Maison Veil / Editorial" },
  { n: "05", year: "2025", title: "TDC · Certificate", project: "Spectre / Type" },
  { n: "06", year: "2024", title: "Awwwards · Honorable", project: "North & Sextant" },
];

export default function Recognition() {
  return (
    <section className="relative px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-12 grid grid-cols-1 gap-6 border-b border-bone/10 pb-8 sm:grid-cols-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint sm:col-span-3">
            [06] / Recognition
          </span>
          <h2 className="font-serif text-[clamp(36px,5.6vw,84px)] leading-[1.05] tracking-[-0.02em] text-bone sm:col-span-9">
            Press &amp; <span className="italic text-lime">awards</span>
          </h2>
        </div>

        <ul>
          {awards.map((a, i) => (
            <motion.li
              key={a.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="grid grid-cols-12 items-baseline gap-4 border-b border-bone/10 py-5 transition-colors hover:bg-bone/[0.02]"
            >
              <span className="col-span-2 font-mono text-[11px] text-bone-faint sm:col-span-1">
                {a.n}
              </span>
              <span className="col-span-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim sm:col-span-2">
                {a.year}
              </span>
              <span className="col-span-7 font-serif text-xl text-bone sm:col-span-5 sm:text-2xl">
                {a.title}
              </span>
              <span className="col-span-12 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-faint sm:col-span-4 sm:text-right">
                {a.project}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
