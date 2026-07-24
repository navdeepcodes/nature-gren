import { z } from "zod";

export const ProductGenerationSchema = z.object({
  name: z.string(),

  description: z.string(),

  category: z.string(),

  sku: z.string(),

  features: z.array(z.string()),

  materials: z.string(),

  seoTitle: z.string(),

  seoDescription: z.string(),

  altText: z.string(),

  tags: z.array(z.string()),
});

export type ProductGeneration = z.infer<
  typeof ProductGenerationSchema
>;