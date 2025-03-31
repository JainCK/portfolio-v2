"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FloatingAstronaut } from "@/components/customui/floating-astronaut";
import { ParticleField } from "@/components/customui/particle-field";
import { GlowEffect } from "@/components/customui/glow-effect";
import { FloatingElements } from "@/components/customui/floating-elements";
import { TypingEffect } from "@/components/customui/typingeffect";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen justify-center bg-slate-950 overflow-hidden px-4 sm:px-6">
      <GlowEffect />
      <FloatingElements />
      <ParticleField />
      <motion.div
        className="flex flex-col items-center justify-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <TextGenerateEffect
          words="Here to Seamlessly Craft Versatile User Experiences"
          className="text-center text-5xl sm:text-xl md:text-5xl lg:text-7xl text-white max-w-4xl"
        />

        <p className="text-base sm:text-lg md:text-xl mt-2 sm:mt-3 font-light text-white text-center">
          Hi, I&apos;m Jain, A Full-Stack Developer from India.
        </p>

        <div className="mt-3 sm:mt-4 text-lg sm:text-xl text-blue-300">
          <TypingEffect
            words={["React", "Next.js", "TypeScript", "Node.js", "UI/UX"]}
            className="font-light"
          />
        </div>

        <motion.div
          className="mt-6 sm:mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button
            className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating astronaut - hide on very small screens */}
      <div className="sm:block hidden">
        <FloatingAstronaut />
      </div>

      {/* Original animations */}
      <ShootingStars />
      <StarsBackground />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-white/50 text-xs sm:text-sm mb-1 sm:mb-2">
          Scroll to explore
        </span>
        <motion.div
          className="w-4 sm:w-5 h-8 sm:h-10 border border-white/30 rounded-full flex justify-center p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-2 bg-white/70 rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
