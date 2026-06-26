export default function Support() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Support</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <textarea
          className="w-full border p-3 rounded-xl"
          placeholder="Write your message..."
        />

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl">
          Send
        </button>
      </div>
    </div>
  );
}
