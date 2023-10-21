import React from "react";
import Header from "../../components/firstHeader/Header";

import Secondheader from "../../components/secondHeader/secondHeader";
import ProductMain from "./components/ProductMain";
import Footer from "../../components/Footer/Footer";

const ProductHomePage = () => {
  return (
    <>
      <Header />
      <Secondheader />
      <ProductMain />
      <Footer />
    </>
  );
};
export default ProductHomePage;
