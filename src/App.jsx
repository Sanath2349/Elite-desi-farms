import { useState } from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Products from "./pages/Products";
import Cart from "./pages/Cart"
import Account from "./pages/Account"

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
