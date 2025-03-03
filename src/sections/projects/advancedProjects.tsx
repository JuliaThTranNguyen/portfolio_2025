"use client";

import { useState } from "react";
import advancedProjects from "@/data/advancedProjects";
import Pagination from "@/components/Pagination";
import AdvancedProjectCard from "@/components/AdvancedProjectCard";

const usePaginatedData = (data: any[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = data.length;

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return { paginatedData, currentPage, totalItems, setCurrentPage };
};

export const AdvancedProjectsSection = () => {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const { paginatedData, currentPage, totalItems, setCurrentPage } =
    usePaginatedData(advancedProjects, 2);

  const toggleDetails = (id: number) => {
    setActiveProjectId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div id="projects" className="projects-section button-text-effect">
      <div className="projects-header">
        <p className="projects-head-title">LIVE DEMO OF MY AWESOME PROJECTS</p>
        <h2>Featured Projects</h2>
        <p>Check out my latest projects!</p>
      </div>

      <div>
        {paginatedData.map((project) => (
          <AdvancedProjectCard
            key={project.id}
            project={project}
            isDetailsVisible={activeProjectId === project.id}
            toggleDetails={() => toggleDetails(project.id)}
          />
        ))}
      </div>

      <Pagination
        totalItems={totalItems}
        itemsPerPage={2}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
