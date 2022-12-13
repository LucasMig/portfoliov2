import React from "react";
import { capitalize } from "../../utils";

const Navlink = ({ name, link, icon }) => {
  return (
    <li className="nav__link">
      <a href={link}>{icon}</a>
      <p className="nav__link --name">{capitalize(name)}</p>
      <p className="tooltip prevent__select">{capitalize(name)}</p>
    </li>
  );
};

export default Navlink;
