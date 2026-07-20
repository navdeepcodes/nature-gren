"use client";

import ImageUploader from "@/components/admin/ImageUploader";

interface AboutStorySectionProps {
  data: any;
  onChange: (data: any) => void;
}

export default function AboutStorySection({
  data,
  onChange,
}: AboutStorySectionProps) {
  return (
    <section className="rounded-[28px] border border-[#ebe7df] bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-[#1f2b1d]">
        Our Story
      </h2>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Story Title
          </label>

          <input
            value={data.story_title}
            onChange={(e) =>
              onChange({
                ...data,
                story_title: e.target.value,
              })
            }
            placeholder="Our Story"
            className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Story Description
          </label>

          <textarea
            rows={8}
            value={data.story_description}
            onChange={(e) =>
              onChange({
                ...data,
                story_description: e.target.value,
              })
            }
            placeholder="Tell the story behind NatureGren..."
            className="w-full rounded-xl border border-[#e7e2d8] p-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div>
          <label className="mb-4 block text-sm font-semibold">
            Story Image
          </label>

          <ImageUploader
            value={data.story_image}
            onChange={(url) =>
              onChange({
                ...data,
                story_image: url,
              })
            }
          />
        </div>
      </div>
    </section>
  );
}