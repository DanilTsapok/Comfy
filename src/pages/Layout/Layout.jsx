import React from "react";
import Header from "../../components/firstHeader/Header";

import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Secondheader from "../../components/secondHeader/secondHeader";
import AuthModal from "../../modal/authmodal/AuthModal";

export default function Layout() {
  return (
    <>
      <Header />
      <Secondheader />
      <Outlet />
      <AuthModal />
      <Footer />
    </>
  );
}
