"use client";
import { projects } from "../../data/data";
import Link from "next/link";

export default function ProjectsList() {
  return (
    <div className="mt-10 scroll-mt-14 flex flex-col gap-2" id="projects">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-medium before:content-['>'] before:mr-1 text-[rgb(var(--text-main))]">
          Projects
        </h2>
        <Link
          href="/projects"
          className="text-sm flex underline text-[rgb(var(--text-main))]/60 hover:text-[rgb(var(--text-main))]/80 transition-colors duration-200"
        >
          See All
        </Link>
      </div>
      <div className="flex flex-col gap-2">
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
                <h3 className="font-semibold text-lg text-[rgb(var(--text-main))]">
                  {item.title}
                </h3>
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
                      <span className="flex-shrink-0 w-3.5 h-3.5 flex items-center justify-center">
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
  );
}
