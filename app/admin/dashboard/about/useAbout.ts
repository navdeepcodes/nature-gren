"use client";

import { useEffect, useState } from "react";

import {
  getAbout,
  saveAbout,
  type About,
} from "@/lib/cms/about";

import {
  getAboutFeatures,
  saveAboutFeatures,
  type AboutFeature,
} from "@/lib/cms/aboutFeatures";

export function useAbout() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [about, setAbout] = useState<About | null>(null);
  const [features, setFeatures] = useState<AboutFeature[]>([]);

  useEffect(() => {
    loadAbout();
  }, []);

  async function loadAbout() {
    try {
      setLoading(true);

      const [aboutData, featuresData] = await Promise.all([
        getAbout(),
        getAboutFeatures(),
      ]);

      setAbout(aboutData);
      setFeatures(featuresData);
    } catch (error: any) {
      console.error("About CMS Error:", error);

      alert(
        error?.message ??
          JSON.stringify(error, null, 2) ??
          "Unknown error"
      );
    } finally {
      setLoading(false);
    }
  }

  async function save(data: Omit<About, "id">) {
    try {
      setSaving(true);

      await Promise.all([
        saveAbout(data),
        saveAboutFeatures(features),
      ]);

      await loadAbout();

      alert("About page updated successfully.");
    } catch (error: any) {
      console.error("Save Error:", error);

      alert(
        error?.message ??
          JSON.stringify(error, null, 2) ??
          "Unknown error"
      );
    } finally {
      setSaving(false);
    }
  }

  return {
    about,
    setAbout,

    features,
    setFeatures,

    loading,
    saving,

    loadAbout,
    save,
  };
}