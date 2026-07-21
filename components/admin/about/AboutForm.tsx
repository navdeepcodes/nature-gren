"use client";

import { useState } from "react";

import ImageUploader from "@/components/admin/ImageUploader";

import {
  About,
  updateAbout,
} from "@/lib/cms/about";

interface Props {
  about: About;
  onSaved?: () => void;
}

export default function AboutForm({
  about,
  onSaved,
}: Props) {
  const [heroTitle, setHeroTitle] = useState(
    about.hero_title
  );

  const [heroSubtitle, setHeroSubtitle] = useState(
    about.hero_subtitle
  );

  const [heroImage, setHeroImage] =
    useState<string | null>(
      about.hero_image
    );

  const [storyTitle, setStoryTitle] =
    useState(about.story_title);

  const [
    storyDescription,
    setStoryDescription,
  ] = useState(
    about.story_description
  );

  const [storyImage, setStoryImage] =
    useState<string | null>(
      about.story_image
    );

  const [ctaTitle, setCtaTitle] =
    useState(about.cta_title);

  const [
    ctaDescription,
    setCtaDescription,
  ] = useState(
    about.cta_description
  );

  const [ctaButton, setCtaButton] =
    useState(about.cta_button);

  const [ctaLink, setCtaLink] =
    useState(about.cta_link);

  const [saving, setSaving] =
    useState(false);

  async function save() {
    try {
      setSaving(true);

      await updateAbout(about.id, {
        hero_title: heroTitle,
        hero_subtitle: heroSubtitle,
        hero_image: heroImage,

        story_title: storyTitle,
        story_description:
          storyDescription,
        story_image: storyImage,

        vision_title:
          about.vision_title,
        vision_description:
          about.vision_description,
        vision_image:
          about.vision_image,

        mission_title:
          about.mission_title,
        mission_description:
          about.mission_description,
        mission_image:
          about.mission_image,

        cta_title: ctaTitle,
        cta_description:
          ctaDescription,
        cta_button: ctaButton,
        cta_link: ctaLink,
      });

      alert("About page updated.");

      onSaved?.();
    } catch (err) {
      console.error(err);

      alert(
        "Failed to update About page."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-10">

      {/* HERO */}

      <div className="rounded-[32px] border border-[#ebe7df] bg-white shadow-sm">
        <div className="space-y-8 p-8">

          <h2 className="font-serif text-3xl">
            Hero Section
          </h2>

          <div>
            <label className="mb-3 block font-semibold">
              Hero Image
            </label>

            <ImageUploader
              bucket="hero"
              value={heroImage}
              onChange={setHeroImage}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Hero Title
            </label>

            <input
              value={heroTitle}
              onChange={(e) =>
                setHeroTitle(e.target.value)
              }
              className="h-14 w-full rounded-xl border px-5"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Hero Subtitle
            </label>

            <textarea
              rows={5}
              value={heroSubtitle}
              onChange={(e) =>
                setHeroSubtitle(e.target.value)
              }
              className="w-full rounded-xl border p-5"
            />
          </div>

        </div>
      </div>

      {/* STORY */}

      <div className="rounded-[32px] border border-[#ebe7df] bg-white shadow-sm">
        <div className="space-y-8 p-8">

          <h2 className="font-serif text-3xl">
            Story Section
          </h2>

          <div>
            <label className="mb-3 block font-semibold">
              Story Image
            </label>

            <ImageUploader
              bucket="hero"
              value={storyImage}
              onChange={setStoryImage}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Story Title
            </label>

            <input
              value={storyTitle}
              onChange={(e) =>
                setStoryTitle(e.target.value)
              }
              className="h-14 w-full rounded-xl border px-5"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Story Description
            </label>

            <textarea
              rows={8}
              value={storyDescription}
              onChange={(e) =>
                setStoryDescription(
                  e.target.value
                )
              }
              className="w-full rounded-xl border p-5"
            />
          </div>

        </div>
      </div>

      {/* CTA */}

      <div className="rounded-[32px] border border-[#ebe7df] bg-white shadow-sm">
        <div className="space-y-8 p-8">

          <h2 className="font-serif text-3xl">
            CTA Section
          </h2>

          <div>
            <label className="mb-2 block font-semibold">
              CTA Title
            </label>

            <textarea
              rows={3}
              value={ctaTitle}
              onChange={(e) =>
                setCtaTitle(e.target.value)
              }
              className="w-full rounded-xl border p-5"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              CTA Description
            </label>

            <textarea
              rows={6}
              value={ctaDescription}
              onChange={(e) =>
                setCtaDescription(
                  e.target.value
                )
              }
              className="w-full rounded-xl border p-5"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Button Text
            </label>

            <input
              value={ctaButton}
              onChange={(e) =>
                setCtaButton(e.target.value)
              }
              className="h-14 w-full rounded-xl border px-5"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Button Link
            </label>

            <input
              value={ctaLink}
              onChange={(e) =>
                setCtaLink(e.target.value)
              }
              className="h-14 w-full rounded-xl border px-5"
            />
          </div>

        </div>
      </div>

      <button
        onClick={save}
        disabled={saving}
        className="rounded-xl bg-[#2E4B2C] px-8 py-4 text-white transition hover:bg-[#243d23] disabled:opacity-50"
      >
        {saving
          ? "Saving..."
          : "Save Changes"}
      </button>

    </div>
  );
}