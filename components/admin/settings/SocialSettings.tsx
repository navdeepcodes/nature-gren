"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

interface SocialSettingsProps {
  data: any;
  onChange: (data: any) => void;
}

export default function SocialSettings({
  data,
  onChange,
}: SocialSettingsProps) {
  function update(key: string, value: string) {
    onChange({
      ...data,
      [key]: value,
    });
  }

  const socials = [
    {
      key: "instagram",
      label: "Instagram",
      icon: FaInstagram,
      placeholder: "https://instagram.com/naturegren",
    },
    {
      key: "facebook",
      label: "Facebook",
      icon: FaFacebook,
      placeholder: "https://facebook.com/naturegren",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      icon: FaLinkedin,
      placeholder:
        "https://linkedin.com/company/naturegren",
    },
    {
      key: "pinterest",
      label: "Pinterest",
      icon: FaPinterest,
      placeholder: "https://pinterest.com/naturegren",
    },
  ];

  return (
    <section className="rounded-[28px] border border-[#ebe7df] bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="font-serif text-3xl text-[#1f2b1d]">
          Social Media
        </h2>

        <p className="mt-2 text-gray-500">
          Add links to your social media profiles.
        </p>
      </div>

      <div className="space-y-6">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <div
              key={social.key}
              className="flex items-center gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#e7e2d8] bg-[#f8f6f1]">
                <Icon
                  size={22}
                  className="text-[#2E4B2C]"
                />
              </div>

              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium">
                  {social.label}
                </label>

                <input
                  type="url"
                  value={data[social.key] ?? ""}
                  onChange={(e) =>
                    update(
                      social.key,
                      e.target.value
                    )
                  }
                  placeholder={social.placeholder}
                  className="h-14 w-full rounded-xl border border-[#e7e2d8] px-5 outline-none transition focus:border-[#2E4B2C]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}