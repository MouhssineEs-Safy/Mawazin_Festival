import React from "react";
import Navbar from "./component/Navbar.jsx";
import logo_light from "../src/assets/logo-black.png";
import logo_dark from "../src/assets/logo-white.png";
import search_icon_light from "../src/assets/search-w.png";
import search_icon_dark from "../src/assets/search-b.png";
import toogle_light from "../src/assets/night.png";
import toogle_dark from "../src/assets/day.png";

const App = () => {
  return (
    <div className="Navbar">
      <img src={logo_light} alt="#" className="logo" />
      <ul>
        <li>Home</li>
        <li>Programme</li>
        <li>Détail Artiste </li>
        <li>Mon Planning</li>
        <li>Mon Passeport</li>
      </ul>

      <div className="search-Box">
        <input type="text" placeholder="Search" />
        <img src={search_icon_light} alt="#" />
      </div>

      <img src={toogle_light} alt="#" className="Toggle-Icon" />
    </div>
  );
};

export default App;
