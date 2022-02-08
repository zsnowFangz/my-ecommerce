import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";

import PageRoutes from "../PageRoutes/PageRoutes";

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="main">
          <Routes>
            <Route path="" element={<PageRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/catalog/:slug" element={<Product />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
