"use client";

import {
  AlertCircle,
  CheckCircle2,
  ImageIcon,
  Timer,
} from "lucide-react";

interface Props {
  images: number;
  success: number;
  failed: number;
  progress: number;
}

export default function BulkImportStats({
  images,
  success,
  failed,
  progress,
}: Props) {
  return (
    <div className="grid grid-cols-4 gap-5">

      <Card
        icon={<ImageIcon size={18} />}
        title="Images"
        value={images}
      />

      <Card
        icon={<CheckCircle2 size={18} />}
        title="Success"
        value={success}
        color="green"
      />

      <Card
        icon={<AlertCircle size={18} />}
        title="Failed"
        value={failed}
        color="red"
      />

      <Card
        icon={<Timer size={18} />}
        title="Progress"
        value={`${Math.round(progress)}%`}
      />

    </div>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
  color?: "green" | "red";
}

function Card({
  icon,
  title,
  value,
  color,
}: CardProps) {
  const styles =
    color === "green"
      ? "border-green-200 bg-green-50 text-green-700"
      : color === "red"
      ? "border-red-200 bg-red-50 text-red-700"
      : "border-[#ebe7df] bg-white text-[#1f2b1d]";

  return (
    <div className={`rounded-2xl border p-5 ${styles}`}>

      <div className="flex items-center gap-2">

        {icon}

        <span className="text-sm font-medium">
          {title}
        </span>

      </div>

      <p className="mt-3 text-3xl font-bold">
        {value}
      </p>

    </div>
  );
}