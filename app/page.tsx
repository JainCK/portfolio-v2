import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";


export default function Home() {
  return (
    <>
      <Hero />
      {/* <Projects /> */}
      <Skills />
      {/* <Footer /> */}
      <About />
    </>
  );
}
