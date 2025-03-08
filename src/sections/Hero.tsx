"use client";

import HeroMemoJi from "@/assets/images/female-programmer.svg";
import { useScrollToSection } from "@/app/utils/useScrollToSection";
import { useState } from "react";

const myOnlineResume = "https://resume.io/r/Su1pKuFJJ";
const myCoverLetter =
  "https://drive.google.com/file/d/1Y_3vTNX4Z6guTZNujqnUS9OMPhfahcm1/view?usp=sharing";

export const HeroSection = () => {
  const [showDocuments, setDocuments] = useState(false);

  const scrollToProjects = useScrollToSection("projects");
  const scrollToContact = useScrollToSection("contact");

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
          <button
            className="button-base bg-purple-600 hover:bg-pink-400"
            onClick={() => setDocuments(!showDocuments)}
          >
            View My Documents 🔍
          </button>
          {showDocuments && (
            <div className="hero-drop-down-container">
              <button
                className="button-base button-gray hero-drop-down-close-button"
                onClick={() => setDocuments(!showDocuments)}
              >
                ✖
              </button>

              <div className="flex flex-col gap-2 mt-8 ">
                <a
                  href={myCoverLetter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-base button-gray"
                >
                  <span className="font-semibold">View My Cover Letter</span>
                </a>
                <a
                  href={myOnlineResume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-base button-gray"
                >
                  <span className="font-semibold">View My Online Resume</span>
                </a>
              </div>
            </div>
          )}

          <button
            className="button-base button-primary"
            onClick={scrollToProjects}
          >
            <span className="font-semibold">Explore My Work ⤵️</span>
          </button>

          <button
            className="button-base button-success"
            onClick={scrollToContact}
          >
            <span className="font-semibold">💖</span>
            <span className="font-semibold">Reach out to me ☎️</span>
          </button>
        </div>
      </div>
    </div>
  );
};
