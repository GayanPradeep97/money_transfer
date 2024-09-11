/* eslint-disable no-unused-vars */
import React from "react";
import "./Disclaimer.css";

const Disclaimer = () => {
  return (
    <>
      <div className="disclaimer_main">
        <div className="disclaimer_header">
          <span>Disclaimer</span>
        </div>
        <div className="disclaimer_description">
          <p>
            Information, materials and services contained in our website are
            subject to change from time to time without notice. Your eligibility
            for particular products and services is subject to Monex
            International Limited s acceptance. <br />
            We may discontinue, amend or make changes in the information,
            products or services described at any time. <br />
            Any dated information is published as of its date only, and SpotOn
            Money does not undertake any obligation or responsibility to update
            or amend any such information.
            <br />
            This site makes no warranties, express or implied, regarding these
            values, fitness for a particular purpose, availability, title,
            non-infringement and the performance of this site.
            <br />
            These values and dates are believed to be reliable but we do not
            guarantee their accuracy, completeness or correctness. Rounding or
            software errors may occur on this site and we kindly request our
            customers to call SpotOn Money or email us at cs@spoton.money
          </p>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
