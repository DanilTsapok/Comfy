import React, { useEffect, useState } from "react";
import styles from "./buyProductmodal.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
function BuyProductModal({ open, setOpen }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={
        open
          ? `${styles.buyProductModal} ${styles.butProductActive}`
          : `${styles.buyProductModal} `
      }
      onClick={() => setOpen(false)}
    >
      <div
        className={
          open
            ? `${styles.buyProductModalBody} ${styles.butProductActiveBody} `
            : `${styles.buyProductModalBody} `
        }
      >
        <CloseRoundedIcon
          onClick={() => setOpen(false)}
          fontSize="large"
          fill="grey"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default BuyProductModal;
