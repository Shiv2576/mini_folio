"use client";

import React, { useState, useEffect } from "react";
import { usePageViewCounter } from "react-page-view-count";

function VisitorCounter({
  showLabel = true,
  labelText = "Visitors",
  className = "",
}) {
  const [hasVisited, setHasVisited] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [pageCount, loading] = usePageViewCounter({
    onlyCountUniqueVisitors: true,
    customKey: "my-site-unique-visitors",
  });

  // Theme listener
  useEffect(() => {
    // Check initial theme
    const checkDarkMode = () => {
      const isDarkMode =
        document.documentElement.classList.contains("dark") ||
        document.body.classList.contains("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(isDarkMode);
    };

    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    observer.observe(document.body, { attributes: true });

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      // Only update if no explicit class is set
      if (
        !document.documentElement.classList.contains("dark") &&
        !document.body.classList.contains("dark")
      ) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    // Check if this session has been counted
    const sessionVisited = sessionStorage.getItem("visitor-session");

    if (!sessionVisited) {
      sessionStorage.setItem("visitor-session", "true");
      setHasVisited(false);
    } else {
      setHasVisited(true);
    }
  }, []);

  if (loading) {
    return (
      <div
        className={`${isDark ? "text-white/60" : "text-black/60"} text-sm ${className}`}
      >
        <span>...</span>
      </div>
    );
  }

  const formattedCount = pageCount?.toLocaleString();

  return (
    <div
      className={`${isDark ? "text-white" : "text-black"} text-sm ${className}`}
    >
      <div className="flex items-center gap-1.5">
        <span className={isDark ? "text-white/50" : "text-black/50"}>●</span>
        {showLabel && (
          <span className={isDark ? "text-white/70" : "text-black/70"}>
            {labelText}:
          </span>
        )}
        <span className={`font-medium ${isDark ? "text-white" : "text-black"}`}>
          {formattedCount || "0"}
        </span>
      </div>
    </div>
  );
}

export default VisitorCounter;
