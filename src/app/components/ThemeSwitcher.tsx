"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Theme =
  | "light"
  | "dark"
  | "sepia"
  | "latte"
  | "frappe"
  | "macchiato"
  | "mocha"
  | "nord";

const THEMES = [
  { id: "light" as Theme, name: "Light", primary: "#e8e2d0" },
  { id: "dark" as Theme, name: "Dark", primary: "#0d0d0d" },
  { id: "sepia" as Theme, name: "Sepia", primary: "#f1e7d0" },
  { id: "latte" as Theme, name: "Latte", primary: "#eff1f5" },
  { id: "frappe" as Theme, name: "Frappe", primary: "#303446" },
  { id: "macchiato" as Theme, name: "Macchiato", primary: "#24273a" },
  { id: "mocha" as Theme, name: "Mocha", primary: "#1e1e2e" },
  { id: "nord" as Theme, name: "Nord", primary: "#2e3440" },
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="relative max-w-full">
      <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[rgb(var(--b1))] border border-[rgb(var(--bc))]/20 shadow-sm overflow-x-auto scrollbar-none">
        {THEMES.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`flex-shrink-0 relative w-5 h-5 rounded-lg overflow-hidden transition-all duration-200
              ${
                mounted && theme === t.id
                  ? "ring-2 ring-[rgb(var(--bc))] scale-110 shadow-md"
                  : "ring-1 ring-[rgb(var(--bc))]/20 hover:ring-[rgb(var(--bc))]/60 hover:scale-105"
              }`}
            style={{ backgroundColor: t.primary }}
            aria-label={t.name}
            title={t.name}
            type="button"
          >
            {mounted && theme === t.id && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[rgb(var(--bc))]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
