import OpenAI from "openai";

export const AI_MODEL =
  process.env.OPENAI_MODEL ?? "gpt-5.5";

let client: OpenAI | null = null;

/**
 * Lazily creates the OpenAI client on first use instead of at module load.
 * A top-level throw here would run during Worker startup (before any
 * request is routed) and could take down every route bundled alongside
 * this module, not just the admin AI feature that actually needs it.
 */
export function getOpenAIClient(): OpenAI {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not configured.");
  }

  if (!client) {
    client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  return client;
}