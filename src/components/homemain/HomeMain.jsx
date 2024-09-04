/* eslint-disable no-unused-vars */
import React from "react";
import "./HomeMain.css";
import img from "../../assets//homeMain.svg";

const HomeMain = () => {
  return (
    <>
      <div className="home-main">
        <img className="img" src={img} />
        <div className="header_section">
          <div className="header_left">
            <span className="title_text">
              Become a SpotOn <br /> agent in the UK
            </span>
            <p className="para">
              Boost your footfall and attract new customers.
              <br /> Become a SpotOn agent and offer your customers
              <br /> an innovative and efficient way of sending money.
            </p>
            <button className="conyact_btn">Contact Us</button>
          </div>
          <div className="header_right">
            <div className="sendmoney_card">
              <span className="card_title">Send Money</span>
              <form>
                <div className="input_fields">
                  <label className="lable">Sending from</label>
                  <select required>
                    <option>Select Currency</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
                <div className="input_fields">
                  <label className="lable">Recipient Currency</label>
                  <select required>
                    <option>Select Currency</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
                <div className="input_fields_2">
                  <div className="left">
                    <label className="lable">Send Amount</label>
                    <input
                      type="number"
                      placeholder="Enter Amount"
                      required
                      id="input-field"
                    />
                  </div>
                  <div className="right">
                    <label className="lable">Amount Received</label>
                    <input type="number" placeholder="Enter Amount" required />
                  </div>
                </div>
                <div className="input_fields">
                  <button className="get_start">Get Started</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
