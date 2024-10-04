import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import "./Influence.css";
import STARSImage from "../../images/STARS.png";
import SHOPDNGImage from "../../images/SHOPDNG.png";
import section_bg from "../../images/section_bg.png";
import fadeImage from "../../images/fade.png";
const Influence = () => {
  return (
    <>
      <section className="Influence">
        <div className="Influence_container">
          <h2>Endless Influence</h2>
          <div className="slider_show">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slider_content">
                  <h2>DNG COMICS</h2>
                  <span>As the world teeters on the brink of chaos,..</span>
                  <p>
                    Top G clashes with the forces of tyranny in the darkest
                    depths of his own mind.
                  </p>
                  <img src={SHOPDNGImage} alt="" />
                  <div className="stars_rating">
                    <img src={STARSImage} alt="" />
                    <p>Marked by +80,000 as the “Fan’s Favorite”.</p>
                  </div>
                </div>
                <img src={section_bg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider_content">
                  <h2>DNG COMICS</h2>
                  <span>As the world teeters on the brink of chaos,..</span>
                  <p>
                    Top G clashes with the forces of tyranny in the darkest
                    depths of his own mind.
                  </p>
                  <img src={SHOPDNGImage} alt="" />
                  <div className="stars_rating">
                    <img src={STARSImage} alt="" />
                    <p>Marked by +80,000 as the “Fan’s Favorite”.</p>
                  </div>
                </div>
                <img src={section_bg} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <img src={fadeImage} alt="" className="fadeImage" />
    </>
  );
};

export default Influence;
