import React, { useEffect, useState } from "react";
import {
  SwapLeftOutlined,
  PlusCircleFilled,
  MinusCircleFilled,
} from "@ant-design/icons";
import style from "./Cart-style.module.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../redux/MyCartSlice";

function Cart() {
  const dispatch = useDispatch();
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
            <div style={{ width: "100%" }}>
              {cartProducts.map((item) => (
                <div
                  className={style.productInfoLeftSide}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className={style.productInfoImg}>
                    <img src={item.img} alt="img"></img>
                  </div>

                  <div className={style.productTitle}>
                    <h4>{item.subname}</h4>
                    <p>Код товару: {item.id}</p>
                    <div className={style.productBtns}>
                      <div style={{ display: "flex" }}>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (item.qty > 1) {
                              dispatch(removeMyCartItem(item));
                            } else {
                              dispatch(deleteItem(item.id));
                            }
                          }}
                        >
                          Видалити
                        </button>
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
              ))}
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
