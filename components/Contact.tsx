import { FaGithub } from "react-icons/fa";
import { PiTwitterLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import TypewriterSmooth from "./typeWrite";

export const Contact = () => {
  return (
    <div className="h-auto">
      <TypewriterSmooth />
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center mb-28">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025-26 Jain Kuriakose
        </p>
        <div className="flex justify-center space-x-4 text-3xl">
          <a
            href="https://twitter.com/jain_kuriakose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiTwitterLogoFill />
          </a>
          <a
            href="https://www.linkedin.com/in/jainck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/JainCK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
