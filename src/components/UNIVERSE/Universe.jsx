import React from "react";
import "./Universe.css";
import Main1 from "../../images/1MAIN.png";
import MAIN2 from "../../images/2MAIN.png";
import websiteImage from "../../images/website.png";
import earthImage from "../../images/earth.png";
import fadeImage from "../../images/fade.png";
const Universe = () => {
  return (
    <>
      <section className="Universe">
        <div className="Universe_container">
          <div className="prod_container">
            <div className="fire_item">
              <img src={Main1} alt="" className="img_item" />
              <div className="item_content">
                <h3 className="fire_item_title">FIREBLOOD</h3>
                <p className="fire_item_disc">
                  Crafted for those who dare to endure hardship on their path to
                  unparalleled strength and vitality.
                </p>
                <img src={websiteImage} alt="" className="website_img" />
              </div>
            </div>
            <div className="fire_item">
              <img src={MAIN2} alt="" className="img_item" />
              <div className="item_content">
                <h3 className="fire_item_title">G-OFFEE</h3>
                <p className="fire_item_disc">
                  A brew for the bold, the brave, & the fearless. Every sip is a
                  charge of pure grit, arming you with the energy to dominate
                  your destiny.
                </p>
                <img src={websiteImage} alt="" className="website_img" />
              </div>
            </div>
          </div>
          <div className="item_footer">
            <p>S H I P P I N G</p>
            <img src={earthImage} alt="" />
            <p>W O R L D W I D E</p>
          </div>
        </div>
        <img src={fadeImage} alt="" />
      </section>
    </>
  );
};

export default Universe;
