"use client";

import Particles from '@/components/ui/particles';
import { motion } from 'framer-motion';
import HyperText from './ui/hyper-text';

export const Hero = () => {
  let color = "#ffffff"
// bg-gradient-to-b from-gray-900 to-gray-700

  return (

    <div className="relative flex flex-col h-screen justify-center bg-slate-950 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-500 text-left pl-10">
          Hello,<br />
          I'm Jain, <br />
          <HyperText
      className="text-3xl font-bold text-white"
      text="Full-Stack Developer"
    />
          
        </h1>
        <p className="text-lg sm:text-md md:text-lg mt-1 font-light text-gray-300 text-left pl-10">
          Passionate about crafting interactive digital experiences for web and app platforms, based in India 
        </p>
        <div className='pl-10'></div>
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