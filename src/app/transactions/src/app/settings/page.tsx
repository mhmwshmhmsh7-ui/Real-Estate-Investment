export default function Settings() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <input
          type="password"
          placeholder="New Password"
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-3 rounded-xl"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
          Update Password
        </button>

      </div>
    </div>
  );
}
