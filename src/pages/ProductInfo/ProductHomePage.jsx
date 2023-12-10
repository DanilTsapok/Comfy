import React, { useContext, useEffect } from "react";

import { useLocation, useParams } from "react-router-dom";
import ProductMain from "./components/ProductMain/ProductMain";
import ProductProvider, { ProductContext } from "../../data/products";
import Breadcrumb from "../../components/location/Breadcrumb";
import useProducts from "../../store/Products/productsSlice";

// import { store } from "../../redux/store";

const ProductHomePage = () => {
  const { category, nameCategory, id } = useParams();
  const { products } = useProducts();
  const test = products[category]?.productsCategory;
  const selectProduct = test[nameCategory].devices.find(
    (item) => item.id == id
  );

  //   console.log(Object.keys(test).find((item) => item == nameCategory));
  //   const selectProduct = products[category]?.productsCategory[
  //     nameCategory
  //   ]?.devices.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductProvider>
        <ProductMain product={selectProduct} />
      </ProductProvider>
    </>
  );
};
export default ProductHomePage;
