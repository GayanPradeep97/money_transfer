/* eslint-disable no-unused-vars */
import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <>
      <div className="howIts_main">
        <div className="howIts_header">
          <span>How it Works</span>
        </div>
        <div className="section">
          <div className="para_section">
            <p>
              Sending money with SpotOn Money is simply quick and secure. You
              can register online and
              <br /> make the transfers within minutes. Simply register and
              upload your details online, and
              <br /> once you have been approved by our dedicated team, you can
              Send Money without coming
              <br /> to our office.
            </p>
            <p>It is simple: 3 simple steps!!</p>
          </div>
          <div className="bottom_section">
            <div className="circle_button">
              <span className="number">1</span>

              <span className="text">
                Register
                <br />
                online
                <br />
                now
              </span>
            </div>
            <div className="circle_button">
              <span className="number">2</span>

              <span className="text">
                Add a
                <br />
                Beneficiary
              </span>
            </div>
            <div className="circle_button">
              <span className="number">3</span>

              <span className="text">
                Select and
                <br />
                Send
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
