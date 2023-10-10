import React from "react";
import catalog from "../../../catalog";
import "./catalog-style.scss";
import "./../../colors.scss";
const Catalog = () => {
  console.log(catalog);
  return (
    <div className="catalog">
      <div className="catalog-container">
        <div className="catalog-wrapper">
          {catalog.map((element, index) => (
            <div className="catalog-items" key={index}>
              <a href="#">
                <img src={element.icon} className="catalog-icon" alt="" />
                {element.item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
