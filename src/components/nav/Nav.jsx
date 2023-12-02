import React from "react";
import "./nav-style.scss";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../location/Breadcrumb";
export default function Nav({ product }) {
  return (
    <>
      <Breadcrumb />
      <div className="navigation ">
        <div className="nav-items ">
          <Link to={`/${product.id}`} className={`nav-item `}>
            Все про товар
          </Link>
          <div className="nav-delimiter"></div>
          <Link to={`/${product.id}/characteristics`} className={`nav-item`}>
            Характеристики
          </Link>
          <div className="nav-delimiter"></div>
          <Link to={`/${product.id}/comments`} className={`nav-item`}>
            Відгуки<span>{product.numOfComments}</span>
          </Link>
          <div className="nav-delimiter"></div>
          <a href="" className={`nav-item `}>
            Питання<span>{product.question}</span>
          </a>
          <div className="nav-delimiter"></div>
          <Link to="" className={`nav-item `}>
            Відео<span>{product.video}</span>
          </Link>
          <div className="nav-delimiter"></div>
          <a href="" className={`nav-item `}>
            Аксесуари
          </a>
          <div className="nav-delimiter"></div>
          <a href="" className={`nav-item `}>
            Сервіси
          </a>
          <div className="nav-delimiter"></div>
          <a href="" className={`nav-item `}>
            Наявність в магазинаx
          </a>
          <span className="nav-indicator"></span>
        </div>
      </div>
    </>
  );
}
