import React from "react";
import Header from "../../../components/firstHeader/Header";
import Secondheader from "../../../components/secondHeader/secondHeader";
import { useParams } from "react-router-dom";
import Nav from "../../../components/nav/Nav";
import "./comments-styles.scss";
export default function CommentsHomePage({ comments }) {
  const { id } = useParams();
  console.log("id:" + id);
  const selectProduct = comments.find((product) => product.id == id);

  return (
    <>
      <Header />
      <Secondheader />
      <Nav product={selectProduct} />
      <div className="comments-wrapper">
        <div className="comments-main">
          <div className="comments-header">
            <h1>{selectProduct.name}</h1>
          </div>
          <div className="comments-body">
            <div className="comments-body-left-side"></div>
            <div className="comments-body-right-side">
              <div className="r-s-product-info">
                <div className="product-info-header">
                  <div className="info-header-img">
                    <img src={`../${selectProduct.img}`} alt="" />
                  </div>
                  <div className="info-header-title">
                    <p>Код: {selectProduct.id}</p>
                    <h1>{selectProduct.name}</h1>
                  </div>
                </div>
                <div className="product-info-body">
                  <p className="old-price">{selectProduct.oldPrice}</p>
                  <h1>
                    {selectProduct.price} <span>₴</span>
                  </h1>
                  <div className="product-info-icons"></div>
                </div>
                <button>Купити</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
