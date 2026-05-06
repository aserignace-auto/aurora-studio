import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Studio from "@/components/sections/Studio";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Marquee
          items={[
            "we design joyful brand worlds",
            "made by humans, for humans",
            "say hi · hello@marigold.studio",
            "open for Q3 2026",
          ]}
          bg="var(--color-coral)"
          text="var(--color-cream)"
          decoKind="sparkle"
          decoColor="var(--color-sun)"
        />

        <Studio />

        <Services />

        <Marquee
          items={[
            "selected work",
            "things we love",
            "made in 2024–2026",
            "more on are.na",
          ]}
          bg="var(--color-cobalt)"
          text="var(--color-cream)"
          decoKind="dot"
          decoColor="var(--color-sun)"
          speed="fast"
        />

        <Work />

        <Process />

        <Testimonials />

        <Marquee
          items={[
            "marigold studio",
            "let's make something",
            "marigold studio",
            "say hello",
          ]}
          bg="var(--color-sage)"
          text="var(--color-cream)"
          decoKind="squiggle"
          decoColor="var(--color-sun)"
        />

        <Contact />
      </main>
    </>
  );
}
