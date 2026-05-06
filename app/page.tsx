import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Manifesto from "@/components/sections/Manifesto";
import Work from "@/components/sections/Work";
import Capabilities from "@/components/sections/Capabilities";
import Process from "@/components/sections/Process";
import Recognition from "@/components/sections/Recognition";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />

        <Marquee
          items={[
            "Independent practice",
            "Brand · Product · Editorial",
            "Paris & everywhere",
            "Est. MMXXIV",
          ]}
          italic
        />

        <Manifesto />

        <Marquee
          items={[
            "Selected work",
            "Studies in detail",
            "Recent chapters",
            "On craft",
          ]}
          speed="fast"
          size="md"
        />

        <Work />

        <Capabilities />

        <Process />

        <Marquee
          items={[
            "Aurora ★",
            "A studio for brave brands",
            "Aurora ★",
            "Built with intent",
          ]}
          italic
          size="xl"
        />

        <Recognition />
        <Contact />
      </main>
    </>
  );
}
