"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import ResumeButton from "@/components/ui/resumeBtn";

export default function TypewriterSmooth() {
  const words = [
    {
      text: "Your",
      className: "text-blue-500",
    },
    {
      text: "Vision.",
      className: "text-blue-500",
    },
    {
      text: "My",
      className: "text-green-500",
    },
    {
      text: "Code.",
      className: "text-green-500",
    },
    {
      text: "let's",
      className: "text-yellow-500",
    },
    {
      text: "Build",
      className: "text-yellow-500",
    },
    {
      text: "!!",
      className: "text-red-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-white text-lg font-semibold">
        Ready to take your digital presence to the next level?
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <div className="mt-8 text-center">
          <ResumeButton />
        </div>
      </div>
    </div>
  );
}
