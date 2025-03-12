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
    <div className="advanced-projects-section ">
      <div className="advanced-projects-border">
        <div className="projects-header">
          <p className="projects-head-title">
            View My Advanced Featured Projects
          </p>
          <p>Status: In Progress</p>
        </div>
        {paginatedData.map((project) => (
          <AdvancedProjectCard
            key={project.id}
            project={project}
            isDetailsVisible={activeProjectId === project.id}
            toggleDetails={() => toggleDetails(project.id)}
          />
        ))}

        <div className="advanced-projects-paginator">
          <Pagination
            totalItems={totalItems}
            itemsPerPage={2}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};
