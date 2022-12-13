import React, { useEffect, useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

const ModeSwitch = () => {
  const [theme, setTheme] = useState(false);

  const toggleMode = () => {
    const newState = !theme;
    setTheme(newState);
  };

  // useEffect(() => {
  //   setTheme(false);
  // }, []);

  useEffect(() => {
    document.body.classList.toggle("dark");
  }, [theme]);

  return (
    <div className="mode__switch" onClick={toggleMode}>
      <FaRegSun />
      <FaRegMoon />
      <button className={`btn toggle ${theme ? "dark" : "light"}`}></button>
    </div>
  );
};

export default ModeSwitch;
