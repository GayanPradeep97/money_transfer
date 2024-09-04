/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./AskQuections.css";
import styled from "styled-components";

const AskQuections = () => {
  const [hide, setHide] = useState({});

  const handleClick = (questionIndex) => {
    setHide((prev) => ({
      ...prev,
      [questionIndex]: !prev[questionIndex],
    }));
  };

  return (
    <>
      <div className="quec_section">
        <div className="section_main">
          <div className="headers_section">
            <span>Frequently Asked Questions</span>
          </div>

          <div className="quection_section">
            <div
              className={`quection_btn ${hide[0] ? "active" : ""}`}
              onClick={() => handleClick(0)}
            >
              <span>How do I register?</span>
            </div>
            {hide[0] ? (
              <div className="hidePara">
                <span>
                  To register with us, you need your email and home address, ID
                  and proof of address dated in the last 3 months. To register
                  please click here.
                </span>
              </div>
            ) : (
              ""
            )}

            <div
              className={`quection_btn ${hide[1] ? "active" : ""}`}
              onClick={() => handleClick(1)}
            >
              <span>Why do I need to upload my ID?</span>
            </div>
            {hide[1] ? (
              <div className="hidePara">
                <span>
                  Under FCA regulations, we are law bound to comply with AML
                  regulations where we are required to take your ID details and
                  verify you. All data is kept confidential and not shared with
                  any third parties. Please note we will require a clear copy of
                  the ID, and where required we will ask for a verified
                  document.
                </span>
              </div>
            ) : (
              ""
            )}
            <div
              className={`quection_btn ${hide[2] ? "active" : ""}`}
              onClick={() => handleClick(2)}
            >
              <span>I can’t sign in. What should I do?</span>
            </div>
            {hide[2] ? (
              <div className="hidePara">
                <span>
                  If you know your email address, then you can reset your
                  password here.
                  <br />
                </span>
                <span>
                  If you are still unable to sign in, then please contact us on
                  or email us at.
                </span>
              </div>
            ) : (
              ""
            )}
            <div
              className={`quection_btn ${hide[3] ? "active" : ""}`}
              onClick={() => handleClick(3)}
            >
              <span>How do I delete my account?</span>
            </div>
            {hide[3] ? (
              <div className="hidePara">
                <span>
                  You cannot delete your account. You can request your account
                  to be deactivated. Under FCA regulations, your account will be
                  deleted after 5 years of inactivity. We will continue to
                  protect the details held under the data protection act.
                  <br />
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AskQuections;
