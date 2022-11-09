import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import Error from "../components/Error";
import { Home } from "../components/Home";
import Login from "../components/Login";
import Product from "../components/Product";
import { ProductCategory } from "../components/ProductCategory";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<ProductCategory />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/Register" element={<></>} />
          <Route path="/Cart" element={<Cart/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
};
