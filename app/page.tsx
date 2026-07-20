import Navbar from "@/components/layout/Navbar";

import AnimatedBackground from "@/components/background/AnimatedBackground";

import Hero from "@/components/homepage/Hero";
import Features from "@/components/homepage/Features";
import Categories from "@/components/homepage/Categories";
import Story from "@/components/homepage/Story";
import FeaturedProducts from "@/components/homepage/FeaturedProducts";
import CTA from "@/components/homepage/CTA";
import Newsletter from "@/components/homepage/Newsletter";
import Footer from "@/components/homepage/Footer";

import { getHomepageHero } from "@/lib/homepage/hero";

export default async function HomePage() {
  const hero = await getHomepageHero();

  return (
    <>
      <AnimatedBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero hero={hero} />

        <Categories />

        <Features />

        <Story />

        <FeaturedProducts />

        <CTA />

        <Newsletter />
      </main>

      <Footer />
    </>
  );
}