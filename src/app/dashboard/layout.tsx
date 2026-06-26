"use client";

import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Investment</h2>

        <nav className="space-y-3">
          <Link href="/dashboard">Dashboard</Link>
          <br />
          <Link href="/wallet">Wallet</Link>
          <br />
          <Link href="/deposit">Deposit</Link>
          <br />
          <Link href="/withdraw">Withdraw</Link>
          <br />
          <Link href="/transactions">Transactions</Link>
          <br />
          <Link href="/profile">Profile</Link>
          <br />
          <Link href="/support">Support</Link>
          <br />
          <Link href="/settings">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>

    </div>
  );
          }
