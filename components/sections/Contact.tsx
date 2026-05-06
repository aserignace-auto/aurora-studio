"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -10]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative isolate overflow-hidden px-6 pt-32 sm:px-10 sm:pt-48"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-1/2 left-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(216,255,58,0.18),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1480px]">
        <motion.div style={{ y }} className="text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
            [07] / Make something
          </span>
          <h2 className="mt-6 font-serif text-[clamp(56px,15vw,260px)] leading-[0.85] tracking-[-0.04em] text-bone">
            Let&apos;s
            <br />
            <span className="aurora-text italic">build a world</span>.
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-10 border-y border-bone/10 py-12 sm:grid-cols-12">
          <div className="sm:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
              Mail
            </span>
            <a
              href="mailto:hello@aurora.studio"
              data-cursor-grow
              className="group mt-3 block font-serif text-3xl italic leading-tight text-bone transition-colors hover:text-lime sm:text-4xl"
            >
              hello@aurora.studio
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="sm:col-span-3 sm:col-start-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
              Studio
            </span>
            <p className="mt-3 font-serif text-xl leading-snug text-bone sm:text-2xl">
              Rue de Turenne
              <br />
              75003 Paris, FR
            </p>
          </div>

          <div className="sm:col-span-3 sm:col-start-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
              Follow
            </span>
            <ul className="mt-3 flex flex-col gap-2 font-serif text-xl text-bone sm:text-2xl">
              <li>
                <a href="#" data-cursor-grow className="inline-flex items-center gap-2 hover:italic hover:text-lime">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" data-cursor-grow className="inline-flex items-center gap-2 hover:italic hover:text-lime">
                  Are.na
                </a>
              </li>
              <li>
                <a href="#" data-cursor-grow className="inline-flex items-center gap-2 hover:italic hover:text-lime">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-end gap-3">
            <span className="block h-3 w-3 rounded-full bg-lime shadow-[0_0_24px_var(--color-lime)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
              Currently accepting projects · Q3 2026
            </span>
          </div>
          <span className="font-serif text-[clamp(56px,8vw,140px)] italic leading-none text-bone">
            Aurora.
          </span>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-bone/10 py-8 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint sm:flex-row sm:items-center">
          <span>© Aurora Studio MMXXVI</span>
          <span>Independent · Paris &amp; everywhere</span>
          <span>All works confidential until released.</span>
        </div>
      </div>
    </section>
  );
}
