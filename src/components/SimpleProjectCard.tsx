import simpleProjects from "@/data/simpleProjects";
import Image from "next/image";
import React from "react";

function SimpleProjectCard() {
  return (
    <div className="simple-projects-grid-card">
      {simpleProjects.map((project) => (
        <div key={project.id} className="simple-projects-card-data">
          <div className="simple-projects-card-top">
            <Image
              src={project.image}
              alt={project.title}
              className="simple-projects-card-image"
            />
          </div>

          <h3 className="simple-projects-card-title">{project.title}</h3>

          <p className="simple-projects-card-description">
            {project.description}
          </p>

          <div className="simple-projects-card-text-container">
            {project.technologies.map((tech) => (
              <span key={tech} className="simple-projects-card-styled-text">
                {tech}
              </span>
            ))}
          </div>

          <div className="simple-projects-card-url">
            {project.liveDemoLink && (
              <a
                href={project.liveDemoLink}
                className="button-base button-circle"
                target="_blank"
              >
                Live Demo
              </a>
            )}
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                className="button-base button-circle"
                target="_blank"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SimpleProjectCard;
