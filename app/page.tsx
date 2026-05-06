import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Sound from "@/components/sections/Sound";
import Color from "@/components/sections/Color";
import Specs from "@/components/sections/Specs";
import Reviews from "@/components/sections/Reviews";
import PreOrder from "@/components/sections/PreOrder";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Sound />
        <Color />
        <Specs />
        <Reviews />
        <PreOrder />
        <Footer />
      </main>
    </>
  );
}
