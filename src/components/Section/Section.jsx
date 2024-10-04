import React from "react";
import "./Section.css";
import smoke2 from "../../images/smoke2.png";
import snakehead from "../../images/snakehead.png";
import section from "../../images/section.png";
import fadeImage from "../../images/fade.png";
const Section = () => {
  return (
    <>
      <section className="section1">
        <div className="section1_container">
          <div className="shapes">
            <img src={smoke2} alt="" />
            <img src={snakehead} alt="" className="rotateSnake" />
          </div>
          <div className="section1_image">
            <img src={section} alt="" />
          </div>
        </div>
      </section>
      <img src={fadeImage} alt="" className="fadeImage" />
    </>
  );
};

export default Section;
