"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const SLIDE_MS = 6500;
const isVideo = (url: string) => /\.(mp4|webm|mov|ogg)$/i.test(url);

interface HeroStageProps {
  media: string[];
  title: string;
  accent: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

/**
 * Full-bleed homepage opener: the hero media crossfades behind the headline.
 * Auto-advances (with a visible progress bar and a pause control) unless the
 * visitor prefers reduced motion.
 */
export default function HeroStage({
  media,
  title,
  accent,
  description,
  primaryButton,
  secondaryButton,
}: HeroStageProps) {
  const slides = media.filter(Boolean);
  const count = slides.length;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const go = useCallback(
    (step: number) => setActive((i) => (i + step + count) % count),
    [count]
  );

  const autoplay = count > 1 && !paused && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => go(1), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [active, autoplay, go]);

  // Play only the visible video; keep the rest paused to save bandwidth and CPU.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active && !paused) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active, paused]);

  const control =
    "flex h-11 w-11 items-center justify-center rounded-full border border-[#f4efe6]/35 text-[#f4efe6] transition-colors hover:border-[#f4efe6] hover:bg-[#f4efe6] hover:text-[#26301f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4efe6]";

  return (
    // min-h (not h): fills the screen but grows when the content needs more room,
    // so the headline is never pushed under the navbar on short screens.
    // The headline also scales with screen height (svh), not just width.
    <section
      aria-roledescription="carousel"
      aria-label="NatureGren highlights"
      className="relative isolate flex min-h-[min(calc(100svh-80px),940px)] items-end overflow-hidden bg-[#26301f] pt-16 text-[#f4efe6] md:pt-20"
    >
      {/* Media layer */}
      <div className="absolute inset-0 -z-20">
        {slides.map((url, i) => {
          const shown = i === active;
          return (
            <div
              key={url}
              aria-hidden={!shown}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
                shown ? "opacity-100" : "opacity-0"
              }`}
            >
              {isVideo(url) ? (
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={url}
                  muted
                  loop
                  playsInline
                  autoPlay={i === 0}
                  preload={i === 0 ? "auto" : "none"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={url}
                  alt=""
                  fill
                  sizes="100vw"
                  priority={i === 0 || (i === 1 && isVideo(slides[0]))}
                  className={`object-cover transition-transform ease-out ${
                    shown && !reducedMotion
                      ? "scale-100 duration-[8000ms]"
                      : "scale-[1.08] duration-0"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Scrims: deep olive on the text side and along the bottom edge. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1c2416]/90 via-[#1c2416]/55 to-[#1c2416]/5" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#1c2416]/80 to-transparent" />

      <div className="mx-auto w-full max-w-[var(--container)] px-4 pb-10 sm:px-6 md:pb-14 lg:px-8 lg:pb-16 xl:px-10">
        <div className="max-w-3xl">
          <h1 className="text-balance font-serif text-[clamp(2.6rem,7.5svh,3.1rem)] font-medium leading-[0.95] tracking-[-0.02em] sm:text-[clamp(3rem,9svh,4.5rem)] lg:text-[clamp(3.5rem,10svh,6.5rem)]">
            {title}
            {accent ? (
              <span className="block text-[#e3d3b6]">{accent}</span>
            ) : null}
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-[#f4efe6]/80 md:mt-8 md:text-lg md:leading-8">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
            <Link
              href="/shop"
              className="inline-flex h-13 items-center rounded-full bg-[#f4efe6] px-7 py-4 text-sm font-semibold text-[#26301f] transition-colors hover:bg-white md:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4efe6]"
            >
              {primaryButton}
            </Link>
            <Link
              href="/about"
              className="inline-flex h-13 items-center rounded-full border border-[#f4efe6]/50 px-7 py-4 text-sm font-semibold text-[#f4efe6] transition-colors hover:border-[#f4efe6] hover:bg-[#f4efe6]/10 md:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4efe6]"
            >
              {secondaryButton}
            </Link>
          </div>
        </div>

        {count > 1 && (
          <div className="mt-10 flex items-center gap-4 border-t border-[#f4efe6]/20 pt-5 md:mt-14">
            <p
              aria-live="polite"
              className="min-w-[4.5rem] font-serif text-lg tabular-nums text-[#f4efe6]/85"
            >
              {String(active + 1).padStart(2, "0")}
              <span className="text-[#f4efe6]/45">
                {" "}/ {String(count).padStart(2, "0")}
              </span>
            </p>

            {/* Progress of the current slide */}
            <div className="relative h-px flex-1 overflow-hidden bg-[#f4efe6]/20">
              <div
                key={`${active}-${autoplay}`}
                className="absolute inset-y-0 left-0 bg-[#e3d3b6]"
                style={
                  autoplay
                    ? { animation: `hero-progress ${SLIDE_MS}ms linear forwards` }
                    : { width: `${((active + 1) / count) * 100}%` }
                }
              />
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                className={`${control} hidden sm:flex`}
              >
                {paused ? <Play size={16} /> : <Pause size={16} />}
              </button>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous slide"
                className={control}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next slide"
                className={control}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
