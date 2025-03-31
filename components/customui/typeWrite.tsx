"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

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
    <div className="flex flex-col items-center justify-center ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
