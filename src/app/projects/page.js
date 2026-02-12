"use client";
import React from "react";
import { projects } from "../../data/data";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  const allProjects = [...projects.pinProjects, ...projects.otherProjects];

  return (
    <div className="md:w-[700px] w-[100%] mt-5 p-4">
      <main className="flex flex-col gap-4">
        {/* Back Button and Header */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-base-content/70 hover:text-base-content transition-colors duration-200 group self-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform transition-transform duration-200 group-hover:-translate-x-1"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>

          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold before:content-['>'] before:mr-1">
              All Projects
            </h1>
            <p className="text-base-content/70 text-sm">
              A collection of {allProjects.length} projects built with modern
              technologies
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-medium text-base-content/80 border-b pb-2">
              Featured Projects ({projects.pinProjects.length})
            </h2>
            {projects.pinProjects.map((item, index) => (
              <a
                href={item.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-[1.02] transition-all duration-200"
              >
                <div className="flex flex-col gap-2 justify-between">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <svg
                      focusable="false"
                      preserveAspectRatio="xMidYMid meet"
                      fill="currentColor"
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                    </svg>
                  </div>
                  <p className="text-base-content/80 text-sm sm:text-base">
                    {item.description}
                  </p>
                  <div className="flex items-center flex-wrap gap-2 mt-1">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-3 py-1.5 transition-colors duration-200 hover:bg-base-content/5"
                      >
                        {tag.logo && (
                          <span className="flex-shrink-0 w-3.5 h-3.5 flex items-center justify-center">
                            {tag.logo}
                          </span>
                        )}
                        <span>{tag.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {projects.otherProjects.map((item, index) => (
              <a
                href={item.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-[1.02] transition-all duration-200"
              >
                <div className="flex flex-col gap-2 justify-between">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <svg
                      focusable="false"
                      preserveAspectRatio="xMidYMid meet"
                      fill="currentColor"
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                    </svg>
                  </div>
                  <p className="text-base-content/80 text-sm sm:text-base">
                    {item.description}
                  </p>
                  <div className="flex items-center flex-wrap gap-2 mt-1">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-3 py-1.5 transition-colors duration-200 hover:bg-base-content/5"
                      >
                        {tag.logo && (
                          <span className="flex-shrink-0 w-3.5 h-3.5 flex items-center justify-center">
                            {tag.logo}
                          </span>
                        )}
                        <span>{tag.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
