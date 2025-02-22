"use client";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-600 to-gray-900 text-gray-300 py-6">
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center text-center
"
      >
        {/* Copyright Text */}
        <p className="text-sm">
          © {new Date().getFullYear()} Julia Tran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
