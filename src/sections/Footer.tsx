"use client";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-600 to-gray-900 text-gray-300 py-6">
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center text-center
"
      >
        <a
          href="https://github.com/JuliaThTranNguyen"
          className="text-sm hover:text-blue-400"
        >
          © {new Date().getFullYear()} - Th.Julia ( Hien Thuy, Tran Nguyen ).
          All rights reserved.
        </a>
      </div>
    </footer>
  );
};
