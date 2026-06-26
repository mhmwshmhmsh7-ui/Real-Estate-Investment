export default function Transactions() {
  const data = [
    { type: "Deposit", amount: "+500$", status: "Completed" },
    { type: "Withdraw", amount: "-200$", status: "Pending" }
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-3">

        {data.map((item, i) => (
          <div key={i} className="flex justify-between border-b pb-2">
            <span>{item.type}</span>
            <span>{item.amount}</span>
            <span className="text-gray-500">{item.status}</span>
          </div>
        ))}

      </div>
    </div>
  );
}
