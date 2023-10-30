import React from "react";
import "./productMain-styles.scss";

const ProductMain = ({ product }) => {
  return (
    <>
      <div className="nav-path"></div>
      <div className="navigation">
        <div className="nav-items">
          <a href="">Все про товар</a>
          <div className="nav-delimiter"></div>
          <a href="">Характеристики</a>
          <div className="nav-delimiter"></div>
          <a href="">
            Відгуки<span>{product.numOfComments}</span>
          </a>
          <div className="nav-delimiter"></div>
          <a href="">
            Питання<span>{product.question}</span>
          </a>
          <div className="nav-delimiter"></div>
          <a href="">
            Відео<span>{product.video}</span>
          </a>
          <div className="nav-delimiter"></div>
          <a href="">Аксесуари</a>
          <div className="nav-delimiter"></div>
          <a href="">Сервіси</a>
          <div className="nav-delimiter"></div>
          <a href="">Наявність в магазинаx</a>
        </div>
      </div>
      <div className="product-preview-wrapper">
        <div className="product-preview">
          <section className="product-preview-left-side">
            <div className="left-gallery-scroll-images"></div>
            <div className="right-gallery-img"></div>
          </section>
          <section className="product-preview-right-side">
            <div className="info-main">
              <h1 className="title-of-product">{product.name}</h1>
              <div className="info-main-labels"></div>
              <div className="info-main-review">
                <div className="rating-box"></div>
                <div className="num-of-comments">
                  <p> {product.numOfComments} відгука</p>
                </div>
                <div className="code-of-product">
                  <p>Код:{product.id}</p>
                </div>
              </div>
            </div>
            <div className="info-product-price">
              <div className="info-product-price-box">
                <h2>
                  ₴ <span>-5%</span>
                </h2>
                <h1>₴</h1>
                <a href="">Купити</a>
              </div>
              <div className="info-product-price-btns"></div>
            </div>
            <div className="info-credits">
              <div className="credits-btn">
                <a href="">Купити в кредит</a>
              </div>
              <div className="icons"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductMain;
