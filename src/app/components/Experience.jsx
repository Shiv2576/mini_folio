import { experience } from "../../data/data";

export default function Experience() {
  return (
    <div className="relative mt-10 scroll-mt-14" id="experience">
      <h2 className="text-xl font-medium before:content-['>'] before:mr-1 text-[rgb(var(--bc))]">
        Work Experience
      </h2>

      <div className="mt-6 relative">
        {/* Vertical line - positioned absolutely */}
        <div className="absolute left-[3px] top-2 bottom-2 w-0.5 bg-[rgb(var(--bc))]/30 rounded-full"></div>

        {/* Experience items */}
        <ol className="space-y-8">
          {experience.map((item, index) => (
            <li key={index} className="relative flex gap-4 pl-4">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[rgb(var(--bc))] border-2 border-[rgb(var(--bg-main))]"></div>

              {/* Content */}
              <div className="flex-1">
                <time className="text-xs font-medium text-[rgb(var(--bc))]/60">
                  {item.date}
                </time>
                <h3 className="text-lg font-semibold text-[rgb(var(--bc))]">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm text-[rgb(var(--bc))]/70">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Decorative dashed line at bottom */}
      <div className="absolute -inset-x-5 md:-inset-x-[120px] -bottom-22 md:-bottom-[90px] border-t-[1.5px] border-dashed border-[rgb(var(--bc))]/20" />
    </div>
  );
}
