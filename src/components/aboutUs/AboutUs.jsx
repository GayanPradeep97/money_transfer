/* eslint-disable no-unused-vars */
import React from "react";
import "./AboutUs.css";
import flower_vase from "../../assets/flower_vase.png";
import clock from "../../assets/clock.png";
import key from "../../assets/key.png";
import cup from "../../assets/cup.png";
import AppDownload from "../appDownload/AppDownload";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs_main">
        <div className="about_blue">
          <div className="aboutUs_header">About Us</div>
          <div className="aboutUs_para">
            <p>
              SpotOn Money, in association with Link FX PLC is a trading arm of
              Monex International Limited, which is an<br></br> established and
              respected Independent Foreign Exchange Specialist, providing a
              range of Forex and Tourism<br></br> related services for general
              public, private and corporate clients.<br></br>
              Our transactions are carried out in association with Link FX PLC;
              An FCA licensed, integrated, secure and<br></br> seamless,
              technology payments processing platform.<br></br>
              SpotOn Money, in association with Link FX PLC is committed to
              providing excellent services. We aim to<br></br> provide our
              clients with outstanding personalised service and value for their
              money. Our<br></br>
              standards and our values are core to our professional and
              dedicated team.
            </p>
          </div>
        </div>

        <div className="about_white">
          <div className="aboutUs_header_down">Code of Practice</div>
          <div className="aboutUs_para">
            <p>
              Monex International Limited is regulated by HMRC, and registered
              as a Money Service Business since<br></br> December 2003;
              Registration Number: XDML00000119742. We are obligated to conform
              and comply with<br></br> the strict Anti Money Laundering
              regulations and practices set by the regulators.<br></br>
              We do not speculate on the exchange rates and keep our spread on
              the rates low. We may give you<br></br> information and our
              opinions on market movements in order to guide you through an
              immediate<br></br>
              transaction, but please be aware that market rates are liable to
              fluctuation and varies throughout the day.<br></br>
              We pride ourselves in providing all our customers with an
              excellent level of service and the best return for<br></br> your
              money which cannot be obtained from the banks or larger
              corporations.<br></br>
              SpotOn Money is registered with FCA as a Small Payment
              Institution. Registration Number: FRN-510848<br></br>
              Link FX PLC is an FCA Authorised Payment Institution; Registration
              Number: 535266<br></br>
              We are obligated to notify the UK data protection regulator (The
              Information Commissioner s Office or<br></br> the ICO).
              Furthermore, we are obligated to notify security breaches to
              Regulatory bodies when such<br></br> breaches do not relate to
              personal data. Therefore, we ensure that we have adequate measures
              and a<br></br> suitable Data Breach Notification Policy in place
              to respond to any<br></br> security breach in accordance with any
              requirements.
            </p>

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
          </div>
        </div>
        <AppDownload />
      </div>
    </>
  );
};

export default AboutUs;
