import { useState } from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
