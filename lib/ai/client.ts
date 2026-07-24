import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not configured.");
}

export const AI_MODEL =
  process.env.OPENAI_MODEL ?? "gpt-5.5";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});