"use client";

import MultiImageUploader from "@/components/admin/MultiImageUploader";

interface HeroImageSectionProps {
  imageUrls: string[];
  onChange: (images: string[]) => void;
}

export default function HeroImageSection({
  imageUrls,
  onChange,
}: HeroImageSectionProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-[#1f2b1d]">
          Hero Images
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Upload one or more images for the homepage carousel.
        </p>
      </div>

      <div className="rounded-2xl border border-[#ebe7df] bg-[#faf9f6] p-6">
        <MultiImageUploader
          bucket="hero"
          value={imageUrls}
          onChange={onChange}
        />
      </div>
    </div>
  );
}