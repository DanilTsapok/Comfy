import React from "react";
import catalog from "../../../catalog";
import "./catalog-style.scss";
import "./../../colors.scss";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
const Catalog = () => {
  const [isHovered, setHover] = useState(false);

  console.log(catalog);
  return (
    <div className="catalog">
      <div className="catalog-container">
        <div className="catalog-wrapper">
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
      </div>
    </div>
  );
};

export default Catalog;
