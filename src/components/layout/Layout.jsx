import BottomNav from "./BottomNav";
import Navbar from "./Navbar";
import AdminBottomNav from "../../admin/AdminBottomNav";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-background">
      {/* Customer navbar only on non-admin routes */}
      {!isAdminRoute && <Navbar />}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Conditional bottom nav */}
      {isAdminRoute ? <AdminBottomNav /> : <BottomNav />}
    </div>
  );
}
