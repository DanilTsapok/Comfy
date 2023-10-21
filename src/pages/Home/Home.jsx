import Header from "../../components/firstHeader/Header";
import Catalog from "../../components/catalog/catalog";
import Card from "../../components/card/card";
import Secondheader from "../../components/secondHeader/secondHeader";

import { useState } from "react";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <Header />
      <Secondheader num={num} />
      <Catalog />
      <Card
        fun2={() => {
          setNum(num + 1);
        }}
        fun3={() => {
          setNum(num - 1);
        }}
      />

      <Footer />
    </>
  );
};
export default Home;
