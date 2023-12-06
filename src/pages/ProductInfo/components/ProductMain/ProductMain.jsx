import React, { useContext, useState } from "react";
import "./productMain-styles.scss";
import commentIcon from "./../../../../assets/png/icons8-comments-48.png";
import StarIcon from "@mui/icons-material/Star";
import crash from "../../../../assets/svg/krash.svg";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Nav from "../../../../components/nav/Nav";
import { Col, Image, Row, Statistic } from "antd";
import CountUp from "react-countup";

const ProductMain = ({ product }) => {
  const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <>
      <div className="product-preview-wrapper">
        <div className="product-preview">
          <section className="product-preview-left-side">
            <div className="left-gallery-scroll-images">
              <img src={product.img} alt="" />
              <img src={product.img} alt="" />
              <img src={product.img} alt="" />
              <img src={product.img} alt="" />
              <img src={product.img} alt="" />
              <img src={product.img} alt="" />
              <img src={product.img} alt="" />
              <img src={product.img} alt="" />
              <img src={product.img} alt="" />
              <img src={product.img} alt="" />
              <img src={product.img} alt="" />
              <img src={product.img} alt="" />
            </div>
            <div className="right-gallery-img">
              <Image.PreviewGroup>
                <Image src={product.img} />
              </Image.PreviewGroup>
            </div>
          </section>
          <section className="product-preview-right-side">
            <div className="info-main">
              <h1 className="title-of-product">{product.subname}</h1>
              <div className="info-main-labels">
                <a href="">
                  <img src={crash} alt="" />
                </a>
                <a href="">
                  <img src={crash} alt="" />
                </a>
                <a href="">
                  <img src={crash} alt="" />
                </a>
              </div>
              <div className="info-main-review">
                <div className="info-main-rating">
                  <div className="rating-box">
                    <Box
                      sx={{
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={product.rating}
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
                  <div className="num-of-comments">
                    <img src={commentIcon} alt="" />
                    {product.numOfComments} <span>відгуків</span>
                  </div>
                </div>
                <div className="code-of-product">
                  <p>Код:{product.id}</p>
                </div>
              </div>
            </div>
            <div className="info-product-price">
              <div className="info-product-price-box">
                <h2>
                  ₴ <span>-5%</span>
                </h2>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Statistic value={product.price} formatter={formatter} />
                    </Col>
                  </Row>
                  <span> ₴</span>
                </div>
                <a href="">Купити</a>
              </div>
              <div className="info-product-price-btns"></div>
            </div>
            <div className="info-credits">
              <div className="credits-btn">
                <a href="">Купити в кредит</a>
              </div>
              <div className="icons"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductMain;
