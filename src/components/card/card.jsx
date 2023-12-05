import React, { useContext, useEffect, useRef, useState } from "react";
import data, { ProductContext } from "../../data/products";
import "./card-style.scss";
import crash from "../../assets/svg/krash.svg";
import { Link, useLocation } from "react-router-dom";
import commentIcon from "./../../assets/png/icons8-comments-48.png";

import { Box, Rating, Tooltip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import useHover from "../../hooks/useHover";

import { LiaShoppingCartSolid } from "react-icons/lia";
import CrashModal from "../../modal/CrashModal/CrashModal";
import { Col, Image, Row, Statistic } from "antd";
import CountUp from "react-countup";
import { ProductContextTest } from "../../data/testproducts";
import useProducts from "../../store/Products/productsSlice";
const Card = () => {
  // const { products, setProducts } = useContext(ProductContextTest);
  const { productsCarts, setProductsCarts } = useProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  console.log(location.pathname);
  const formatter = (value) => <CountUp end={value} separator="," />;
  return (
    <div className="cards-container cssanimation blurInRight">
      <div className="cards-header">
        <h1>Кращ</h1>
        <CrashModal />
      </div>
      <div className="cards-body">
        <div className="cards">
          {productsCarts.map((element, index) => {
            const ref = useRef();
            const isHovering = useHover(ref);
            return (
              <div
                ref={ref}
                className={isHovering ? "card activecard" : "card "}
                key={index}
              >
                <div className="card-label">
                  <div className="card-crash">
                    <Tooltip placement="right" title={"кращ"}>
                      <img src={crash} alt="" />
                    </Tooltip>
                  </div>
                  <div className="card-kod">
                    <p>Код: {element.id}</p>
                  </div>
                </div>
                <div className="card-img">
                  <Image.PreviewGroup>
                    <Image width={150} src={element.img} />
                  </Image.PreviewGroup>
                </div>
                <div className="card-title">
                  <Link to={`/${element.id}`} className="card-title-title">
                    {element.name}
                  </Link>
                </div>
                <div className="card-info-main">
                  <div className="card-info-main-rating">
                    <div className="info-main-score">
                      <Box
                        sx={{
                          width: 120,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Rating
                          name="text-feedback"
                          value={element.rating}
                          readOnly
                          precision={0.5}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                        />
                      </Box>
                    </div>
                    <div className="info-main-numOfComments">
                      <img src={commentIcon} alt="" />
                      <Link to={`${element.id}/comments`}>
                        {element.numOfComments}
                      </Link>
                    </div>
                  </div>
                  <div className="info-main-banks-credit"></div>
                </div>
                <div className="card-box-price">
                  <div className="c-b-price">
                    <p className="old-price">{element.oldPrice}₴</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Row gutter={16}>
                        <Col span={12}>
                          <Statistic
                            value={element.price}
                            formatter={formatter}
                          />
                        </Col>
                      </Row>
                      <span> ₴</span>
                    </div>
                  </div>
                  <div className="card-btn-buy">
                    <Tooltip placement="bottom" title={"Придбати"}>
                      <button
                        onClick={() => handleButtonClick(index)}
                        className={element.checked ? "checked" : "default"}
                      >
                        {element.checked ? (
                          <LiaShoppingCartSolid size={25} />
                        ) : (
                          <LiaShoppingCartSolid size={25} />
                        )}
                      </button>
                    </Tooltip>
                  </div>
                </div>

                <div className="card-details">{element.details}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
