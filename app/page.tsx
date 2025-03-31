import About from "@/components/about";
import { Hero } from "@/components/hero";
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import TestimonialSection from "@/components/testimonial";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-9/10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <TestimonialSection />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
