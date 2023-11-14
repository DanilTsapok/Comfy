import React, { useState } from "react";
import Header from "../../../../components/firstHeader/Header";
import Secondheader from "../../../../components/secondHeader/secondHeader";
import { useLocation, useParams } from "react-router-dom";
import Nav from "../../../../components/nav/Nav";

import Catalog from "../../../../components/catalog/catalog";
import Footer from "../../../../components/Footer/Footer";

import MakeComments from "../../../../modal/makecommentsmodal/MakeComments";
import CommnetsBody from "./components/comments-body/CommnetsBody";

export default function CommentsHomePage({ commentsData }) {
  const { id } = useParams();
  const selectProduct = commentsData.find((product) => product.id == id);
  const [isHovered, setHover] = useState(false);
  const [MakeCommentsActive, setMakeCommentsActive] = useState(false);

  const [comments, setComments] = useState([]);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Header />
      <Secondheader />
      <div className={isHovered ? "catalog-active" : "catalog-default"}>
        <Catalog />
      </div>

      <Nav product={selectProduct} />
      <CommnetsBody
        selectProduct={selectProduct}
        setCommentsActive={setMakeCommentsActive}
        comments={comments}
        setComments={setComments}
      />

      <Footer />
      <MakeComments
        makecommentsActive={MakeCommentsActive}
        setCommentsActive={setMakeCommentsActive}
        comments={comments}
        setComments={setComments}
      />
    </>
  );
}
