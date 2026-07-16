"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import ProductModal from "@/components/admin/products/ProductModal";
import ProductTable from "@/components/admin/products/ProductTable";
import DeleteProductDialog from "@/components/admin/products/DeleteProductDialog";

import {
  deleteProduct,
  getProducts,
  type Product,
} from "@/lib/cms/products";

interface ProductWithCategory extends Product {
  category?: {
    id: string;
    name: string;
  } | null;
}

export default function ProductsPage() {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState<ProductWithCategory[]>([]);

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] =
    useState<ProductWithCategory | null>(null);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setLoading(true);

      const data = await getProducts();

      setProducts(data as ProductWithCategory[]);
    } catch (error) {
      console.error(error);

      alert("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }

  function handleAdd() {
    setSelectedProduct(null);

    setModalOpen(true);
  }

  function handleEdit(product: ProductWithCategory) {
    setSelectedProduct(product);

    setModalOpen(true);
  }

  function handleDelete(product: ProductWithCategory) {
    setSelectedProduct(product);

    setDeleteOpen(true);
  }

  async function confirmDelete() {
    if (!selectedProduct) return;

    try {
      setDeleting(true);

      await deleteProduct(selectedProduct.id);

      setDeleteOpen(false);

      setSelectedProduct(null);

      await loadProducts();
    } catch (error) {
      console.error(error);

      alert("Failed to delete product.");
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
              Products
            </h1>

            <p className="mt-3 text-gray-500">
              Manage your product catalogue.
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="inline-flex h-14 items-center gap-2 rounded-xl bg-[#2E4B2C] px-7 text-white transition hover:bg-[#243d23]"
          >
            <Plus size={18} />

            Add Product
          </button>
        </div>

        {loading ? (
          <div className="flex h-72 items-center justify-center rounded-[28px] border border-[#ebe7df] bg-white">
            <p className="text-gray-500">
              Loading products...
            </p>
          </div>
        ) : (
          <ProductTable
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>

      <ProductModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);

          setSelectedProduct(null);
        }}
        onSaved={loadProducts}
        product={selectedProduct}
      />

      <DeleteProductDialog
        open={deleteOpen}
        loading={deleting}
        productName={selectedProduct?.name}
        onClose={() => {
          setDeleteOpen(false);

          setSelectedProduct(null);
        }}
        onDelete={confirmDelete}
      />
    </>
  );
}