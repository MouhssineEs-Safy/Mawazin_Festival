import React from "react";
import "./Navbar.css";
import logo_light from "../assets/logo_black.png";
import logo_dark from "../assets/logo-white.png";
import search_icon_light from "../assets/search-w.png";
import search_icon_dark from "../assets/search-b.png";
import toogle_light from "../assets/night.png";
import toogle_dark from "../assets/day.png";

const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <img src={logo_light} alt="#" className="logo" />
        <ul>
          <li>
            <a href="#">Home </a>
          </li>
          <li>
            <a href="#">Programme </a>
          </li>
          <li>
            <a href="#">Détail Artiste </a>
          </li>
          <li>
            <a href="#">Mon Planning </a>
          </li>
          <li>
            <a href="#">Mon Passeport </a>
          </li>
        </ul>
        <div className="search_box">
          <input type="search" placeholder="Search" />
          <img src={search_icon_light} alt="#" />
        </div>
        <img src={toogle_light} alt="#" className="toggle-icon" />
      </div>
      <span></span>
    </div>
  );
};

export default Navbar;
