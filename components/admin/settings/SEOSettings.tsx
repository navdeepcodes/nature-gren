"use client";

import ImageUploader from "@/components/admin/ImageUploader";

interface SEOSettingsProps {
  data: any;
  onChange: (data: any) => void;
}

export default function SEOSettings({
  data,
  onChange,
}: SEOSettingsProps) {
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
          SEO
        </h2>

        <p className="mt-2 text-gray-500">
          Improve how your website appears on Google and social media.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium">
            SEO Title
          </label>

          <input
            value={data.seo_title ?? ""}
            onChange={(e) =>
              update("seo_title", e.target.value)
            }
            placeholder="NatureGren | Premium Sustainable Jute Products"
            className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
          />

          <p className="mt-2 text-xs text-gray-500">
            Recommended length: 50–60 characters.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Meta Description
          </label>

          <textarea
            rows={5}
            value={data.seo_description ?? ""}
            onChange={(e) =>
              update("seo_description", e.target.value)
            }
            placeholder="Premium handcrafted eco-friendly jute products designed for sustainable living."
            className="w-full rounded-xl border border-[#e7e2d8] p-5 outline-none transition focus:border-[#2E4B2C]"
          />

          <p className="mt-2 text-xs text-gray-500">
            Recommended length: 140–160 characters.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            SEO Keywords
          </label>

          <input
            value={data.seo_keywords ?? ""}
            onChange={(e) =>
              update("seo_keywords", e.target.value)
            }
            placeholder="jute bags, eco friendly bags, sustainable products"
            className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
          />

          <p className="mt-2 text-xs text-gray-500">
            Separate keywords using commas.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Canonical URL
          </label>

          <input
            type="url"
            value={data.canonical_url ?? ""}
            onChange={(e) =>
              update("canonical_url", e.target.value)
            }
            placeholder="https://naturegren.com"
            className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div>
          <label className="mb-4 block text-sm font-medium">
            Open Graph Image
          </label>

          <ImageUploader
            value={data.seo_image ?? ""}
            onChange={(url) =>
              update("seo_image", url)
            }
          />

          <p className="mt-2 text-xs text-gray-500">
            Recommended size: 1200 × 630 pixels for Facebook, LinkedIn and X.
          </p>
        </div>
      </div>
    </section>
  );
}