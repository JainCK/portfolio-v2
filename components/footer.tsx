import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { PiTwitterLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 mt-16">
      <div className="border-t border-gray-700 my-8"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Jain Kuriakose</h2>
          <p className="mt-2 text-gray-400">
            Helping you create experiences where aesthetics & functionality{" "}
            <br />
            seamlessly come together.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/jainck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-2xl hover:text-blue-500" />
            </a>
            <a
              href="https://twitter.com/jain_kuriakose"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiTwitterLogoFill className="text-2xl hover:text-blue-400" />
            </a>
            <a
              href="https://github.com/JainCK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 text-gray-400">
          <p>
            Feel free to reach out to me for any inquiries or collaboration
            <br />
            opportunities.
          </p>
          <a href="mailto:kuriakosejain456@gmail.com" className="text-blue-500">
            kuriakosejain456@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center text-gray-600 mt-16">
        Copyright © 2025-26 Jain Kuriakose. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
