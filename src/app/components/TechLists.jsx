"use client";
import { useState, useRef } from "react";
import { useTheme } from "next-themes";
import { skills } from "../../data/data";

export default function TechLists() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-medium before:content-['>'] before:mr-1 text-[rgb(var(--text-main))]">
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
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 });
  const badgeRef = useRef(null);
  const rafRef = useRef(null);

  const shineClass = `animate-shine-${theme ?? "dark"}`;

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseMove = (e) => {
    if (!badgeRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
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
        setMagnetPos({ x: distX * 0.5 * strength, y: distY * 0.5 * strength });
      } else {
        setMagnetPos({ x: 0, y: 0 });
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setMagnetPos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <button
      type="button"
      ref={badgeRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex items-center gap-2 px-4 py-2 border border-dashed border-[rgb(var(--bc))]/30 rounded-full bg-[rgb(var(--badge-bg))] cursor-pointer hover:border-[rgb(var(--primary))] hover:shadow-lg transition-all duration-200"
      style={{
        transform: `translate(${magnetPos.x}px, ${magnetPos.y}px)`,
        transition:
          magnetPos.x === 0 && magnetPos.y === 0
            ? "transform 0.3s ease-out"
            : "none",
        willChange: "transform",
      }}
    >
      <span className="flex items-center justify-center [&_svg]:w-4 [&_svg]:h-4 [&_svg]:text-[rgb(var(--primary))]">
        {skill.icon}
      </span>
      <span className="text-sm font-medium relative overflow-hidden">
        {isHovered ? (
          <span className={shineClass}>{skill.name}</span>
        ) : (
          <span className="text-[rgb(var(--bc))]">{skill.name}</span>
        )}
      </span>
    </button>
  );
}
