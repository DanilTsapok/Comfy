import React, { useContext, useEffect } from "react";

import { useLocation, useParams } from "react-router-dom";
import ProductMain from "./components/ProductMain/ProductMain";
import ProductProvider, { ProductContext } from "../../data/products";

const ProductHomePage = () => {
  const { category, nameCategory, id } = useParams();
  const { products } = useContext(ProductContext);
  const test = products[category]?.productsCategory;
  const selectProduct = test[nameCategory].devices.find(
    (item) => item.id == id
  );
  console.log(selectProduct);
  //   console.log(Object.keys(test).find((item) => item == nameCategory));
  //   const selectProduct = products[category]?.productsCategory[
  //     nameCategory
  //   ]?.devices.find((item) => item.id === id);

  const location = useLocation(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductProvider>
        <p>{location.pathname}</p>
        <ProductMain product={selectProduct} />
      </ProductProvider>
    </>
  );
};
export default ProductHomePage;
