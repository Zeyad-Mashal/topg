import React from "react";
import "./Footer.css";
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
              <img src="/images/x.png" alt="" />
              <img src="/images/insta.png" alt="" />
            </div>
          </div>
          <div className="footer_item">
            <img src="/images/footer_logo.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
