import Navbar from "@/components/layout/Navbar";

import AnimatedBackground from "@/components/background/AnimatedBackground";

import Hero from "@/components/homepage/Hero";
import Features from "@/components/homepage/Features";
import Categories from "@/components/homepage/Categories";
import Manufacturing from "@/components/homepage/Manufacturing";
import Story from "@/components/homepage/Story";
import FeaturedProducts from "@/components/homepage/FeaturedProducts";
import CTA from "@/components/homepage/CTA";
import Newsletter from "@/components/homepage/Newsletter";
import Certification from "@/components/homepage/Certification";
import Footer from "@/components/homepage/Footer";
import Legacy from "@/components/homepage/Legacy";

import { getHomepageHero } from "@/lib/homepage/hero";

export const revalidate = 120;

export default async function HomePage() {
  const hero = await getHomepageHero();

  // Closing banner reuses a hero photo (the last still image, so it differs from the opener).
  const ctaImage =
    [...(hero.image_urls ?? [])]
      .reverse()
      .find((url) => !/\.(mp4|webm|mov|ogg)$/i.test(url)) ?? null;

  return (
    <>
      <AnimatedBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero hero={hero} />

        <Categories />

        <FeaturedProducts />

        <Features />

        <Legacy />

        <Manufacturing />

        <Story />

        <Certification />

        <CTA image={ctaImage} />

        <Newsletter />
      </main>

      <Footer />
    </>
  );
}