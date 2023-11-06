import React, { useState } from "react";
import Header from "../../../../components/firstHeader/Header";
import Secondheader from "../../../../components/secondHeader/secondHeader";
import { useParams } from "react-router-dom";
import Nav from "../../../../components/nav/Nav";

import Catalog from "../../../../components/catalog/catalog";
import Footer from "../../../../components/Footer/Footer";

import MakeComments from "../../../../modal/makecommentsmodal/MakeComments";
import CommnetsBody from "./components/comments-body/CommnetsBody";

export default function CommentsHomePage({ comments }) {
  const { id } = useParams();
  const selectProduct = comments.find((product) => product.id == id);
  const [isHovered, setHover] = useState(false);
  const [MakeCommentsActive, setMakeCommentsActive] = useState(false);
  console.log(MakeCommentsActive);
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
      />

      <Footer />
      <MakeComments
        makecommentsActive={MakeCommentsActive}
        setCommentsActive={setMakeCommentsActive}
      />
    </>
  );
}
