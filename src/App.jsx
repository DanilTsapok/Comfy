import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductHomePage from "./pages/ProductInfo/productHomePage";
import Home from "./pages/Home/Home";
import data from "./data/products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>404 Not found</>} />
          <Route
            path=":id"
            element={<ProductHomePage products={data} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
