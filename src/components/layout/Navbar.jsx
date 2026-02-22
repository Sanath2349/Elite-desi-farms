import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { selectIsAuthenticated,selectIsAdmin } from "../../features/auth/authSlice";

export default function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Mobile Logo (Centered) */}
          <div className="md:hidden w-full flex justify-center">
            <Link
              to="/"
              className="text-lg font-semibold tracking-tight text-primary"
            >
              Elite Desi Farms
            </Link>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex w-full items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-semibold tracking-tight text-primary"
            >
              Elite Desi Farms
            </Link>

            {/* Nav Links */}
            <nav className="flex items-center space-x-8 text-sm font-medium text-gray-700">
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
              <Link to="/products" className="hover:text-primary transition">
                Products
              </Link>
              {isAuthenticated ? (
                <Link to="/account" className="hover:text-primary transition">
                  Account
                </Link>
              ) : (
                <Link to="/login" className="hover:text-primary transition">
                  Login
                </Link>
              )}
            </nav>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ShoppingCart size={22} />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs px-1.5 py-0.5 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
