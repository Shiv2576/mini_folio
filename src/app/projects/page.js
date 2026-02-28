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
        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[rgb(var(--text-main))]/70 hover:text-[rgb(var(--text-main))] transition-colors duration-200 group self-start"
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
            <h1 className="text-2xl font-semibold before:content-['>'] before:mr-1 text-[rgb(var(--text-main))]">
              All Projects
            </h1>
            <p className="text-[rgb(var(--text-main))]/70 text-sm">
              A collection of {allProjects.length} projects built with modern
              technologies
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-medium text-[rgb(var(--text-main))]/80 border-b border-[rgb(var(--text-main))]/20 pb-2">
              Featured Projects ({projects.pinProjects.length})
            </h2>
            {projects.pinProjects.map((item, index) => (
              <a
                href={item.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer p-4 border border-[rgb(var(--text-main))] hover:border-[rgb(var(--text-main))] rounded-2xl hover:scale-[1.02] transition-all duration-200"
              >
                <div className="flex flex-col gap-2 justify-between">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-lg text-[rgb(var(--text-main))]">
                      {item.title}
                    </h2>
                    <svg
                      focusable="false"
                      preserveAspectRatio="xMidYMid meet"
                      fill="currentColor"
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45 text-[rgb(var(--text-main))]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                    </svg>
                  </div>
                  <p className="text-[rgb(var(--text-main))]/70 text-sm sm:text-base">
                    {item.description}
                  </p>
                  <div className="flex items-center flex-wrap gap-2 mt-1">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs border border-[rgb(var(--text-main))]/20 font-medium text-[rgb(var(--text-main))]/70 rounded-md px-3 py-1.5 transition-colors duration-200 hover:bg-[rgb(var(--text-main))]/5"
                      >
                        {tag.logo && (
                          <span className="flex-shrink-0 w-3.5 h-3.5 flex items-center justify-center text-[rgb(var(--text-main))]/70">
                            {tag.logo}
                          </span>
                        )}
                        <span className="text-[rgb(var(--text-main))]/70">
                          {tag.name}
                        </span>
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
                className="group cursor-pointer p-4 border border-[rgb(var(--text-main))] hover:border-[rgb(var(--text-main))] rounded-2xl hover:scale-[1.02] transition-all duration-200"
              >
                <div className="flex flex-col gap-2 justify-between">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-lg text-[rgb(var(--text-main))]">
                      {item.title}
                    </h2>
                    <svg
                      focusable="false"
                      preserveAspectRatio="xMidYMid meet"
                      fill="currentColor"
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45 text-[rgb(var(--text-main))]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                    </svg>
                  </div>
                  <p className="text-[rgb(var(--text-main))]/70 text-sm sm:text-base">
                    {item.description}
                  </p>
                  <div className="flex items-center flex-wrap gap-2 mt-1">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs border border-[rgb(var(--text-main))]/20 font-medium text-[rgb(var(--text-main))]/70 rounded-md px-3 py-1.5 transition-colors duration-200 hover:bg-[rgb(var(--text-main))]/5"
                      >
                        {tag.logo && (
                          <span className="flex-shrink-0 w-3.5 h-3.5 flex items-center justify-center text-[rgb(var(--text-main))]/70">
                            {tag.logo}
                          </span>
                        )}
                        <span className="text-[rgb(var(--text-main))]/70">
                          {tag.name}
                        </span>
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
