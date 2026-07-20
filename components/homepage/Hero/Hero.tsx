import Container from "@/components/layout/Container";

import HeroContent from "./HeroContent";
import HeroCarousel from "../HeroCarousel";
import HeroBackground from "./HeroBackground";

import type { HomepageHero } from "@/lib/homepage/hero";

interface HeroProps {
  hero: HomepageHero;
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <HeroBackground />

      <Container>
        <div
          className="
            relative
            z-10
            grid
            items-center
            gap-12
            lg:grid-cols-[1fr_1fr]
            lg:gap-16
          "
        >
          <HeroContent
            data={{
              title: hero.title,
              accent: hero.accent,
              description: hero.description,
              primaryButton: hero.primary_button,
              secondaryButton: hero.secondary_button,
            }}
          />

          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <HeroCarousel
                images={hero.image_urls ?? []}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}