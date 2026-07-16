import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import LoginForm from "@/components/admin/LoginForm";

export default async function AdminLoginPage() {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/admin/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f6f2] px-6">
      <div className="w-full max-w-md rounded-[32px] border border-[#ebe7df] bg-white p-10 shadow-lg">
        <h1 className="font-serif text-4xl text-[#1f2b1d]">
          NatureGren Admin
        </h1>

        <p className="mt-3 text-gray-500">
          Sign in to manage your website.
        </p>

        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}