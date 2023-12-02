import "./App.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import ProductHomePage from "./pages/ProductInfo/productHomePage";
import Home from "./pages/Home/Home";
import data from "./data/products";

import ProductProvider from "./data/products";
import CommentsHomePage from "./pages/ProductInfo/components/comments/CommentsHomePage";
import Admin from "./pages/admin/Admin";
import Characteristics from "./pages/ProductInfo/components/characteristics/Characteristics";
import CatalogProducts from "./pages/Catalog/CatalogProducts";

function App() {
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog/:category" element={<CatalogProducts />} />
            <Route path="*" element={<>404 Not found</>} />
            <Route path="/:id" element={<ProductHomePage />} />
            <Route path="/:id/comments" element={<CommentsHomePage />} />
            <Route path="/:id/characteristics" element={<Characteristics />} />

            {/* <Route path="/:id/questions" element={<Questions />} />
            <Route path="/:id/videos" element={<Vidoes />} />
            <Route path="/:id/accessories" element={<Accessories />} />
            <Route path="/:id/services" element={<Services />} />
            <Route path="/:id/shops" element={<Shops />} /> */}
            <Route path="admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  );
}

export default App;
