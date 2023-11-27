import React, { useRef } from "react";
import catalog from "../../data/catalog";
import "./catalog-style.scss";
import "./../../colors.scss";
import { useState } from "react";

import outlet from "./../../assets/catalog-icons/outlet.svg";
import krash from "./../../assets/catalog-icons/krash.svg";
import toyicon from "./../../assets/png/toyicon.png";
import img1 from "./../../assets/home-slider-img/w_320 (1).avif";
import img2 from "./../../assets/home-slider-img/w_320 (2).avif";
import img3 from "./../../assets/home-slider-img/w_320 (3).avif";
import img4 from "./../../assets/home-slider-img/w_320.avif";
import logo from "./../../assets/catalog-icons/logo.svg";
import samsungLogo from "./../../assets/png/samsung-logo.png";
import appleLogo from "./../../assets/png/Apple_logo-main.png";
import xiaomiLogo from "./../../assets/png/1200x628.png";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import useHover from "../../hooks/useHover";
const Catalog = () => {
  const [isHovered, setHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgArray = [img1, img2, img3, img4];

  return (
    <div className="catalog ">
      <div className="catalog-container">
        <div className="catalog-wrapper">
          <div className="catalog-left-side cssanimation moveFromTop">
            {catalog.map((element, index) => (
              <div
                className="catalog-items cssanimation moveFromTop blur"
                key={index}
              >
                <a
                  href=""
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <div className="link ">
                    <img src={element.icon} className="catalog-icon" alt="" />
                    <p>{element.item}</p>
                  </div>
                  <div>
                    {element.list ? (
                      <ArrowForwardIosOutlinedIcon
                        style={{
                          fontSize: "13px",
                          marginLeft: 8,
                          marginRight: 3,
                        }}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div
          className={
            isHovered
              ? "catalog-categories-items anim"
              : "catalog-categories-items "
          }
        >
          {catalog.map((element, index) => {
            return (
              <div key={index}>
                <p className={isHovered ? "anim1" : ""}>
                  {element.categories.name}
                </p>
              </div>
            );
          })}
        </div>
        <div
          className={
            isHovered ? "catalog-right-side active" : "catalog-right-side "
          }
        >
          <div className="catalog-right-side-items  cssanimation blurIn">
            <a href="">
              <div className="right-side-item ">
                <div className="item-logo">
                  <img src={outlet} alt="" />
                </div>
                <div className="item-text">
                  <p>Розпродаж</p>
                </div>
              </div>
            </a>
            <a href="">
              <div className="right-side-item">
                <div className="item-logo">
                  <img src={toyicon} width={48} alt="" />
                </div>
                <div className="item-text">
                  <p>Comfy Kids</p>
                </div>
              </div>
            </a>
            <a href="">
              <div className="right-side-item">
                <div className="item-logo">
                  <img src={krash} alt="" />
                </div>
                <div className="item-text">
                  <p>Кращ</p>
                </div>
              </div>
            </a>
          </div>
          <div className="catalog-right-side-slider ">
            <div className="slider-slide-wrapper">
              <div className="slider-slide-wrap">
                {imgArray.map((slide, index) => (
                  <div className="slider-slide" key={index}>
                    <img src={slide} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="catalog-right-side-brands ">
            <div className="right-side-brand">
              <img src={samsungLogo} alt="" />
            </div>
            <div className="header-delimiter"></div>
            <div className="right-side-brand">
              <img src={appleLogo} alt="" />
            </div>
            <div className="header-delimiter"></div>
            <div className="right-side-brand">
              <img src={xiaomiLogo} alt="" />
            </div>
            <div className="header-delimiter"></div>
            <div className="right-side-brand">
              <img src={logo} alt="" />
            </div>
            <div className="header-delimiter"></div>
            <div className="right-side-brand">
              <div className="brand-all">
                <p>Всі бренди</p>
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
