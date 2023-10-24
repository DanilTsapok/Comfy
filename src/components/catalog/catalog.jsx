import React from "react";
import catalog from "../../../catalog";
import "./catalog-style.scss";
import "./../../colors.scss";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import outlet from "./../../assets/catalog-icons/outlet.svg";
import krash from "./../../assets/catalog-icons/krash.svg";
import toyicon from "./../../assets/toyicon.png";
import img1 from "./../../assets/home-slider-img/w_320 (1).avif";
import img2 from "./../../assets/home-slider-img/w_320 (2).avif";
import img3 from "./../../assets/home-slider-img/w_320 (3).avif";
import img4 from "./../../assets/home-slider-img/w_320.avif";

const Catalog = () => {
  const [isHovered, setHover] = useState(false);

  console.log(catalog);
  return (
    <div className="catalog">
      <div className="catalog-container">
        <div className="catalog-wrapper">
          <div className="catalog-left-side">
            {catalog.map((element, index) => (
              <div className="catalog-items" key={index}>
                <a
                  href=""
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <div className="link">
                    <img src={element.icon} className="catalog-icon" alt="" />
                    <p>{element.item}</p>
                  </div>
                  <div>
                    {element.list ? (
                      <DownOutlined
                        style={{
                          fontSize: "10px",
                          marginLeft: 8,
                          marginRight: 3,
                          transform: "rotate(-90deg)",
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
        <div className="catalog-right-side">
          <div className="catalog-right-side-items">
            <a href="">
              <div className="right-side-item">
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
          <div className="catalog-right-side-slider">
            <div className="slider-slide-wrapper">
              <div className="slider-slide-wrap">
                <div className="slider-slide">
                  <img src={img1} alt="" />
                </div>
                <div className="slider-slide">
                  <img src={img2} alt="" />
                </div>
                <div className="slider-slide">
                  <img src={img3} alt="" />
                </div>
                <div className="slider-slide">
                  <img src={img4} alt="" />
                </div>
                <div className="slider-slide">
                  <img src={img4} alt="" />
                </div>
                <div className="slider-slide">
                  <img src={img4} alt="" />
                </div>
                <div className="slider-slide">
                  <img src={img4} alt="" />
                </div>
                <div className="slider-slide">
                  <img src={img4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
