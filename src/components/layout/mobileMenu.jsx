import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function MobileMenu({ isOpen, onClose }) {

  // Lock body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold text-primary">
            Elite Desi Farms
          </h2>
          <button onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6 text-base font-medium text-gray-700">
          <Link to="/" onClick={onClose} className="hover:text-primary transition">
            Home
          </Link>
          <Link to="/products" onClick={onClose} className="hover:text-primary transition">
            Products
          </Link>
          <Link to="/cart" onClick={onClose} className="hover:text-primary transition">
            Cart
          </Link>
          <Link to="/account" onClick={onClose} className="hover:text-primary transition">
            Account
          </Link>
        </nav>
      </div>
    </>
  );
}