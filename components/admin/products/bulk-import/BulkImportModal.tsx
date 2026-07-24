"use client";

import useBulkImport from "./useBulkImport";

import BulkImportHeader from "./BulkImportHeader";
import BulkImportStats from "./BulkImportStats";
import BulkImportProgress from "./BulkImportProgress";
import BulkImportTable from "./BulkImportTable";
import BulkImportFooter from "./BulkImportFooter";

import BulkImageUploader from "../BulkImageUploader";

interface BulkImportModalProps {
  open: boolean;
  onClose: () => void;
  onSaved?: () => void;
}

export default function BulkImportModal({
  open,
  onClose,
  onSaved,
}: BulkImportModalProps) {
  const bulk = useBulkImport({
    onClose,
    onSaved,
  });

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-8 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-[#ebe7df] bg-white shadow-2xl">
        <BulkImportHeader
          generating={bulk.generating}
          saving={bulk.saving}
          onClose={bulk.handleClose}
        />

        <div className="flex-1 overflow-y-auto">
          <div className="space-y-8 p-8">
            <section className="rounded-2xl border border-[#ebe7df] bg-[#fcfcfb] p-6">
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-[#1f2b1d]">
                  Upload Images
                </h3>

                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Upload one or more product images. AI will analyze each image
                  independently and generate product details before importing
                  them into your catalog.
                </p>
              </div>

              <BulkImageUploader
                bucket="products"
                value={bulk.images}
                onChange={bulk.setImages}
              />
            </section>

            <BulkImportStats
              images={bulk.images.length}
              success={bulk.successCount}
              failed={bulk.failedCount}
              progress={bulk.progress}
            />

            <BulkImportProgress
              generating={bulk.generating}
              completed={bulk.completed}
              total={bulk.images.length}
              progress={bulk.progress}
            />

            <BulkImportTable
              products={bulk.results}
              categories={bulk.categories}
              onEdit={bulk.editResult}
              onRetry={bulk.retryProduct}
              onRemove={bulk.removeResult}
            />
          </div>
        </div>

        <BulkImportFooter
  imageCount={bulk.images.length}
  successCount={bulk.successCount}
  failedCount={bulk.failedCount}
  hasResults={bulk.results.length > 0}
  generating={bulk.generating}
  saving={bulk.saving}
  loadingCategories={bulk.loadingCategories}
  onCancel={bulk.handleClose}
  onGenerate={bulk.handleGenerate}
  onSave={bulk.handleSaveAll}
/>
      </div>
    </div>
  );
}