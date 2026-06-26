"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">

      <h1 className="font-bold text-xl">Investment Platform</h1>

      <div className="flex gap-4 text-sm">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/wallet">Wallet</Link>
        <Link href="/profile">Profile</Link>
      </div>

    </div>
  );
}
