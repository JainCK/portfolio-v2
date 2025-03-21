"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen justify-center bg-slate-950 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <TextGenerateEffect
          words="Here to Seamlessly Craft Versatile User Experiences"
          className="text-center text-7xl text-white"
        />
        <p className="text-lg mt-1 font-light text-white">
          Hi, I&apos;m Jain, A Full-Stack Developer from India.
        </p>
      </div>
      <div className="pl-10"></div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};
