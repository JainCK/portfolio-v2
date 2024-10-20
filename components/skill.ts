import { IconType } from 'react-icons';
import { DiJavascript1, DiReact, DiNodejs, DiDocker, DiGit, DiJava, DiMysql, DiPostgresql, DiMongodb, DiRedis } from 'react-icons/di';  // Importing Devicons
import { SiCplusplus, SiTypescript, SiNextdotjs, SiExpress, SiTailwindcss, SiGithub, SiCloudflare, SiFirebase, SiJenkins } from 'react-icons/si';
import { BiLogoAws } from 'react-icons/bi';

export interface Technology {
    category: string;
    items: {
        name: string,
        icon: IconType
    }[]; 
  }

  export const TECHNOLOGIES: Technology[] = [
    {
      category: "Languages",
      items: [
        { name: 'C/C++', icon: SiCplusplus },
        { name: 'Java', icon: DiJava },
        { name: 'JavaScript', icon: DiJavascript1 },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'SQL', icon: DiMysql }
      ],
    },
    {
      category: "Web Development",
      items: [
        { name: 'React', icon: DiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Node.js', icon: DiNodejs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'Tailwind CSS', icon: SiTailwindcss }
      ],
    },
    {
      category: "Databases",
      items: [
        { name: 'PostgreSQL', icon: DiPostgresql },
        { name: 'MySQL', icon: DiMysql },
        { name: 'MongoDB', icon: DiMongodb },
        { name: 'Redis', icon: DiRedis },
      ],
    },
    {
      category: "DevOps Tools & Cloud Services",
      items: [
        { name: 'AWS', icon: BiLogoAws },
        { name: 'Git', icon: DiGit },
        { name: 'GitHub', icon: SiGithub },
        { name: 'Cloudflare', icon: SiCloudflare },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Docker', icon: DiDocker },
        { name: 'CI/CD', icon: SiJenkins },
        { name: 'Jenkins', icon: SiJenkins }
      ],
    },
  ];
