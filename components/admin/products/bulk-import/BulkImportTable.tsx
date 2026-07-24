"use client";

import type { Category } from "@/lib/cms/categories";
import type { AIProduct } from "./types";

import BulkImportRow from "./BulkImportRow";

interface BulkImportTableProps {
  products: AIProduct[];
  categories: Category[];

  onEdit: (
    index: number,
    updates: Partial<AIProduct>
  ) => void;

  onRetry: (
    index: number
  ) => void;

  onRemove: (
    index: number
  ) => void;
}

export default function BulkImportTable({
  products,
  categories,
  onEdit,
  onRetry,
  onRemove,
}: BulkImportTableProps) {
  if (products.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe7df] bg-white">
      <div className="border-b border-[#ebe7df] px-6 py-4">
        <h3 className="text-lg font-semibold text-[#1f2b1d]">
          Generated Products
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Review and edit AI generated content before saving.
        </p>
      </div>

      <div className="divide-y divide-[#ebe7df]">
        {products.map((product, index) => (
          <BulkImportRow
            key={`${product.imageUrl}-${index}`}
            index={index}
            product={product}
            categories={categories}
            onEdit={onEdit}
            onRetry={onRetry}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}