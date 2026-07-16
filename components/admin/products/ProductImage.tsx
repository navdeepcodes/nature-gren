"use client";

import ImageUploader from "@/components/admin/ImageUploader";

interface ProductImageProps {
  imageUrl: string | null;
  onChange: (url: string | null) => void;
}

export default function ProductImage({
  imageUrl,
  onChange,
}: ProductImageProps) {
  return (
    <div>
      <label className="mb-3 block text-sm font-semibold">
        Product Image
      </label>

      <ImageUploader
        bucket="products"
        value={imageUrl}
        onChange={onChange}
      />
    </div>
  );
}