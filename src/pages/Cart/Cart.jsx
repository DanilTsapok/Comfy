import React, { useEffect, useState } from "react";
import {
  SwapLeftOutlined,
  PlusCircleFilled,
  MinusCircleFilled,
} from "@ant-design/icons";
import style from "./Cart-style.module.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useSelector } from "react-redux";

function Cart() {
  const cartProducts = useSelector((state) => state.cart);

  console.log("Cart", cartProducts);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={style.cartBodyWrapper}>
        <div className={style.cartBody}>
          <section className={style.cartTitle}>
            <div className={style.cartBtnReturn}>
              <Link to="/">
                <SwapLeftOutlined style={{ fontSize: 24, color: "black" }} />
              </Link>
            </div>
            <div className={style.cartTitleText}>
              <p>Кошик</p>
            </div>
            <div className={style.numOfProducts}>
              <p>
                <span>{cartProducts.length}</span> товар
              </p>
            </div>
          </section>
          <section style={{ gap: 20, display: "flex" }}>
            <div
              className={style.productInfoLeftSide}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className={style.productInfoImg}>
                <img src="" alt="img"></img>
              </div>
              <div className={style.productInfoStatus}></div>
              <div className={style.productTitle}>
                <h1>Товар</h1>
                <p>Код товару: 1</p>
                <div className={style.productBtns}>
                  <div>
                    <Button>Видалити</Button>
                  </div>
                </div>
              </div>
              <div className={style.productPrice}>
                <h1>121234</h1>
                <div className={style.productChangeCount}>
                  <div>
                    <PlusCircleFilled />
                  </div>
                  <div>1</div>
                  <div>
                    <MinusCircleFilled />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.productInfoRightSide}>
              <div className={style.productRightSideContent}>
                <div className={style.totalPrice}>
                  <p style={{ fontWeight: 600 }}>Загальна сума</p>
                  <p className={style.totalProductPrice}>
                    132141<span style={{ fontSize: 24 }}>₴</span>
                  </p>
                </div>
                <Button className={style.MakeOrder}>Оформити замовлення</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Cart;
