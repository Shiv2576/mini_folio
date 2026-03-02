"use client";
import { useEffect, useRef, useState } from "react";

interface GhostProps {
  spawnX?: number | "center" | "left" | "right";
  spawnY?: number | "center" | "top" | "bottom";
  fadeSpeed?: number;
}

const allowedThemes = [
  "dark",
  "mocha",
  "nord",
  "rosepine",
  "everforest",
  "tokyonight",
];

const ghostColors: Record<string, string> = {
  dark: "#e8e0c8",
  mocha: "#cdd6f4",
  nord: "#d8dee9",
  rosepine: "#ebbcba",
  everforest: "#d3c6aa",
  tokyonight: "#a9b1d6",
};

const glowColors: Record<string, string> = {
  dark: "212, 175, 55",
  mocha: "186, 165, 218",
  nord: "129, 161, 193",
  rosepine: "235, 111, 146",
  everforest: "131, 192, 103",
  tokyonight: "122, 162, 247",
};

export default function Ghost({
  spawnX = "center",
  spawnY = "center",
  fadeSpeed = 300,
}: GhostProps) {
  const ghostRef = useRef<HTMLDivElement>(null);
  const mouthRef = useRef<HTMLDivElement>(null);
  const eyesRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getInitialPos = (
    xPos: number | "center" | "left" | "right",
    yPos: number | "center" | "top" | "bottom",
  ) => {
    if (typeof window === "undefined") return { x: 0, y: 0 };
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    if (typeof xPos === "number") x = xPos;
    else if (xPos === "left") x = window.innerWidth * 0.25;
    else if (xPos === "right") x = window.innerWidth * 0.75;
    if (typeof yPos === "number") y = yPos;
    else if (yPos === "top") y = window.innerHeight * 0.25;
    else if (yPos === "bottom") y = window.innerHeight * 0.75;
    return { x, y };
  };

  const [mouse, setMouse] = useState(getInitialPos(spawnX, spawnY));
  const [clicked, setClicked] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ghostColor, setGhostColor] = useState("#e8e0c8");
  const [glowColor, setGlowColor] = useState("212, 175, 55");

  const mouseRef = useRef(mouse);
  const clickedRef = useRef(clicked);

  useEffect(() => {
    mouseRef.current = mouse;
  }, [mouse]);
  useEffect(() => {
    clickedRef.current = clicked;
  }, [clicked]);

  const checkTheme = () => {
    const dataTheme = document.documentElement.getAttribute("data-theme");
    const isAllowed = dataTheme ? allowedThemes.includes(dataTheme) : false;
    setIsDarkTheme(isAllowed);
    if (dataTheme && ghostColors[dataTheme])
      setGhostColor(ghostColors[dataTheme]);
    if (dataTheme && glowColors[dataTheme]) setGlowColor(glowColors[dataTheme]);
    setTimeout(() => setIsVisible(isAllowed), 0);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    checkTheme();
    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  const map = (
    num: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number,
  ): number => ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if ("touches" in e) {
        if (e.touches.length > 0)
          setMouse({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      } else {
        setMouse({ x: e.clientX, y: e.clientY });
      }
    };
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      setClicked(true);
    };
    const handleMouseUp = () => setClicked(false);

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchstart", handleMouseMove, { passive: true });
      window.addEventListener("touchmove", handleMouseMove, { passive: true });
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchstart", handleMouseMove);
        window.removeEventListener("touchmove", handleMouseMove);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !isDarkTheme) return;

    const initialPos = getInitialPos(spawnX, spawnY);
    const pos = { x: initialPos.x, y: initialPos.y };
    let animationFrameId: number;

    const follow = () => {
      const distX = mouseRef.current.x - pos.x;
      const distY = mouseRef.current.y - pos.y;
      const velX = distX / 8;
      const velY = distY / 8;

      pos.x += distX / 10;
      pos.y += distY / 10;

      const skewX = map(velX, 0, 100, 0, -50);
      const scaleY = map(velY, 0, 100, 1, 2.0);
      const scaleEyeX = map(Math.abs(velX), 0, 100, 1, 1.2);
      const scaleEyeY = clickedRef.current
        ? 0.4
        : map(Math.abs(velX * 2), 0, 100, 1, 0.1);
      const scaleMouth =
        Math.min(
          Math.max(
            map(Math.abs(velX * 1.5), 0, 100, 0, 10),
            map(Math.abs(velY * 1.2), 0, 100, 0, 5),
          ),
          2,
        ) * (clickedRef.current ? -1 : 1);

      if (ghostRef.current) {
        ghostRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(0.7) skew(${skewX}deg) rotate(${-skewX}deg) scaleY(${scaleY})`;
      }
      if (eyesRef.current) {
        eyesRef.current.style.transform = `translateX(-50%) scale(${scaleEyeX}, ${scaleEyeY})`;
      }
      if (mouthRef.current) {
        mouthRef.current.style.transform = `translate(${-skewX * 0.5 - 10}px, 0) scale(${scaleMouth})`;
      }

      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDarkTheme, spawnX, spawnY]);

  return (
    <div
      ref={containerRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${fadeSpeed}ms ease-in-out`,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <svg
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          visibility: "hidden",
        }}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="8"
              result="ghost-blur"
            />
            <feColorMatrix
              in="ghost-blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 14 -6"
              result="ghost-gooey"
            />
          </filter>
        </defs>
      </svg>

      <div
        id="ghost"
        ref={ghostRef}
        className="ghost"
        style={{
          position: "absolute",
          zIndex: 1,
          transformOrigin: "center",
          width: "70px",
          margin: "15px 0 0 -35px",
        }}
      >
        <div className="ghost__head">
          <div
            ref={eyesRef}
            className="ghost__eyes"
            style={{
              position: "absolute",
              zIndex: 1,
              width: "12px",
              height: "12px",
              top: "27px",
              left: "50%",
              transform: "translate(-50%)",
              borderRadius: "50px",
              background: "#161616",
              marginLeft: "-16px",
              transformOrigin: "center",
              boxShadow: "32px 0 0 #161616",
            }}
          />
          <div
            ref={mouthRef}
            className="ghost__mouth"
            style={{
              position: "absolute",
              zIndex: 1,
              width: "16px",
              height: "12px",
              top: "48px",
              left: "50%",
              transform: "scale(0)",
              borderRadius: "16px 16px 10px 10px",
              background: "#161616",
              transformOrigin: "center bottom",
              overflow: "hidden",
            }}
          />
        </div>

        <div
          className="ghost__tail"
          style={{
            position: "absolute",
            zIndex: -1,
            top: "65px",
            height: "44px",
            width: "100%",
            filter: "url(#goo)",
          }}
        >
          <div
            style={{
              background: ghostColor,
              position: "absolute",
              bottom: "28px",
              left: 0,
              height: "80px",
              width: "100%",
              borderRadius: "32px 32px 4px 4px",
            }}
          />
          <div
            className="ghost__rip"
            style={{
              position: "absolute",
              top: "12px",
              left: "0",
              width: "12px",
              height: "22px",
              background: ghostColor,
              borderRadius: "50%",
              boxShadow: `-50px 0 0 ${ghostColor}, -25px 0 0 ${ghostColor}, 25px 0 0 ${ghostColor}, 50px 0 0 ${ghostColor}, 75px 0 0 ${ghostColor}`,
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .ghost__rip {
          animation: ghost-rips 1s linear infinite;
        }
        @keyframes ghost-rips {
          0% {
            left: 0;
            top: 10px;
          }
          50% {
            left: 25px;
            top: 16px;
          }
          100% {
            left: 50px;
            top: 10px;
          }
        }
        .ghost {
          animation: ghost-float 2.5s ease-in-out infinite;
        }
        @keyframes ghost-float {
          0%,
          100% {
            filter: drop-shadow(0 0 6px rgba(${glowColor}, 0.35));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(${glowColor}, 0.75))
              drop-shadow(0 0 32px rgba(${glowColor}, 0.35));
          }
        }
      `}</style>
    </div>
  );
}
