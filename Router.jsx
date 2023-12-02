import React from "react";
import ProductProvider from "./src/data/products";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home/Home";
import Layout from "./src/pages/Layout/Layout";
import App from "./src/App";
import ProductHomePage from "./src/pages/ProductInfo/ProductHomePage";
import CatalogProducts from "./src/pages/Catalog/CatalogProducts";

function Router() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace={true}></Navigate>} />
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route
            path="/catalog/:category/:product"
            element={<ProductHomePage />}
          />
          <Route path="/catalog/:category" element={<CatalogProducts />} />
          {/* <Route path="/:id/comments" element={<CommentsHomePage />} />
          <Route path="/:id/characteristics" element={<Characteristics />} />
          <Route path="admin" element={<Admin />} /> */}
        </Route>
      </Routes>
    </ProductProvider>
  );
}

export default Router;
