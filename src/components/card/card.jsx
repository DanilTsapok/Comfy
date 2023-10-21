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
      <div className="cards-header"></div>
      <div className="cards-body">
        <div className="cards">
          {cardsData.map((element, index) => (
            <div className="card" key={index}>
              <div className="img">
                <img src={element.img} alt="" />
              </div>
              <div className="title">
                <Link to="/product">{element.name}</Link>
              </div>
              <div className="price">{element.price}</div>
              <div className="card-details">{element.details}</div>
              <div className="numOfComments">{element.numOfComments}</div>

              <div className="btn-buy">
                <button
                  onClick={() => handleButtonClick(index)}
                  className={element.checked ? "checked" : "default"}
                >
                  {element.checked ? "Delete" : "Buy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
