import React from "react";
import Header from "../../components/firstHeader/Header";

import Secondheader from "../../components/secondHeader/secondHeader";

import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import ProductMain from "./components/ProductMain/ProductMain";

const ProductHomePage = ({ products }) => {
  const { id } = useParams();
  const selectProduct = products.find((product) => product.id == id);

  return (
    <>
      <Header />
      <Secondheader />
      <ProductMain product={selectProduct} />
      <Footer />
    </>
  );
};
export default ProductHomePage;
