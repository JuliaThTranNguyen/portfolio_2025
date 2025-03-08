import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Author: Hien Thuy, Tran Nguyen",
  icons: {
    icon: "/briefcase.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "app-main-layout"
        )}
      >
        {children}
      </body>
    </html>
  );
}

export function SecondaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <h1 className="text-2xl font-bold"><Link href={"/"}>Back to Home Page</Link></h1>
        <nav className="flex gap-2">
          <a href="/details" className="layout-header-item">Details</a>
          <a href="/blogs" className="layout-header-item">Blogs</a>
        </nav>
      </header>

      <main className="layout-content">{children}</main>

      <footer className="layout-footer">
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
}

