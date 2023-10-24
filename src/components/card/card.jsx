import React from "react";
import data from "../../../tempData";
import "./card-style.scss";
import { Link } from "react-router-dom";

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
            <Link to="/product">
              <div className="card" key={index}>
                <div className="card-img">
                  <img src={element.img} alt="" />
                </div>
                <div className="card-title">
                  <Link to="/product">{element.name}</Link>
                </div>
                <div className="card-info-main">
                  <div className="info-main-score"></div>
                  <div className="info-main-numOfComments">
                    {element.numOfComments}
                  </div>
                  <div className="info-main-backs-credit"></div>
                </div>
                <div className="card-details">{element.details}</div>

                <div className="card-btn-buy">
                  <button
                    onClick={() => handleButtonClick(index)}
                    className={element.checked ? "checked" : "default"}
                  >
                    {element.checked ? "Delete" : "Buy"}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
