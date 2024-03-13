import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-dark2.png";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="header-area fixed-top">
      <div className="container">
        <div className="gx-row d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo">
            <img
              className="logo-res"
              src={logo}
              width="100"
              height="100"
              alt="Logo"
            />
          </NavLink>

          <nav className={`navbar ${showNavbar && "active"}`}>
            <ul className="menu">
              <li>
                <NavLink to="/" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeclassname="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" activeclassname="active">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeclassname="active">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink to="/contact" className="theme-btn">
              Let's talk
            </NavLink>
          </nav>

          <NavLink to="/contact" className="theme-btn" download>
            Let's talk
          </NavLink>

          <div
            className={`show-menu ${showNavbar && "active"}`}
            onClick={handleShowNavbar}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
