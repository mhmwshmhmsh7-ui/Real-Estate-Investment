export default function Profile() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-3">
        <p><strong>Name:</strong> User</p>
        <p><strong>Email:</strong> user@example.com</p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
          Change Password
        </button>
      </div>
    </div>
  );
}
