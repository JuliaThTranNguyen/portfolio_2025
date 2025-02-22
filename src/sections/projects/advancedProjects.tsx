"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import advancedProjects from "@/data/advancedProjects";
import Pagination from "@/components/Pagination";

export const AdvancedProjectsSection = () => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const currentProjects = useMemo(() => {
    const indexOfLastProject = currentPage * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;
    return advancedProjects.slice(indexOfFirstProject, indexOfLastProject);
  }, [currentPage, itemsPerPage]);

  return (
    <div id="projects" className="projects-section button-text-effect">
      <div className="projects-header">
        <p className="projects-head-title">LIVE DEMO OF MY AWESOME PROJECTS</p>
        <h2>Featured Projects</h2>
        <p>Check out my latest projects!</p>
      </div>

      <div>
        {currentProjects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-card-image">
              <Image
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="project-card-content">
              <h3 className="font-bold text-xl">{project.title}</h3>
              <p className="text-gray-400">
                {project.company} | {project.year}
              </p>

              <div className="project-card-results">
                <h4 className="font-semibold">Key Achievements:</h4>
                {project.results.map((result, index) => (
                  <p key={index} className="text-sm">
                    {result}
                  </p>
                ))}
              </div>

              <div className="project-card-results">
                <h4 className="font-semibold">Tech Stack:</h4>
                {project.techs.map((tech, index) => (
                  <p key={index} className="text-sm">
                    {tech}
                  </p>
                ))}
              </div>

              <div className="project-card-results">
                <h4 className="font-semibold">Deployment:</h4>
                {project.mains.map((main, index) => (
                  <p key={index} className="text-sm">
                    {main}
                  </p>
                ))}
              </div>

              <div className="project-button-spacing">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-base button-primary"
                >
                  <button>
                    <span className="font-semibold">View Project 🔍</span>
                  </button>
                </a>

            
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-base button-success"
                  >
                    <button>
                      <span className="font-semibold">View Source Code 💡</span>
                    </button>
                  </a>
              
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        totalItems={advancedProjects.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
