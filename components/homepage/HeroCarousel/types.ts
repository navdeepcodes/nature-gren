import type { EmblaCarouselType } from "embla-carousel";

export interface HeroCarouselProps {
  images: string[];
}

export interface HeroNavigationProps {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export interface HeroPaginationProps {
  scrollSnaps: number[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export interface HeroSlideProps {
  image: string | null;
  index: number;
}

export interface UseHeroCarouselReturn {
  emblaRef: ReturnType<typeof import("embla-carousel-react").default>[0];
  emblaApi: EmblaCarouselType | undefined;

  selectedIndex: number;
  scrollSnaps: number[];

  canScrollPrev: boolean;
  canScrollNext: boolean;

  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
}