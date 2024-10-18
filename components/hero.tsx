"use client";

import Particles from '@/components/ui/particles';

export const Hero = () => {
  let color = "#ffffff"


  return (

    <div className="relative flex flex-col h-screen justify-center bg-gradient-to-b from-gray-900 to-gray-700 overflow-hidden border md:shadow-xl">
      {/* <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-100/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"> */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 text-left pl-10">
          Hello,<br />
          I'm Jain, <br />
          Full-Stack Developer
        </h1>
        <p className="text-lg sm:text-md md:text-lg mt-1 font-light text-gray-300 text-left pl-10">
          Passionate about crafting interactive digital experiences for web and app platforms, based in India
        </p>
        <div className='pl-10'></div>
      {/* </div> */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};