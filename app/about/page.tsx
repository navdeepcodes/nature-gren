import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/homepage/Footer";
import AnimatedBackground from "@/components/background/AnimatedBackground";

import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import WhyJute from "@/components/about/WhyJute";
import Process from "@/components/about/Process";
import Values from "@/components/about/Values";
import Stats from "@/components/about/Stats";
import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <>
      <AnimatedBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <Story />

        <WhyJute />

        <Process />

        <Values />

        <Stats />

        <CTA />
      </main>

      <Footer />
    </>
  );
}