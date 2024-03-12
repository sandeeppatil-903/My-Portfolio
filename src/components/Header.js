import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-area fixed-top">
      <div className="container">
        <div className="gx-row d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo">
            <img
              src="../assets/images/logo-dark1.png"
              width="50"
              height="50"
              alt="Logo"
            />
          </NavLink>

          <nav className="navbar">
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

          <div className="show-menu">
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
