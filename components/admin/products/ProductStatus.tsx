"use client";

interface ProductStatusProps {
  featured: boolean;
  active: boolean;
  displayOrder: number;

  onFeaturedChange: (
    value: boolean
  ) => void;

  onActiveChange: (
    value: boolean
  ) => void;

  onDisplayOrderChange: (
    value: number
  ) => void;
}

export default function ProductStatus({
  featured,
  active,
  displayOrder,

  onFeaturedChange,
  onActiveChange,
  onDisplayOrderChange,
}: ProductStatusProps) {
  return (
    <>
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Display Order
        </label>

        <input
          type="number"
          value={displayOrder}
          onChange={(e) =>
            onDisplayOrderChange(
              Number(e.target.value)
            )
          }
          className="h-14 w-full rounded-xl border px-5 outline-none transition focus:border-[#2E4B2C]"
        />
      </div>

      <div className="flex flex-wrap gap-8">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) =>
              onFeaturedChange(
                e.target.checked
              )
            }
          />

          Featured Product
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={active}
            onChange={(e) =>
              onActiveChange(
                e.target.checked
              )
            }
          />

          Active
        </label>
      </div>
    </>
  );
}