interface DashboardHeaderProps {
  title: string;
  description: string;
}

export default function DashboardHeader({
  title,
  description,
}: DashboardHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="font-serif text-5xl text-[#1f2b1d]">
        {title}
      </h1>

      <p className="mt-3 text-lg text-gray-500">
        {description}
      </p>
    </div>
  );
}