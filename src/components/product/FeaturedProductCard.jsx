import  useCart  from "../../features/cart/useCart";

export default function FeaturedProductCard({ product }) {
  const { add } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-medium text-gray-900">{product.name}</h3>
          <p className="text-xs text-gray-500">{product.type}</p>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-primary font-semibold text-lg">
            ₹{product.price}
          </span>

          <button
            onClick={() => add(product)}
            className="bg-primary text-white text-xs px-4 py-2 rounded-lg hover:opacity-90 active:scale-[0.97] transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
