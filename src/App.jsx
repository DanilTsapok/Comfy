import "./App.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import ProductHomePage from "./pages/ProductInfo/productHomePage";
import Home from "./pages/Home/Home";
import data from "./data/products";

import ProductProvider from "./data/products";
import CommentsHomePage from "./pages/ProductInfo/components/comments/CommentsHomePage";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<>404 Not found</>} />
            <Route path="/:id" element={<ProductHomePage />} />
            <Route path="/:id/comments" element={<CommentsHomePage />} />
            <Route path="admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  );
}

export default App;
