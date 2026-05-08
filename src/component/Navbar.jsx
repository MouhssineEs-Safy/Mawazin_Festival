import React from "react";
import "./Navbar.css";
import logo_light from "../assets/logo_black.png";
import logo_dark from "../assets/logo-white.png";
import search_icon_light from "../assets/search-w.png";
import search_icon_dark from "../assets/search-b.png";
import toogle_light from "../assets/night.png";
import toogle_dark from "../assets/day.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <div className="Navbar">
        <img
          src={theme == "light" ? logo_light : logo_dark}
          alt="#"
          className="logo"
        />
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
          <img
            src={theme == "light" ? search_icon_light : search_icon_dark}
            alt="#"
            className="logo_search"
          />
        </div>
        <img
          onClick={() => {
            toggle_mode();
          }}
          src={theme == "light" ? toogle_light : toogle_dark}
          alt="#"
          className="toggle-icon"
        />
      </div>
      <span></span>
    </div>
  );
};

export default Navbar;
