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
    <div id="projects" className="projects-section button-text-effect ">
      <div className="projects-header">
        <p className="projects-head-title">LIVE DEMO OF MY AWESOME PROJECTS</p>
        <h2>Featured Projects</h2>
        <p>Check out my latest projects!</p>
      </div>

      <div>
        {currentProjects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-card-image">
              <Image src={project.image} alt={project.title} />
            </div>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.company}</p>
              <p>{project.year}</p>
              <div className="project-card-results">
                {project.results.map((result) => (
                  <div key={result.title} className="project-card-result">
                    <p>{result.title}</p>
                  </div>
                ))}
              </div>

              <div className="project-card-results">
                {project.techs.map((techs) => (
                  <div key={techs.title} className="project-card-result">
                    <p>{techs.title}</p>
                  </div>
                ))}
              </div>

              <div className="project-card-results">
                {project.mains.map((mains) => (
                  <div key={mains.title} className="project-card-result">
                    <p>{mains.title}</p>
                  </div>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-button-spacing"
              >
                <button className="button-base button-primary">
                  <span className="font-semibold">View Project 🔍</span>
                </button>
                <button className="button-base button-success">
                  <span className="font-semibold">View Source Code 💡</span>
                </button>
              </a>
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
