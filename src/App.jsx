import { useState } from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Dashboard from "./admin/pages/Dashboard";
import AdminLayout from "./admin/AdminLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminRoute from "./routes/AdminRoute";
import CreateProduct from "./admin/pages/CreateProduct";
import AdminProducts from "./admin/pages/AdminProducts";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        {/* Completely public - no login required */}
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="/cart" element={<Cart />} /> {/* ← kept public */}
        {/* Auth pages - accessible to everyone */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Logged-in user only */}
        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
          {/* Later you can move /cart here or create /cart/authenticated variant */}
        </Route>
        {/* Admin only */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="products/create" element={<CreateProduct />} />
          </Route>
        </Route>
        {/* Optional catch-all */}
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
