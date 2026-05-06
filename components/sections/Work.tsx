"use client";

import { motion } from "framer-motion";
import Sun from "@/components/illustrations/Sun";
import Heart from "@/components/illustrations/Heart";
import Flower from "@/components/illustrations/Flower";
import Lightning from "@/components/illustrations/Lightning";
import Cloud from "@/components/illustrations/Cloud";
import Sparkle from "@/components/illustrations/Sparkle";

type Project = {
  index: string;
  title: string;
  client: string;
  category: string;
  year: string;
  bg: string;
  text: string;
  tagline: string;
  Illu: () => React.ReactElement;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Bloom Beauty",
    client: "Bloom",
    category: "Brand · Packaging",
    year: "2026",
    bg: "var(--color-rose)",
    text: "var(--color-ink)",
    tagline: "skincare that smiles back",
    Illu: () => (
      <div className="float-bob">
        <Flower size={150} petal="var(--color-coral)" center="var(--color-sun)" />
      </div>
    ),
  },
  {
    index: "02",
    title: "Halo Capital",
    client: "Halo",
    category: "Web · System",
    year: "2025",
    bg: "var(--color-cobalt)",
    text: "var(--color-cream)",
    tagline: "fintech with feelings",
    Illu: () => (
      <div className="wobble">
        <Lightning size={140} fill="var(--color-sun)" />
      </div>
    ),
  },
  {
    index: "03",
    title: "Mellow Coffee",
    client: "Mellow",
    category: "Identity · Cafés",
    year: "2025",
    bg: "var(--color-sun)",
    text: "var(--color-ink)",
    tagline: "slow mornings, drawn in",
    Illu: () => (
      <div className="float-bob-2">
        <Sun size={150} color="var(--color-coral)" cheek="var(--color-rose)" />
      </div>
    ),
  },
  {
    index: "04",
    title: "North & Fern",
    client: "N&F",
    category: "E-commerce",
    year: "2025",
    bg: "var(--color-sage)",
    text: "var(--color-cream)",
    tagline: "quiet outdoor goods",
    Illu: () => (
      <div className="wobble-slow">
        <Cloud size={150} fill="var(--color-cream)" />
      </div>
    ),
  },
  {
    index: "05",
    title: "Spectre Audio",
    client: "Spectre",
    category: "Music label",
    year: "2024",
    bg: "var(--color-lavender)",
    text: "var(--color-cream)",
    tagline: "records you keep forever",
    Illu: () => (
      <div className="float-bob-3">
        <Sparkle size={130} fill="var(--color-sun)" />
      </div>
    ),
  },
  {
    index: "06",
    title: "Petit Atelier",
    client: "Petit Atelier",
    category: "Childrens books",
    year: "2024",
    bg: "var(--color-coral)",
    text: "var(--color-cream)",
    tagline: "bedtime stories, on paper",
    Illu: () => (
      <div className="wobble">
        <Heart size={140} fill="var(--color-cream)" />
      </div>
    ),
  },
];

export default function Work() {
  return (
    <section id="work" className="relative px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-12 flex flex-col items-start gap-3 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border-[2px] border-ink bg-rose px-3 py-1 text-[12px] font-semibold uppercase tracking-wider shadow-[2px_2px_0_var(--color-ink)]">
              <span className="block h-2 w-2 rounded-full bg-ink" />
              Selected work
            </div>
            <h2 className="mt-5 font-display text-[clamp(48px,8vw,128px)] font-medium leading-[0.92] tracking-tight">
              Recent{" "}
              <span className="hand-underline-sage italic text-sage">favourites</span>.
            </h2>
          </div>
          <p className="max-w-sm font-hand text-2xl text-ink-soft sm:text-3xl">
            six things we are still proud of
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.index}
              href="#"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-[32px] border-[2.5px] border-ink shadow-[5px_6px_0_var(--color-ink)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:rotate-[-0.6deg] hover:shadow-[7px_9px_0_var(--color-ink)]"
              style={{ background: p.bg, color: p.text }}
            >
              <div className="relative flex h-[260px] items-center justify-center px-6 pt-6 sm:h-[280px]">
                <div className="absolute left-4 top-4 font-mono text-[11px] font-bold uppercase tracking-wider opacity-80">
                  {p.index}
                </div>
                <div className="absolute right-4 top-4 font-mono text-[11px] font-bold uppercase tracking-wider opacity-80">
                  {p.year}
                </div>
                <p.Illu />
              </div>
              <div className="border-t-[2.5px] border-ink p-5 sm:p-6">
                <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] opacity-80">
                  {p.category}
                </div>
                <div className="mt-2 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                    {p.title}
                  </h3>
                  <span className="text-xl transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <p className="mt-1 font-hand text-xl">{p.tagline}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
