import React from "react";
import "./Poison.css";
const Poison = () => {
  return (
    <>
      <section className="Poison">
        <div className="Poison_container">
          <div className="shaps">
            <img src="/images/snaketail.png" alt="" />
            <img src="/images/smoke1.png" alt="" />
          </div>
          <div className="item_container">
            <h4>HIGH PERFORMANCE GEAR</h4>
            <h2>PICK YOUR POISON</h2>
            <div className="item_content_poison">
              <div className="item_content_poison_info imageFade">
                <img src="/images/boxing.png" alt="" className="imageFade" />
                <h3>MERCH</h3>
              </div>
              <div className="item_content_poison_info">
                <img src="/images/7MAIN.png" alt="" className="info_img" />
                {/* <div className="item_content_poison_info_3d">
                  <img src="/images/SELECTION_BOX[MAIN].png" alt="" />
                  <video src="/images/card.mp4" autoPlay muted loop></video>
                </div> */}
                <h3>METAL-WORK</h3>
                <p>
                  Crafted for those who dare to endure hardship on their path to
                  unparalleled strength and vitality.
                </p>
                <img src="/images/website.png" alt="" className="website" />
              </div>
              <div className="item_content_poison_info imageFade">
                <img src="/images/8MAIN.png" alt="" className="imageFade" />
                <h3>CLOTHING</h3>
              </div>
            </div>
          </div>
          <div className="shaps_bottom">
            <img src="/images/smoke2.png" alt="" />
            <img src="/images/snakehead.png" alt="" />
          </div>
        </div>
        <div className="snake_separator">
          <img src="/images/snaketail.png" alt="" />
          <div className="snake_separator_icons">
            <div className="icons_div">
              <img src="/images/earthbars.png" alt="" />
              <span>SHIPPING WORLDWIDE</span>
            </div>
            <div className="icons_div">
              <img src="/images/helmetbars.png" alt="" />

              <span>OWN A PIECE OF HISTORY</span>
            </div>
            <div className="icons_div">
              <img src="/images/iconbars.png" alt="" />

              <span>BUILT FOR PERFORMANCE</span>
            </div>
          </div>
          <img src="/images/snakehead.png" alt="" />
        </div>
      </section>
      <img src="/images/fade.png" alt="" className="fadeImage" />
    </>
  );
};

export default Poison;
