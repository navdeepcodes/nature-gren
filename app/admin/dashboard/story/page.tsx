"use client";

import { useEffect, useState } from "react";

import DashboardHeader from "@/components/admin/DashboardHeader";
import StoryForm from "@/components/admin/story/StoryForm";

import {
  Story,
  getStory,
} from "@/lib/cms/story";

export default function StoryPage() {
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadStory() {
    try {
      setLoading(true);

      const data = await getStory();

      console.log("Story Loaded:", data);

      setStory(data);
    } catch (error: any) {
      console.error("========== STORY ERROR ==========");
      console.error(error);
      console.error("Message:", error?.message);
      console.error("Details:", error?.details);
      console.error("Hint:", error?.hint);
      console.error("Code:", error?.code);
      console.error("================================");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStory();
  }, []);

  return (
    <>
      <DashboardHeader
        title="Story"
        description="Manage the Story section."
      />

      {loading ? (
        <div className="rounded-[32px] border border-[#ebe7df] bg-white p-20 text-center">
          Loading...
        </div>
      ) : story ? (
        <StoryForm
          story={story}
          onSaved={loadStory}
        />
      ) : (
        <div className="rounded-[32px] border border-[#ebe7df] bg-white p-20 text-center">
          No story found.
        </div>
      )}
    </>
  );
}