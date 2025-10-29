import React, { useState } from "react";
import "./header.css";
import LinkItem from "./LinkItem";

const Header = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <div className="logo_img" alt="Logo"></div>
        <span className="logo_text">Car Lux</span>
      </div>
      <div className="nav">
        <LinkItem
          path="/rentCar"
          className={`nav_li ${
            window.location.pathname === "/" ? "active-nav" : ""
          }`}>
          Home
        </LinkItem>
        <LinkItem
          path="/Cars"
          className={`nav_li ${
            window.location.pathname === "/Cars" ? "active-nav" : ""
          }`}>
          Cars
        </LinkItem>
        <LinkItem
          path="/About"
          className={`nav_li ${
            window.location.pathname === "/About" ? "active-nav" : ""
          }`}>
          About
        </LinkItem>
        <LinkItem
          path="/contact"
          className={`nav_li ${
            window.location.pathname === "/contact" ? "active-nav" : ""
          }`}>
          Contact
        </LinkItem>
      </div>
      <button className="submit_btn">Submit Listing</button>

      {!isSideNavOpen && (
        <div className="hamburger" onClick={toggleSideNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {isSideNavOpen && (
        <div className="side-nav">
          <button className="close-btn" onClick={toggleSideNav}>
            ×
          </button>
          <LinkItem path="/rentCar" onClick={toggleSideNav}>
            Home
          </LinkItem>
          <LinkItem path="/Cars" onClick={toggleSideNav}>
            Cars
          </LinkItem>
          <LinkItem path="/About" onClick={toggleSideNav}>
            About
          </LinkItem>
          <LinkItem path="/contact" onClick={toggleSideNav}>
            Contact
          </LinkItem>
        </div>
      )}
    </div>
  );
};

export default Header;
