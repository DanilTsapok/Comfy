import "./App.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import ProductHomePage from "./pages/ProductInfo/productHomePage";
import Home from "./pages/Home/Home";
import data from "./data/products";
import CommentsHomePage from "./pages/ProductInfo/components/comments/commentsHomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>404 Not found</>} />
          <Route path=":id" element={<ProductHomePage products={data} />} />
          <Route
            path=":id/comments"
            element={<CommentsHomePage commentsData={data} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
