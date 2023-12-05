import React, { useContext } from "react";

import { Link, useLocation, useParams } from "react-router-dom";

import { ProductContext } from "../../data/products";
import styles from "./catalogProducts-style.module.scss";
import Breadcrumb from "../../components/location/Breadcrumb";
import useProducts from "../../store/Products/productsSlice";

function CatalogProducts() {
  const { category } = useParams();
  // const { products } = useContext(ProductContext);
  const { products } = useProducts();

  const dataCategory = products[category];
  console.log(dataCategory);
  const productsCategory = dataCategory.productsCategory;
  console.log(productsCategory);
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
                {productsCategory[subcategory].devices.map((item, index) => (
                  <Link
                    key={index}
                    to={`/catalog/${category}/${subcategory}/${item.id}`}
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
