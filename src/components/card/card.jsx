import React, { useRef, useState } from "react";
import data from "../../data/products";
import "./card-style.scss";
import crash from "../../assets/svg/krash.svg";
import { Link } from "react-router-dom";
import { MessageOutlined } from "@ant-design/icons";
import commentIcon from "./../../assets/png/icons8-comments-48.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { TbShoppingCartCheck } from "react-icons/tb";
import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import useHover from "../../hooks/useHover";
const Card = ({ fun2, fun3 }) => {
  const [cardsData, setCardsData] = useState(data);

  const handleButtonClick = (index) => {
    const updatedData = [...cardsData];
    updatedData[index].checked = !updatedData[index].checked;
    setCardsData(updatedData);
    if (updatedData[index].checked) {
      fun2(index);
    } else {
      fun3(index);
    }
  };

  return (
    <div className="cards-container">
      <div className="cards-header">
        <h1>Кращ</h1>
        <a href="">Дивитися всі</a>
      </div>
      <div className="cards-body">
        <div className="cards">
          {cardsData.map((element, index) => {
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
                    <img src={crash} alt="" />
                  </div>
                  <div className="card-kod">
                    <p>Код: {element.id}</p>
                  </div>
                </div>
                <div className="card-img">
                  <img src={element.img} alt="" />
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
                      <Link to={`/comments/${element.id}`}>
                        {element.numOfComments}
                      </Link>
                    </div>
                  </div>
                  <div className="info-main-banks-credit"></div>
                </div>
                <div className="card-box-price">
                  <div className="c-b-price">
                    <p className="old-price">{element.oldPrice}₴</p>
                    <h2>
                      {element.price}
                      <span> ₴</span>
                    </h2>
                  </div>
                  <div className="card-btn-buy">
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
