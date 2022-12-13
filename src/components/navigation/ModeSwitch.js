import React, { useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

const ModeSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleMode = () => {
    const newState = !isDarkTheme;
    setIsDarkTheme(newState);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="mode__switch" onClick={toggleMode}>
      <FaRegSun />
      <FaRegMoon />
      <button
        className={`btn toggle ${isDarkTheme ? "dark" : "light"}`}
      ></button>
    </div>
  );
};

export default ModeSwitch;
