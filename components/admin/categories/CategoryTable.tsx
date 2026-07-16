"use client";

import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";

import { Category } from "@/lib/cms/categories";

interface CategoryTableProps {
  categories: Category[];

  onEdit: (category: Category) => void;
  onDelete: (category: Category) => void;
}

export default function CategoryTable({
  categories,
  onEdit,
  onDelete,
}: CategoryTableProps) {
  if (categories.length === 0) {
    return (
      <div className="overflow-hidden rounded-[28px] border border-[#ebe7df] bg-white shadow-sm">
        <div className="flex h-72 items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[#1f2b1d]">
              No Categories Yet
            </h3>

            <p className="mt-3 text-gray-500">
              Create your first homepage category.
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
              Category
            </th>

            <th className="px-8 py-5 text-left font-semibold">
              Order
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
          {categories.map((category) => (
            <tr
              key={category.id}
              className="border-b last:border-b-0 hover:bg-[#faf9f6]"
            >
              <td className="px-8 py-5">
                {category.image_url ? (
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                    <Image
                      src={category.image_url}
                      alt={category.name}
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

              <td className="px-8 py-5">
                <div>
                  <p className="font-semibold text-[#1f2b1d]">
                    {category.name}
                  </p>

                  <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>
              </td>

              <td className="px-8 py-5">
                {category.display_order}
              </td>

              <td className="px-8 py-5">
                {category.active ? (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    Active
                  </span>
                ) : (
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                    Hidden
                  </span>
                )}
              </td>

              <td className="px-8 py-5">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => onEdit(category)}
                    className="rounded-lg p-2 transition hover:bg-[#f2f2f2]"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(category)}
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