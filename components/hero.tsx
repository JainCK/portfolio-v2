import React from 'react';

export const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-[#1a1a2e] to-[#16213e] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 h-1/2 border border-dashed border-gray-500 animate-spin-slow"></div>
           </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Full-Stack Developer</h1>
        <p className="mt-4 text-2xl drop-shadow-lg">Building modern and responsive web applications</p>
      </div>
    </div>
  );
};