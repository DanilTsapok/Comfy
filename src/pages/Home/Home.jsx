import Header from "../../components/firstHeader/Header";
import Catalog from "../../components/catalog/catalog";
import Card from "../../components/card/card";
import Secondheader from "../../components/secondHeader/secondHeader";

import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import AuthModal from "../../modal/authmodal/authmodal";
const Home = () => {
  const fun2 = () => setNum(num - 1);
  const fun3 = () => setNum(num - 1);
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <Header />
      <Secondheader setModalActive={setModalActive} />
      <Catalog />
      <Card fun2={fun2} fun3={fun3} />
      <Footer />
      <AuthModal modalActive={modalActive} setModalActive={setModalActive} />
    </>
  );
};
export default Home;
