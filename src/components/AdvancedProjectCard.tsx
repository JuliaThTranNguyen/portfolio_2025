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
    setCurrentCardIndex((prev) => (prev + 1) % 3);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="project-card">
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

        <button
          onClick={toggleDetails}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-cyan-600 transition"
        >
          {isDetailsVisible ? "Exit" : "Want to view in details? Click on me"}
        </button>

        {isDetailsVisible && (
          <div className="carousel-overlay">
            <div className="carousel-container">
              <div className="carousel-card">
                {currentCardIndex === 0 && (
                  <div className="carousel-card-image">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <h3 className="text-left text-xl text-gray-500 mt-4 font-bold">
                      {project.title} | {project.company} | {project.year}
                    </h3>
                  </div>
                )}
                {currentCardIndex === 1 && (
                  <div className="carousel-card-content">
                    <h2 className="font-bold text-2xl mb-2">
                      Key Achievements:
                    </h2>
                    {project.results.map((item, index) => (
                      <p key={index} className="text-sm">
                        {item}
                      </p>
                    ))}
                  </div>
                )}
                {currentCardIndex === 2 && (
                  <div className="carousel-card-content">
                    <h2 className="font-bold text-3xl mb-2">
                      Tech Stack & Deployment:
                    </h2>
                    <div>
                      <h4 className="text-gray-200 font-bold">Technologies:</h4>
                      {project.technologies.map((tech, index) => (
                        <p key={index} className="text-sm">
                          {tech}
                        </p>
                      ))}
                    </div>
                    <div>
                      <h4 className="mt-4 text-gray-200 font-bold">
                        Deployment Info:
                      </h4>
                      {project.deploymentInfo.map((info, index) => (
                        <p key={index} className="text-sm">
                          {info}
                        </p>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-4">
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-base button-primary"
                      >
                        <button>View Live Demo</button>
                      </a>
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-base button-success"
                      >
                        <button>View Source Code</button>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="carousel-navigation">
                <button
                  onClick={handlePrevCard}
                  className="arrow-button left-0"
                >
                  ◀️
                </button>
                <button
                  onClick={handleNextCard}
                  className="arrow-button right-0 mr-10"
                >
                  ▶️
                </button>
              </div>

              <button onClick={toggleDetails} className="carousel-close-button">
                Exit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedProjectCard;
