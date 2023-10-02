import React from "react";
import "./headerBanner-style.scss";
import banner from "../../assets/1366x60_21.jpg";
export default function HeaderBanner() {
  return (
    <>
      <div className="headerBanner">
        <div className="headerBanner-container">
          <div className="headerBanner-wrapper">
            <img src={banner} />
          </div>
        </div>
      </div>
    </>
  );
}
