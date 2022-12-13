import React from "react";
import { FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { coverLetter } from "../data";

const sampleProject = {
  name: "portfolio v2",
  techs: [
    { name: "html", icon: <FaHtml5 /> },
    { name: "scss", icon: <FaSass /> },
    { name: "react", icon: <FaReact /> },
  ],
};

const CoverLetter = () => {
  return (
    <section className="container" id="home">
      <p className="text disclaimer">
        <span>🚀</span>This portfolio is now made with:
        {sampleProject.techs.map((tech, index) => (
          <span key={index} className={`tag tag--${tech.name}`}>
            {tech.icon}
          </span>
        ))}
      </p>

      {coverLetter.map((paragraph, index) => (
        <p key={index} className="text">
          {index === 0 ? <strong>{paragraph}</strong> : paragraph}
        </p>
      ))}
    </section>
  );
};

export default CoverLetter;
