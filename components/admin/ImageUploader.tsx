"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ImagePlus,
  Loader2,
  Trash2,
  Video,
} from "lucide-react";

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

  const [media, setMedia] = useState<string | null>(value);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setMedia(value);
  }, [value]);

  const isVideo = media
    ? /\.(mp4|webm|mov|ogg)$/i.test(media)
    : false;

  async function handleFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      const previousMedia = media;

      const url = await uploadImage(bucket, file);

      if (previousMedia) {
        await deleteImage(bucket, previousMedia);
      }

      setMedia(url);
      onChange?.(url);
    } catch (err) {
      console.error("Media upload failed:", err);

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

  async function removeMedia() {
    if (media) {
      await deleteImage(bucket, media);
    }

    setMedia(null);

    onChange?.(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-[24px] border-2 border-dashed border-gray-300 bg-[#faf9f6]">

        {media ? (
          <div className="relative aspect-[16/10]">

            {isVideo ? (
              <video
                src={media}
                controls
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={media}
                alt="Preview"
                fill
                className="object-cover"
              />
            )}

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
                    No Media Uploaded
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    JPG • PNG • WEBP • MP4 • WEBM • MOV
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
        accept="image/*,video/mp4,video/webm,video/quicktime,video/ogg"
        onChange={handleFile}
      />

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#2E4B2C] px-6 text-white transition hover:bg-[#243d23] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isVideo ? (
            <Video size={18} />
          ) : (
            <ImagePlus size={18} />
          )}

          {uploading
            ? "Uploading..."
            : media
            ? "Replace Media"
            : "Upload Media"}
        </button>

        {media && (
          <button
            type="button"
            onClick={removeMedia}
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