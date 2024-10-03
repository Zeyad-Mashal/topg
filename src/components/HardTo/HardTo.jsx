import React from "react";
import "./HardTo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const HardTo = () => {
  return (
    <>
      <section className="HardTo">
        <div className="HardTo_container">
          <div className="left_align">
            <div className="hardto_logo">
              <img src="/images/bars.png" alt="" />
              <img src="/images/h2k-logo.png" alt="" />
            </div>
            <div className="top_rated">
              <p>TOP- RATED</p>
              <span>
                Community favorites – shop now to secure your picks before
                they’re gone.
              </span>
              <img src="/images/shop.png" alt="" />
            </div>
          </div>
          <div className="right_align">
            <div className="hardTo_prod">
              <img src="/images/SELECTION_BOX[MAIN].png" alt="" />
              <img src="/images/PNG.png" alt="" className="imgShirt" />
              <video
                src="/images/1920x1920.mp4"
                autoPlay
                muted
                loop
                className="video"
              ></video>
            </div>
            <div className="next">
              <img src="/images/Next.png" alt="" />
            </div>
            <div className="hardTo_prod fade">
              <div className="hardto_prod_tShirt">
                <img src="/images/SELECTION_BOX[MAIN].png" alt="" />
                <img src="/images/PNG.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="hardto_collections">
          <p>COLLECTIONS:</p>
          <div className="hardto_collections_content">
            <img src="/images/h2k-logo.png" alt="" />
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        </div>
        <div className="shaps_k2k">
          <img src="/images/smoke2.png" alt="" />
        </div>
      </section>
      <div className="topNav">
        <marquee behavior="scroll" direction="left" className="navScroll">
          TYPE IN “LUCKYLUC” AT CHECKOUT AND YOU MIGHT JUST GET LUCKY..{" "}
          <span></span> - <span></span>
          EXCLUSIVELY AT WWW.TOPG.COM <span></span> -<span></span>
          <FontAwesomeIcon icon={faTruckFast} /> FREE DELIVERY FOR ANY ORDERS
          OVER $100
        </marquee>
      </div>
    </>
  );
};

export default HardTo;
