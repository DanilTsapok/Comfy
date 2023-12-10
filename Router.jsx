import React from "react";
import ProductProvider from "./src/data/products";
import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./src/pages/Home/Home";
import Layout from "./src/pages/Layout/Layout";
import App from "./src/App";
import ProductHomePage from "./src/pages/ProductInfo/ProductHomePage";
import CatalogProducts from "./src/pages/Catalog/CatalogProducts";

import Cart from "./src/pages/Cart/Cart";
import ProductLayout from "./src/pages/Layout/ProductLayout";
import CommentsHomePage from "./src/pages/ProductInfo/components/comments/CommentsHomePage";
import Profile from "./src/pages/Profile/Profile";
// import { store } from "./src/redux/store";

function Router() {
  return (
    // <Provider store={store}>
    <ProductProvider>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace={true}></Navigate>} />
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalog/:category" element={<CatalogProducts />} />
          <Route
            path="/catalog/:category/:nameCategory/:id"
            element={<ProductLayout />}
          >
            <Route path="" element={<ProductHomePage />} />
            <Route path="comments" element={<CommentsHomePage />} />
            <Route path="characteristics" element={<></>} />
            <Route path="questions" element={<></>} />
            <Route path="videos" element={<></>} />
            <Route path="accessories" element={<></>} />
            <Route path="services" element={<></>}></Route>
            <Route path="shops" element={<></>}></Route>
          </Route>

          {/* <Route path="/:id/comments" element={<CommentsHomePage />} />
//           <Route path="/:id/characteristics" element={<Characteristics />} />
//           <Route path="admin" element={<Admin />} /> */}
        </Route>
      </Routes>
    </ProductProvider>
    // </Provider>
  );
}

export default Router;
