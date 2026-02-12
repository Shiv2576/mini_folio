"use client";

import { useCallback } from "react";
import { socials, about } from "../../data/data";
import Pixelate from "./pixelate";
import Image from "next/image";

export default function Profile() {
  // Callback ref: React calls this function with the DOM element as soon as it mounts
  const profileRef = useCallback((node) => {
    if (node !== null) {
      // Initialize the pixelate effect
      new Pixelate(node, {
        images: ["/profile1.jpg", "/profile2.jpg"],
        timeBetweenSteps: 80,
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-start">
      {/* Pixelate Wrapper */}
      <div
        ref={profileRef}
        className="relative w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-manga-dark shadow-[4px_4px_0px_0px_rgba(23,18,25,1)] dark:border-manga-light dark:shadow-none"
      >
        <Image
          src="/profile1.jpg"
          fill
          className="object-cover object-center"
          alt={`${about.name}'s profile`}
          priority
        />
      </div>

      {/* Name and Verified Icon */}
      <div className="flex gap-2 items-center mt-4">
        <h1 className="text-3xl font-black tracking-tight text-manga-dark dark:text-manga-light uppercase">
          {about.name}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          className="fill-manga-dark dark:fill-manga-light"
          aria-hidden="false"
          role="img"
        >
          <title>Verified Account</title>
          <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
        </svg>
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
      <div className="flex items-center mt-5 gap-4">
        {[
          { link: socials.Linkedin, icon: "linkedin", label: "LinkedIn" },
          { link: socials.github, icon: "github", label: "GitHub" },
          { link: socials.twitter, icon: "twitter", label: "Twitter" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            aria-label={item.label}
            className="p-2 border-2 border-transparent hover:border-manga-dark dark:hover:border-manga-light hover:bg-manga-dark hover:text-manga-light dark:hover:bg-manga-light dark:hover:text-manga-dark transition-all rounded-md text-manga-dark dark:text-manga-light"
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
    className: "transition-colors",
    role: "img",
  };

  const wrapIcon = (children) => (
    <svg {...iconProps}>
      <title>{title}</title>
      {children}
    </svg>
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
    default:
      return null;
  }
}
