import { FaGithub } from "react-icons/fa";
import { PiTwitterLogoFill } from 'react-icons/pi';
import { FaLinkedinIn } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className="py-6 mb-20">
      <div className="container mx-auto px-4 text-center text-white">
        <p className="text-lg mb-4">© 2024-25 Jain's Portfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 text-3xl">
        <a href="https://twitter.com/jain_kuriakose" target="_blank" rel="noopener noreferrer">
        <PiTwitterLogoFill />
        </a>
        <a href="https://www.linkedin.com/in/jainck" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
        </a>
        <a href="https://github.com/JainCK" target="_blank" rel="noopener noreferrer">
        <FaGithub/ >
        </a>
        </div>
      </div>
    </footer>
  );
};
