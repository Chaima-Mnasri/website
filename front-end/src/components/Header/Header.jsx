import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="cta">
          <p className="course-name">NUR BIS 14.MÄRZ</p>
          <h1>8 WOCHEN GRATIS TRAINIEREN</h1>
          <a href="#" className="demo-btn">
            JETZT MITGLIED WERDEN
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;