"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Balance</h2>
          <p className="text-2xl font-bold">$1,250</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Profit</h2>
          <p className="text-2xl font-bold text-green-600">+$320</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Investments</h2>
          <p className="text-2xl font-bold">5</p>
        </div>

      </div>

      <div className="mt-6">
        <Link href="/wallet" className="text-blue-600 underline">
          Go to Wallet
        </Link>
      </div>
    </div>
  );
}
