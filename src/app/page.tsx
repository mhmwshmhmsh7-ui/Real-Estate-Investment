import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">

      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Investment Platform
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Welcome to a modern investment platform UI. Manage your wallet,
          track investments, and view profits in a clean and professional dashboard.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Login
          </Link>

          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
          >
            Dashboard
          </Link>
        </div>
      </div>

    </main>
  );
}
