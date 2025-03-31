import TypewriterSmooth from "@/components/customui/typeWrite";
import { FaArrowRight } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="py-12 px-4 sm:py-16 md:py-20 bg-slate-950 text-white flex flex-col justify-center items-center mt-10 sm:mt-16">
      <p
        className="text-gray-400 text-base sm:text-lg text-center mb-3 sm:mb-4 px-2"
        role="heading"
        aria-level={2}
      >
        Ready to take your digital presence to the next level?
      </p>
      <div aria-label="Typewriter Text" className="text-center">
        <TypewriterSmooth />
      </div>

      <a
        href="mailto:kuriakosejain456@gmail.com"
        className="mt-6 sm:mt-8 bg-gray-900 border border-gray-700 text-white py-2 sm:py-3 px-5 sm:px-6 rounded-full flex items-center group hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base"
        aria-label="Get in touch"
      >
        Get In Touch
        <FaArrowRight
          className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300"
          aria-hidden="true"
        />
      </a>

      <div className="mt-6 text-center max-w-md mx-auto">
        <p className="text-gray-500 text-xs sm:text-sm mb-2">
          I'm available for full-time roles & freelance projects.
        </p>
        <p className="text-gray-600 text-xs sm:text-sm px-4">
          I thrive on crafting dynamic web applications, and delivering seamless
          user experiences.
        </p>
      </div>
    </div>
  );
};

export default Contact;
