"use client";
import { useState, useRef } from "react";
import { skills } from "../../data/data";

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
  const rafRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseMove = (e) => {
    if (!badgeRef.current) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const rect = badgeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      const magneticRange = 300;

      if (distance < magneticRange) {
        const strength = Math.max(0, 1 - distance / magneticRange);
        setMagnetPos({
          x: distX * 0.5 * strength,
          y: distY * 0.5 * strength,
        });
      } else {
        setMagnetPos({ x: 0, y: 0 });
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    setMagnetPos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div ref={badgeRef}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex items-center gap-2 px-4 py-2 border border-dashed border-gray-400 rounded-full bg-white cursor-pointer hover:border-gray-700 hover:shadow-lg transition-all duration-200"
        style={{
          transform: `translate(${magnetPos.x}px, ${magnetPos.y}px)`,
          transition:
            magnetPos.x === 0 && magnetPos.y === 0
              ? "transform 0.3s ease-out"
              : "none",
          willChange: "transform",
        }}
      >
        <span className="flex items-center justify-center [&_svg]:w-4 [&_svg]:h-4">
          {skill.icon}
        </span>

        {/* Shiny text effect on hover */}
        <span
          className={`text-sm font-medium relative overflow-hidden ${isHovered ? "text-transparent" : "text-gray-700"}`}
        >
          {skill.name}
          {isHovered && (
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent bg-[length:200%_100%] animate-shine"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {skill.name}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
