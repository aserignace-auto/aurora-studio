"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "I",
    t: "Listen",
    d: "We start with a conversation. No deck, no jargon. Just an honest picture of what you are trying to build and the world you want it to live in.",
  },
  {
    n: "II",
    t: "Frame",
    d: "We translate the brief into a creative thesis — the angle that will make every later decision easier.",
  },
  {
    n: "III",
    t: "Make",
    d: "Identity, system, product. We design with intention and refuse the merely competent. Every craft detail is a choice.",
  },
  {
    n: "IV",
    t: "Inhabit",
    d: "We hand off, train, and stay close. A great brand is something a team learns to live inside — not a PDF on Notion.",
  },
];

export default function Process() {
  return (
    <section className="relative bg-bone text-ink">
      <div className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-14 grid grid-cols-1 gap-6 border-b border-ink/10 pb-8 sm:grid-cols-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50 sm:col-span-3">
              [05] / Process
            </span>
            <h2 className="font-serif text-[clamp(40px,7vw,110px)] leading-[0.95] tracking-[-0.02em] sm:col-span-9">
              Four <span className="italic">movements</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
                className={`relative ${
                  i === 0 ? "sm:col-span-7" :
                  i === 1 ? "sm:col-span-5" :
                  i === 2 ? "sm:col-span-5 sm:col-start-2" :
                  "sm:col-span-6 sm:col-start-7"
                }`}
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-7xl italic text-ink/30 sm:text-8xl">
                    {s.n}
                  </span>
                  <h3 className="font-serif text-5xl leading-none tracking-tight sm:text-7xl">
                    {s.t}
                    <span className="text-lime-deep">.</span>
                  </h3>
                </div>
                <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
                  {s.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
