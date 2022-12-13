import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <section className="container" id="projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
};

export default ProjectList;
