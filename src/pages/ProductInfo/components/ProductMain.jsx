import React from "react";
import "./productMain-styles.scss";
const ProductMain = () => {
  const num = 353;
  const title = "Смартфон Apple iPhone 14 Pro Max 256Gb Purple";
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
            Відгуки<span>{num}</span>
          </a>
          <div className="nav-delimiter"></div>
          <a href="">
            Питання<span>{num}</span>
          </a>
          <div className="nav-delimiter"></div>
          <a href="">
            Відео<span>{num}</span>
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
              <h1 className="title-of-product">{title}</h1>
              <div className="info-main-labels"></div>
              <div className="info-main-review">
                <div className="rating-box"></div>
                <div className="num-of-comments">
                  <p>{num} відгука</p>
                </div>
                <div className="code-of-product">
                  <p>Код:{num}</p>
                </div>
              </div>
            </div>
            <div className="info-product-price">
              <div className="info-product-price-box">
                <h2>
                  {num}₴ <span>-5%</span>
                </h2>
                <h1>{num}₴</h1>
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
