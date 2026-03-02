import { about } from "../../data/data";

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-2 mt-10 scroll-mt-14" id="about">
        <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
          About
        </h2>
        <div className="flex gap-2 flex-col">
          <p className="text-base" style={{ color: "var(--text-main)" }}>
            I am <strong className="font-bold">proficient</strong> in{" "}
            <span className="inline-flex items-center gap-1 font-semibold">
              {about.proficient.map((Component, index) => (
                <span key={index} className="flex items-center underline">
                  {Component}
                  {index < about.proficient.length - 2 && ", "}
                  {index === about.proficient.length - 2 && " and "}
                </span>
              ))}
            </span>
          </p>
          <p className="text-base" style={{ color: "var(--text-main)" }}>
            {about.about}
          </p>
          <p className="text-base" style={{ color: "var(--text-main)" }}>
            If you've got any questions or just feel like chatting, send me an{" "}
            <a
              href={`mailto:${about.email}`}
              className="font-bold hover:underline cursor-pointer"
              style={{ color: "var(--text-main)" }}
            >
              (Email)
            </a>{" "}
            I'd love to hear from you.
          </p>
        </div>
      </div>
    </>
  );
}
