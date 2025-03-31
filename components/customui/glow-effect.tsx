"use client";

import { useRef, useEffect } from "react";

export const GlowEffect = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;

      const { clientX, clientY } = e;
      glowRef.current.style.background = `radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(64, 76, 255, 0.15), transparent 40%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
    />
  );
};
