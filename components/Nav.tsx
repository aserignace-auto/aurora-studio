"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Index", href: "#index" },
  { label: "Films", href: "#films" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 px-5 py-4 transition-colors sm:px-10 ${
        scrolled ? "bg-void/60 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-blood" />
          <span className="font-anton text-2xl uppercase tracking-tight text-bone">
            Obscura
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint sm:inline">
            ™ Studio
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-cursor="scroll"
              className="group relative font-mono text-[11px] uppercase tracking-[0.22em] text-bone-dim transition-colors hover:text-bone"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-blood transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint sm:inline">
            Paris · {time}
          </span>
          <a
            href="#contact"
            data-cursor="hire"
            className="group inline-flex items-center gap-2 border border-bone/30 bg-bone/5 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone backdrop-blur-md transition-all hover:border-blood hover:bg-blood/10 hover:text-blood"
          >
            <span className="block h-1.5 w-1.5 rounded-full bg-blood" />
            Booking 2026
          </a>
        </div>
      </div>
    </motion.header>
  );
}
