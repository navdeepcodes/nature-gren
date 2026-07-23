import imageCompression from "browser-image-compression";

import { createClient } from "./client";

export async function uploadImage(
  bucket: string,
  file: File
) {
  const supabase = createClient();

  let uploadFile: File = file;

  // Compress images only
  if (file.type.startsWith("image/")) {
    uploadFile = await imageCompression(file, {
      maxSizeMB: 0.4,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 0.85,
    });
  }

  const extension =
    file.name.split(".").pop()?.toLowerCase() ?? "";

  const fileName = `${Date.now()}-${crypto.randomUUID()}.${extension}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, uploadFile, {
      cacheControl: "31536000",
      upsert: true,
    });

  if (error) {
    console.error("Storage Upload Error:", error);
    throw new Error(error.message);
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from(bucket)
    .getPublicUrl(data.path);

  return publicUrl;
}

export async function deleteImage(
  bucket: string,
  publicUrl: string
) {
  const supabase = createClient();

  try {
    const path = publicUrl.split(
      `/storage/v1/object/public/${bucket}/`
    )[1];

    if (!path) return;

    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) {
      console.error("Storage Delete Error:", error);
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
  }
}