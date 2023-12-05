import React, { useEffect, useState } from "react";
import styles from "./buyProductmodal.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useSelector } from "react-redux";

function CartModal() {
  // const cart = useSelector((state) => state.cart);
  // console.log(cart);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>Кошик</h1>
    </>
  );
}

export default CartModal;
