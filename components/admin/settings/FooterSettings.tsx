"use client";

interface FooterSettingsProps {
  data: any;
  onChange: (data: any) => void;
}

export default function FooterSettings({
  data,
  onChange,
}: FooterSettingsProps) {
  function update(key: string, value: string) {
    onChange({
      ...data,
      [key]: value,
    });
  }

  return (
    <section className="rounded-[28px] border border-[#ebe7df] bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="font-serif text-3xl text-[#1f2b1d]">
          Footer
        </h2>

        <p className="mt-2 text-gray-500">
          Manage the information displayed in your website footer.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Footer Description
          </label>

          <textarea
            rows={5}
            value={data.footer_description ?? ""}
            onChange={(e) =>
              update("footer_description", e.target.value)
            }
            placeholder="NatureGren creates premium handcrafted sustainable jute products that combine timeless design with eco-conscious living."
            className="w-full rounded-xl border border-[#e7e2d8] p-5 outline-none transition focus:border-[#2E4B2C]"
          />

          <p className="mt-2 text-xs text-gray-500">
            A short paragraph displayed in the footer.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Copyright
          </label>

          <input
            value={data.copyright ?? ""}
            onChange={(e) =>
              update("copyright", e.target.value)
            }
            placeholder="© 2026 NatureGren. All Rights Reserved."
            className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
          />

          <p className="mt-2 text-xs text-gray-500">
            Copyright text displayed at the bottom of every page.
          </p>
        </div>
      </div>
    </section>
  );
}