/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./footer-styles.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container-fluid">
          <a
            href="https://www.linkedin.com/in/juan-manuel-cortes-acosta-1572761a3/"
            target="_blank"
          >
            <i className="social-icon fab fa-linkedin fa-3x"></i>
          </a>
          <a href="#/contact">
            <i className="social-icon fas fa-envelope fa-3x"></i>
          </a>
          <p className="footer-brand">© 2020 Manolo Cortes Landscape</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
