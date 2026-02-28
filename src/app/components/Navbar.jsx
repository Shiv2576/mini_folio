"use client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

// Animation keyframes
const ANIMATION_STYLES = `
  @keyframes morphLineTop {
    0% { d: path('M 4 6 L 20 6'); }
    100% { d: path('M 5 5 L 19 19'); }
  }
  @keyframes morphLineMiddle {
    0% { opacity: 1; transform: scaleX(1); }
    100% { opacity: 0; transform: scaleX(0); }
  }
  @keyframes morphLineBottom {
    0% { d: path('M 4 18 L 20 18'); }
    100% { d: path('M 19 5 L 5 19'); }
  }
  @keyframes reverseMorphLineTop {
    0% { d: path('M 5 5 L 19 19'); }
    100% { d: path('M 4 6 L 20 6'); }
  }
  @keyframes reverseMorphLineMiddle {
    0% { opacity: 0; transform: scaleX(0); }
    100% { opacity: 1; transform: scaleX(1); }
  }
  @keyframes reverseMorphLineBottom {
    0% { d: path('M 19 5 L 5 19'); }
    100% { d: path('M 4 18 L 20 18'); }
  }
  .hamburger-icon.active .line-top {
    animation: morphLineTop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }
  .hamburger-icon.active .line-middle {
    animation: morphLineMiddle 0.3s ease-in-out forwards;
  }
  .hamburger-icon.active .line-bottom {
    animation: morphLineBottom 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }
  .hamburger-icon:not(.active) .line-top {
    animation: reverseMorphLineTop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }
  .hamburger-icon:not(.active) .line-middle {
    animation: reverseMorphLineMiddle 0.3s ease-in-out forwards;
  }
  .hamburger-icon:not(.active) .line-bottom {
    animation: reverseMorphLineBottom 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }
`;

// Navigation links data
const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/blogs", label: "Blogs" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Memoized menu toggle handler
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex justify-center sticky top-0 items-center w-full z-10">
      <style>{ANIMATION_STYLES}</style>

      <div className="w-[97%] sm:w-full flex items-center justify-between bg-gray-10/50 backdrop-blur-sm py-5 px-4 sm:px-12 relative mx-[-20px] gap-2 sm:gap-6">
        {/* Decorative borders */}
        <div className="absolute -bottom-px -left-[100px] -right-[100px] border-t-[1.5px] border-dashed border-[rgb(var(--bc))]" />
        <div className="absolute -left-px -top-[25px] -bottom-[790px] border-l-[1.5px] border-dashed border-[rgb(var(--bc))]" />
        <div className="absolute -right-px -top-[25px] -bottom-[790px] border-r-[1.5px] border-dashed border-[rgb(var(--bc))]" />

        {/* Mobile menu button with animation */}
        <button
          type="button"
          onClick={toggleMenu}
          className="sm:hidden relative z-20 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/30 rounded-md p-1"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={`hamburger-icon transition-colors duration-300 text-[rgb(var(--text-main))] ${
              isMenuOpen ? "active" : ""
            }`}
            aria-hidden="true"
          >
            <path className="line-top" d="M 4 6 L 20 6" />
            <path className="line-middle" d="M 4 12 L 20 12" />
            <path className="line-bottom" d="M 4 18 L 20 18" />
          </svg>
        </button>

        {/* Navigation links */}
        <div className="flex-1 flex justify-center min-w-0">
          <ul
            className={`
              flex flex-col items-center justify-center
              fixed top-20 left-[5%] w-[90%]
              bg-[rgb(var(--b1))] border border-[rgb(var(--bc))]/30
              py-2 px-4 gap-2 rounded-lg shadow-lg
              sm:static sm:flex-row sm:bg-transparent sm:border-none
              sm:py-0 sm:px-0 sm:gap-4 sm:rounded-none sm:shadow-none
              sm:justify-center sm:items-center
              transition-all duration-300
              ${isMenuOpen ? "flex" : "hidden sm:flex"}
            `}
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:underline font-medium text-base whitespace-nowrap text-[rgb(var(--text-main))] hover:text-[rgb(var(--primary))] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
