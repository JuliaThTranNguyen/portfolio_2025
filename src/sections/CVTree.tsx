"use client";

import { useScrollToSection } from "@/app/utils/useScrollToSection";
import CVArray from "@/data/cvArray";

export const CVTree = () => {
  const scrollToTestimonials = useScrollToSection("testimonials");

  return (
    <section className="cv-tree-section">
      <div className="app-layout-cross-section-line"></div>
      <h2 className="cv-tree-title">My Career & Study Timeline</h2>

      <div className="cv-tree">
        {CVArray.map((item, index) => (
          <div key={index} className="cv-node">
            <div className="cv-node-icon" style={{ borderColor: item.color }}>
              {item.icon}
            </div>
            <div
              className="cv-node-line"
              style={{ borderLeftColor: item.color }}
            ></div>
            <div
              className="cv-node-content"
              style={{ borderLeftColor: item.color }}
            >
              <h3 className="cv-node-title">{item.title}</h3>
              <p className="cv-node-date">
                {item.start_year} - {item.end_year}
              </p>
              <p className="cv-node-description">{item.description}</p>
              <p className="cv-node-location">
                {item.company}, {item.location}
              </p>
              <p
                className={`cv-node-status ${
                  item.status === "Completed" ? "completed" : "ongoing"
                }`}
              >
                {item.status}
              </p>

              {item.certificate && (
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-base button-primary"
                >
                  📜 View Proof of Completion
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      

      <div className="cv-testimonial-button-container">
        <button onClick={scrollToTestimonials} className="button-base button-circle">
          <span className="button-text-effect">View Testimonials 💬</span>
        </button>
      </div>

      <div className="app-layout-cross-section-line"></div>
    </section>
  );
};
