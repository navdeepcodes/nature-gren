import Image from "next/image";

import Container from "@/components/layout/Container";
import { About } from "@/lib/cms/about";

interface StoryProps {
  about: About;
}

export default function Story({ about }: StoryProps) {
  return (
    <section className="bg-[#fcfaf7] py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <Image
              src={about.story_image || "/images/about/story.jpg"}
              alt="NatureGren artisans"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Our Journey
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[var(--text)] sm:text-5xl whitespace-pre-line">
              {about.story_title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-[var(--text-muted)] whitespace-pre-line">
              {about.story_description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}