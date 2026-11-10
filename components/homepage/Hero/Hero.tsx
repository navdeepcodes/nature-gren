import HeroStage from "./HeroStage";

import type { HomepageHero } from "@/lib/homepage/hero";

interface HeroProps {
  hero: HomepageHero;
}

export default function Hero({ hero }: HeroProps) {
  return (
    <HeroStage
      media={hero.image_urls ?? []}
      title={hero.title}
      accent={hero.accent}
      description={hero.description}
      primaryButton={hero.primary_button}
      secondaryButton={hero.secondary_button}
    />
  );
}
