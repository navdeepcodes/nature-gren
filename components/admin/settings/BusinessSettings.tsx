"use client";

interface BusinessSettingsProps {
  data: any;
  onChange: (data: any) => void;
}

export default function BusinessSettings({
  data,
  onChange,
}: BusinessSettingsProps) {
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
          Business Information
        </h2>

        <p className="mt-2 text-gray-500">
          Contact details displayed across your website.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone Number
          </label>

          <input
            value={data.phone ?? ""}
            onChange={(e) =>
              update("phone", e.target.value)
            }
            placeholder="+91 9876543210"
            className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            WhatsApp Number
          </label>

          <input
            value={data.whatsapp ?? ""}
            onChange={(e) =>
              update("whatsapp", e.target.value)
            }
            placeholder="+91 9876543210"
            className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            value={data.email ?? ""}
            onChange={(e) =>
              update("email", e.target.value)
            }
            placeholder="hello@naturegren.com"
            className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Google Maps URL
          </label>

          <input
            value={data.maps_url ?? ""}
            onChange={(e) =>
              update("maps_url", e.target.value)
            }
            placeholder="https://maps.google.com/..."
            className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>

        <div className="lg:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Business Address
          </label>

          <textarea
            rows={4}
            value={data.address ?? ""}
            onChange={(e) =>
              update("address", e.target.value)
            }
            placeholder="Enter your complete business address..."
            className="w-full rounded-xl border border-[#e7e2d8] p-5 outline-none transition focus:border-[#2E4B2C]"
          />
        </div>
      </div>
    </section>
  );
}