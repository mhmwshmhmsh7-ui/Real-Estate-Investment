export default function Wallet() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Wallet</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Current Balance</p>
        <h2 className="text-2xl font-bold">$1,250</h2>

        <div className="mt-4 flex gap-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-xl">
            Deposit
          </button>

          <button className="bg-red-600 text-white px-4 py-2 rounded-xl">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
