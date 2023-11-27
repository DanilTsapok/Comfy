import React, { useContext, useEffect } from "react";
import Header from "../../components/firstHeader/Header";
import Secondheader from "../../components/secondHeader/secondHeader";
import Footer from "../../components/Footer/Footer";
import { useLocation, useParams } from "react-router-dom";
import ProductMain from "./components/ProductMain/ProductMain";
import ProductProvider, { ProductContext } from "../../data/products";

const ProductHomePage = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const selectProduct = products.find((product) => product.id == id);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductProvider>
        <Header />
        <Secondheader />
        <ProductMain product={selectProduct} />
        <Footer />
      </ProductProvider>
    </>
  );
};
export default ProductHomePage;
