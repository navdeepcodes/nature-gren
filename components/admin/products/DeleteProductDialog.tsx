"use client";

interface DeleteProductDialogProps {
  open: boolean;

  loading?: boolean;

  productName?: string;

  onClose: () => void;

  onDelete: () => void;
}

export default function DeleteProductDialog({
  open,
  loading = false,
  productName,
  onClose,
  onDelete,
}: DeleteProductDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
      <div className="w-full max-w-md rounded-[30px] bg-white shadow-2xl">
        {/* Header */}

        <div className="border-b px-8 py-6">
          <h2 className="text-2xl font-semibold text-[#1f2b1d]">
            Delete Product
          </h2>

          <p className="mt-2 text-gray-500">
            This action cannot be undone.
          </p>
        </div>

        {/* Body */}

        <div className="px-8 py-8">
          <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
            <p className="text-sm text-gray-600">
              You are about to permanently delete
            </p>

            <p className="mt-2 text-lg font-semibold text-red-700">
              {productName || "this product"}
            </p>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t px-8 py-6">
          <button
            onClick={onClose}
            disabled={loading}
            className="h-12 rounded-xl border px-6 transition hover:bg-gray-50 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            disabled={loading}
            className="h-12 rounded-xl bg-red-600 px-7 text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete Product"}
          </button>
        </div>
      </div>
    </div>
  );
}