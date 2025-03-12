import { AdvancedProjectsSection } from "./projects/advancedProjects";
import SimpleProjectsSection from "./projects/simpleProjects";

export const ProjectsSection = () => {
  return (
    <div id="projects" className="projects-section">
      <div className="projects-header">
        <p className="projects-head-title">LIVE DEMO OF MY AWESOME PROJECTS</p>
        <h2>Featured Projects</h2>
        <p>Check out my latest projects!</p>
      </div>

      <div>
        <AdvancedProjectsSection />
      </div>

      <div className="app-layout-cross-section-line"></div>
      
      <div>
        <SimpleProjectsSection />
      </div>
    </div>
  );
};
