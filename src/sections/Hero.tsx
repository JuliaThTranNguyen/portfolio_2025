"use client";

import HeroMemoJi from "@/assets/images/female-programmer.svg";
import { useScrollToSection } from "@/app/utils/useScrollToSection";

export const HeroSection = () => {
  const scrollToProjects = useScrollToSection("projects");

  return (
    <div id="hero" className="hero-container twinkling-stars">
      <div className="hero-inner-container">
        <div className="flex flex-col items pb-2 relative">
          <HeroMemoJi width={290} height={280} />
        </div>

        <div className="hero-main-status">
          <div className="bg-green-600 size-4 rounded-full"></div>
          <div className="text-sm font-medium">
            Currently available for hire and open to new projects.
          </div>
        </div>

        <h1 className="hero-heading">
          Creating seamless and stunning UX/UI designs.
        </h1>

        <p className="hero-bio">
          Hey there! I am a dedicated Software Engineer with over 5 years of
          experience, including 2 years specializing in cloud computing and
          scalable UI/UX design. I am passionate about DevOps, mobile app
          deployment, and constantly exploring new technologies. My goal? To
          grow as a Full Stack Developer and bring innovative ideas to life.
          Feel free to reach out. Together we could build something amazing{" "}
          <span className="font-extrabold">😊🚀!</span>
        </p>

        <div className="hero-footer">
          <button className="button-base button-primary" onClick={scrollToProjects}>
            <span className="font-semibold">Explore My Work ⬇️</span>
          </button>

          <button className="button-base button-success">
            <span className="font-semibold">💖</span>
            <span className="font-semibold">Reach out to me !</span>
          </button>
        </div>
      </div>
    </div>
  );
};
