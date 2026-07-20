"use client";

import ImageUploader from "@/components/admin/ImageUploader";

interface AboutVisionSectionProps {
  data: any;
  onChange: (data: any) => void;
}

export default function AboutVisionSection({
  data,
  onChange,
}: AboutVisionSectionProps) {
  return (
    <section className="rounded-[28px] border border-[#ebe7df] bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-[#1f2b1d]">
        Vision
      </h2>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Vision Title
          </label>

          <input
            value={data.vision_title}
            onChange={(e) =>
              onChange({
                ...data,
                vision_title: e.target.value,
              })
            }
            placeholder="Our Vision"
            className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Vision Description
          </label>

          <textarea
            rows={8}
            value={data.vision_description}
            onChange={(e) =>
              onChange({
                ...data,
                vision_description: e.target.value,
              })
            }
            placeholder="Describe your long-term vision..."
            className="w-full rounded-xl border border-[#e7e2d8] p-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div>
          <label className="mb-4 block text-sm font-semibold">
            Vision Image
          </label>

          <ImageUploader
            value={data.vision_image}
            onChange={(url) =>
              onChange({
                ...data,
                vision_image: url,
              })
            }
          />
        </div>
      </div>
    </section>
  );
}