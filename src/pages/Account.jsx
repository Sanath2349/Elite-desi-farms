export default function Account() {
  return (
    <section className="space-y-10">
      <h1 className="text-2xl md:text-3xl font-semibold">My Account</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <div>
          <h3 className="font-medium">Profile</h3>
          <p className="text-sm text-gray-500">Update your details</p>
        </div>

        <div>
          <h3 className="font-medium">Orders</h3>
          <p className="text-sm text-gray-500">View past orders</p>
        </div>

        <button className="text-red-500 text-sm">Logout</button>
      </div>
    </section>
  );
}
