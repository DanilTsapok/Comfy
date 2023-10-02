import React from "react";
import data from "../../../tempData";
import "./card-style.scss";

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
    <div className="cards">
      {cardsData.map((element, index) => (
        <div className="card" key={index}>
          <div className="img">
            <img src={element.img} alt="" />
          </div>
          <div className="title">{element.name}</div>
          <div className="price">{element.price}</div>
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
  );
};

export default Card;
