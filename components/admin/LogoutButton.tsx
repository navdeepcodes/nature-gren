"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      return;
    }

    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      className="flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-gray-100"
    >
      <LogOut size={18} />
      Logout
    </button>
  );
}