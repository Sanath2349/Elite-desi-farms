import { NavLink } from "react-router-dom";
import { Home, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { useSelector } from "react-redux";

export default function BottomNav() {
  const totalQuantity = useSelector(
    (state) => state.cart.totalQuantity
  );

  const navItemClass = ({ isActive }) =>
    `flex flex-col items-center justify-center text-xs transition ${
      isActive
        ? "text-primary"
        : "text-gray-500 hover:text-primary"
    }`;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16">

        <NavLink to="/" className={navItemClass}>
          <Home size={20} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/products" className={navItemClass}>
          <ShoppingBag size={20} />
          <span>Shop</span>
        </NavLink>

        <NavLink to="/cart" className={navItemClass}>
          <div className="relative">
            <ShoppingCart size={20} />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] px-1.5 py-0.5 rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>
          <span>Cart</span>
        </NavLink>

        <NavLink to="/account" className={navItemClass}>
          <User size={20} />
          <span>Account</span>
        </NavLink>

      </div>
    </nav>
  );
}