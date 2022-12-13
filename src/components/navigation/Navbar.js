// DEPENDENCIES
import React, { useState } from "react";
import { navigation } from "../../data";

// COMPONENTS
import Navlink from "./Navlink";
import ModeSwitch from "./ModeSwitch";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="nav__bar container">
      <button className="toggle__menu" onClick={toggleMenu}>
        <p>Menu</p>
        {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <nav>
        <ul className={`nav__links ${isMenuOpen ? "" : "hidden"}`}>
          {navigation.map((item) => {
            return <Navlink key={item.id} {...item} />;
          })}
        </ul>
      </nav>
      <ModeSwitch />
    </section>
  );
};

export default Navbar;
