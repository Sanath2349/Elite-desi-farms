import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./cartSlice";

const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return {
    cart,
    add: (item) => dispatch(addToCart(item)),
    remove: (id) => dispatch(removeFromCart(id)),
  };
};

export default useCart
