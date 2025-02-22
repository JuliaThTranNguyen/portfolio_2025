"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import testimonialsData from "@/data/testimonialsData";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <div id="testimonials" className="testimonials-section">
      <h2 className="testimonials-title">View What Others Think</h2>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="testimonial-card"
      >
        <div className="flex flex-col items-center">
          <Image
            src={currentTestimonial.avatar}
            alt={currentTestimonial.name}
            width={80}
            height={80}
            className="testimonial-avatar"
          />
          <h3 className="testimonial-name">{currentTestimonial.name}</h3>
          <p className="testimonial-position">{currentTestimonial.position}</p>
          <p>{currentTestimonial.location}</p>
          <p className="testimonial-text">{currentTestimonial.text}</p>
          {currentTestimonial.certificate && (
            <a
              href={currentTestimonial.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="button-base button-primary text-md"
            >
              📜 View Certificate
            </a>
          )}
        </div>
      </motion.div>

      <div className="testimonial-nav-buttons">
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="button-base button-circle"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          aria-label="Next"
          className="button-base button-circle"
        >
          Next →
        </button>
      </div>

      <div className="app-layout-cross-section-line"></div>
    </div>
  );
};
