"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const Hero = () => {
  const color = "#ffffff";

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
    </div>
  );
};
