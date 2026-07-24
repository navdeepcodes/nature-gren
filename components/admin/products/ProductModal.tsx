"use client";

import { useEffect, useState } from "react";
import {
  Sparkles,
  Loader2,
  X,
  Upload,
} from "lucide-react";

import ProductImage from "./ProductImage";
import ProductForm from "./ProductForm";
import ProductCategory from "./ProductCategory";
import ProductPricing from "./ProductPricing";
import ProductStatus from "./ProductStatus";
import ProductFooter from "./ProductFooter";

import BulkImportModal from "./bulk-import/BulkImportModal";

import {
  createProduct,
  updateProduct,
  type Product,
} from "@/lib/cms/products";

import {
  getCategories,
  type Category,
} from "@/lib/cms/categories";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  onSaved?: () => void;
  product?: Product | null;
}

export default function ProductModal({
  open,
  onClose,
  onSaved,
  product,
}: ProductModalProps) {
  const editing = !!product;

  const [bulkImportOpen, setBulkImportOpen] =
    useState(false);

  const [categories, setCategories] =
    useState<Category[]>([]);

  const [imageUrl, setImageUrl] =
    useState<string | null>(null);

  const [name, setName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [categoryId, setCategoryId] =
    useState("");

  const [sku, setSku] =
    useState("");

  const [displayOrder, setDisplayOrder] =
    useState(0);

  const [featured, setFeatured] =
    useState(false);

  const [active, setActive] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [generating, setGenerating] =
    useState(false);

  useEffect(() => {
    if (!open) return;

    loadCategories();

    if (product) {
      setImageUrl(product.image_url);
      setName(product.name);
      setDescription(product.description);
      setCategoryId(product.category_id ?? "");
      setSku(product.sku ?? "");
      setDisplayOrder(product.display_order);
      setFeatured(product.featured);
      setActive(product.active);
    } else {
      resetForm();
    }
  }, [open, product]);

  function resetForm() {
    setImageUrl(null);
    setName("");
    setDescription("");
    setCategoryId("");
    setSku("");
    setDisplayOrder(0);
    setFeatured(false);
    setActive(true);
  }

  async function loadCategories() {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load categories.");
    }
  }

  async function handleGenerateAI() {
    if (!imageUrl) {
      alert(
        "Please upload a product image first."
      );
      return;
    }

    try {
      setGenerating(true);

      const response = await fetch(
        "/api/admin/ai/product",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            imageUrl,
            categories: categories.map(
              (category) => ({
                id: category.id,
                name: category.name,
              })
            ),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to generate product."
        );
      }

      const data = await response.json();

      setName(data.name ?? "");
      setDescription(
        data.description ?? ""
      );
      setSku(data.sku ?? "");

      if (data.category) {
        const matchedCategory =
          categories.find(
            (category) =>
              category.name ===
              data.category
          );

        if (matchedCategory) {
          setCategoryId(
            matchedCategory.id
          );
        }
      }
    } catch (error) {
      console.error(error);
      alert("AI generation failed.");
    } finally {
      setGenerating(false);
    }
  }

  function handleBulkImportSaved() {
    setBulkImportOpen(false);

    onSaved?.();
  }

  async function handleSave() {
    if (!name.trim()) {
      alert(
        "Product name is required."
      );
      return;
    }

    try {
      setSaving(true);

      const payload = {
        name,
        description,
        category_id:
          categoryId || null,
        image_url: imageUrl,
        featured,
        active,
        display_order:
          displayOrder,
        sku:
          sku.trim() === ""
            ? null
            : sku.trim(),
      };

      if (editing && product) {
        await updateProduct(
          product.id,
          payload
        );
      } else {
        await createProduct(
          payload
        );
      }

      onSaved?.();

      resetForm();

      onClose();
    } catch (error) {
      console.error(error);

      alert(
        "Failed to save product."
      );
    } finally {
      setSaving(false);
    }
  }
    if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
        <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[32px] bg-white shadow-2xl">

          <div className="flex items-center justify-between border-b px-8 py-6">

            <div>
              <h2 className="text-2xl font-semibold">
                {editing
                  ? "Edit Product"
                  : "Add Product"}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {editing
                  ? "Update your product."
                  : "Create a new product."}
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-2 transition hover:bg-gray-100"
            >
              <X size={22} />
            </button>

          </div>

          <div className="space-y-6 p-8">

            <ProductImage
              imageUrl={imageUrl}
              onChange={setImageUrl}
            />

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                <div>

                  <div className="flex items-center gap-2">

                    <Sparkles
                      size={18}
                      className="text-emerald-600"
                    />

                    <h3 className="font-semibold">
                      AI Product Assistant
                    </h3>

                  </div>

                  <p className="mt-2 text-sm text-gray-600">
                    Generate a single product from one image,
                    or import multiple products using AI.
                  </p>

                </div>

                <div className="flex flex-wrap gap-3">

                  <button
                    type="button"
                    onClick={handleGenerateAI}
                    disabled={
                      !imageUrl ||
                      generating
                    }
                    className="flex items-center gap-2 rounded-xl bg-[#2E4B2C] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {generating ? (
                      <>
                        <Loader2
                          size={16}
                          className="animate-spin"
                        />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        Generate with AI
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setBulkImportOpen(true)
                    }
                    className="flex items-center gap-2 rounded-xl border border-[#2E4B2C] bg-white px-5 py-3 text-sm font-medium text-[#2E4B2C] transition hover:bg-[#edf4eb]"
                  >
                    <Upload size={16} />
                    Bulk Import
                  </button>

                </div>

              </div>

            </div>

            <ProductForm
              name={name}
              description={description}
              onNameChange={setName}
              onDescriptionChange={
                setDescription
              }
            />

            <ProductCategory
              categories={categories}
              value={categoryId}
              onChange={setCategoryId}
            />

            <ProductPricing
              sku={sku}
              onSkuChange={setSku}
            />

            <ProductStatus
              featured={featured}
              active={active}
              displayOrder={
                displayOrder
              }
              onFeaturedChange={
                setFeatured
              }
              onActiveChange={
                setActive
              }
              onDisplayOrderChange={
                setDisplayOrder
              }
            />

          </div>

          <ProductFooter
            editing={editing}
            saving={saving}
            onCancel={onClose}
            onSave={handleSave}
          />

        </div>
      </div>

      <BulkImportModal
        open={bulkImportOpen}
        onClose={() =>
          setBulkImportOpen(false)
        }
        onSaved={
          handleBulkImportSaved
        }
      />
    </>
  );
}