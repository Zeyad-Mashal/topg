import React from "react";
import "./News.css";
import hand from "../../images/hand.png";
const News = () => {
  return (
    <section className="news">
      <div className="news_contanier">
        <div className="news_shapes">
          <img src={hand} alt="" />
        </div>
        <h2>E S C A P E</h2>
        <h1>THE MATRIX</h1>
        <div className="input_field">
          <input type="text" placeholder="YOUR-EMAIL ADDRESS" />
          <button>JOIN</button>
        </div>
        <p>BY SIGNING UP YOU AGREE TO OUR TERM AND CONDITIONS</p>
      </div>
    </section>
  );
};

export default News;
