"use client";

import { motion } from "framer-motion";
import Compass from "@/components/illustrations/Compass";
import Plane from "@/components/illustrations/Plane";
import Vase from "@/components/illustrations/Vase";
import Vinyl from "@/components/illustrations/Vinyl";

const steps = [
  {
    n: "01",
    t: "Listen",
    d: "We start with a conversation, no deck, no jargon. We learn your direction before we draw anything.",
    accent: "var(--color-coral)",
    Illu: () => (
      <Compass size={100} body="var(--color-cream)" needle="var(--color-coral)" />
    ),
  },
  {
    n: "02",
    t: "Spark",
    d: "We translate the brief into a creative thesis, the angle that makes every later choice easier.",
    accent: "var(--color-sage)",
    Illu: () => (
      <div className="drift-y">
        <Plane size={100} fill="var(--color-cream)" trail="var(--color-sage)" />
      </div>
    ),
  },
  {
    n: "03",
    t: "Make",
    d: "Identity, system, product. We design with intention and refuse the merely competent.",
    accent: "var(--color-cobalt)",
    Illu: () => (
      <div className="slow-tilt">
        <Vase size={100} body="var(--color-cobalt)" flower="var(--color-sun)" />
      </div>
    ),
  },
  {
    n: "04",
    t: "Live with it",
    d: "We hand off, train, and stay close. A great brand is something a team learns to live inside.",
    accent: "var(--color-lavender)",
    Illu: () => (
      <Vinyl size={100} body="var(--color-ink)" label="var(--color-lavender)" accent="var(--color-sun)" />
    ),
  },
];

export default function Process() {
  return (
    <section className="relative bg-sun px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border-[2px] border-ink bg-cream px-3 py-1 text-[12px] font-semibold uppercase tracking-wider shadow-[2px_2px_0_var(--color-ink)]">
            <span className="block h-2 w-2 rounded-full bg-coral" />
            How we work
          </div>
          <h2 className="mt-5 font-display text-[clamp(48px,8vw,128px)] font-medium leading-[0.92] tracking-tight">
            Four{" "}
            <span className="italic text-cobalt">deliberate</span>{" "}
            steps.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative flex flex-col rounded-[28px] border-[2.5px] border-ink bg-cream p-6 shadow-[5px_6px_0_var(--color-ink)] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span
                  className="font-display text-5xl font-semibold leading-none tracking-tight"
                  style={{ color: s.accent }}
                >
                  {s.n}
                </span>
                <div className="shrink-0">
                  <s.Illu />
                </div>
              </div>
              <h3 className="mt-6 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                {s.t}
                <span className="ml-0.5" style={{ color: s.accent }}>.</span>
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft sm:text-[17px]">
                {s.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
