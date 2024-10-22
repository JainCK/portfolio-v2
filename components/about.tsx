"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <>
      <section id="about" className="min-h-screen py-12 text-white">
        <div className="max-w-screen-lg mx-auto px-6">  {/* Increased container width */}
          <h2 className="text-xl font-extrabold mb-8 text-center">About Me</h2>

          <motion.div
            className="text-md leading-loose" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>
              Welcome to my corner of the web! I'm Jain, a passionate developer with a solid background in computer science, having completed a Bachelor's in Computer Application (2018-2021) and currently pursuing a Master's in Computer Application (2023-present). This educational foundation has provided me with a strong understanding of computer systems, algorithms, and software engineering principles.
            </p>
            <br />
            <p>
              I have experience working at Tata Consultancy Services, where I collaborated with Ernst & Young on various projects. My role as an Application Support/Developer (Feb 2022 - Jun 2023) involved working with technologies such as Azure, SQL, SSIS, SSRS, ServiceNow, PowerBI, and .NET, where I helped resolve complex issues and ensure successful project deliveries. This experience has given me a unique perspective on the importance of effective communication, teamwork, and adaptability in fast-paced project environments.
            </p>
            <br />
            <p>
              I thrive on solving problems, exploring new technologies, and continuously expanding my skill set. Whether it's diving into the latest frameworks or working on challenging projects, I'm always looking for opportunities to grow as a developer. My passion for learning and self-improvement drives me to stay updated with the latest industry trends and advancements. Looking forward, I aim to specialize in cutting-edge web and app development, leveraging my skills to contribute to impactful projects and innovative solutions. If you're interested in collaborating or discussing how I can assist with your next venture, feel free to reach out. Let's build something incredible together!
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};
