"use client";

import ImageUploader from "@/components/admin/ImageUploader";

interface AboutMissionSectionProps {
  data: any;
  onChange: (data: any) => void;
}

export default function AboutMissionSection({
  data,
  onChange,
}: AboutMissionSectionProps) {
  return (
    <section className="rounded-[28px] border border-[#ebe7df] bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-[#1f2b1d]">
        Mission
      </h2>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Mission Title
          </label>

          <input
            value={data.mission_title}
            onChange={(e) =>
              onChange({
                ...data,
                mission_title: e.target.value,
              })
            }
            placeholder="Our Mission"
            className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Mission Description
          </label>

          <textarea
            rows={8}
            value={data.mission_description}
            onChange={(e) =>
              onChange({
                ...data,
                mission_description: e.target.value,
              })
            }
            placeholder="Describe your mission..."
            className="w-full rounded-xl border border-[#e7e2d8] p-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div>
          <label className="mb-4 block text-sm font-semibold">
            Mission Image
          </label>

          <ImageUploader
            value={data.mission_image}
            onChange={(url) =>
              onChange({
                ...data,
                mission_image: url,
              })
            }
          />
        </div>
      </div>
    </section>
  );
}