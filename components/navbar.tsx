import React from 'react';
import { FaGithub } from "react-icons/fa";
import { PiTwitterLogoFill } from 'react-icons/pi';
import { FaLinkedinIn } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="px-24 py-10 flex justify-between items-center fixed top-0 left-0 right-0 z-50 text-white">
      <div className="text-2xl font-bold">@jain</div>
      <ul className="hidden md:flex space-x-4">
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
      </ul>
      <div className="flex space-x-2 text-xl md:text-2xl">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <PiTwitterLogoFill />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};
