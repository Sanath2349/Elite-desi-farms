// src/routes/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/auth/authSlice"; // adjust path

export default function ProtectedRoute() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    // Redirect to login, and save the current location so we can come back after login
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
