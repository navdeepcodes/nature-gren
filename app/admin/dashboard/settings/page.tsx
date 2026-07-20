"use client";

import { useEffect, useState } from "react";

import { useSettings } from "./useSettings";

import GeneralSettings from "@/components/admin/settings/GeneralSettings";
import BusinessSettings from "@/components/admin/settings/BusinessSettings";
import SocialSettings from "@/components/admin/settings/SocialSettings";
import SEOSettings from "@/components/admin/settings/SEOSettings";
import FooterSettings from "@/components/admin/settings/FooterSettings";
import SettingsFooter from "@/components/admin/settings/SettingsFooter";

export default function SettingsPage() {
  const {
    settings,
    loading,
    saving,
    save,
  } = useSettings();

  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    if (settings) {
      setForm(settings);
    }
  }, [settings]);

  if (loading || !form) {
    return (
      <div className="flex h-72 items-center justify-center">
        <p className="text-gray-500">
          Loading Settings...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 pb-24">
      <div>
        <h1 className="font-serif text-5xl text-[#1f2b1d]">
          Website Settings
        </h1>

        <p className="mt-3 text-gray-500">
          Manage your website information, branding, SEO and contact details.
        </p>
      </div>

      <GeneralSettings
        data={form}
        onChange={setForm}
      />

      <BusinessSettings
        data={form}
        onChange={setForm}
      />

      <SocialSettings
        data={form}
        onChange={setForm}
      />

      <SEOSettings
        data={form}
        onChange={setForm}
      />

      <FooterSettings
        data={form}
        onChange={setForm}
      />

      <SettingsFooter
        saving={saving}
        onSave={() => save(form)}
      />
    </div>
  );
}