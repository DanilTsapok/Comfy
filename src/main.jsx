import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "../Router.jsx";
import AuthProvider from "./data/AuthProvider.jsx";
import ProductProvider from "./data/products.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ProductProvider>
          <Router />
        </ProductProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
