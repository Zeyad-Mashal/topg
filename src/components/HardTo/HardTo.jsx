import React, { useRef, useState } from "react";
import "./HardTo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import barsImage from "../../images/bars.png";
import h2kImage from "../../images/h2k-logo.png";

import shopImage from "../../images/shop.png";
import SELECTION_BOX_image from "../../images/SELECTION_BOX[MAIN].png";
import shirtImage from "../../images/PNG.png";
import shirtclassic from "../../images/hoodi_kill.png";
import hoodi3d from "../../images/Hard to Kill Tee H.mp4";
import h2kVideo from "../../images/1920x1920.mp4";
import NextImage from "../../images/NEXT.png";
import smoke2 from "../../images/smoke2.png";
const HardTo = () => {
  const productRef = useRef(null);
  const nextProductRef = useRef(null);
  const [isProductOneActive, setIsProductOneActive] = useState(true);

  const handleNextClick = () => {
    setIsProductOneActive((prev) => !prev);
  };

  return (
    <>
      <section className="HardTo">
        <div className="HardTo_container">
          <div className="left_align">
            <div className="hardto_logo">
              <img src={barsImage} alt="" />
              <img src={h2kImage} alt="" />
            </div>
            <div className="top_rated">
              <p>TOP- RATED</p>
              <span>
                Community favorites – shop now to secure your picks before
                they’re gone.
              </span>
              <img src={shopImage} alt="" />
            </div>
          </div>
          <div className="right_align">
            <div
              ref={productRef}
              className={`product_item ${
                isProductOneActive ? "active" : "inactive"
              }`}
            >
              <div className="hardTo_prod">
                <img src={SELECTION_BOX_image} alt="" />
                <img src={shirtImage} alt="" className="imgShirt" />
                <video
                  src={h2kVideo}
                  autoPlay
                  muted
                  loop
                  className="video"
                ></video>
              </div>
              <div className="hardTo_prod_content">
                <p>NEW</p>
                <h2>HARD TO KILL [TEE]</h2>
                <span>$69</span>
              </div>
            </div>

            <div className="next" onClick={handleNextClick}>
              <img src={NextImage} alt="" />
            </div>

            <div
              ref={nextProductRef}
              className={`product_item ${
                isProductOneActive ? "inactive" : "active"
              }`}
            >
              <div className="hardTo_prod">
                <img src={SELECTION_BOX_image} alt="" />
                <img src={shirtclassic} alt="" className="imgShirt" />
                <video
                  src={hoodi3d}
                  autoPlay
                  muted
                  loop
                  className="video"
                ></video>
              </div>
              <div className="hardTo_prod_content">
                <p>NEW</p>
                <h2>HARD TO KILL [TEE]</h2>
                <span>$99</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hardto_collections">
          <p>COLLECTIONS:</p>
          <div className="hardto_collections_content">
            <img src={h2kImage} alt="" />
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        </div>
        <div className="shaps_k2k">
          <img src={smoke2} alt="" />
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
