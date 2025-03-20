import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import Experience from "@/components/experience";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-9/10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Footer />
        <ShootingStars />
        <StarsBackground />
      </div>
    </main>
  );
}
