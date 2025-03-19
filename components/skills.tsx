"use client";

import React, { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { TECHNOLOGIES } from "../lib/skill";

export const Skills = () => {
  const textRef = useRef(null);
  const stackRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });
  const isStackInView = useInView(stackRef, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section id="skills" className="py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Skills</h2>
          <p
            ref={textRef}
            className="my-5 text-xl"
            style={{
              transform: isTextInView ? "none" : "translateX(-200px)",
              opacity: isTextInView ? 1 : 0,
              transition: "all 0.9s ease-out 0.5s",
            }}
          >
            I work with the following technologies and tools:
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {TECHNOLOGIES.map((tech, index) => (
              <div
                key={tech.category}
                ref={stackRef}
                className="flex flex-col gap-4"
                style={{
                  transform: isStackInView
                    ? "none"
                    : `translateY(${200 / (index + 1)}px)`,
                  opacity: isStackInView ? 1 : 0,
                  transition: `all 0.9s ease-out ${0.5 * index}s`,
                }}
              >
                <h3 className="text-lg font-semibold">{tech.category}</h3>
                <div className="flex items-center flex-wrap gap-x-5 gap-y-8">
                  {tech.items.map((item) => (
                    <div key={item.name} className="group relative flex">
                      <span role="img" className="text-4xl">
                        {item.icon && <item.icon />}
                      </span>
                      <span className="group-hover:opacity-100 transition-opacity bg-gray-800 text-lg text-white rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 mt-3 px-2 w-max">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};
