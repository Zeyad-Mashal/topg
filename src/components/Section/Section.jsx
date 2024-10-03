import React from "react";
import "./Section.css";
const Section = () => {
  return (
    <>
      <section className="section1">
        <div className="section1_container">
          <div className="shapes">
            <img src="/images/smoke2.png" alt="" />
            <img src="/images/snakehead.png" alt="" className="rotateSnake" />
          </div>
          <div className="section1_image">
            <img src="/images/section.png" alt="" />
          </div>
        </div>
      </section>
      <img src="/images/fade.png" alt="" className="fadeImage" />
    </>
  );
};

export default Section;
