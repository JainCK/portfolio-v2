import React from 'react';

export const Navbar = () => {
  return (
    <nav className="bg-background text-foreground p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="text-2xl font-bold">@jain</div>
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
      <div className="flex space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.svg" alt="GitHub" className="h-6 w-6" />
        </a>
      </div>
    </nav>
  );
};
