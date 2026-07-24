"use client";

import Image from "next/image";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  RotateCcw,
  Trash2,
} from "lucide-react";

import type { Category } from "@/lib/cms/categories";
import type { AIProduct } from "./types";

interface BulkImportRowProps {
  index: number;
  product: AIProduct;
  categories: Category[];

  onEdit: (
    index: number,
    updates: Partial<AIProduct>
  ) => void;

  onRetry: (index: number) => void;

  onRemove: (index: number) => void;
}

export default function BulkImportRow({
  index,
  product,
  categories,
  onEdit,
  onRetry,
  onRemove,
}: BulkImportRowProps) {
  const badge = () => {
    switch (product.status) {
      case "success":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            <CheckCircle2 size={14} />
            Success
          </span>
        );

      case "failed":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
            <AlertCircle size={14} />
            Failed
          </span>
        );

      default:
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
            <Loader2
              size={14}
              className="animate-spin"
            />
            Generating...
          </span>
        );
    }
  };

  return (
    <div className="p-6">

      <div className="flex gap-6">

        {/* Image */}

        <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-[#ebe7df]">

          <Image
            src={product.imageUrl}
            alt={product.altText || ""}
            fill
            className="object-cover"
          />

        </div>

        {/* Content */}

        <div className="flex-1 space-y-5">

          <div className="flex items-center justify-between">

            {badge()}

            <div className="flex gap-2">

              <button
                onClick={() => onRetry(index)}
                className="rounded-xl border border-[#ebe7df] p-2 transition hover:bg-gray-100"
              >
                <RotateCcw size={18} />
              </button>

              <button
                onClick={() => onRemove(index)}
                className="rounded-xl border border-red-200 p-2 text-red-600 transition hover:bg-red-50"
              >
                <Trash2 size={18} />
              </button>

            </div>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Product Name
              </label>

              <input
                value={product.name}
                onChange={(e) =>
                  onEdit(index, {
                    name: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-[#ebe7df] px-4 py-3 outline-none focus:border-[#2E4B2C]"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                SKU
              </label>

              <input
                value={product.sku}
                onChange={(e) =>
                  onEdit(index, {
                    sku: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-[#ebe7df] px-4 py-3 outline-none focus:border-[#2E4B2C]"
              />

            </div>

            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-medium">
                Description
              </label>

              <textarea
                rows={4}
                value={product.description}
                onChange={(e) =>
                  onEdit(index, {
                    description:
                      e.target.value,
                  })
                }
                className="w-full rounded-xl border border-[#ebe7df] px-4 py-3 outline-none focus:border-[#2E4B2C]"
              />

            </div>
                        <div>

              <label className="mb-2 block text-sm font-medium">
                Category
              </label>

              <select
                value={product.category}
                onChange={(e) =>
                  onEdit(index, {
                    category: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-[#ebe7df] bg-white px-4 py-3 outline-none focus:border-[#2E4B2C]"
              >
                <option value="">
                  Select Category
                </option>

                {categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.name}
                  >
                    {category.name}
                  </option>
                ))}

              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Materials
              </label>

              <input
                value={product.materials}
                onChange={(e) =>
                  onEdit(index, {
                    materials: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-[#ebe7df] px-4 py-3 outline-none focus:border-[#2E4B2C]"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                SEO Title
              </label>

              <input
                value={product.seoTitle}
                onChange={(e) =>
                  onEdit(index, {
                    seoTitle: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-[#ebe7df] px-4 py-3 outline-none focus:border-[#2E4B2C]"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Image Alt Text
              </label>

              <input
                value={product.altText}
                onChange={(e) =>
                  onEdit(index, {
                    altText: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-[#ebe7df] px-4 py-3 outline-none focus:border-[#2E4B2C]"
              />

            </div>

            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-medium">
                SEO Description
              </label>

              <textarea
                rows={3}
                value={product.seoDescription}
                onChange={(e) =>
                  onEdit(index, {
                    seoDescription: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-[#ebe7df] px-4 py-3 outline-none focus:border-[#2E4B2C]"
              />

            </div>

            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-medium">
                Features
              </label>

              <textarea
                rows={3}
                value={product.features.join("\n")}
                onChange={(e) =>
                  onEdit(index, {
                    features: e.target.value
                      .split("\n")
                      .map((feature) =>
                        feature.trim()
                      )
                      .filter(Boolean),
                  })
                }
                placeholder="One feature per line"
                className="w-full rounded-xl border border-[#ebe7df] px-4 py-3 outline-none focus:border-[#2E4B2C]"
              />

            </div>

          </div>

          {product.status === "failed" &&
            product.error && (
              <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">

                <AlertCircle
                  size={18}
                  className="mt-0.5 text-red-600"
                />

                <div>

                  <p className="font-medium text-red-700">
                    AI generation failed
                  </p>

                  <p className="mt-1 text-sm text-red-600">
                    {product.error}
                  </p>

                </div>

              </div>
            )}

        </div>

      </div>

    </div>
  );
}