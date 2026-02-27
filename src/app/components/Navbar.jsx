"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // State to track whether mobile menu is hidden or visible
  const [hideOnMobile, setHideOnMobile] = useState(true);
  // Get current URL path to determine active page
  const pathname = usePathname();
  // State to track current theme (dark/light)
  const [isDark, setIsDark] = useState(false);
  // Boolean to check if we're on the blogs page
  const blogs = pathname === "/blogs";

  // useEffect runs once on component mount to set initial theme
  useEffect(() => {
    // Try to get saved theme from browser's localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      // If theme was saved, use it
      setIsDark(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // If no saved theme, check user's system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDark(prefersDark);
      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light",
      );
    }
  }, []);

  // Function to handle theme toggle
  const handleThemeChange = (checked) => {
    const newTheme = checked ? "dark" : "light";
    setIsDark(checked);
    // Apply theme to the root HTML element
    document.documentElement.setAttribute("data-theme", newTheme);
    // Save theme preference to localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex justify-center sticky top-0 items-center w-full z-10">
      <style>{`
        @keyframes morphLineTop {
          0% {
            d: path('M 4 6 L 20 6');
          }
          100% {
            d: path('M 5 5 L 19 19');
          }
        }

        @keyframes morphLineMiddle {
          0% {
            opacity: 1;
            transform: scaleX(1);
          }
          100% {
            opacity: 0;
            transform: scaleX(0);
          }
        }

        @keyframes morphLineBottom {
          0% {
            d: path('M 4 18 L 20 18');
          }
          100% {
            d: path('M 19 5 L 5 19');
          }
        }

        @keyframes reverseMorphLineTop {
          0% {
            d: path('M 5 5 L 19 19');
          }
          100% {
            d: path('M 4 6 L 20 6');
          }
        }

        @keyframes reverseMorphLineMiddle {
          0% {
            opacity: 0;
            transform: scaleX(0);
          }
          100% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes reverseMorphLineBottom {
          0% {
            d: path('M 19 5 L 5 19');
          }
          100% {
            d: path('M 4 18 L 20 18');
          }
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
      `}</style>

      {/*
        Main navbar container
        - w-[95%] sm:w-[100%]: 95% width on mobile, 100% on desktop
        - flex items-center justify-between: horizontal layout with space between left and right
        - bg-gray-10/50: semi-transparent background
        - backdrop-blur-sm: blur effect for glassmorphism
        - py-5: padding top and bottom
        - px-4 sm:px-12: 4 units padding on mobile, 12 units on desktop
        - relative: needed for absolute positioned border elements
        - mx-[-20px]: negative margin to extend width
        - gap-2 sm:gap-6: spacing between flex items
      */}
      <div className="w-[97%] sm:w-[100%] flex items-center justify-between bg-gray-10/50 backdrop-blur-sm py-5 px-4 sm:px-12 relative mx-[-20px] gap-2 sm:gap-6">
        {/* Bottom extended dashed border */}
        <div className="absolute -bottom-[1px] -left-[100px] -right-[100px] border-t-[1.5px] border-dashed border-[rgb(var(--bc))]" />

        {/* Left extended dashed border */}
        <div className="absolute -left-[1px] -top-[1500px] -bottom-[1500px] border-l-[1.5px] border-dashed border-[rgb(var(--bc))]" />

        {/* Right extended dashed border */}
        <div className="absolute -right-[1px] -top-[1500px] -bottom-[1500px] border-r-[1.5px] border-dashed border-[rgb(var(--bc))]" />

        {/*
          Left section: Mobile menu toggle button with morphing hamburger icon
          - Only visible on mobile (sm:hidden)
          - SVG animates between hamburger (3 lines) and X cross
          - z-20: ensures it stays on top of dropdown menu
          - flex-shrink-0: prevents button from shrinking
        */}
        <button
          type="button"
          onClick={() => setHideOnMobile(!hideOnMobile)}
          className="sm:hidden relative z-20 flex-shrink-0"
          aria-label="Toggle navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={`hamburger-icon cursor-pointer transition-colors duration-300 ${
              !hideOnMobile ? "active" : ""
            }`}
          >
            {/* Top line - morphs to top-left diagonal of X */}
            <path className="line-top" d="M 4 6 L 20 6" />
            {/* Middle line - disappears */}
            <path className="line-middle" d="M 4 12 L 20 12" />
            {/* Bottom line - morphs to bottom-left diagonal of X */}
            <path className="line-bottom" d="M 4 18 L 20 18" />
          </svg>
        </button>

        {/*
          Center section: Navigation links container wrapper
          - flex-1: takes available space and centers content
          - flex justify-center: centers all nav items
          - min-w-0: allows flex container to shrink if needed
          - Organizes layout on both mobile and desktop views
        */}
        <div className="flex-1 flex justify-center min-w-0">
          {/*
            Navigation links list
            - On mobile: hidden by default, shows as vertical dropdown when menu is open
            - On desktop: always visible as horizontal navigation

            Mobile styling:
            - fixed: positioned relative to viewport
            - top-20: starts below the navbar
            - left-[5%] w-[90%]: positioned at 5% from left with 90% width
            - flex-col: vertical stacking
            - gap-2: tight spacing

            Desktop styling:
            - sm:static: normal document flow
            - sm:flex-row: horizontal layout
            - sm:gap-4: wider spacing on desktop
            - sm:bg-transparent: no background
            - sm:border-transparent: no borders
            - sm:p-0: no padding
          */}
          <ul
            className={`
              flex flex-col items-center justify-center
              fixed top-20 left-[5%] w-[90%]
              bg-[rgb(var(--b1))] border border-[rgb(var(--bc))]/30
              py-2 px-4 gap-2 rounded-lg shadow-lg
              sm:static sm:flex-row sm:bg-transparent sm:border-none
              sm:py-0 sm:px-0 sm:gap-4 sm:rounded-none sm:shadow-none
              sm:justify-center sm:items-center
              ${hideOnMobile ? "hidden" : "flex"} sm:flex
              transition-all duration-300
            `}
          >
            <li>
              <Link
                href="/#about"
                className="hover:underline font-medium text-base whitespace-nowrap text-[rgb(var(--text-main))] hover:text-[rgb(var(--primary))] transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="hover:underline font-medium text-base whitespace-nowrap text-[rgb(var(--text-main))] hover:text-[rgb(var(--primary))] transition-colors duration-200"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                className="hover:underline font-medium text-base whitespace-nowrap text-[rgb(var(--text-main))] hover:text-[rgb(var(--primary))] transition-colors duration-200"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="hover:underline font-medium text-base whitespace-nowrap text-[rgb(var(--text-main))] hover:text-[rgb(var(--primary))] transition-colors duration-200"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
