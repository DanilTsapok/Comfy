import React from "react";
import "./firstheader-style.scss";
import "../../colors.scss";
import logo from "../../assets/catalog-icons/logo_main.svg";
import phone from "../../assets/catalog-icons/phone_icon_136322.svg";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-wrapper">
            <div className="header-left-side">
              <div className="header-logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="header-city-menu">
                <a href="#">
                  Миколаїв
                  <DownOutlined
                    style={{ fontSize: "10px", marginLeft: 8, marginRight: 3 }}
                  />
                </a>
              </div>
            </div>
            <div className="header-right-side">
              <div className="header-promotion">
                <a href="#">Акції</a>
              </div>
              <div className="header-present-cards">
                <a href="#">Подарункові картки</a>
              </div>
              <div className="header-shops">
                <a href="#">Магазини</a>
              </div>
              <div className="header-delimiter"></div>
              <div className="header-something">
                <a href="">
                  Ще
                  <DownOutlined
                    style={{ fontSize: "10px", marginLeft: 8, marginRight: 3 }}
                  />
                </a>
              </div>
              <div className="header-delimiter"></div>
              <div className="header-help">
                <a href="#">
                  <img src={phone} alt="" />
                  Допомога
                  <DownOutlined
                    style={{
                      width: 12,

                      marginLeft: 10,
                      marginRight: 3,
                    }}
                  />
                </a>
              </div>
              <div className="header-delimiter"></div>
              <div className="header-change-lang">
                <a href="">УКР</a>
                <a href="">РУС</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
