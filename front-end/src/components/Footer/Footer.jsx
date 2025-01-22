import React from "react";
import "./Footer.css";
import { instagramLogo, twitterLogo, facebookLogo } from "../../assets";

const Footer = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Fitness<span className="red">Studio</span>
            </a>

            <div className="social-icons">
            
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookLogo} alt="Facebook" />
              </a>

              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterLogo} alt="Twitter" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramLogo} alt="Instagram" />
              </a>
            </div>

            <div className="copyright">
              This website is designed by Jsx Ⓒ 2025
            </div>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="mailto:contact@email.com">contact@email.com</a>
              </li>

              <li>
                <a href="tel:+19999999999">+1 999 9999 999</a>
              </li>
            </ul>
          </div>

          <div className="copyright mobile">
            This website is designed by GTCoding Ⓒ 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
