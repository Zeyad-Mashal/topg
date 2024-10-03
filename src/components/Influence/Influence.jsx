import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import "./Influence.css";
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
                  <img src="/images/SHOPDNG.png" alt="" />
                  <div className="stars_rating">
                    <img src="/images/STARS.png" alt="" />
                    <p>Marked by +80,000 as the “Fan’s Favorite”.</p>
                  </div>
                </div>
                <img src="/images/section_bg.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider_content">
                  <h2>DNG COMICS</h2>
                  <span>As the world teeters on the brink of chaos,..</span>
                  <p>
                    Top G clashes with the forces of tyranny in the darkest
                    depths of his own mind.
                  </p>
                  <img src="/images/SHOPDNG.png" alt="" />
                  <div className="stars_rating">
                    <img src="/images/STARS.png" alt="" />
                    <p>Marked by +80,000 as the “Fan’s Favorite”.</p>
                  </div>
                </div>
                <img src="/images/section_bg.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <img src="/images/fade.png" alt="" className="fadeImage" />

    </>
  );
};

export default Influence;
