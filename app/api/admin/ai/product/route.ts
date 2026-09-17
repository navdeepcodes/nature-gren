import { NextRequest, NextResponse } from "next/server";

import { generateProductFromImage } from "@/lib/ai/product";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    // This route lives under /api/admin, not /admin, so the auth
    // middleware's matcher (["/admin/:path*"]) does not cover it. Without
    // this check, anyone could call it directly and rack up paid OpenAI
    // usage on the site's account.
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized." },
        { status: 401 }
      );
    }

    const body = await request.json();

    const { imageUrl, categories } = body;

    if (!imageUrl) {
      return NextResponse.json(
        {
          error: "Image URL is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !Array.isArray(categories) ||
      categories.length === 0
    ) {
      return NextResponse.json(
        {
          error: "At least one category is required.",
        },
        {
          status: 400,
        }
      );
    }

    console.log("========== AI PRODUCT REQUEST ==========");
    console.log("Image URL:", imageUrl);
    console.log("Categories:", categories);

    const product = await generateProductFromImage(
      imageUrl,
      categories
    );

    return NextResponse.json(product);
  } catch (error) {
    console.error("========== AI PRODUCT ERROR ==========");
    console.error(error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      {
        status: 500,
      }
    );
  }
}