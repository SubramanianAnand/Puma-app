import React from "react";
import "../pages/styles.css";

const Hamburger = () => {
  return (
    <nav role="navigation">
  <div id="menuToggle">
    <input type="checkbox" />
    <span />
    <span />
    <span />
    <ul id="menu">
      <a href="#home">
        <li>Home</li>
      </a>
      <a href="#about">
        <li>About</li>
      </a>
      <a href="#product">
        <li>Product</li>
      </a>
      <a href="#contact">
        <li>Contact Us</li>
      </a>
    </ul>
  </div>
</nav>

  );
};

export default Hamburger;
