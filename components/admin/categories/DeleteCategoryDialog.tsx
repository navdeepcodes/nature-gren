"use client";

interface DeleteCategoryDialogProps {
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteCategoryDialog({
  open,
  loading = false,
  onClose,
  onDelete,
}: DeleteCategoryDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
      <div className="w-full max-w-md rounded-[28px] bg-white p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">
          Delete Category
        </h2>

        <p className="mt-3 text-gray-500">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="h-12 rounded-xl border px-6"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            disabled={loading}
            className="h-12 rounded-xl bg-red-600 px-6 text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}