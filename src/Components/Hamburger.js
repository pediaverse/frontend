import React from "react";
import "./Hamburger.css";

const HamburgerButton = ({ onClick }) => {
  return (
    <button className="hamburger-button" onClick={onClick}>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </button>
  );
};

export default HamburgerButton;
