import React from "react";
import "./nav-style.scss";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import useProducts from "../../store/Products/productsSlice";

export default function Nav({ product }) {
  const { category, nameCategory, id } = useParams();
  const { products } = useProducts();
  console.log(products);
  return (
    <>
      <div className="navigation ">
        <div className="nav-items ">
          <Link
            to={`/catalog/${category}/${nameCategory}/${id}`}
            className={`nav-item `}
          >
            Все про товар
          </Link>
          <div className="nav-delimiter"></div>
          <Link
            to={`/catalog/${category}/${nameCategory}/${id}/characteristics`}
            className={`nav-item`}
          >
            Характеристики
          </Link>
          <div className="nav-delimiter"></div>
          <Link
            to={`/catalog/${category}/${nameCategory}/${id}/comments`}
            className={`nav-item`}
          >
            Відгуки
            {/* <span>{product.numOfComments}</span> */}
          </Link>
          <div className="nav-delimiter"></div>
          <Link
            to={`/catalog/${category}/${nameCategory}/${id}/questions`}
            className={`nav-item `}
          >
            Питання
            {/* <span>{product.question}</span> */}
          </Link>
          <div className="nav-delimiter"></div>
          <Link
            to={`/catalog/${category}/${nameCategory}/${id}/videos`}
            className={`nav-item `}
          >
            Відео
            {/* <span>{product.video}</span> */}
          </Link>
          <div className="nav-delimiter"></div>
          <Link
            to={`/catalog/${category}/${nameCategory}/${id}/accessories`}
            className={`nav-item `}
          >
            Аксесуари
          </Link>
          <div className="nav-delimiter"></div>
          <Link
            to={`/catalog/${category}/${nameCategory}/${id}/services`}
            className={`nav-item `}
          >
            Сервіси
          </Link>
          <div className="nav-delimiter"></div>
          <Link
            to={`/catalog/${category}/${nameCategory}/${id}/shops`}
            className={`nav-item `}
          >
            Наявність в магазинаx
          </Link>
          <span className="nav-indicator"></span>
        </div>
      </div>
    </>
  );
}
