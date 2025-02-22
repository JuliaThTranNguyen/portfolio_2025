"use client";

import React from "react";
import Image from "next/image";

import MyLocationMap from "@/assets/images/my-location-map.png";
import userData from "@/data/userData";

export const AboutSection = () => {
  return (
    <div className="about-section">
      {/* Top Container - Welcome Section */}
      <div className="about-head-banner">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          More about me 💝
        </h2>
      </div>

      {/* Bottom Container */}
      <div className="about-bottom-container">
        <div className="about-map-container">
          <Image src={MyLocationMap} alt="Map of my location" />
          <p className="location-text">
            Current location: Huovinkuja, 65320, Vaasa, Finland
          </p>
        </div>

        <div className="about-info-container">
          <div className="personal-info">
            <p className="personal-info-name">{userData.name}</p>
            <p className="personal-info-prefer">{userData.preferName}</p>
            <p className="personal-info-text">
              <strong>Phone(Mobile):</strong> {userData.phone}
            </p>
            <p className="personal-info-text">
              <strong>Email:</strong> {userData.email}
            </p>
            <p className="personal-info-text">
              <strong>Position:</strong> {userData.position}
            </p>
            <p className="personal-info-text">
              <strong>Status:</strong> {userData.status}
            </p>
          </div>

          <button
            onClick={() => {
              window.location.href = "#contact";
            }}
            className="button-base button-primary justify-center"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="app-layout-cross-section-line"></div>
    </div>
  );
};
