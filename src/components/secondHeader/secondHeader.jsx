import React, { useState } from "react";
import "../../colors.scss";
import "./secondheader-style.scss";
import blockchain from "../../assets/png/icons8-apps-48.png";
import arrow from "../../assets/png/icons8-expand-arrow-30.png";
import loop from "../../assets/png/icons8-search-48.png";
import heart from "../../assets/png/icons8-heart-24.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { LiaShoppingCartSolid } from "react-icons/lia";

export default function Secondheader({ setModalActive }) {
  return (
    <>
      <div className="second-header">
        <div className="second-header-container">
          <div className="second-header-wrapper">
            <div className="second-header-catalog">
              <div className="catalog">
                <div className="catalog-header">
                  <img src={blockchain} alt="" className="first-icon" />
                  <p>Каталог товарів</p>
                </div>
                <div className="catalog-header-icon">
                  <img src={arrow} alt="" className="second-icon" />
                </div>
              </div>
            </div>
            <div className="second-header-search">
              <input placeholder="Пошук товарів" />
              <img src={loop} alt="" />
            </div>
            <div className="second-header-items">
              <div className="second-header-login">
                <a href="#" onClick={() => setModalActive(true)}>
                  Увійти
                </a>
              </div>
              <div className="second-header-like">
                <img src={heart} alt="" />
              </div>
              <div className="second-header-basket">
                <LiaShoppingCartSolid size={26} color="white" />
                <p>Кошик </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
