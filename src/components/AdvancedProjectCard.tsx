"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/advancedProjects";

const AdvancedProjectCard = ({
  project,
  isDetailsVisible,
  toggleDetails,
}: {
  project: Project;
  isDetailsVisible: boolean;
  toggleDetails: () => void;
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % 2);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <div className="project-card">
      {/* Top Box */}
      <div className="project-top-box">
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

          <div className="flex gap-4 mt-6">
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-base button-primary"
            >
              <button>Live Demo</button>
            </a>
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="button-base button-success"
            >
              <button>Source Code</button>
            </a>
          </div>

          <button
            onClick={toggleDetails}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-cyan-600 transition"
          >
            {isDetailsVisible
              ? "Hide me !"
              : "Want to view in details? Click on me"}
          </button>
        </div>
      </div>

      {/* Bottom Box */}
      {isDetailsVisible && (
        <div className="project-bottom-box">
          <div className="carousel-container">
            <div className="carousel-card">
              {currentCardIndex === 0 && (
                <div className="carousel-card-content sm:order-1">
                  <h2 className="carousel-text-h2">{project.title}</h2>

                  <h4 className="carousel-text-h4">
                    {project.company} | {project.year} | {project.place}
                  </h4>

                  <h4 className="carousel-text-h4 mt-10">Key Achievements:</h4>
                  {project.results.map((item, index) => (
                    <p key={index} className="carousel-text-p">
                      {item}
                    </p>
                  ))}
                </div>
              )}
              {currentCardIndex === 1 && (
                <div className="carousel-card-content">
                  <h2 className="carousel-text-h2">Tech Stack & Deployment:</h2>
                  <div>
                    <h4 className="carousel-text-h4 mt-4">Technologies:</h4>
                    {project.technologies.map((tech, index) => (
                      <p key={index} className="carousel-text-p">
                        {tech}
                      </p>
                    ))}
                  </div>
                  <div>
                    <h4 className="carousel-text-h4 mt-10">Deployment Info:</h4>
                    {project.deploymentInfo.map((info, index) => (
                      <p key={index} className="carousel-text-p">
                        {info}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="carousel-navigation">
              <button onClick={handlePrevCard} className="arrow-button left-0">
                ◀️
              </button>
              <button
                onClick={handleNextCard}
                className="arrow-button right-0 mr-10"
              >
                ▶️
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedProjectCard;
