"use client";

import { useEffect, useState } from "react";

import DashboardHeader from "@/components/admin/DashboardHeader";
import AboutForm from "@/components/admin/about/AboutForm";

import {
  About,
  getAbout,
} from "@/lib/cms/about";

export default function AboutPage() {
  const [about, setAbout] =
    useState<About | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function loadAbout() {
    try {
      setLoading(true);

      const data = await getAbout();

      console.log("About Loaded:", data);

      setAbout(data);
    } catch (error: any) {
      console.error("========== ABOUT ERROR ==========");
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
    loadAbout();
  }, []);

  return (
    <>
      <DashboardHeader
        title="About"
        description="Manage the About page."
      />

      {loading ? (
        <div className="rounded-[32px] border border-[#ebe7df] bg-white p-20 text-center">
          Loading...
        </div>
      ) : about ? (
        <AboutForm
          about={about}
          onSaved={loadAbout}
        />
      ) : (
        <div className="rounded-[32px] border border-[#ebe7df] bg-white p-20 text-center">
          No About content found.
        </div>
      )}
    </>
  );
}