import React from "react";
import SimpleProjectCard from "@/components/SimpleProjectCard";

function SimpleProjectsSection() {
  return (
    <div className="simple-projects-section">
      <div className="simple-projects-border">
        <div className="projects-header">
          <h2>Simple Apps</h2>
          <p>Small but beautiful applications I have built!</p>
        </div>

        <SimpleProjectCard />
      </div>
    </div>
  );
}

export default SimpleProjectsSection;
