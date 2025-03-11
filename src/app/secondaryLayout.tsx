import Link from "next/link";
import React from "react";

export function SecondaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <h1 className="text-2xl font-bold">
          <Link href={"/"}>Back to Home Page</Link>
        </h1>
        <nav className="flex gap-2">
          <a href="/details" className="layout-header-item">
            Details
          </a>
          <a href="/blogs" className="layout-header-item">
            Blogs
          </a>
        </nav>
      </header>

      <main className="layout-content">{children}</main>

      <footer className="layout-footer">
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
}
