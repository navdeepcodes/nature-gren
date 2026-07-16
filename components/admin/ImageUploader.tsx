"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";

import {
  uploadImage,
  deleteImage,
} from "@/lib/supabase/storage";

interface ImageUploaderProps {
  bucket?: string;
  value?: string | null;
  onChange?: (url: string | null) => void;
}

export default function ImageUploader({
  bucket = "hero",
  value = null,
  onChange,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<string | null>(value);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setImage(value);
  }, [value]);

  async function handleFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      const previousImage = image;

      const url = await uploadImage(bucket, file);

      if (previousImage) {
        await deleteImage(bucket, previousImage);
      }

      setImage(url);
      onChange?.(url);
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

  async function removeImage() {
    if (image) {
      await deleteImage(bucket, image);
    }

    setImage(null);

    onChange?.(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-[24px] border-2 border-dashed border-gray-300 bg-[#faf9f6]">
        {image ? (
          <div className="relative aspect-[16/10]">
            <Image
              src={image}
              alt="Preview"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/10] flex-col items-center justify-center gap-4">
            {uploading ? (
              <>
                <Loader2
                  size={40}
                  className="animate-spin text-[#2E4B2C]"
                />

                <p className="text-gray-500">
                  Uploading...
                </p>
              </>
            ) : (
              <>
                <ImagePlus
                  size={42}
                  className="text-gray-400"
                />

                <div className="text-center">
                  <h3 className="font-medium">
                    No Image Uploaded
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    JPG, PNG or WEBP
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={handleFile}
      />

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="inline-flex h-12 items-center rounded-xl bg-[#2E4B2C] px-6 text-white transition hover:bg-[#243d23] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {uploading
            ? "Uploading..."
            : image
            ? "Replace Image"
            : "Upload Image"}
        </button>

        {image && (
          <button
            type="button"
            onClick={removeImage}
            disabled={uploading}
            className="inline-flex h-12 items-center gap-2 rounded-xl border px-6 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Trash2 size={18} />
            Remove
          </button>
        )}
      </div>
    </div>
  );
}