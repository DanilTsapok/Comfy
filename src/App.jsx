import "./App.scss";

import Header from "./components/firstHeader/Header";
import Secondheader from "./components/secondHeader/secondHeader";
import HeaderBanner from "./components/headerBanner/headerBanner";
import Card from "./components/card/card";

import { useState } from "react";
import Catalog from "./components/catalog/catalog";

function App() {
  const [num, setNum] = useState(0);

  return (
    <>
      <body>
        <HeaderBanner />
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
      </body>
    </>
  );
}

export default App;
