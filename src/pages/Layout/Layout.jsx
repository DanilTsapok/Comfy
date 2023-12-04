import React from "react";
import UpHeader from "../../components/upheader/UpHeader";
import DownHeader from "../../components/DownHeader/DownHeader";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import AuthModal from "../../modal/authmodal/AuthModal";
import AuthProvider from "../../data/AuthProvider";

export default function Layout() {
  return (
    <>
      <AuthProvider>
        <UpHeader />
        <DownHeader />
        <Outlet />
        <AuthModal />
        <Footer />
      </AuthProvider>
    </>
  );
}
