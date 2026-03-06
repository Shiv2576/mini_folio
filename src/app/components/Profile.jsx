"use client";

import { useCallback, useState, useEffect } from "react"; // Added useState, useEffect
import { socials, about } from "../../data/data";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Profile() {
  const profileRef = useCallback((node) => {
    if (node !== null) {
      new Pixelate(node, {
        images: ["/profile1.jpg", "/profile2.jpg"],
        timeBetweenSteps: 80,
      });
    }
  }, []);

  // ========== ADDED: Time Zone State and Effect ==========
  const [currentTime, setCurrentTime] = useState({
    ist: "",
    gmt: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // IST Format
      const istOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      setCurrentTime({
        ist: now.toLocaleTimeString("en-IN", istOptions),
        gmt: `GMT+5:30 (${now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })} UTC)`,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  // ========== END OF ADDED CODE ==========

  return (
    <div className="flex flex-col items-start">
      <div className="relative w-[80px] h-[80px] aspect-square overflow-hidden border-1 border-manga-dark shadow-[4px_4px_0px_0px_rgba(23,18,25,1)] dark:border-manga-light dark:shadow-none">
        <Image
          src="/profile1.jpg"
          fill
          className="object-cover object-center"
          alt={`${about.name}'s profile`}
          priority
        />
      </div>

      {/* ========== MODIFIED: Time Zone Section - MOVED UP ========== */}
      {/* Time Zone Display - Positioned right after profile image */}
      <div className="w-full -mt-25 sm:-mt-25 mb-1 scale-70 sm:scale-100 origin-top-right">
        <div className="ml-auto flex flex-col items-end gap-2">
          <ThemeSwitcher />
          {/* GMT Display */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-manga-dark/5 dark:bg-manga-light/10 rounded-md border border-manga-dark/20 dark:border-manga-light/20">
            {/* Globe Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-manga-dark dark:text-manga-light opacity-70"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>

            {/* GMT Label */}
            <span className="text-xs font-bold text-manga-dark dark:text-manga-light opacity-70">
              GMT
            </span>

            {/* GMT Offset */}
            <span className="text-xs font-mono font-medium text-manga-dark dark:text-manga-light">
              +5:30
            </span>

            {/* UTC Time */}
            <span className="text-xs text-manga-dark dark:text-manga-light opacity-60">
              (
              {new Date().toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZoneName: "short",
              })}{" "}
              UTC)
            </span>
          </div>
          {/* INDIA Badge - Separated for emphasis */}
          <div className="flex items-center gap-1">
            <span className="text-xs px-2 py-0.5 bg-manga-dark dark:bg-manga-light text-manga-light dark:text-manga-dark rounded font-bold">
              INDIA
            </span>
          </div>
        </div>
      </div>

      {/* Name and Verified Icon - NOW BELOW TIME ZONE */}
      <div className="flex gap-2 items-center mt-7 w-full">
        <div className="flex gap-2 items-center">
          {" "}
          {/* Left side with name and verified */}
          <h1 className="text-3xl font-black tracking-tight text-manga-dark dark:text-manga-light uppercase">
            {about.name}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            width="24px"
            viewBox="0 -960 960 960"
            className="fill-[rgb(var(--bc))] transition-colors duration-200"
            aria-hidden="false"
            role="img"
          >
            <title>Verified Account</title>
            <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
          </svg>
        </div>
      </div>

      {/* Role and Solo Status */}
      <div className="mt-1 flex items-center gap-2">
        <p className="text-lg font-medium opacity-70 text-manga-dark dark:text-manga-light">
          {about.role} <span className="mx-1 opacity-30">//</span>
        </p>
        <p className="underline decoration-2 underline-offset-4 cursor-pointer font-bold hover:text-primary transition-colors text-manga-dark dark:text-manga-light">
          Solo
        </p>
      </div>

      {/* Social Links */}
      <div className="flex items-center mt-5 gap-5">
        {[
          { link: socials.Linkedin, icon: "linkedin", label: "LinkedIn" },
          { link: socials.github, icon: "github", label: "GitHub" },
          { link: socials.twitter, icon: "twitter", label: "Twitter" },
          { link: socials.Resume, icon: "resume", label: "Resume" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            aria-label={item.label}
            className="group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon type={item.icon} title={item.label} />
          </a>
        ))}
      </div>
    </div>
  );
}

// Sub-component for Social Icons with Title for Accessibility
function SocialIcon({ type, title }) {
  const iconProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className:
      "transition-all duration-200 group-hover:scale-110 stroke-[rgb(var(--bc))]/70 group-hover:stroke-[rgb(var(--bc))] drop-shadow-sm group-hover:drop-shadow-md",
    role: "img",
  };

  const wrapIcon = (children) => (
    <div className="p-1.5 rounded-lg transition-all duration-200 group-hover:bg-[rgb(var(--bc))]/10">
      <svg {...iconProps}>
        <title>{title}</title>
        {children}
      </svg>
    </div>
  );

  switch (type) {
    case "instagram":
      return wrapIcon(
        <>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </>,
      );
    case "github":
      return wrapIcon(
        <>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </>,
      );
    case "facebook":
      return wrapIcon(
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
      );
    case "twitter":
      return wrapIcon(
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
      );
    case "linkedin":
      return wrapIcon(
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </>,
      );
    case "resume":
      return wrapIcon(
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </>,
      );
    default:
      return null;
  }
}
