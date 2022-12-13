import React from "react";
import ProjectTitle from "./ProjectTitle";
import { capitalize } from "../../utils";

const ProjectCard = (props) => {
  const { name, techs, imageUrl, title, description, links } = props;

  return (
    <div className="project">
      <ProjectTitle name={name} techs={techs} />
      <div className="card">
        <div className="img__container">
          <img src={imageUrl} className="card__img" alt="project" />
        </div>
        <div className="details__container">
          <p className="text text--details__title">{capitalize(title)}</p>
          <p className="text text--details">{description}</p>
          <ul className="card__links">
            {links.map((link, index) => (
              <li key={index} className="card__link">
                <a href={link.url}>{link.icon}</a>
                <p className="tooltip prevent__select">
                  {capitalize(link.name)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
