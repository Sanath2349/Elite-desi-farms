// src/admin/AdminBottomNav.jsx   (or components/layout/AdminBottomNav.jsx)
import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Package, User, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice"; // adjust path

export default function AdminBottomNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navItemClass = ({ isActive }) =>
    `flex flex-col items-center justify-center text-xs transition ${
      isActive ? "text-primary" : "text-gray-500 hover:text-primary"
    }`;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16">

        <NavLink to="/admin" className={navItemClass}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/products" className={navItemClass}>
          <Package size={20} />
          <span>Products</span>
        </NavLink>

        {/* Account → opens logout confirmation or direct logout */}
        <button
          onClick={handleLogout}
          className={navItemClass({ isActive: false })}
        >
          <User size={20} />
          <span>Account</span>
        </button>

        {/* Optional: explicit logout icon if you prefer separate */}
        {/* <button onClick={handleLogout} className={navItemClass({ isActive: false })}>
          <LogOut size={20} />
          <span>Logout</span>
        </button> */}

      </div>
    </nav>
  );
}