"use client";

import { useEffect, useState } from "react";

import {
  getSettings,
  saveSettings,
  type Settings,
} from "@/lib/cms/settings";

export function useSettings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    try {
      setLoading(true);

      const data = await getSettings();

      setSettings(data);
    } catch (error: any) {
      console.error("Settings Error:", error);

      alert(
        error?.message ??
          JSON.stringify(error, null, 2) ??
          "Failed to load settings."
      );
    } finally {
      setLoading(false);
    }
  }

  async function save(data: Omit<Settings, "id">) {
    try {
      setSaving(true);

      await saveSettings(data);

      await loadSettings();

      alert("Settings updated successfully.");
    } catch (error: any) {
      console.error("Save Error:", error);

      alert(
        error?.message ??
          JSON.stringify(error, null, 2) ??
          "Failed to save settings."
      );
    } finally {
      setSaving(false);
    }
  }

  return {
    settings,
    setSettings,
    loading,
    saving,
    loadSettings,
    save,
  };
}