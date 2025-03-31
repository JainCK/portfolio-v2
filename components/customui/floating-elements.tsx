"use client";

import { motion } from "framer-motion";

export const FloatingElements = () => {
  const elements = [
    { id: 1, size: "w-6 h-6", top: "10%", left: "15%", duration: 8 },
    { id: 2, size: "w-4 h-4", top: "20%", left: "80%", duration: 12 },
    { id: 3, size: "w-5 h-5", top: "70%", left: "10%", duration: 10 },
    { id: 4, size: "w-3 h-3", top: "60%", left: "85%", duration: 9 },
    { id: 5, size: "w-5 h-5", top: "85%", left: "50%", duration: 11 },
  ];

  return (
    <>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} rounded-full bg-white opacity-10 pointer-events-none`}
          style={{ top: element.top, left: element.left }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};
