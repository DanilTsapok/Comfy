import React, { useContext } from "react";
import Header from "../../components/firstHeader/Header";
import { useLocation, useParams } from "react-router-dom";
import Secondheader from "../../components/secondHeader/secondHeader";
import Footer from "../../components/Footer/Footer";
import { ProductContext } from "../../data/products";

function CatalogProducts() {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const dataCategory = products[category];
  console.log(dataCategory);
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");
  return (
    <>
      <Header />
      <Secondheader />
      <div className="path">
        <div className="nav-path">
          Головна{pathSegments.length > 0 && " > " + pathSegments.join(" > ")}
        </div>
      </div>

      {Object.keys(dataCategory).map((subcategory) => (
        <div>
          <p>{dataCategory[subcategory].nameCategory}</p>
          <p>{dataCategory[subcategory].image}img</p>
        </div>
      ))}

      <Footer />
    </>
  );
}

export default CatalogProducts;
