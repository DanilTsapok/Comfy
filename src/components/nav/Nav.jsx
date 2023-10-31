import React from "react";
import "./nav-style.scss";
import { Link } from "react-router-dom";
export default function Nav({ product }) {
  console.log(product);
  return (
    <>
      <div className="nav-path"></div>
      <div className="navigation">
        <div className="nav-items">
          <Link to={`/${product.id}`} className="nav-item">
            Все про товар
          </Link>
          <div className="nav-delimiter"></div>
          <a href="" className="nav-item">
            Характеристики
          </a>
          <div className="nav-delimiter"></div>
          <Link to={`/comments/${product.id}`} className="nav-item">
            Відгуки<span>{product.numOfComments}</span>
          </Link>
          <div className="nav-delimiter"></div>
          <a href="" className="nav-item">
            Питання<span>{product.question}</span>
          </a>
          <div className="nav-delimiter"></div>
          <a href="" className="nav-item">
            Відео<span>{product.video}</span>
          </a>
          <div className="nav-delimiter"></div>
          <a href="" className="nav-item">
            Аксесуари
          </a>
          <div className="nav-delimiter"></div>
          <a href="" className="nav-item">
            Сервіси
          </a>
          <div className="nav-delimiter"></div>
          <a href="" className="nav-item">
            Наявність в магазинаx
          </a>
          <span className="nav-indicator"></span>
        </div>
      </div>
    </>
  );
}
