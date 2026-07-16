"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import ProductImage from "./ProductImage";
import ProductForm from "./ProductForm";
import ProductCategory from "./ProductCategory";
import ProductPricing from "./ProductPricing";
import ProductStatus from "./ProductStatus";
import ProductFooter from "./ProductFooter";

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

  const [categories, setCategories] = useState<Category[]>([]);

  const [imageUrl, setImageUrl] =
    useState<string | null>(null);

  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");

  const [categoryId, setCategoryId] =
    useState("");

  const [price, setPrice] = useState("");

  const [sku, setSku] = useState("");

  const [displayOrder, setDisplayOrder] =
    useState(0);

  const [featured, setFeatured] =
    useState(false);

  const [active, setActive] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    if (!open) return;

    loadCategories();

    if (product) {
      setImageUrl(product.image_url);

      setName(product.name);
      setDescription(product.description);

      setCategoryId(product.category_id ?? "");

      setPrice(
        product.price != null
          ? product.price.toString()
          : ""
      );

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

    setPrice("");
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

  async function handleSave() {
    if (!name.trim()) {
      alert("Product name is required.");
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

        price:
          price === ""
            ? null
            : Number(price),

        sku:
          sku.trim() === ""
            ? null
            : sku,
      };

      if (editing && product) {
        await updateProduct(
          product.id,
          payload
        );
      } else {
        await createProduct(payload);
      }

      onSaved?.();

      resetForm();

      onClose();
    } catch (error) {
      console.error(error);

      alert("Failed to save product.");
    } finally {
      setSaving(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[32px] bg-white shadow-2xl">
        {/* Header */}

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

        {/* Body */}

        <div className="space-y-6 p-8">
          <ProductImage
            imageUrl={imageUrl}
            onChange={setImageUrl}
          />

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
            price={price}
            sku={sku}
            onPriceChange={setPrice}
            onSkuChange={setSku}
          />

          <ProductStatus
            featured={featured}
            active={active}
            displayOrder={displayOrder}
            onFeaturedChange={
              setFeatured
            }
            onActiveChange={setActive}
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
  );
}