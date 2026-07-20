"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Image,
  Grid3X3,
  Package,
  BookOpen,
  Settings,
} from "lucide-react";

const items = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Hero",
    href: "/admin/dashboard/hero",
    icon: Image,
  },
  {
    name: "Categories",
    href: "/admin/dashboard/categories",
    icon: Grid3X3,
  },
  {
    name: "Products",
    href: "/admin/dashboard/products",
    icon: Package,
  },
  {
    name: "About",
    href: "/admin/dashboard/about",
    icon: BookOpen,
  },
  {
    name: "Settings",
    href: "/admin/dashboard/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white">
      <div className="border-b px-8 py-8">
        <h1 className="font-serif text-3xl">
          NatureGren
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Admin Panel
        </p>
      </div>

      <nav className="flex-1 p-5">
        <div className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  active
                    ? "bg-[#2E4B2C] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}