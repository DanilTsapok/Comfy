import React, { useState } from "react";
import "./makeComments-styles.scss";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import CloseIcon from "@mui/icons-material/Close";
import { BsFillPlusCircleFill } from "react-icons/bs";
import useConsoleState from "../../hooks/useConsoleState";
export default function MakeComments({
  makecommentsActive,
  setCommentsActive,
  comments,
  setComments,
}) {
  const commentState = {
    name: "",
    email: "",
    text: "",
    advantages: "",
    disadvantages: "",
  };
  const [value, setValue] = useState(0);
  const [commentData, setCommentData] = useConsoleState(commentState);

  const addComment = () => {
    const newComment = { ...commentData, rating: value };
    setComments([...comments, newComment]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };
  return (
    <div
      className={
        makecommentsActive
          ? "makecommentmodal commmentsactive"
          : "makecommentmodal"
      }
    >
      <div
        className={
          makecommentsActive
            ? "makecommnets-header commmentsactive"
            : "makecommnets-header"
        }
      >
        <h1>Залишити відгук</h1>
        <CloseIcon
          onClick={() => setCommentsActive(false)}
          fontSize="middle"
          style={{ cursor: "pointer", margin: "22px" }}
        />
      </div>
      <div className="comment-body">
        <form action="">
          <div className="comment-title">
            <div className="comment-title-username">
              <h1>Ім'я</h1>
              <input
                type="text"
                required
                name="name"
                className="userdata"
                placeholder="Name"
                onChange={handleInputChange}
              />
            </div>
            <div className="comment-title-email">
              <h1>E-mail</h1>
              <input
                type="email"
                required
                placeholder="E-mail"
                className="userdata"
                name="email"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="comment-body-body">
            <h1>Ваш коментар</h1>
            <div className="textarea">
              <textarea
                name="text"
                onChange={handleInputChange}
                required
                placeholder="Загальні враження від використання товару"
              ></textarea>
            </div>
            <p>
              Текст повинен містити відгук про товар, а не про обслуговування.
              Заборонено розміщення посилань на сторонні ресурси, спам, згадка
              інших магазинів.
            </p>
            <div className="rating">
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </div>
            <div className="comment-advantage-disadvantage">
              <div className="advantage ">
                <h1>Переваги</h1>
                <input
                  type="text"
                  className="userdata"
                  name="advantages"
                  onChange={handleInputChange}
                />
              </div>
              <div className="disadvantage">
                <h1>Недоліки</h1>
                <input
                  type="text"
                  className="userdata"
                  name="disadvantages"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div
              className="addPhoto"
              onClick={() => document.querySelector(".inputAddPhoto").click()}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div>
                  <BsFillPlusCircleFill />
                </div>
                <div>
                  <label>Прикріпити зображення</label>
                  <p>Максимальный розмір файлу: 8Mb</p>
                </div>
              </div>
              <input
                type="file"
                accept="image/"
                className="inputAddPhoto"
                hidden
              />
            </div>
            <div className="AddComment">
              <input
                type="btn"
                value="Додати відгук"
                onClick={() => addComment()}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}