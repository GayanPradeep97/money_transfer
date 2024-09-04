/* eslint-disable no-unused-vars */
import React from "react";
import "./AppDownload.css";
import appBackground from "../../assets/appdownload.png";
import appleStore from "../../assets/appleStore.png";
import appStore from "../../assets/appStore.png";

const AppDownload = () => {
  return (
    <>
      <div className="main_container_app">
        <img src={appBackground} alt="" />
        <div className="download_section">
          <span>
            SpotOn Money works
            <br /> even better with our app!
          </span>
          <div className="download_btns">
            <div>
              <a className="links">
                <img src={appleStore} />
              </a>
            </div>
            <div>
              <a className="links">
                <img src={appStore} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
