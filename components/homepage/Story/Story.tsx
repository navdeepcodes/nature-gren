"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";

import {
  Story as StoryType,
  getStory,
} from "@/lib/cms/story";

export default function Story() {
  const [story, setStory] = useState<StoryType | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getStory();
        setStory(data);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  if (!story) return null;

  return (
    <section
      id="story"
      className="bg-[#fcfaf7] py-24 lg:py-32"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <div className="relative overflow-hidden rounded-[32px]">
            <div className="relative aspect-[4/5]">
              <Image
                src={story.image_url ?? ""}
                alt={story.title}
                fill
                sizes="(max-width:1024px)100vw,50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div>
            <span className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--primary)]">
              Our Story
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[var(--text)] md:text-5xl lg:text-6xl">
              {story.title}
              <br />
              {story.subtitle}
            </h2>

            <p className="mt-8 text-lg leading-8 text-[var(--text-muted)]">
              {story.description}
            </p>

            <Link
              href="/shop"
              className="
                mt-10
                inline-flex
                h-14
                items-center
                justify-center
                rounded-full
                bg-[var(--primary)]
                px-8
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[var(--primary-hover)]
              "
            >
              {story.button_text}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}