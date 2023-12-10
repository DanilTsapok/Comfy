import React, { useContext, useEffect } from "react";

import { useLocation, useParams } from "react-router-dom";
import ProductMain from "./components/ProductMain/ProductMain";
import ProductProvider, { ProductContext } from "../../data/products";
import Breadcrumb from "../../components/location/Breadcrumb";
import useProducts from "../../store/Products/productsSlice";
import { useDispatch } from "react-redux";
import { addProducts } from "../../redux/MyProductSlice";

// import { store } from "../../redux/store";

const ProductHomePage = () => {
  const { category, nameCategory, id } = useParams();
  const { products } = useProducts();
  const test = products[category]?.productsCategory;
  const selectProduct = test[nameCategory].devices.find(
    (item) => item.id == id
  );
  const dispatch = useDispatch();
  useEffect(() => {
    test[nameCategory].devices.map((item) => {
      dispatch(addProducts(item));
    });
  }, []);

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
