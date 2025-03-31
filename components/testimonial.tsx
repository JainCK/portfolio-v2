"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/magicui/marquee";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Vinu & Mable",
    role: "Freelance Clients",
    company: "Website Project",
    content:
      "Jain did an incredible job developing our website. His technical skills are exceptional. He was always available for questions and provided valuable insights throughout the project.",
  },
  {
    id: "2",
    name: "Lijo",
    role: "Team Lead",
    company: "TCS",
    content:
      "Jain is a skilled professional with a knack for problem-solving. His ability to efficiently handle tasks using SQL and JS is impressive. He's an easy learner and consistently brings value to the team.",
  },
  {
    id: "3",
    name: "Ajay",
    role: "Classmate & Colleague",
    company: "University",
    content:
      "It was a pleasure working with Jain in university. His curiosity and dedication were evident in every project. He always found effective solutions and completed tasks to the highest standard.",
  },
  {
    id: "4",
    name: "Geethu",
    role: "Team lead & Mentor",
    company: "TCS Project Team",
    content:
      "Jain consistently brings a strong work ethic to our team. His communication skills and ability to prioritize tasks make him a reliable team member. His expertise in Cloud has been a tremendous asset.",
  },
  {
    id: "5",
    name: "Aswin",
    role: "Classmate & Colleague",
    company: "Hackathon Team",
    content:
      "Jain was a fantastic addition to our hackathon team. His curiosity and problem-solving mindset shone through. He picked up new concepts quickly, ensuring our project progressed smoothly.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-8 sm:py-12 md:py-20 overflow-hidden">
      <div className="container px-4 sm:px-6 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter text-white mb-2 sm:mb-4">
            What People Say
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what clients and
            colleagues have to say about working with me.
          </p>
        </motion.div>

        {/* Mobile view - vertical stacked cards */}
        <div className="md:hidden space-y-4">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Desktop view - marquee */}
        <div className="hidden md:block">
          <Marquee className="w-full" pauseOnHover={true} repeat={2}>
            <div className="flex gap-4 sm:gap-6 py-4">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-[300px] md:w-[350px] max-w-[350px]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full bg-slate-900 border-slate-800 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-slate-900/30 z-0 group-hover:opacity-80 transition-opacity duration-500"></div>

      <CardContent className="p-4 sm:p-6 relative z-10">
        <div className="flex flex-col h-full justify-between gap-4">
          <div>
            <p className="text-slate-300 text-sm mb-4">{testimonial.content}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-white">{testimonial.name}</p>
            <p className="text-xs text-slate-400">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
