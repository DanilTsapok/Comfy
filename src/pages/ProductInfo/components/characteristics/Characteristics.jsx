import React, { useContext } from "react";
import Header from "../../../../components/firstHeader/Header";
import Secondheader from "../../../../components/secondHeader/secondHeader";
import Nav from "../../../../components/nav/Nav";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../../data/products";
import styles from "./characteristics-styles.module.css";
import Footer from "../../../../components/Footer/Footer";
function Characteristics() {
  const { products } = useContext(ProductContext);

  const { id } = useParams();
  const selectProduct = products.find((product) => product.id == id);

  return (
    <>
      <Header />
      <Secondheader />
      <Nav product={selectProduct} />
      <div className={styles.characteristicsMain}>
        <div className={styles.characteristicsMainContent}>
          <div className={styles.title}>{selectProduct.name}</div>
          <div className={styles.characteristicsBody}>
            <div className={styles.bodyLeftSide}></div>
            <div className={styles.bodyRightSide}>
              <img src={selectProduct.img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Characteristics;
