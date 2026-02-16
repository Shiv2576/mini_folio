"use client";

import React, { useState, useEffect } from "react";
import { usePageViewCounter } from "react-page-view-count";

function VisitorCounter({
  showLabel = true,
  labelText = "Visitors",
  className = "",
}) {
  const [hasVisited, setHasVisited] = useState(false);
  const [pageCount, loading] = usePageViewCounter({
    onlyCountUniqueVisitors: true,
    customKey: "my-site-unique-visitors",
  });

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
      <div className={`text-black/60 text-sm ${className}`}>
        <span>...</span>
      </div>
    );
  }

  const formattedCount = pageCount?.toLocaleString();

  return (
    <div className={`text-black text-sm ${className}`}>
      <div className="flex items-center gap-1.5">
        <span className="text-black/50">●</span>
        {showLabel && <span className="text-black/70">{labelText}:</span>}
        <span className="font-medium text-black">{formattedCount || "0"}</span>
      </div>
    </div>
  );
}

export default VisitorCounter;
