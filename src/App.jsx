import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar.jsx";
import BackgroundImage from "./component/BackgroundImage.jsx";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");

  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <BackgroundImage />
      </div>
    </div>
  );
};

export default App;
