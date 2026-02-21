import Button from "../ui/Button";
import useCart from '../../features/cart/useCart'

export default function ProductCard({ product }) {
  const { add } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 space-y-3">
      <div className="aspect-square bg-gray-100 rounded-lg" />

      <div>
        <h3 className="font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.type}</p>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold text-primary">₹{product.price}</span>
      </div>

      <Button onClick={() => add(product)}>Add to Cart</Button>
    </div>
  );
}
