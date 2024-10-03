import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="hero">
      <div className="topNav">
        <marquee behavior="scroll" direction="left" className="navScroll">
          TYPE IN “LUCKYLUC” AT CHECKOUT AND YOU MIGHT JUST GET LUCKY..{" "}
          <span></span> - <span></span>
          EXCLUSIVELY AT WWW.TOPG.COM <span></span> -<span></span>
          <FontAwesomeIcon icon={faTruckFast} /> FREE DELIVERY FOR ANY ORDERS
          OVER $100
        </marquee>
      </div>
      <div className="hero_slider">
        <div className="navbar_bottom">
          <ul>
            <li>SHOP</li>
            <li>GET FIREBLOOD</li>
            <li>GET G-OFFEE</li>
          </ul>
          <img src="/images/image.png" alt="" />
          <div className="icons_nav">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faCartShopping} />
            <img src="/images/MATRIX.png" alt="" />
          </div>
        </div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/images/00.png" alt="" />
            <p>COBRA’S SHIELD</p>
            <span>Don your armour. Repel weakness. Win.</span>
            <img src="/images/shop.png" alt="" className="shop_now" />
            <div className="logo_bottom">
              <img src="/images/bars.png" alt="" />
              <img src="/images/image.png" alt="" />
            </div>
            <div className="hero_ratings">
              <img src="/images/STARS.png" alt="" />
              <h4>Rated by +100,000 men of distinction.</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/000.png" alt="" />
            <p>HARD TO KILL</p>
            <span>
              TAKE YOUR REST SHOT.. <br /> THIS WARRIOR REMAINS UNFAZED
            </span>
            <img src="/images/shop.png" alt="" className="shop_now" />
            <div className="logo_bottom">
              <img src="/images/bars.png" alt="" />
              <img src="/images/image.png" alt="" />
            </div>
            <div className="hero_ratings">
              <img src="/images/STARS.png" alt="" />
              <h4>Rated by +100,000 men of distinction.</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <img src="/images/fade.png" alt="" />
    </section>
  );
};

export default Hero;
