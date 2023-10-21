import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductHomePage from "./pages/ProductInfo/productHomePage";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/product",
    element: <ProductHomePage />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
