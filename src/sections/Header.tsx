"use client";
import { useState } from "react";
import { useScrollToSection } from "@/app/utils/useScrollToSection";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToHero = useScrollToSection("hero");
  const scrollToProjects = useScrollToSection("projects");
  const scrollToEdu = useScrollToSection("edu&exp");
  const scrollToTestimonial = useScrollToSection("testimonial");
  const scrollToAbout = useScrollToSection("about");
  const scrollToContact = useScrollToSection("contact");
  const scrollToCertificates = useScrollToSection("certificates");

  return (
    <>
      {/* Default Header (Hidden on Small Screens) */}
      <div className="header-section hidden md:flex">
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

          <button className="header-navbar-item hidden">
            <Link href="/details">Details</Link>
          </button>

          <button className="header-navbar-item hidden">
            <Link href="/blogs">Blogs</Link>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Button (Visible on Small Screens) */}
      <div className="mobile-menu md:hidden">
        <button className="menu-icon" onClick={toggleMenu}>
          📚 Menu
        </button>

        {isMenuOpen && (
          <div className="dropdown-menu">
            <button onClick={closeMenu} className="dropdown-close-item">
              X
            </button>
            <button onClick={scrollToHero} className="dropdown-item mt-4">
              Home
            </button>
            <button onClick={scrollToProjects} className="dropdown-item">
              Achievements
            </button>
            <button onClick={scrollToEdu} className="dropdown-item">
              Work & Education
            </button>
            <button onClick={scrollToCertificates} className="dropdown-item">
              Certificates
            </button>
            <button onClick={scrollToTestimonial} className="dropdown-item">
              Testimonial
            </button>
            <button onClick={scrollToAbout} className="dropdown-item">
              About
            </button>
            <button onClick={scrollToContact} className="dropdown-item">
              Contact
            </button>
          </div>
        )}
      </div>
    </>
  );
};
