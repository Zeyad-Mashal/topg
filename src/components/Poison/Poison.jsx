import React from "react";
import "./Poison.css";
import snaketail from "../../images/snaketail.png";
import smoke1 from "../../images/smoke1.png";
import smoke2 from "../../images/smoke2.png";
import boxing from "../../images/boxing.png";
import MAIN7 from "../../images/7MAIN.png";
import websiteImage from "../../images/website.png";
import MAIN8 from "../../images/8MAIN.png";
import snakehead from "../../images/snakehead.png";
import earthbars from "../../images/earthbars.png";
import helmetbars from "../../images/helmetbars.png";
import iconbars from "../../images/iconbars.png";
import fadeImage from "../../images/fade.png";
const Poison = () => {
  return (
    <>
      <section className="Poison">
        <div className="Poison_container">
          <div className="shaps">
            <img src={snaketail} alt="" />
            <img src={smoke1} alt="" />
          </div>
          <div className="item_container">
            <h4>HIGH PERFORMANCE GEAR</h4>
            <h2>PICK YOUR POISON</h2>
            <div className="item_content_poison">
              <div className="item_content_poison_info imageFade">
                <img src={boxing} alt="" className="imageFade" />
                <h3>MERCH</h3>
              </div>
              <div className="item_content_poison_info">
                <img src={MAIN7} alt="" className="info_img" />

                <h3>METAL-WORK</h3>
                <p>
                  Crafted for those who dare to endure hardship on their path to
                  unparalleled strength and vitality.
                </p>
                <img src={websiteImage} alt="" className="website" />
              </div>
              <div className="item_content_poison_info imageFade">
                <img src={MAIN8} alt="" className="imageFade" />
                <h3>CLOTHING</h3>
              </div>
            </div>
          </div>
          <div className="shaps_bottom">
            <img src={smoke2} alt="" />
            <img src={snakehead} alt="" />
          </div>
        </div>
        <div className="snake_separator">
          <img src={snaketail} alt="" />
          <div className="snake_separator_icons">
            <div className="icons_div">
              <img src={earthbars} alt="" />
              <span>SHIPPING WORLDWIDE</span>
            </div>
            <div className="icons_div">
              <img src={helmetbars} alt="" />

              <span>OWN A PIECE OF HISTORY</span>
            </div>
            <div className="icons_div">
              <img src={iconbars} alt="" />

              <span>BUILT FOR PERFORMANCE</span>
            </div>
          </div>
          <img src={snakehead} alt="" />
        </div>
      </section>
      <img src={fadeImage} alt="" className="fadeImage" />
    </>
  );
};

export default Poison;
