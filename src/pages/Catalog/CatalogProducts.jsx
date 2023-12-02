import React, { useContext } from "react";
import Header from "../../components/firstHeader/Header";
import { Link, useLocation, useParams } from "react-router-dom";
import Secondheader from "../../components/secondHeader/secondHeader";
import Footer from "../../components/Footer/Footer";
import { ProductContext } from "../../data/products";
import styles from "./catalogProducts-style.module.scss";
import Breadcrumb from "../../components/location/Breadcrumb";
function CatalogProducts() {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const dataCategory = products[category];

  const productsCategory = dataCategory.productsCategory;

  return (
    <>
      <Breadcrumb />
      <div className={styles.catalogContainer}>
        <div className={styles.catalogItems}>
          {Object.keys(productsCategory).map((subcategory) => (
            <div key={subcategory} className={styles.catalogItem}>
              <div className={styles.catalogHeader}>
                <img
                  src={productsCategory[subcategory].image}
                  className={styles.catalogImg}
                />
                <p>{productsCategory[subcategory].nameCategory}</p>
              </div>
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                }}
              >
                {productsCategory[subcategory].devices.map((item) => (
                  <Link
                    to={`/catalog/${category}/${productsCategory[subcategory].nameCategory}/${item.id}`}
                    className={styles.catalogDevice}
                  >
                    {item.name}
                  </Link>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CatalogProducts;
