"use client";

import {
  motion,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      mouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        mouseMove
      );
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mousePosition.x - 6,
        y: mousePosition.y - 6,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 rounded-full bg-[#c8ff00] mix-blend-difference md:block"
    />
  );
}