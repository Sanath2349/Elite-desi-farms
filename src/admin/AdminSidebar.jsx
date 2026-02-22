import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package } from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 font-semibold text-primary border-b">
        Admin Panel
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
              isActive ? "bg-primary text-white" : "hover:bg-gray-100"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
              isActive ? "bg-primary text-white" : "hover:bg-gray-100"
            }`
          }
        >
          <Package size={18} />
          Products
        </NavLink>
      </nav>
    </aside>
  );
}
