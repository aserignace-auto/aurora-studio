"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Project = {
  index: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  category: string;
  tag: string;
  swatch: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Atelier Mineral",
    subtitle: "Identity, art direction, packaging",
    client: "Atelier Mineral",
    year: "2026",
    category: "Brand world",
    tag: "Beauty",
    swatch: "from-[#dcd1bd] via-[#c2b89f] to-[#3a3528]",
  },
  {
    index: "02",
    title: "Halo Capital",
    subtitle: "Brand system, web architecture, motion",
    client: "Halo",
    year: "2025",
    category: "Digital product",
    tag: "Fintech",
    swatch: "from-[#0b1612] via-[#2a4a3a] to-[#d8ff3a]",
  },
  {
    index: "03",
    title: "Maison Veil",
    subtitle: "Editorial system, books, signage",
    client: "Maison Veil",
    year: "2025",
    category: "Editorial",
    tag: "Cultural",
    swatch: "from-[#f3ece0] via-[#d4c5ae] to-[#7d6e57]",
  },
  {
    index: "04",
    title: "Spectre Audio",
    subtitle: "Brand identity, type, sleeve series",
    client: "Spectre",
    year: "2024",
    category: "Sound",
    tag: "Music label",
    swatch: "from-[#1a0d1f] via-[#5d2a6b] to-[#f3ece0]",
  },
  {
    index: "05",
    title: "North & Sextant",
    subtitle: "Naming, identity, e-commerce",
    client: "N&S",
    year: "2024",
    category: "Commerce",
    tag: "Apparel",
    swatch: "from-[#0c1a2a] via-[#1f3a5a] to-[#e0d7c7]",
  },
];

export default function Work() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="relative px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-14 flex items-end justify-between gap-8 border-b border-bone/10 pb-8">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
              [03] / Selected work
            </span>
            <h2 className="mt-3 font-serif text-[clamp(40px,7vw,110px)] leading-[0.95] tracking-[-0.02em] text-bone">
              <span className="italic">Recent</span> chapters
            </h2>
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim sm:block">
            05 — Studies
          </span>
        </div>

        <ul className="divide-y divide-bone/10">
          {projects.map((p, i) => (
            <motion.li
              key={p.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
              onMouseEnter={() => setHovered(p.index)}
              onMouseLeave={() => setHovered(null)}
              className="relative"
            >
              <a
                href="#"
                data-cursor-grow
                className="group grid grid-cols-12 items-center gap-4 py-7 transition-colors sm:py-9"
              >
                <span className="col-span-2 font-mono text-xs text-bone-faint sm:col-span-1">
                  {p.index}
                </span>
                <div className="col-span-10 flex flex-col gap-1.5 sm:col-span-5">
                  <span className="font-serif text-2xl tracking-tight text-bone transition-all duration-500 sm:text-4xl group-hover:translate-x-2 group-hover:italic group-hover:text-lime">
                    {p.title}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
                    {p.subtitle}
                  </span>
                </div>

                {/* Swatch preview */}
                <div className="col-span-12 sm:col-span-3">
                  <div
                    className={`relative ml-auto h-12 w-full overflow-hidden rounded-full bg-gradient-to-r ${p.swatch} transition-all duration-500 group-hover:h-14 sm:max-w-[260px]`}
                  >
                    <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.4),transparent_60%)]" />
                  </div>
                </div>

                <span className="col-span-6 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim sm:col-span-2">
                  {p.category}
                </span>
                <span className="col-span-6 text-right font-mono text-[11px] uppercase tracking-[0.2em] text-bone-faint sm:col-span-1">
                  {p.year}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="mt-14 flex items-center justify-between gap-6 border-t border-bone/10 pt-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
            Archive · 24 projects since 2024
          </span>
          <a
            href="#"
            data-cursor-grow
            className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone hover:text-lime"
          >
            View archive
            <span className="block h-px w-10 bg-bone transition-all group-hover:w-16 group-hover:bg-lime" />
          </a>
        </div>
      </div>
    </section>
  );
}
