import React, { useContext, useEffect } from "react";
import Header from "../../components/firstHeader/Header";
import Secondheader from "../../components/secondHeader/secondHeader";
import Footer from "../../components/Footer/Footer";
import { useLocation, useParams } from "react-router-dom";
import ProductMain from "./components/ProductMain/ProductMain";
import ProductProvider, { ProductContext } from "../../data/products";

const ProductHomePage = () => {
  const { product } = useParams();
  const { products } = useContext(ProductContext);
  const currentProduct = useLocation();
  console.log(currentProduct);
  // const selectProduct = products.find((product) => product.id == id);
  const location = useLocation(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductProvider>
        <p>{location.path}</p>
        {/* <ProductMain product={selectProduct} /> */}
      </ProductProvider>
    </>
  );
};
export default ProductHomePage;
