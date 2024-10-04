import React from "react";
import "./Footer.css";
import footer_logo from "../../images/footer_logo.png";
import insta from "../../images/insta.png";
import x from "../../images/x.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer_container">
        <div className="footer_list">
          <div className="footer_item">
            <h3>MY ACCOUNT</h3>
            <ul>
              <li>ORDERS</li>
              <li>ACCOUNT DETAILS</li>
            </ul>
          </div>
          <div className="footer_item">
            <h3>SITEMAP</h3>
            <ul>
              <li>SHOP</li>
              <li>MY ACCOUNT</li>
            </ul>
          </div>
          <div className="footer_item">
            <h3>LEGAL</h3>
            <ul>
              <li>REFUND POLICY</li>
              <li>PRIVACY POLICY</li>
            </ul>
          </div>
          <div className="footer_item">
            <h3>MY ACCOUNT</h3>
            <div className="footer_imgs">
              <img src={x} alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
          <div className="footer_item">
            <img src={footer_logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
