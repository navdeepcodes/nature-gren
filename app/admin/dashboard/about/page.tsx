"use client";

import { useEffect, useState } from "react";

import { useAbout } from "./useAbout";

import AboutHeroSection from "@/components/admin/about/AboutHeroSection";
import AboutStorySection from "@/components/admin/about/AboutStorySection";
import AboutVisionSection from "@/components/admin/about/AboutVisionSection";
import AboutMissionSection from "@/components/admin/about/AboutMissionSection";
import AboutFeaturesSection from "@/components/admin/about/AboutFeaturesSection";
import AboutFooter from "@/components/admin/about/AboutFooter";

export default function AboutPage() {
  const {
    about,
    loading,
    saving,
    save,

    features,
    setFeatures,
  } = useAbout();

  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    if (about) {
      setForm(about);
    }
  }, [about]);

  if (loading || !form) {
    return (
      <div className="flex h-72 items-center justify-center">
        <p className="text-gray-500">
          Loading About Page...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 pb-20">
      <div>
        <h1 className="font-serif text-5xl text-[#1f2b1d]">
          About Page
        </h1>

        <p className="mt-3 text-gray-500">
          Manage your About page content.
        </p>
      </div>

      <AboutHeroSection
        data={form}
        onChange={setForm}
      />

      <AboutStorySection
        data={form}
        onChange={setForm}
      />

      <AboutVisionSection
        data={form}
        onChange={setForm}
      />

      <AboutMissionSection
        data={form}
        onChange={setForm}
      />

      <AboutFeaturesSection
        features={features}
        onChange={setFeatures}
      />

      <AboutFooter
        saving={saving}
        onSave={() => save(form)}
      />
    </div>
  );
}