import useCart from "../features/cart/useCart";

export default function Cart() {
  const { cart, remove } = useCart();

  return (
    <section className="space-y-10">
      <h1 className="text-2xl md:text-3xl font-semibold">Your Cart</h1>

      {cart.items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">
          {/* Items */}
          <div className="md:col-span-2 space-y-6">
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm"
              >
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>

                <div className="text-right space-y-2">
                  <p className="font-semibold text-primary">
                    ₹{item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => remove(item.id)}
                    className="text-xs text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-xl shadow-sm h-fit space-y-4">
            <h3 className="font-semibold text-lg">Order Summary</h3>

            <div className="flex justify-between text-sm">
              <span>Total Items</span>
              <span>{cart.totalQuantity}</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{cart.totalAmount}</span>
            </div>

            <button className="w-full bg-primary text-white py-3 rounded-xl text-sm font-medium hover:opacity-90 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
