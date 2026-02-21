"use client";
import { useState, useRef } from "react";
import { skills } from "../../data/data";

const COLORS = [
  "from-blue-400 to-blue-600",
  "from-purple-400 to-purple-600",
  "from-pink-400 to-pink-600",
  "from-green-400 to-green-600",
  "from-yellow-400 to-yellow-600",
  "from-cyan-400 to-cyan-600",
  "from-red-400 to-red-600",
  "from-indigo-400 to-indigo-600",
];

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
  const [blinkColor, setBlinkColor] = useState(null);
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 });
  const badgeRef = useRef(null);

  const handleMouseEnter = () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setBlinkColor(randomColor);

    // Fade out after animation completes
    setTimeout(() => {
      setBlinkColor(null);
    }, 600);
  };

  const handleMouseMove = (e) => {
    if (!badgeRef.current) return;

    const rect = badgeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    // Magnetic pull only within 100px
    if (distance < 100) {
      setMagnetPos({
        x: distX * 0.2,
        y: distY * 0.2,
      });
    }
  };

  const handleMouseLeave = () => {
    setMagnetPos({ x: 0, y: 0 });
  };

  return (
    <div ref={badgeRef} className="relative">
      {/* Blink effect - gradient that fades away */}
      {blinkColor && (
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${blinkColor} opacity-0 blur-md`}
          style={{
            animation: "blink 0.6s ease-out forwards",
          }}
        />
      )}

      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center gap-2 px-4 py-2 border border-dashed border-gray-400 rounded-full bg-white hover:border-gray-700 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        style={{
          transform: `translate(${magnetPos.x}px, ${magnetPos.y}px)`,
          transition:
            magnetPos.x === 0 && magnetPos.y === 0
              ? "transform 0.3s ease-out"
              : "none",
        }}
      >
        <span className="flex items-center justify-center [&_svg]:w-4 [&_svg]:h-4">
          {skill.icon}
        </span>
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
      </div>

      <style jsx>{`
        @keyframes blink {
          0% {
            opacity: 0.8;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
