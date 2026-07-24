export interface BulkImportModalProps {
  open: boolean;
  onClose: () => void;
}

export type GenerationStatus =
  | "pending"
  | "success"
  | "failed";

export interface AIProduct {
  imageUrl: string;

  name: string;
  description: string;

  category: string;

  sku: string;

  features: string[];

  materials: string;

  seoTitle: string;
  seoDescription: string;
  altText: string;

  tags: string[];

  status: GenerationStatus;

  error?: string;
}

export interface BulkImportStats {
  images: number;
  completed: number;
  success: number;
  failed: number;
  progress: number;
}