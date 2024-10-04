import React, { useRef, useState } from "react";
import "./Classic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import barsImage from "../../images/bars.png";
import classicImage from "../../images/classic-logo.png";
import k2kImage from "../../images/h2k-logo.png";
import shopImage from "../../images/shop.png";
import SELECTION_BOX_image from "../../images/SELECTION_BOX[MAIN].png";
import shirtImage from "../../images/classic_png.png";
import shirtImage2 from "../../images/classic_png2.png";
import class3dVideo from "../../images/class_3d.mp4";
import class3dVideo2 from "../../images/classic2.mp4";
import NextImage from "../../images/NEXT.png";
import smoke2 from "../../images/smoke2.png";
const Classic = () => {
  const productRef = useRef(null);
  const nextProductRef = useRef(null);
  const [isProductOneActive, setIsProductOneActive] = useState(true);

  const handleNextClick = () => {
    setIsProductOneActive((prev) => !prev);
  };
  return (
    <>
      <section className="HardTo">
        <div className="HardTo_container classic_container">
          <div className="left_align classic_left_align">
            <div className="hardto_logo">
              <img src={barsImage} alt="" />
              <img src={classicImage} alt="" />
            </div>
            <div className="top_rated">
              <p>JUST IN</p>
              <span>
                The latest in outdoor innovation - here today, gone tomorrow.
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
                  src={class3dVideo}
                  autoPlay
                  muted
                  loop
                  className="video"
                ></video>
              </div>
              <div className="hardTo_prod_content">
                <p>NEW</p>
                <h2>CLASSIC [TEE]</h2>
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
                <img src={shirtImage2} alt="" className="imgTop" />
                <video
                  src={class3dVideo2}
                  autoPlay
                  muted
                  loop
                  className="video"
                ></video>
              </div>
              <div className="hardTo_prod_content">
                <p>NEW</p>
                <h2>CLASSIC [TEE]</h2>
                <span>$99</span>
              </div>
            </div>
          </div>
          <div className="shaps_k2k shape_classic">
            <img src={smoke2} alt="" />
          </div>
        </div>
        <div className="hardto_collections">
          <p>COLLECTIONS:</p>
          <div className="hardto_collections_content">
            <img src={k2kImage} alt="" />
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
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

export default Classic;
