"use client";

import Image from "next/image";
import { Pencil, Trash2, Star } from "lucide-react";

import type { Product } from "@/lib/cms/products";

interface ProductWithCategory extends Product {
  category?: {
    id: string;
    name: string;
  } | null;
}

interface ProductTableProps {
  products: ProductWithCategory[];

  onEdit: (product: ProductWithCategory) => void;

  onDelete: (product: ProductWithCategory) => void;
}

export default function ProductTable({
  products,
  onEdit,
  onDelete,
}: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="overflow-hidden rounded-[28px] border border-[#ebe7df] bg-white shadow-sm">
        <div className="flex h-72 items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[#1f2b1d]">
              No Products Yet
            </h3>

            <p className="mt-3 text-gray-500">
              Create your first product.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-[#ebe7df] bg-white shadow-sm">
      <table className="w-full">
        <thead className="border-b bg-[#faf9f6]">
          <tr>
            <th className="px-8 py-5 text-left font-semibold">
              Image
            </th>

            <th className="px-8 py-5 text-left font-semibold">
              Product
            </th>

            <th className="px-8 py-5 text-left font-semibold">
              Category
            </th>

            <th className="px-8 py-5 text-left font-semibold">
              Price
            </th>

            <th className="px-8 py-5 text-left font-semibold">
              Featured
            </th>

            <th className="px-8 py-5 text-left font-semibold">
              Status
            </th>

            <th className="px-8 py-5 text-right font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b last:border-b-0 hover:bg-[#faf9f6]"
            >
              {/* Image */}

              <td className="px-8 py-5">
                {product.image_url ? (
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 text-xs text-gray-400">
                    No Image
                  </div>
                )}
              </td>

              {/* Product */}

              <td className="px-8 py-5">
                <div>
                  <p className="font-semibold text-[#1f2b1d]">
                    {product.name}
                  </p>

                  <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                    {product.description}
                  </p>
                </div>
              </td>

              {/* Category */}

              <td className="px-8 py-5">
                {product.category?.name ?? "-"}
              </td>

              {/* Price */}

              <td className="px-8 py-5">
                {product.price == null
                  ? "-"
                  : `₹${product.price}`}
              </td>

              {/* Featured */}

              <td className="px-8 py-5">
                {product.featured ? (
                  <div className="flex items-center gap-2 text-amber-600">
                    <Star
                      size={16}
                      fill="currentColor"
                    />

                    Featured
                  </div>
                ) : (
                  "-"
                )}
              </td>

              {/* Status */}

              <td className="px-8 py-5">
                {product.active ? (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    Active
                  </span>
                ) : (
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                    Hidden
                  </span>
                )}
              </td>

              {/* Actions */}

              <td className="px-8 py-5">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => onEdit(product)}
                    className="rounded-lg p-2 transition hover:bg-gray-100"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(product)}
                    className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}