"use client";

import Particles from "@/components/ui/particles";
import { motion } from "framer-motion";

export const Hero = () => {
  const color = "#000000";

  return (
    <div className="relative flex flex-col h-screen justify-center bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="text-center"
      >
        <h1 className="anton-regular text-6xl sm:text-4xl md:text-8xl text-black text-left pl-10">
          Hi, I'm Jain
        </h1>
        <p className="anton-regular text-lg sm:text-md md:text-6xl mt-1 font-light text-black text-left pl-10">
          Full-Stack Developer in India.
          <br /> Let's build something amazing.
        </p>
        <div className="pl-10"></div>
      </motion.div>
      <Particles
        className="absolute inset-0"
        quantity={500}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};
