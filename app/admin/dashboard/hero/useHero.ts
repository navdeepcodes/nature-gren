"use client";

import { useEffect, useMemo, useState } from "react";

import { getHero, updateHero } from "@/lib/cms/hero";

export function useHero() {
  const [heroId, setHeroId] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [featuredProductId, setFeaturedProductId] = useState<string | null>(
    null
  );

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

      setImageUrls(hero.image_urls ?? []);
      setFeaturedProductId(hero.featured_product_id ?? null);

      setSavedState(
        JSON.stringify({
          title: hero.title,
          accent: hero.accent,
          description: hero.description,
          primaryButton: hero.primary_button,
          secondaryButton: hero.secondary_button,
          imageUrls: hero.image_urls ?? [],
          featuredProductId: hero.featured_product_id ?? null,
        })
      );
    } catch (error) {
      console.error(error);
      alert("Failed to load Hero.");
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
        imageUrls,
        featuredProductId,
      }),
    [
      title,
      accent,
      description,
      primaryButton,
      secondaryButton,
      imageUrls,
      featuredProductId,
    ]
  );

  const hasChanges = currentState !== savedState;

  async function saveHero() {
    if (!heroId) return;

    try {
      setSaving(true);

      await updateHero(heroId, {
        title,
        accent,
        description,
        primary_button: primaryButton,
        secondary_button: secondaryButton,
        image_urls: imageUrls,
        featured_product_id: featuredProductId,
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

  return {
    loading,
    saving,

    title,
    accent,
    description,

    primaryButton,
    secondaryButton,

    imageUrls,
    featuredProductId,

    savedMessage,

    hasChanges,

    setTitle,
    setAccent,
    setDescription,

    setPrimaryButton,
    setSecondaryButton,

    setImageUrls,
    setFeaturedProductId,

    saveHero,
  };
}