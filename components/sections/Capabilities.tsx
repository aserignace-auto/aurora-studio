"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    n: "01",
    title: "Brand worlds",
    body: "Identity, naming, voice, visual language, packaging, signage, environmental.",
    deliv: ["Strategy", "Naming", "Identity", "Type"],
  },
  {
    n: "02",
    title: "Digital product",
    body: "Web design, art direction, interaction, motion, design systems, dev partnership.",
    deliv: ["Web", "App", "Motion", "System"],
  },
  {
    n: "03",
    title: "Editorial",
    body: "Books, magazines, manifestos, typographic systems, exhibitions, films.",
    deliv: ["Books", "Magazines", "Type", "Film"],
  },
  {
    n: "04",
    title: "Creative direction",
    body: "Long-term partnerships. We become a remote creative team for ambitious operators.",
    deliv: ["CD", "Sparring", "Hiring", "Workshops"],
  },
];

export default function Capabilities() {
  return (
    <section id="index" className="relative px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-14 grid grid-cols-1 gap-6 border-b border-bone/10 pb-8 sm:grid-cols-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint sm:col-span-3">
            [04] / Capabilities
          </span>
          <h2 className="font-serif text-[clamp(40px,7vw,110px)] leading-[0.95] tracking-[-0.02em] text-bone sm:col-span-9">
            Things we <span className="italic">make</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              className={`group relative flex flex-col gap-6 border-bone/10 p-8 sm:p-12 ${
                i % 2 === 0 ? "sm:border-r" : ""
              } ${i < 2 ? "border-b" : ""}`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
                  {c.n} / 04
                </span>
                <span className="block h-px w-16 bg-bone/20 transition-all duration-500 group-hover:w-32 group-hover:bg-lime" />
              </div>
              <h3 className="font-serif text-4xl leading-tight text-bone sm:text-5xl">
                {c.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-bone-dim sm:text-base">
                {c.body}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {c.deliv.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-bone/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim transition-colors group-hover:border-bone/40"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
