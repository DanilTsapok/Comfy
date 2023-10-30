import React from "react";
import data from "../../data/products";
import "./card-style.scss";
import crash from "../../assets/svg/krash.svg";
import { Link } from "react-router-dom";
import { MessageOutlined } from "@ant-design/icons";
import commentIcon from "./../../assets/png/icons8-comments-48.png";
const Card = ({ fun2, fun3 }) => {
  const [cardsData, setCardsData] = React.useState(data);

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
          {cardsData.map((element, index) => (
            <div className="card" key={index}>
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
                <div className="info-main-score"></div>
                <div className="info-main-numOfComments">
                  <img src={commentIcon} alt="" />
                  <a href="">{element.numOfComments}</a>
                </div>
                <div className="info-main-banks-credit"></div>
              </div>
              <div className="card-box-price">
                <div>
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
                    {element.checked ? "Delete" : "🛒"}
                  </button>
                </div>
              </div>

              <div className="card-details">{element.details}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
