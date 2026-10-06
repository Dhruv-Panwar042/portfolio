"use client";

import React, { useEffect, useState, useRef } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
}

export default function QuirkyCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [hoverType, setHoverType] = useState<"link" | "button" | "card" | "code" | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const requestRef = useRef<number | null>(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentTrail = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only run on devices with a mouse (fine pointer)
    const isPointerFine = window.matchMedia("(pointer: fine)").matches;
    if (!isPointerFine) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check what is currently hovered
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest("a, button, input, textarea, [role='button'], .interactive-hover");
        if (interactiveEl) {
          setIsHoveringInteractive(true);
          if (interactiveEl.tagName === "A") setHoverType("link");
          else if (interactiveEl.tagName === "BUTTON") setHoverType("button");
          else if (interactiveEl.classList.contains("code-block")) setHoverType("code");
          else setHoverType("card");
        } else {
          setIsHoveringInteractive(false);
          setHoverType(null);
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsMouseDown(true);

      // Spawn quirky sparkles on click (subtle professional palette)
      const colors = ["#0f172a", "#334155", "#059669", "#d97706", "#64748b"];
      const newSparkles: Sparkle[] = Array.from({ length: 6 }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX + (Math.random() - 0.5) * 36,
        y: e.clientY + (Math.random() - 0.5) * 36,
        size: Math.floor(Math.random() * 6) + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
      }));

      setSparkles((prev) => [...prev.slice(-12), ...newSparkles]);
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => !newSparkles.some((ns) => ns.id === s.id)));
      }, 650);
    };

    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth animation loop for the lagging ring
    const animate = () => {
      const ease = 0.18;
      currentTrail.current.x += (targetPos.current.x - currentTrail.current.x) * ease;
      currentTrail.current.y += (targetPos.current.y - currentTrail.current.y) * ease;
      setTrailPos({ x: currentTrail.current.x, y: currentTrail.current.y });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Background ambient spotlight that follows the cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(148, 163, 184, 0.08), transparent 75%)`,
        }}
      />

      {/* Quirky Click Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="pointer-events-none fixed z-50 animate-ping"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            borderRadius: "50%",
            transform: `translate(-50%, -50%) rotate(${sparkle.rotation}deg)`,
            transition: "all 0.5s ease-out",
          }}
        />
      ))}

      {/* Main Cursor Core Dot */}
      <div
        className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: isHoveringInteractive ? "8px" : "6px",
          height: isHoveringInteractive ? "8px" : "6px",
          backgroundColor: "#0f172a",
          transform: `translate(-50%, -50%) scale(${isMouseDown ? 0.6 : 1})`,
        }}
      />

      {/* Lagging Spring Outer Ring / Morphing Aura */}
      <div
        className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out flex items-center justify-center font-mono text-[9px] font-bold text-slate-800"
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          width: isHoveringInteractive ? (isMouseDown ? "40px" : "46px") : "26px",
          height: isHoveringInteractive ? (isMouseDown ? "40px" : "46px") : "26px",
          border: isHoveringInteractive
            ? "1.5px solid rgba(15, 23, 42, 0.6)"
            : "1px dashed rgba(148, 163, 184, 0.5)",
          backgroundColor: isHoveringInteractive ? "rgba(241, 245, 249, 0.5)" : "transparent",
          backdropFilter: isHoveringInteractive ? "blur(1px)" : "none",
          transform: `translate(-50%, -50%) rotate(${isHoveringInteractive ? "45deg" : "0deg"})`,
        }}
      >
        {isHoveringInteractive && (
          <span className="opacity-90 select-none animate-pulse">
            {hoverType === "link" ? "↗" : hoverType === "button" ? "✦" : "•"}
          </span>
        )}
      </div>
    </>
  );
}
