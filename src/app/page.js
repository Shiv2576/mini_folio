"use client";

import { useEffect, useState } from "react";
import ProjectsList from "./components/ProjectsList";
import TechLists from "./components/TechLists";
import About from "./components/About";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Ghost from "./components/ghost";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    const checkDarkMode = () => {
      const isDark =
        window.matchMedia("(prefers-color-scheme: dark)").matches ||
        document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      setIsDarkMode(
        e.matches || document.documentElement.classList.contains("dark"),
      );
    });

    // Listen for class changes on html element
    const observer = new MutationObserver(() => {
      const isDark =
        window.matchMedia("(prefers-color-scheme: dark)").matches ||
        document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      mediaQuery.removeEventListener("change", checkDarkMode);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div>
        <main className="mt-5 p-4">
          <Profile />
          <About />
          <ProjectsList />
          <TechLists />
          <Experience />
        </main>
      </div>
      {isDarkMode && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            zIndex: 2147483647,
            userSelect: "none",
            willChange: "transform",
          }}
        >
          <Ghost spawnX={530} spawnY={100} />
        </div>
      )}
    </>
  );
}
