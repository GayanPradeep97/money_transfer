/* eslint-disable no-unused-vars */
import React from "react";
import "./PersonalCorparate.css";
import flower_vase from "../../assets/flower_vase.png";
import clock from "../../assets/clock.png";
import key from "../../assets/key.png";
import cup from "../../assets/cup.png";

const PersonalCorparate = () => {
  return (
    <>
      <section className="main_container">
        <div className="header_container">
          <div className="icon_card">
            <span className="icon_title">RELIABLE</span>
            <img src={flower_vase} alt="" />
          </div>
          <div className="icon_card">
            <span className="icon_title">INSTANT</span>
            <img src={clock} alt="" />
          </div>
          <div className="icon_card">
            <span className="icon_title">EASY</span>
            <img src={key} alt="" />
          </div>
          <div className="icon_card">
            <span className="icon_title">TRUSTWORTHY</span>
            <img src={cup} alt="" />
          </div>
        </div>
        <div className="body_container">
          <div className="info">
            <span>For Personal</span>
            <p>
              Transferring and sending money to your family and friends with
              <br />
              SpotOn Money is a simple process, with our money transfer
              <br /> service. We have endeavoured successfully to gain trust
              from
              <br /> our customers.
            </p>
          </div>
          <div className="info">
            <span>For Personal</span>
            <p>
              We offer our corporate clients our global payments platform for
              <br />
              international trade where you can collect, hold and make
              <br /> payments globally in selected currencies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalCorparate;
