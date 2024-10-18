import React from 'react';
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

interface Skill {
  name: string;
}

const languages: Skill[] = [
  { name: 'JavaScript'},
  { name: 'TypeScript' },
  { name: 'HTML' },
  { name: 'CSS'},
];

const technologies: Skill[] = [
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'Git' },
  { name: 'Docker' },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <IconCloudDemo />
          </div>
          <div className="w-full md:w-2/3 md:pl-12">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Languages</h3>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center">
                      <p className="text-lg font-semibold">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center">
                      <p className="text-lg font-semibold">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
