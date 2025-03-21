"use client";

import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      <section id="about" className="min-h-screen py-12 text-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center">
            Here is a Whole Page About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className=" mb-8 md:mb-0">
              <motion.div
                className="text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h3>Me talking about myself</h3>
                <p className="mb-4">
                  I&apos;m Jain, a full-stack developer whose curious about
                  finding ways to make the web a better place. I&apos;m from
                  India as you noticed from my hero page.
                </p>
                <p className="mb-4">
                  I already completed my bachelors and currently on my masters
                  in computer application. I mostly work on nodejs, typescript,
                  and react, but I&apos;m always open to learn new things.
                  Thinking about jumping to golang and rust or context switching
                  to mobile and game development.
                </p>
                <p className="mb-4">
                  There&apos;s always something new to learn, and I&apos;m
                  always looking for new opportunities to learn and grow.
                  I&apos;m always open to new opportunities and challenges.
                  Being a curious-driven developer, I&apos;m always looking for
                  new ways to solve problems. Let&apos;s connect and build
                  something amazing together!
                </p>
                <p className="mb-4">
                  Let&apos;s connect and build something amazing together!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
