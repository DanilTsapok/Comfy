import Header from "../../components/firstHeader/Header";
import Catalog from "../../components/catalog/catalog";
import Card from "../../components/card/card";
import Secondheader from "../../components/secondHeader/secondHeader";

import { useState } from "react";
import Footer from "../../components/Footer/Footer";

import { useLocation } from "react-router-dom";
import BuyProductModal from "../../modal/buyProductmodal/BuyProductModal";
import ProductProvider, { ProductContext } from "../../data/products";
import Loader from "../../components/loader/Loader";
import Messenger from "../../components/messenger/Messenger";
import AuthModal from "../../modal/authmodal/AuthModal";
import { Outlet } from "react-router-dom";
const Home = () => {
  // const [modalActive, setModalActive] = useState(false);

  // const [open, setOpen] = useState(false);
  // const [loading, setLoading] = useState(true);

  // setTimeout(() => setLoading(false), 1000);

  // console.log(location.pathname);
  return (
    <>
      <ProductProvider>
        <Catalog />

        <BuyProductModal />
        {/* {loading && <Loader />} */}
      </ProductProvider>
    </>
  );
};
export default Home;
