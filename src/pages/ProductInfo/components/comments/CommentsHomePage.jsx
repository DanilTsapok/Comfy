import React, { useState } from "react";

import { useLocation, useParams } from "react-router-dom";
import Nav from "../../../../components/nav/Nav";

import Footer from "../../../../components/Footer/Footer";

import MakeComments from "../../../../modal/makecommentsmodal/MakeComments";
import useProducts from "../../../../store/Products/productsSlice";
import CommentsBody from "./components/comments-body/CommentsBody";
export default function CommentsHomePage() {
  const { category, nameCategory, id } = useParams();
  console.log(id);
  const [MakeCommentsActive, setMakeCommentsActive] = useState(false);
  const [comments, setComments] = useState([]);
  const { products } = useProducts();
  const test = products[category]?.productsCategory;
  const selectProduct = test[nameCategory].devices.find(
    (item) => item.id == id
  );
  console.log(selectProduct);
  return (
    <>
      <CommentsBody
        selectProduct={selectProduct}
        setCommentsActive={setMakeCommentsActive}
        comments={comments}
        setComments={setComments}
      />

      <MakeComments
        makecommentsActive={MakeCommentsActive}
        setCommentsActive={setMakeCommentsActive}
        comments={comments}
        setComments={setComments}
      />
    </>
  );
}
