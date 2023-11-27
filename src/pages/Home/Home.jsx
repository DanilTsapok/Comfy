import Header from "../../components/firstHeader/Header";
import Catalog from "../../components/catalog/catalog";
import Card from "../../components/card/card";
import Secondheader from "../../components/secondHeader/secondHeader";

import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import AuthModal from "../../modal/authmodal/authmodal";
import { useLocation } from "react-router-dom";
import BuyProductModal from "../../modal/buyProductmodal/BuyProductModal";

const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  console.log(location.pathname);
  return (
    <>
      <Header />
      <Secondheader setModalActive={setModalActive} />
      <Catalog />
      <Card setOpen={setOpen} />
      <Footer />
      <AuthModal modalActive={modalActive} setModalActive={setModalActive} />
      <BuyProductModal open={open} setOpen={setOpen} />
    </>
  );
};
export default Home;
