import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Studio from "@/components/sections/Studio";
import Films from "@/components/sections/Films";
import Photography from "@/components/sections/Photography";
import Process from "@/components/sections/Process";
import Recognition from "@/components/sections/Recognition";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Studio />
        <Films />
        <Photography />
        <Process />
        <Recognition />
        <Contact />
      </main>
    </>
  );
}
