export default function Withdraw() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Withdraw</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <input
          type="number"
          placeholder="Enter amount"
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="text"
          placeholder="Wallet address"
          className="w-full border p-3 rounded-xl"
        />

        <p className="text-sm text-gray-500">
          Withdrawal requests require admin approval.
        </p>

        <button className="bg-red-600 text-white px-4 py-2 rounded-xl">
          Request Withdrawal
        </button>

      </div>
    </div>
  );
}
