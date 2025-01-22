import React, { useState } from "react";
import "./Navbar.css";
import { menuIcon, closeIcon } from "../../assets";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDropdownActive, setDropdownActive] = useState(false);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          Fitness<span className="red">Studio</span>
        </a>

        <ul>
          <li>
            <a href="#topics">Course Details</a>
          </li>

          {/* Fitnessstudio-Orte Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownActive(true)}
            onMouseLeave={() => setDropdownActive(false)}
          >
            Fitnessstudios
            {isDropdownActive && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#berlin">Berlin</a>
                </li>
                <li>
                  <a href="#hamburg">Hamburg</a>
                </li>
                <li>
                  <a href="#muenchen">München</a>
                </li>
                <li>
                  <a href="#stuttgart">Stuttgart</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="#info">About</a>
          </li>

          <li>
            <a href="#blog">Blog</a>
          </li>

          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div onClick={() => setIsActive(true)} className="menu-icon">
          <img src={menuIcon} alt="" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div onClick={() => setIsActive(false)} className="close-icon">
          <img src={closeIcon} alt="" />
        </div>

        <ul className="menu-items">
          <li>
            <a href="#topics" onClick={() => setIsActive(false)}>
              Course Details
            </a>
          </li>

          <li>
            <a href="#info" onClick={() => setIsActive(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#blog" onClick={() => setIsActive(false)}>
              Blog
            </a>
          </li>

          <li>
            <a href="#testimonials" onClick={() => setIsActive(false)}>
              Testimonials
            </a>
          </li>

          {/* Fitnessstudio-Orte für Mobile */}
          <li className="dropdown-mobile">
            <span>Fitnessstudios</span>
            <ul className="dropdown-menu">
              <li>
                <a href="#berlin" onClick={() => setIsActive(false)}>
                  Berlin
                </a>
              </li>
              <li>
                <a href="#hamburg" onClick={() => setIsActive(false)}>
                  Hamburg
                </a>
              </li>
              <li>
                <a href="#muenchen" onClick={() => setIsActive(false)}>
                  München
                </a>
              </li>
              <li>
                <a href="#stuttgart" onClick={() => setIsActive(false)}>
                  Stuttgart
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
