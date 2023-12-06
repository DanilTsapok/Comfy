import React from "react";
import AuthProvider from "../../data/AuthProvider";
import UpHeader from "../../components/upheader/UpHeader";
import DownHeader from "../../components/DownHeader/DownHeader";
import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import AuthModal from "../../modal/authmodal/AuthModal";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/location/Breadcrumb";

const ProductLayout = () => {
  return (
    <>
      <Breadcrumb />
      <Nav />
      <Outlet />
    </>
  );
};

export default ProductLayout;
