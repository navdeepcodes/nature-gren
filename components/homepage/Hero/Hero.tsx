import Container from "@/components/layout/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroBackground from "./HeroBackground";

import type { HomepageHero } from "@/lib/homepage/hero";

interface HeroProps {
  hero: HomepageHero;
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <Container>
        <div
          className="
            relative
            z-10
            grid
            min-h-[calc(100vh-88px)]
            items-center
            gap-20
            py-16
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-24
            lg:py-0
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

          <div className="relative flex justify-center lg:justify-end">
            <HeroImage image={hero.image_url} />
          </div>
        </div>
      </Container>
    </section>
  );
}