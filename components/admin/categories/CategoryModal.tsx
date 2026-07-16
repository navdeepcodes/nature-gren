"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import ImageUploader from "@/components/admin/ImageUploader";

import {
  Category,
  createCategory,
  updateCategory,
} from "@/lib/cms/categories";

interface CategoryModalProps {
  open: boolean;
  onClose: () => void;
  onSaved?: () => void;
  category?: Category | null;
}

export default function CategoryModal({
  open,
  onClose,
  onSaved,
  category,
}: CategoryModalProps) {
  const editing = !!category;

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const [displayOrder, setDisplayOrder] = useState(0);

  const [active, setActive] = useState(true);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open) return;

    if (category) {
      setImageUrl(category.image_url);
      setName(category.name);
      setDescription(category.description);
      setDisplayOrder(category.display_order);
      setActive(category.active);
    } else {
      setImageUrl(null);
      setName("");
      setDescription("");
      setDisplayOrder(0);
      setActive(true);
    }
  }, [open, category]);

  async function handleSave() {
    if (!name.trim()) {
      alert("Category name is required.");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        name: name.trim(),
        description: description.trim(),
        image_url: imageUrl,
        active,
        display_order: displayOrder,
      };

      if (editing) {
        await updateCategory(category.id, payload);
      } else {
        await createCategory(payload);
      }

      onSaved?.();
      onClose();
    } catch (error) {
      console.error("Category Save Error:", error);

      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Failed to save category.");
      }
    } finally {
      setSaving(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
      <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[32px] bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-6">
          <div>
            <h2 className="text-2xl font-semibold">
              {editing ? "Edit Category" : "Add Category"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {editing
                ? "Update category details."
                : "Create a new homepage category."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}

        <div className="space-y-6 p-8">
          <div>
            <label className="mb-3 block text-sm font-semibold">
              Category Image
            </label>

            <ImageUploader
              bucket="categories"
              value={imageUrl}
              onChange={setImageUrl}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Category Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Shopping Bags"
              className="h-14 w-full rounded-xl border px-5 outline-none focus:border-[#2E4B2C]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short category description..."
              className="w-full rounded-xl border p-5 outline-none focus:border-[#2E4B2C]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Display Order
            </label>

            <input
              type="number"
              value={displayOrder}
              onChange={(e) =>
                setDisplayOrder(Number(e.target.value))
              }
              className="h-14 w-full rounded-xl border px-5 outline-none focus:border-[#2E4B2C]"
            />
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) =>
                setActive(e.target.checked)
              }
            />

            Active Category
          </label>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t px-8 py-6">
          <button
            onClick={onClose}
            className="h-12 rounded-xl border px-6"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={saving || !name.trim()}
            className="h-12 rounded-xl bg-[#2E4B2C] px-7 text-white transition hover:bg-[#243d23] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving
              ? "Saving..."
              : editing
              ? "Update Category"
              : "Save Category"}
          </button>
        </div>
      </div>
    </div>
  );
}