import { AI_MODEL, openai } from "./client";
import { getProductGenerationPrompt } from "./prompts";
import {
  ProductGeneration,
  ProductGenerationSchema,
} from "./schemas";

interface ProductCategory {
  id: string;
  name: string;
}

export async function generateProductFromImage(
  imageUrl: string,
  categories: ProductCategory[]
): Promise<ProductGeneration> {
  const response = await openai.responses.parse({
    model: AI_MODEL,

    input: [
      {
        role: "system",
        content: [
          {
            type: "input_text",
            text: getProductGenerationPrompt(categories),
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "input_image",
            image_url: imageUrl,
            detail: "high",
          },
        ],
      },
    ],

    text: {
      format: {
        type: "json_schema",
        name: "product_generation",
        strict: true,
        schema: {
          type: "object",
          additionalProperties: false,
          properties: {
            name: {
              type: "string",
            },
            description: {
              type: "string",
            },
            category: {
              type: "string",
            },
            sku: {
              type: "string",
            },
            features: {
              type: "array",
              items: {
                type: "string",
              },
            },
            materials: {
              type: "string",
            },
            seoTitle: {
              type: "string",
            },
            seoDescription: {
              type: "string",
            },
            altText: {
              type: "string",
            },
            tags: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          required: [
            "name",
            "description",
            "category",
            "sku",
            "features",
            "materials",
            "seoTitle",
            "seoDescription",
            "altText",
            "tags",
          ],
        },
      },
    },
  });

  if (!response.output_parsed) {
    throw new Error(
      "AI failed to generate structured product data."
    );
  }

  return ProductGenerationSchema.parse(
    response.output_parsed
  );
}