"use client";

interface ProductPricingProps {
  sku: string;

  onSkuChange: (value: string) => void;
}

export default function ProductPricing({
  sku,
  onSkuChange,
}: ProductPricingProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">
        SKU
      </label>

      <input
        value={sku}
        onChange={(e) =>
          onSkuChange(e.target.value)
        }
        placeholder="JUTE-001"
        className="h-14 w-full rounded-xl border px-5 outline-none transition focus:border-[#2E4B2C]"
      />
    </div>
  );
}