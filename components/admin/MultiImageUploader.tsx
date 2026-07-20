"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";

import {
  uploadImage,
  deleteImage,
} from "@/lib/supabase/storage";

interface MultiImageUploaderProps {
  bucket?: string;
  value?: string[];
  onChange?: (urls: string[]) => void;
}

export default function MultiImageUploader({
  bucket = "hero",
  value = [],
  onChange,
}: MultiImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<string[]>(value);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setImages(value);
  }, [value]);

  async function handleFiles(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    try {
      setUploading(true);

      const uploaded: string[] = [];

      for (const file of Array.from(files)) {
        const url = await uploadImage(bucket, file);
        uploaded.push(url);
      }

      const updatedImages = [...images, ...uploaded];

      setImages(updatedImages);
      onChange?.(updatedImages);
    } catch (err) {
      console.error("Image upload failed:", err);

      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Upload failed.");
      }
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

      const updatedImages = images.filter(
        (_, i) => i !== index
      );

      setImages(updatedImages);
      onChange?.(updatedImages);
    } catch (err) {
      console.error(err);
      alert("Failed to delete image.");
    }
  }

  return (
    <div className="space-y-6">
      <input
        ref={inputRef}
        hidden
        multiple
        type="file"
        accept="image/*"
        onChange={handleFiles}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="inline-flex h-12 items-center gap-3 rounded-xl bg-[#2E4B2C] px-6 text-white transition hover:bg-[#243d23] disabled:cursor-not-allowed disabled:opacity-50"
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
        <div className="flex h-72 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-[#faf9f6]">
          <ImagePlus
            size={42}
            className="mb-4 text-gray-400"
          />

          <h3 className="font-medium text-[#1f2b1d]">
            No Hero Images
          </h3>

          <p className="mt-2 text-center text-sm text-gray-500">
            Upload one or more images to create
            <br />
            your homepage carousel.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="group overflow-hidden rounded-2xl border border-[#ebe7df] bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={image}
                  alt={`Hero ${index + 1}`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white opacity-0 shadow-lg transition group-hover:opacity-100 hover:bg-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="font-medium text-[#1f2b1d]">
                    Image {index + 1}
                  </p>

                  <p className="text-xs text-gray-500">
                    Hero Carousel
                  </p>
                </div>

                <span className="rounded-full bg-[#edf4eb] px-3 py-1 text-xs font-medium text-[#2E4B2C]">
                  Ready
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {images.length > 0 && (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="w-full rounded-xl border border-dashed border-[#2E4B2C] py-4 font-medium text-[#2E4B2C] transition hover:bg-[#edf4eb]"
        >
          + Add More Images
        </button>
      )}
    </div>
  );
}