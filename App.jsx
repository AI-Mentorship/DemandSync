import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Overview from "./pages/Overview.jsx";
import Replenishment from "./pages/Replenishment.jsx";
import Procurement from "./pages/Procurement.jsx";
import Performance from "./pages/Performance.jsx";
import Departments from "./pages/catalog/Departments.jsx";
import Categories from "./pages/catalog/Categories.jsx";
import ProductTypes from "./pages/catalog/ProductTypes.jsx";
import Products from "./pages/catalog/Products.jsx";
import Card from "./components/Card.jsx";
import "./styles/app.css";

export default function App() {
  return (
    <div className="app">
      <header className="topbar">DemandSync Dashboard</header>
      <div className="shell">
        <aside className="sidebar">
          <NavLink to="/">Overview</NavLink>
          <NavLink to="/replenishment">Replenishment</NavLink>
          <NavLink to="/procurement">Procurement</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/performance">Performance</NavLink>
        </aside>
        <main className="main">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/replenishment" element={<Replenishment />} />
            <Route path="/procurement" element={<Procurement />} />
            <Route path="/catalog" element={<Departments />} />
            <Route path="/catalog/:deptKey" element={<Categories />} />
            <Route path="/catalog/:deptKey/:catKey" element={<ProductTypes />} />
            <Route path="/catalog/:deptKey/:catKey/:typeKey" element={<Products />} />
            <Route path="/performance" element={<Performance />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
