import React from "react";
import { capitalize } from "../../utils";

const ProjectTitle = ({ name, techs }) => {
  return (
    <p className="project__title">
      {capitalize(name)}
      <span>|</span>
      {techs.map((tech, index) => (
        <span key={index} className={`tag tag--${tech.name}`}>
          {tech.icon}
        </span>
      ))}
    </p>
  );
};

export default ProjectTitle;
