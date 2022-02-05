import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog:slug" element={<Product />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default PageRoutes;
