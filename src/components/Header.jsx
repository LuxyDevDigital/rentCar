import React from "react";
import "./header.css";
import LinkItem from "./LinkItem";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo_img" alt="Logo"></div>
        <span className="logo_text">Car Lux</span>
      </div>
      <div className="nav">
        <LinkItem path="/" className={`nav_li ${window.location.pathname === "/" ? "active-nav" : ""}`}>Home</LinkItem>
        <LinkItem path="/Cars" className={`nav_li ${window.location.pathname === "/Cars" ? "active-nav" : ""}`}>Cars</LinkItem>
        <LinkItem path="/About" className={`nav_li ${window.location.pathname === "/About" ? "active-nav" : ""}`}>About</LinkItem>
        <LinkItem path="/contact" className={`nav_li ${window.location.pathname === "/contact" ? "active-nav" : ""}`}>Contact</LinkItem>
      </div>
      <button className="submit_btn">Submit Listing</button>
    </div>
  );
};

export default Header;
