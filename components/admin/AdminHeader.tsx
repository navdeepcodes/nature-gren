import LogoutButton from "./LogoutButton";

export default function AdminHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-[#ebe7df] bg-white px-8">
      <div>
        <h1 className="text-2xl font-semibold text-[#1f2b1d]">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Welcome to the NatureGren Admin Panel
        </p>
      </div>

      <div className="flex items-center">
        <LogoutButton />
      </div>
    </header>
  );
}