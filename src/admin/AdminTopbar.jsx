// src/admin/AdminTopbar.jsx
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice"; // adjust path
import { LogOut } from "lucide-react";

export default function AdminTopbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <h1 className="font-medium text-gray-800">Admin Dashboard</h1>

      <div className="flex items-center gap-6">
        <div className="text-sm text-gray-600">
          {user?.name ? `Hi, ${user.name}` : "Admin"}
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800 font-medium transition"
          title="Sign out"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}
