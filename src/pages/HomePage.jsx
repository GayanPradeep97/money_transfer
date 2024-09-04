/* eslint-disable no-unused-vars */
import React from "react";
import HomeMain from "../components/homemain/HomeMain";
import PersonalCorparate from "../components/personal_corporate/PersonalCorparate";
import "./HomePage.css";
import AppDownload from "../components/appDownload/AppDownload";
import HowItWorks from "../components/How-It-works/HowItWorks";
import AskQuections from "../components/ask-quections/AskQuections";

const HomePage = () => {
  return (
    <>
      <div className="main">
        <HomeMain />
        <PersonalCorparate />
        <AppDownload />
        <HowItWorks />
        <AskQuections />
      </div>
    </>
  );
};

export default HomePage;
