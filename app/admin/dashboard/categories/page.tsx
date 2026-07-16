"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import CategoryModal from "@/components/admin/categories/CategoryModal";
import CategoryTable from "@/components/admin/categories/CategoryTable";
import DeleteCategoryDialog from "@/components/admin/categories/DeleteCategoryDialog";

import {
  deleteCategory,
  getCategories,
  type Category,
} from "@/lib/cms/categories";

export default function CategoriesPage() {
  const [loading, setLoading] = useState(true);

  const [categories, setCategories] = useState<Category[]>([]);

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    try {
      setLoading(true);

      const data = await getCategories();

      setCategories(data);
    } catch (error) {
      console.error(error);

      alert("Failed to load categories.");
    } finally {
      setLoading(false);
    }
  }

  function handleAdd() {
    setSelectedCategory(null);

    setModalOpen(true);
  }

  function handleEdit(category: Category) {
    setSelectedCategory(category);

    setModalOpen(true);
  }

  function handleDelete(category: Category) {
    setSelectedCategory(category);

    setDeleteOpen(true);
  }

  async function confirmDelete() {
    if (!selectedCategory) return;

    try {
      setDeleting(true);

      await deleteCategory(selectedCategory.id);

      setDeleteOpen(false);

      setSelectedCategory(null);

      await loadCategories();
    } catch (error) {
      console.error(error);

      alert("Failed to delete category.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <>
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-5xl text-[#1f2b1d]">
              Categories
            </h1>

            <p className="mt-3 text-gray-500">
              Manage homepage categories.
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="inline-flex h-14 items-center gap-2 rounded-xl bg-[#2E4B2C] px-7 text-white transition hover:bg-[#243d23]"
          >
            <Plus size={18} />

            Add Category
          </button>
        </div>

        {loading ? (
          <div className="flex h-72 items-center justify-center rounded-[28px] border border-[#ebe7df] bg-white">
            <p className="text-gray-500">
              Loading categories...
            </p>
          </div>
        ) : (
          <CategoryTable
            categories={categories}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>

      <CategoryModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedCategory(null);
        }}
        onSaved={loadCategories}
        category={selectedCategory}
      />

      <DeleteCategoryDialog
        open={deleteOpen}
        loading={deleting}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedCategory(null);
        }}
        onDelete={confirmDelete}
      />
    </>
  );
}