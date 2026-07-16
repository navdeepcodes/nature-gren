"use client";

import { useState } from "react";

import ImageUploader from "@/components/admin/ImageUploader";

import {
  Story,
  updateStory,
} from "@/lib/cms/story";

interface Props {
  story: Story;

  onSaved?: () => void;
}

export default function StoryForm({
  story,
  onSaved,
}: Props) {
  const [title, setTitle] = useState(story.title);

  const [subtitle, setSubtitle] = useState(
    story.subtitle
  );

  const [description, setDescription] = useState(
    story.description
  );

  const [buttonText, setButtonText] = useState(
    story.button_text
  );

  const [imageUrl, setImageUrl] = useState<
    string | null
  >(story.image_url);

  const [saving, setSaving] = useState(false);

  async function save() {
    try {
      setSaving(true);

      await updateStory(story.id, {
        title,
        subtitle,
        description,
        button_text: buttonText,
        image_url: imageUrl,
      });

      onSaved?.();

      alert("Story updated.");
    } catch (err) {
      console.error(err);

      alert("Failed to update story.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-[32px] border border-[#ebe7df] bg-white shadow-sm">
      <div className="space-y-8 p-8">
        <div>
          <label className="mb-3 block font-semibold">
            Story Image
          </label>

          <ImageUploader
            bucket="story"
            value={imageUrl}
            onChange={setImageUrl}
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Title
          </label>

          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="h-14 w-full rounded-xl border px-5"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Subtitle
          </label>

          <input
            value={subtitle}
            onChange={(e) =>
              setSubtitle(e.target.value)
            }
            className="h-14 w-full rounded-xl border px-5"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Description
          </label>

          <textarea
            rows={6}
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full rounded-xl border p-5"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Button Text
          </label>

          <input
            value={buttonText}
            onChange={(e) =>
              setButtonText(e.target.value)
            }
            className="h-14 w-full rounded-xl border px-5"
          />
        </div>

        <button
          onClick={save}
          disabled={saving}
          className="rounded-xl bg-[#2E4B2C] px-8 py-4 text-white hover:bg-[#243d23]"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}