"use client";

interface ProductPricingProps {
  price: string;
  sku: string;

  onPriceChange: (value: string) => void;
  onSkuChange: (value: string) => void;
}

export default function ProductPricing({
  price,
  sku,
  onPriceChange,
  onSkuChange,
}: ProductPricingProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Price
        </label>

        <input
          type="number"
          value={price}
          onChange={(e) =>
            onPriceChange(e.target.value)
          }
          placeholder="499"
          className="h-14 w-full rounded-xl border px-5 outline-none transition focus:border-[#2E4B2C]"
        />
      </div>

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
    </div>
  );
}