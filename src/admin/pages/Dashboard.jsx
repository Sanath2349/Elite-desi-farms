export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Overview</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Total Products</p>
          <p className="text-2xl font-semibold">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Orders Today</p>
          <p className="text-2xl font-semibold">5</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Revenue</p>
          <p className="text-2xl font-semibold">₹8,200</p>
        </div>
      </div>
    </div>
  );
}
