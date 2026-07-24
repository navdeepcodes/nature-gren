"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";

import {
  uploadImage,
  deleteImage,
} from "@/lib/supabase/storage";

interface BulkImageUploaderProps {
  bucket?: string;
  value?: string[];
  onChange?: (urls: string[]) => void;
}

export default function BulkImageUploader({
  bucket = "products",
  value = [],
  onChange,
}: BulkImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<string[]>(value);
  const [uploading, setUploading] = useState(false);

  const openPicker = () => {
    inputRef.current?.click();
  };

  async function handleFiles(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    try {
      setUploading(true);

      const uploadedUrls = await Promise.all(
        Array.from(files).map((file) =>
          uploadImage(bucket, file)
        )
      );

      const updated = [
        ...new Set([
          ...images,
          ...uploadedUrls,
        ]),
      ];

      setImages(updated);
      onChange?.(updated);
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Upload failed."
      );
    } finally {
      setUploading(false);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  async function removeImage(index: number) {
    const image = images[index];

    if (!image) return;

    try {
      await deleteImage(bucket, image);

      const updated = images.filter(
        (_, i) => i !== index
      );

      setImages(updated);
      onChange?.(updated);
    } catch (error) {
      console.error(error);
      alert("Failed to delete image.");
    }
  }

  return (
    <div className="space-y-6">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={handleFiles}
      />

      <button
        type="button"
        onClick={openPicker}
        disabled={uploading}
        className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#2E4B2C] px-6 text-white transition hover:bg-[#243d23] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {uploading ? (
          <>
            <Loader2
              size={18}
              className="animate-spin"
            />
            Uploading...
          </>
        ) : (
          <>
            <ImagePlus size={18} />
            Upload Images
          </>
        )}
      </button>

      {images.length === 0 ? (
        <div
          onClick={openPicker}
          className="flex h-72 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-[#faf9f6] transition hover:border-[#2E4B2C] hover:bg-[#f5f8f3]"
        >
          <ImagePlus
            size={42}
            className="mb-4 text-gray-400"
          />

          <h3 className="font-medium text-[#1f2b1d]">
            No Images Uploaded
          </h3>

          <p className="mt-2 text-center text-sm text-gray-500">
            Click here or use the button above to upload
            multiple product images.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={image}
              className="group relative overflow-hidden rounded-xl border bg-white"
            >
              <div className="relative aspect-square">
                <Image
                  src={image}
                  alt={`Product ${index + 1}`}
                  fill
                  sizes="(max-width:768px) 50vw, (max-width:1280px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  removeImage(index)
                }
                className="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {images.length > 0 && (
        <button
          type="button"
          onClick={openPicker}
          className="w-full rounded-xl border border-dashed border-[#2E4B2C] py-3 font-medium text-[#2E4B2C] transition hover:bg-[#edf4eb]"
        >
          + Add More Images
        </button>
      )}
    </div>
  );
}