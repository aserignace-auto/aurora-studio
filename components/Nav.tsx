"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Index", href: "#index" },
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);

    const updateTime = () => {
      const d = new Date();
      const fmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(fmt.format(d));
    };
    updateTime();
    const t = setInterval(updateTime, 30_000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(t);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-6 pt-6 sm:px-10 sm:pt-8"
    >
      <div
        className={`flex items-center justify-between rounded-full border border-bone/10 px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "bg-ink/70 backdrop-blur-xl"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="block h-2 w-2 rounded-full bg-lime transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_18px_var(--color-lime)]" />
          <span className="font-serif text-xl italic leading-none">Aurora</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim sm:inline">
            ™ Studio
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim transition-colors hover:text-bone"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim sm:inline">
            Paris · {time}
          </span>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-bone px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-lime"
          >
            <span className="relative z-10">Start a project</span>
            <span className="relative z-10 inline-block h-1.5 w-1.5 rounded-full bg-ink" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
