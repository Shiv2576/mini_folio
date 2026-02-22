"use client";
import { useState, useRef } from "react";
import { skills } from "../../data/data";

const COLORS = [
  ["from-blue-200/60", "to-blue-400/40"],
  ["from-purple-200/60", "to-purple-400/40"],
  ["from-pink-200/60", "to-pink-400/40"],
  ["from-green-200/60", "to-green-400/40"],
  ["from-yellow-200/60", "to-yellow-400/40"],
  ["from-cyan-200/60", "to-cyan-400/40"],
  ["from-red-200/60", "to-red-400/40"],
  ["from-indigo-200/60", "to-indigo-400/40"],
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
  const [blinkColors, setBlinkColors] = useState(null);
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 });
  const badgeRef = useRef(null);

  const handleMouseEnter = () => {
    const randomColorPair = COLORS[Math.floor(Math.random() * COLORS.length)];
    setBlinkColors(randomColorPair);

    setTimeout(() => {
      setBlinkColors(null);
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

    if (distance < 100) {
      setMagnetPos({
        x: distX * 0.2,
        y: distY * 0.2,
      });
    }
  };

  const handleMouseLeave = () => {
    setMagnetPos({ x: 0, y: 0 });
    setBlinkColors(null);
  };

  return (
    <div ref={badgeRef} className="relative">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative flex items-center gap-2 px-4 py-2 border border-dashed border-gray-400 rounded-full bg-white hover:border-gray-700 hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden ${
          blinkColors ? "border-transparent" : ""
        }`}
        style={{
          transform: `translate(${magnetPos.x}px, ${magnetPos.y}px)`,
          transition:
            magnetPos.x === 0 && magnetPos.y === 0
              ? "transform 0.3s ease-out"
              : "none",
        }}
      >
        {/* Faded gradient blink effect */}
        {blinkColors && (
          <>
            {/* Main gradient that moves */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${blinkColors[0]} ${blinkColors[1]}`}
              style={{
                animation:
                  "fadedGradientBlink 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                zIndex: 0,
                background: `linear-gradient(105deg, ${blinkColors[0]
                  .split(" ")[0]
                  .replace("/60", "")} 0%, ${blinkColors[1]
                  .split(" ")[0]
                  .replace("/40", "")} 50%, transparent 100%)`,
                backgroundSize: "200% 100%",
                backgroundPosition: "100% 0",
              }}
            />

            {/* Soft overlay for extra faded effect */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
              style={{
                animation:
                  "softOverlay 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                zIndex: 1,
              }}
            />
          </>
        )}

        {/* Content with higher z-index */}
        <span className="flex items-center justify-center [&_svg]:w-4 [&_svg]:h-4 relative z-20 mix-blend-multiply">
          {skill.icon}
        </span>
        <span className="text-sm font-medium text-gray-700 relative z-20">
          {skill.name}
        </span>
      </div>

      <style jsx>{`
        @keyframes fadedGradientBlink {
          0% {
            opacity: 0;
            background-position: 100% 0;
          }
          15% {
            opacity: 0.95;
          }
          35% {
            opacity: 0.85;
            background-position: 65% 0;
          }
          50% {
            opacity: 0.9;
            background-position: 50% 0;
          }
          65% {
            opacity: 0.7;
            background-position: 35% 0;
          }
          80% {
            opacity: 0.4;
            background-position: 15% 0;
          }
          95% {
            opacity: 0.1;
            background-position: 5% 0;
          }
          100% {
            opacity: 0;
            background-position: -100% 0;
          }
        }

        @keyframes softOverlay {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 0.25;
          }
          40% {
            opacity: 0.2;
          }
          60% {
            opacity: 0.1;
          }
          80% {
            opacity: 0.05;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
