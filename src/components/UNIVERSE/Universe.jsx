import React from "react";
import "./Universe.css";
const Universe = () => {
  return (
    <>
      <section className="Universe">
        <div className="Universe_container">
          <div className="prod_container">
            <div className="fire_item">
              <img src="/images/1MAIN.png" alt="" className="img_item" />
              <div className="item_content">
                <h3 className="fire_item_title">FIREBLOOD</h3>
                <p className="fire_item_disc">
                  Crafted for those who dare to endure hardship on their path to
                  unparalleled strength and vitality.
                </p>
                <img src="/images/website.png" alt="" className="website_img" />
              </div>
            </div>
            <div className="fire_item">
              <img src="/images/2MAIN.png" alt="" className="img_item" />
              <div className="item_content">
                <h3 className="fire_item_title">G-OFFEE</h3>
                <p className="fire_item_disc">
                  A brew for the bold, the brave, & the fearless. Every sip is a
                  charge of pure grit, arming you with the energy to dominate
                  your destiny.
                </p>
                <img src="/images/website.png" alt="" className="website_img" />
              </div>
            </div>
          </div>
          <div className="item_footer">
            <p>S H I P P I N G</p>
            <img src="/images/earth.png" alt="" />
            <p>W O R L D W I D E</p>
          </div>
        </div>
      </section>
      <div className="img_sparetor">
        <img src="/images/fade.png" alt="" />
      </div>
    </>
  );
};

export default Universe;
