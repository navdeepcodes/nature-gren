"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

export default function LoginForm() {
  const router = useRouter();

  const supabase = createClient();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin/dashboard");

    router.refresh();
  }

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-5"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        className="h-14 w-full rounded-xl border px-5"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        className="h-14 w-full rounded-xl border px-5"
      />

      <button
        disabled={loading}
        className="h-14 w-full rounded-xl bg-[#2E4B2C] text-white"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}