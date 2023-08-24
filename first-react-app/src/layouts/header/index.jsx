import React from "react";
import "../header/index.scss";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <img src="../../images/about-me-logo.png" alt="" />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
