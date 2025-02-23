"use client";
import { useScrollToSection } from "@/app/utils/useScrollToSection";

export const Header = () => {
  const scrollToHero = useScrollToSection("hero");
  const scrollToProjects = useScrollToSection("projects");
  const scrollToEdu = useScrollToSection("edu&exp");
  const scrollToTestimonial = useScrollToSection("testimonial");
  const scrollToAbout = useScrollToSection("about");
  const scrollToContact = useScrollToSection("contact");
  const scrollToCertificates = useScrollToSection("certificates");

  return (
    <div className="header-section">
      <nav className="header-navbar">
        <button onClick={scrollToHero} className="header-navbar-item">
          Home
        </button>
        <button onClick={scrollToProjects} className="header-navbar-item">
          Achievements
        </button>
        <button onClick={scrollToEdu} className="header-navbar-item">
          Work & Education
        </button>
        <button onClick={scrollToCertificates} className="header-navbar-item">
          Certificates
        </button>
        <button onClick={scrollToTestimonial} className="header-navbar-item">
        Testimonial
        </button>
        <button onClick={scrollToAbout} className="header-navbar-item">
          About
        </button>
        <button
          onClick={scrollToContact}
          className="header-navbar-item bg-white text-black"
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
