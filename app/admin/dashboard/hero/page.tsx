"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Loader2, Save } from "lucide-react";

import ImageUploader from "@/components/admin/ImageUploader";
import { getHero, updateHero } from "@/lib/cms/hero";

export default function HeroPage() {
  const [heroId, setHeroId] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [accent, setAccent] = useState("");
  const [description, setDescription] = useState("");

  const [primaryButton, setPrimaryButton] = useState("");
  const [secondaryButton, setSecondaryButton] = useState("");

  const [savedState, setSavedState] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    loadHero();
  }, []);

  async function loadHero() {
    try {
      setLoading(true);

      const hero = await getHero();

      setHeroId(hero.id);

      setTitle(hero.title);
      setAccent(hero.accent);
      setDescription(hero.description);

      setPrimaryButton(hero.primary_button);
      setSecondaryButton(hero.secondary_button);

      setImageUrl(hero.image_url);

      setSavedState(
        JSON.stringify({
          title: hero.title,
          accent: hero.accent,
          description: hero.description,
          primaryButton: hero.primary_button,
          secondaryButton: hero.secondary_button,
          imageUrl: hero.image_url,
        })
      );
    } catch (error) {
      console.error(error);
      alert("Failed to load Hero data.");
    } finally {
      setLoading(false);
    }
  }

  const currentState = useMemo(
    () =>
      JSON.stringify({
        title,
        accent,
        description,
        primaryButton,
        secondaryButton,
        imageUrl,
      }),
    [
      title,
      accent,
      description,
      primaryButton,
      secondaryButton,
      imageUrl,
    ]
  );

  const hasChanges = currentState !== savedState;

  async function handleSave() {
    if (!heroId) return;

    try {
      setSaving(true);

      await updateHero(heroId, {
        title,
        accent,
        description,
        primary_button: primaryButton,
        secondary_button: secondaryButton,
        image_url: imageUrl,
      });

      setSavedState(currentState);

      setSavedMessage(
        `Saved • ${new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}`
      );
    } catch (error) {
      console.error(error);
      alert("Failed to save Hero.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2
          size={34}
          className="animate-spin text-[#2E4B2C]"
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}

      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-5xl text-[#1f2b1d]">
            Hero Section
          </h1>

          <p className="mt-3 text-gray-500">
            Manage the homepage hero content.
          </p>
        </div>

        {savedMessage && (
          <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm text-green-700">
            <CheckCircle2 size={18} />
            {savedMessage}
          </div>
        )}
      </div>

      {/* Form */}

      <div className="space-y-8 rounded-[32px] border border-[#ebe7df] bg-white p-8 shadow-sm">
        {/* Hero Image */}

        <div>
          <label className="mb-3 block text-sm font-semibold text-[#1f2b1d]">
            Hero Image
          </label>

          <ImageUploader
            bucket="hero"
            value={imageUrl}
            onChange={setImageUrl}
          />
        </div>

        {/* Heading */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1f2b1d]">
            Heading
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-14 w-full rounded-xl border border-[#d9d6cf] px-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        {/* Accent */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1f2b1d]">
            Accent Text
          </label>

          <input
            value={accent}
            onChange={(e) => setAccent(e.target.value)}
            className="h-14 w-full rounded-xl border border-[#d9d6cf] px-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        {/* Description */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1f2b1d]">
            Description
          </label>

          <textarea
            rows={5}
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full rounded-xl border border-[#d9d6cf] p-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        {/* Buttons */}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1f2b1d]">
              Primary Button
            </label>

            <input
              value={primaryButton}
              onChange={(e) =>
                setPrimaryButton(e.target.value)
              }
              className="h-14 w-full rounded-xl border border-[#d9d6cf] px-5 outline-none transition focus:border-[#2E4B2C]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1f2b1d]">
              Secondary Button
            </label>

            <input
              value={secondaryButton}
              onChange={(e) =>
                setSecondaryButton(e.target.value)
              }
              className="h-14 w-full rounded-xl border border-[#d9d6cf] px-5 outline-none transition focus:border-[#2E4B2C]"
            />
          </div>
        </div>

        {/* Footer */}

        <div className="flex items-center justify-between pt-4">
          <span className="text-sm text-gray-500">
            {hasChanges
              ? "You have unsaved changes."
              : "Everything is up to date."}
          </span>

          <button
            onClick={handleSave}
            disabled={!hasChanges || saving}
            className="inline-flex h-14 items-center gap-3 rounded-xl bg-[#2E4B2C] px-8 font-medium text-white transition hover:bg-[#243d23] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Save size={18} />

            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}