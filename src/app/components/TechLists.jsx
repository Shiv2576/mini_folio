"use client";
import { useState, useRef } from "react";
import { skills } from "../../data/data";
import ShinyText from "./ShinyText";

export default function TechLists() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-3 mt-4">
        {skills.map((skill) => (
          <TechBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function TechBadge({ skill }) {
  const [isHovered, setIsHovered] = useState(false);
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 });
  const badgeRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseMove = (e) => {
    if (!badgeRef.current) return;

    const rect = badgeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < 100) {
      setMagnetPos({
        x: distX * 0.2,
        y: distY * 0.2,
      });
    }
  };

  const handleMouseLeave = () => {
    setMagnetPos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div ref={badgeRef} className="relative">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative flex items-center gap-2 px-4 py-2 border border-dashed rounded-full bg-white cursor-pointer overflow-hidden transition-all duration-200 ${
          isHovered
            ? "border-gray-700 shadow-lg border-solid"
            : "border-gray-400 hover:border-gray-700 hover:shadow-lg"
        }`}
        style={{
          transform: `translate(${magnetPos.x}px, ${magnetPos.y}px)`,
          transition:
            magnetPos.x === 0 && magnetPos.y === 0
              ? "transform 0.3s ease-out"
              : "none",
        }}
      >
        {/* Icon */}
        <span className="flex items-center justify-center [&_svg]:w-4 [&_svg]:h-4 relative z-20">
          {skill.icon}
        </span>

        {/* Skill name with shiny text on hover */}
        <div className="relative z-20">
          {isHovered ? (
            <ShinyText
              text={skill.name}
              speed={1.5}
              spread={120}
              color="#374151"
              shineColor="#fbbf24"
              pauseOnHover={false}
              className="text-sm font-medium"
            />
          ) : (
            <span className="text-sm font-medium text-gray-700">
              {skill.name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
