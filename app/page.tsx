import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";


export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <Projects />
      <Skills />
      <div className="section-divider" />
      <About />
    </>
  );
}
