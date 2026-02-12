"use client";

export default function MorphingThemeToggle({ isDark, onChange }) {
  return (
    <label
      className="switch"
      style={{
        position: "relative",
        display: "inline-block",
        margin: "auto",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <input
        type="checkbox"
        role="switch"
        checked={isDark}
        onChange={(e) => onChange(e.target.checked)}
        className="switch__input"
        style={{
          position: "relative",
          borderRadius: "0.75em",
          cursor: "pointer",
          display: "block",
          width: "3em",
          height: "1.5em",
          backgroundColor: isDark ? "hsl(223, 10%, 90%)" : "hsl(223, 10%, 10%)",
          transition: "background-color 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
          WebkitAppearance: "none",
          appearance: "none",
        }}
      />

      {/* Custom before pseudo-element */}
      <style>{`
        .switch__input::before {
          content: "";
          position: absolute;
          top: 0.125em;
          left: 0.125em;
          width: 1.25em;
          height: 1.25em;
          border-radius: 50%;
          background-color: ${isDark ? "hsl(223, 10%, 10%)" : "hsl(223, 10%, 90%)"};
          transition: background-color 0.4s cubic-bezier(0.65, 0, 0.35, 1),
                      transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
          transform: ${isDark ? "translateX(1.5em)" : "translateX(0)"};
        }
      `}</style>

      <span
        className="switch__icon"
        style={{
          position: "absolute",
          display: "block",
          top: "0.125em",
          left: "0.125em",
          width: "1.25em",
          height: "1.25em",
          backgroundColor: isDark ? "hsl(223, 10%, 90%)" : "hsl(223, 10%, 90%)",
          borderRadius: "50%",
          overflow: "hidden",
          pointerEvents: "none",
          transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
          transform: isDark ? "translateX(1.5em)" : "translateX(0)",
        }}
      >
        {/* Part 1 - Sun/Moon core */}
        <span
          className="switch__icon-part switch__icon-part--1"
          style={{
            position: "absolute",
            display: "block",
            top: "calc(50% - 0.375em)",
            left: "calc(50% - 0.375em)",
            width: "0.75em",
            height: "0.75em",
            backgroundColor: isDark
              ? "hsl(223, 10%, 90%)"
              : "hsl(223, 10%, 90%)",
            borderRadius: "50%",
          }}
        ></span>

        {/* Part 2 - Moon shadow */}
        <span
          className="switch__icon-part switch__icon-part--2"
          style={{
            position: "absolute",
            display: "block",
            backgroundColor: isDark
              ? "hsl(223, 10%, 10%)"
              : "hsl(223, 10%, 10%)",
            borderRadius: "50%",
            top: "calc(50% - 0.4375em)",
            left: "calc(50% - 0.0625em)",
            width: "0.5em",
            height: "0.5em",
            transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
            transform: isDark
              ? "translate(0, 0) scale(1)"
              : "translate(-0.1875em, 0.1875em) scale(0.2)",
          }}
        ></span>

        {/* Part 3 - Sun rays container / Moon body */}
        <span
          className="switch__icon-part switch__icon-part--3"
          style={{
            position: "absolute",
            display: "block",
            width: "1.25em",
            height: "1.25em",
            borderRadius: "50%",
            boxShadow: isDark
              ? "inset 0 0 0 0.25em hsl(223, 10%, 10%)"
              : "inset 0 0 0 0.625em hsl(223, 10%, 10%)",
            transition:
              "box-shadow 0.4s cubic-bezier(0.65, 0, 0.35, 1), transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
            transform: isDark ? "scale(1)" : "scale(0.25)",
          }}
        ></span>

        {/* Parts 4-11 - Sun rays */}
        <span
          className="switch__icon-part switch__icon-part--4"
          style={{
            position: "absolute",
            display: "block",
            backgroundColor: isDark
              ? "hsl(223, 10%, 90%)"
              : "hsl(223, 10%, 10%)",
            borderRadius: "0.0625em",
            top: "50%",
            left: "50%",
            width: "0.125em",
            height: "0.1875em",
            transformOrigin: "50% 0",
            transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
            transform: isDark
              ? "translateX(-50%) rotate(0) translateY(0.625em) scale(0)"
              : "translateX(-50%) rotate(0) translateY(0.25em)",
          }}
        ></span>
        <span
          className="switch__icon-part switch__icon-part--5"
          style={{
            position: "absolute",
            display: "block",
            backgroundColor: isDark
              ? "hsl(223, 10%, 90%)"
              : "hsl(223, 10%, 10%)",
            borderRadius: "0.0625em",
            top: "50%",
            left: "50%",
            width: "0.125em",
            height: "0.1875em",
            transformOrigin: "50% 0",
            transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
            transform: isDark
              ? "translateX(-50%) rotate(45deg) translateY(0.625em) scale(0)"
              : "translateX(-50%) rotate(45deg) translateY(0.25em)",
          }}
        ></span>
        <span
          className="switch__icon-part switch__icon-part--6"
          style={{
            position: "absolute",
            display: "block",
            backgroundColor: isDark
              ? "hsl(223, 10%, 90%)"
              : "hsl(223, 10%, 10%)",
            borderRadius: "0.0625em",
            top: "50%",
            left: "50%",
            width: "0.125em",
            height: "0.1875em",
            transformOrigin: "50% 0",
            transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
            transform: isDark
              ? "translateX(-50%) rotate(90deg) translateY(0.625em) scale(0)"
              : "translateX(-50%) rotate(90deg) translateY(0.25em)",
          }}
        ></span>
        <span
          className="switch__icon-part switch__icon-part--7"
          style={{
            position: "absolute",
            display: "block",
            backgroundColor: isDark
              ? "hsl(223, 10%, 90%)"
              : "hsl(223, 10%, 10%)",
            borderRadius: "0.0625em",
            top: "50%",
            left: "50%",
            width: "0.125em",
            height: "0.1875em",
            transformOrigin: "50% 0",
            transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
            transform: isDark
              ? "translateX(-50%) rotate(135deg) translateY(0.625em) scale(0)"
              : "translateX(-50%) rotate(135deg) translateY(0.25em)",
          }}
        ></span>
        <span
          className="switch__icon-part switch__icon-part--8"
          style={{
            position: "absolute",
            display: "block",
            backgroundColor: isDark
              ? "hsl(223, 10%, 90%)"
              : "hsl(223, 10%, 10%)",
            borderRadius: "0.0625em",
            top: "50%",
            left: "50%",
            width: "0.125em",
            height: "0.1875em",
            transformOrigin: "50% 0",
            transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
            transform: isDark
              ? "translateX(-50%) rotate(180deg) translateY(0.625em) scale(0)"
              : "translateX(-50%) rotate(180deg) translateY(0.25em)",
          }}
        ></span>
        <span
          className="switch__icon-part switch__icon-part--9"
          style={{
            position: "absolute",
            display: "block",
            backgroundColor: isDark
              ? "hsl(223, 10%, 90%)"
              : "hsl(223, 10%, 10%)",
            borderRadius: "0.0625em",
            top: "50%",
            left: "50%",
            width: "0.125em",
            height: "0.1875em",
            transformOrigin: "50% 0",
            transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
            transform: isDark
              ? "translateX(-50%) rotate(225deg) translateY(0.625em) scale(0)"
              : "translateX(-50%) rotate(225deg) translateY(0.25em)",
          }}
        ></span>
        <span
          className="switch__icon-part switch__icon-part--10"
          style={{
            position: "absolute",
            display: "block",
            backgroundColor: isDark
              ? "hsl(223, 10%, 90%)"
              : "hsl(223, 10%, 10%)",
            borderRadius: "0.0625em",
            top: "50%",
            left: "50%",
            width: "0.125em",
            height: "0.1875em",
            transformOrigin: "50% 0",
            transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
            transform: isDark
              ? "translateX(-50%) rotate(270deg) translateY(0.625em) scale(0)"
              : "translateX(-50%) rotate(270deg) translateY(0.25em)",
          }}
        ></span>
        <span
          className="switch__icon-part switch__icon-part--11"
          style={{
            position: "absolute",
            display: "block",
            backgroundColor: isDark
              ? "hsl(223, 10%, 90%)"
              : "hsl(223, 10%, 10%)",
            borderRadius: "0.0625em",
            top: "50%",
            left: "50%",
            width: "0.125em",
            height: "0.1875em",
            transformOrigin: "50% 0",
            transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
            transform: isDark
              ? "translateX(-50%) rotate(315deg) translateY(0.625em) scale(0)"
              : "translateX(-50%) rotate(315deg) translateY(0.25em)",
          }}
        ></span>
      </span>

      <span
        className="switch__sr"
        style={{
          overflow: "hidden",
          position: "absolute",
          width: "1px",
          height: "1px",
        }}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
    </label>
  );
}
