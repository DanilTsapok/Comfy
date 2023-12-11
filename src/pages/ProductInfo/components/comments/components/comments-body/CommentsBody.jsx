import React from "react";
import "./commentsBody-style.scss";
import { Box, Rating } from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import StarIcon from "@mui/icons-material/Star";
import { LiaShoppingCartSolid } from "react-icons/lia";
import Comment from "../comment/Comment";
import { useDispatch } from "react-redux";
import { addProductsToMyCart } from "../../../../../../redux/MyCartSlice";
export default function CommentsBody({
  selectProduct,
  setCommentsActive,
  comments,
}) {
  const dispatch = useDispatch();
  const handleProduct = () => {
    dispatch(addProductsToMyCart(selectProduct));
  };
  return (
    <div className="comments-wrapper">
      <div className="comments-main">
        <div className="comments-header">
          <h1>{selectProduct.subname}</h1>
        </div>
        <div className="comments-body">
          <div className="comments-body-left-side">
            <div className="l-s-stay-comment">
              <h1>Залиште свій відгук про цей товар</h1>
              <button onClick={() => setCommentsActive(true)}>
                Залишити відгук
              </button>
            </div>
            <div className="l-s-rating-and-sorting">
              <div className="rating">
                <Box
                  sx={{
                    width: 130,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="text-feedback"
                    value={selectProduct.rating}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Box>
                <p>{selectProduct.rating} із 5</p>
              </div>
              <div className="sorting">
                <ImportExportIcon color="action" size={10} />
                <p>за датою</p>
              </div>
            </div>
            <div className="comment">
              {comments.map((comment, index) => (
                <div key={index} className="comment-body">
                  <Comment comment={comment} selectProduct={selectProduct} />
                </div>
              ))}
            </div>
          </div>
          <div className="comments-body-right-side">
            <div className="r-s-product-info">
              <div className="product-info-header">
                <div className="info-header-img">
                  <img src={`${selectProduct.img}`} alt="" />
                </div>
                <div className="info-header-title">
                  <p>Код: {selectProduct.id}</p>
                  <h1>{`${selectProduct.subname.slice(0, 40)}...`}</h1>
                </div>
              </div>
              <div className="product-info-body">
                <p className="old-price">{selectProduct.oldPrice}</p>
                <h1>
                  {selectProduct.price} <span>₴</span>
                </h1>
                <div className="product-info-icons">
                  <p>на бонусний рахунок</p>
                </div>
              </div>
              <button
                className="product-info-body-btnComments"
                onClick={() => handleProduct()}
              >
                <LiaShoppingCartSolid size={25} />
                Купити
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
