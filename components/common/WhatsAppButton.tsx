"use client";

import { MessageCircle } from "lucide-react";

import { createWhatsAppLink } from "@/lib/whatsapp/message";

interface Props {
  name: string;
  slug: string;
  quantity?: number;
}

export default function WhatsAppButton({
  name,
  slug,
  quantity = 1,
}: Props) {
  function handleClick() {
    window.open(
      createWhatsAppLink(
        {
          name,
          slug,
        },
        quantity
      ),
      "_blank"
    );
  }

  return (
    <button
      onClick={handleClick}
      className="
        flex
        h-14
        w-full
        items-center
        justify-center
        gap-3
        rounded-full
        border
        border-[var(--border)]
        bg-white
        font-medium
        transition-all
        duration-300
        hover:border-[#25D366]
        hover:bg-[#25D366]
        hover:text-white
      "
    >
      <MessageCircle size={18} />

      WhatsApp Now
    </button>
  );
}