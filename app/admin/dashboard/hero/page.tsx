"use client";

import { CheckCircle2, Loader2 } from "lucide-react";

import HeroImageSection from "@/components/admin/hero/HeroImageSection";
import FeaturedProductSection from "@/components/admin/hero/FeaturedProductSection";
import HeroContentSection from "@/components/admin/hero/HeroContentSection";
import HeroButtonsSection from "@/components/admin/hero/HeroButtonsSection";
import HeroFooter from "@/components/admin/hero/HeroFooter";

import { useHero } from "./useHero";

export default function HeroPage() {
  const hero = useHero();

  if (hero.loading) {
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

        {hero.savedMessage && (
          <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm text-green-700">
            <CheckCircle2 size={18} />
            {hero.savedMessage}
          </div>
        )}
      </div>

      {/* Form */}

      <div className="space-y-8 rounded-[32px] border border-[#ebe7df] bg-white p-8 shadow-sm">
        <HeroImageSection
          imageUrls={hero.imageUrls}
          onChange={hero.setImageUrls}
        />

        <FeaturedProductSection
          selectedProductId={hero.featuredProductId}
          onChange={hero.setFeaturedProductId}
        />

        <HeroContentSection
          title={hero.title}
          accent={hero.accent}
          description={hero.description}
          onTitleChange={hero.setTitle}
          onAccentChange={hero.setAccent}
          onDescriptionChange={hero.setDescription}
        />

        <HeroButtonsSection
          primaryButton={hero.primaryButton}
          secondaryButton={hero.secondaryButton}
          onPrimaryButtonChange={hero.setPrimaryButton}
          onSecondaryButtonChange={hero.setSecondaryButton}
        />

        <HeroFooter
          hasChanges={hero.hasChanges}
          saving={hero.saving}
          onSave={hero.saveHero}
        />
      </div>
    </div>
  );
}