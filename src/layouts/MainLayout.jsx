/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <>
      <div className="main_layout">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
