import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto px-4 text-center text-white">
        <p className="text-lg mb-4">© 2024-25 Jain's Portfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};
