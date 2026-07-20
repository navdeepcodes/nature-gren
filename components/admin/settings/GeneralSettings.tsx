"use client";

import ImageUploader from "@/components/admin/ImageUploader";

interface GeneralSettingsProps {
  data: any;
  onChange: (data: any) => void;
}

export default function GeneralSettings({
  data,
  onChange,
}: GeneralSettingsProps) {
  function update(
    key: string,
    value: string | null
  ) {
    onChange({
      ...data,
      [key]: value ?? "",
    });
  }

  return (
    <section className="rounded-[28px] border border-[#ebe7df] bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="font-serif text-3xl text-[#1f2b1d]">
          General
        </h2>

        <p className="mt-2 text-gray-500">
          Basic branding information for your website.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Site Name
            </label>

            <input
              value={data.site_name ?? ""}
              onChange={(e) =>
                update("site_name", e.target.value)
              }
              placeholder="NatureGren"
              className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Tagline
            </label>

            <input
              value={data.tagline ?? ""}
              onChange={(e) =>
                update("tagline", e.target.value)
              }
              placeholder="Premium Sustainable Jute Products"
              className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <label className="mb-4 block text-sm font-medium">
              Website Logo
            </label>

            <ImageUploader
              value={data.logo ?? ""}
              onChange={(url) =>
                update("logo", url)
              }
            />
          </div>

          <div>
            <label className="mb-4 block text-sm font-medium">
              Favicon
            </label>

            <ImageUploader
              value={data.favicon ?? ""}
              onChange={(url) =>
                update("favicon", url)
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}