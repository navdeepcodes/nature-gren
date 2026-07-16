import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-[#f6f4ef]">
      <AdminSidebar />

      <div className="flex flex-1 flex-col">
        <AdminHeader />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}