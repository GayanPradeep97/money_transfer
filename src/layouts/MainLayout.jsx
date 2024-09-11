/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="main_layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
