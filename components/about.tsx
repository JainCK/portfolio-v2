import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/images/profile.jpg" alt="Profile" className="rounded-full w-48 h-48 mx-auto md:mx-0" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg mb-4">
              Hello! I'm a Full-Stack Developer with a passion for building modern and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy creating seamless user experiences and efficient, scalable solutions.
            </p>
            <p className="text-lg mb-4">
              I have experience working with a variety of programming languages and frameworks, including JavaScript, TypeScript, React, Node.js, and more. I am always eager to learn new technologies and improve my skills.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new places, reading tech blogs, or working on personal projects. I'm always open to new opportunities and collaborations, so feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
