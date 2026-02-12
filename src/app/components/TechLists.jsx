"use client";

import { useRef, useState } from "react";
import { skills } from "../../data/data";

export default function TechLists() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
        Tech Stack
      </h2>

      <div className="flex flex-wrap gap-3 mt-4">
        {skills.map((skill) => (
          <MagneticBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function MagneticBadge({ skill }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setPosition({
      x: (e.clientX - centerX) * 0.2,
      y: (e.clientY - centerY) * 0.2,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? "transform 0.25s ease" : "none",
      }}
      className="hover:z-10"
    >
      <div className="flex items-center gap-2 px-4 py-2 border border-dashed border-gray-400 rounded-full bg-white hover:border-gray-700 hover:shadow-lg transition-all duration-200">
        <span className="flex items-center justify-center [&_svg]:w-4 [&_svg]:h-4">
          {skill.icon}
        </span>
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
      </div>
    </div>
  );
}
