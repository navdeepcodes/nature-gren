"use client";

import ImageUploader from "@/components/admin/ImageUploader";

interface AboutHeroSectionProps {
  data: any;
  onChange: (data: any) => void;
}

export default function AboutHeroSection({
  data,
  onChange,
}: AboutHeroSectionProps) {
  return (
    <section className="rounded-[28px] border border-[#ebe7df] bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-[#1f2b1d]">
        Hero Section
      </h2>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Hero Title
          </label>

          <input
            value={data.hero_title}
            onChange={(e) =>
              onChange({
                ...data,
                hero_title: e.target.value,
              })
            }
            placeholder="About NatureGren"
            className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Hero Subtitle
          </label>

          <textarea
            rows={4}
            value={data.hero_subtitle}
            onChange={(e) =>
              onChange({
                ...data,
                hero_subtitle: e.target.value,
              })
            }
            placeholder="Write a short introduction..."
            className="w-full rounded-xl border border-[#e7e2d8] p-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div>
          <label className="mb-4 block text-sm font-semibold">
            Hero Image
          </label>

          <ImageUploader
            value={data.hero_image}
            onChange={(url) =>
              onChange({
                ...data,
                hero_image: url,
              })
            }
          />
        </div>
      </div>
    </section>
  );
}