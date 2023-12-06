import React from "react";

import { Link, useParams } from "react-router-dom";
import styles from "./catalogProducts-style.module.scss";
import Breadcrumb from "../../components/location/Breadcrumb";
import useProducts from "../../store/Products/productsSlice";

function CatalogProducts() {
  const { category } = useParams();
  const { products } = useProducts();
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
