"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  GraduationCap,
  User,
  Code,
  ExternalLink,
} from "lucide-react";

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-slate-800/30"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <main className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <Tabs
          defaultValue="intro"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-white">
            About Me
          </h2>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md bg-slate-800">
              <TabsTrigger
                value="intro"
                className="flex items-center gap-2 data-[state=active]:bg-slate-300"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Introduction</span>
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="flex items-center gap-2 data-[state=active]:bg-slate-300"
              >
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="flex items-center gap-2 data-[state=active]:bg-slate-300"
              >
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="intro">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={activeTab === "intro" ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-slate-900 to-slate-800">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                      <Code className="h-5 w-5 text-cyan-400" />
                      The Digital Craftsman
                    </h2>

                    <p className="text-slate-300 leading-relaxed mb-4">
                      I transform complex problems into elegant solutions
                      through code. My journey in technology began with a
                      fascination for how digital systems could reshape our
                      world, and has evolved into a passion for building
                      applications that are both powerful and intuitive.
                    </p>

                    <p className="text-slate-300 leading-relaxed mb-4">
                      As a full-stack developer, I thrive in the space where
                      creativity meets functionality. I believe that the best
                      digital products are those that solve real problems while
                      providing an experience that feels natural and delightful
                      to the user.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                      My approach combines technical expertise with a deep
                      appreciation for design principles and user psychology.
                      Every line of code I write serves a purpose, whether it's
                      optimizing performance, enhancing accessibility, or
                      creating moments of delight for the end user.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-slate-900 to-slate-800">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                      <User className="h-5 w-5 text-cyan-400" />
                      Beyond the Code
                    </h2>

                    <p className="text-slate-300 leading-relaxed mb-4">
                      When I'm not immersed in code, you might find me exploring
                      the latest advancements in technology, contributing to
                      open-source projects, or mentoring aspiring developers. I
                      believe in the power of knowledge sharing and community
                      building within the tech ecosystem.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                      My philosophy is that the best developers never stop
                      learning. The tech landscape evolves rapidly, and I
                      embrace this constant change as an opportunity to grow and
                      refine my craft. Each project is a new adventure, a chance
                      to push boundaries and discover innovative solutions.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="education">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={activeTab === "education" ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-slate-900 to-slate-800">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-700 p-3 rounded-full">
                        <GraduationCap className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <Badge className="mb-2 bg-cyan-500 hover:bg-cyan-600">
                          2023 - 2025
                        </Badge>
                        <h3 className="text-xl font-bold text-white">
                          Master's in Computer Application
                        </h3>
                        <p className="text-slate-300 mt-2">
                          Specialized in advanced software development
                          methodologies and enterprise application architecture.
                          My thesis explored the intersection of machine
                          learning and user experience design, proposing new
                          frameworks for adaptive interfaces.
                        </p>
                        <div className="mt-4 p-4 bg-slate-800/80 rounded-lg border border-slate-700">
                          <p className="italic text-sm text-slate-300">
                            "The true value of education lies not in the answers
                            it provides, but in the questions it inspires us to
                            ask. My master's journey taught me to approach
                            problems with both analytical rigor and creative
                            curiosity."
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-slate-900 to-slate-800">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-700 p-3 rounded-full">
                        <GraduationCap className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <Badge className="mb-2 bg-cyan-500 hover:bg-cyan-600">
                          2018 - 2021
                        </Badge>
                        <h3 className="text-xl font-bold text-white">
                          Bachelor's in Computer Application
                        </h3>
                        <p className="text-slate-300 mt-2">
                          Built a strong foundation in computer science
                          fundamentals, software engineering principles, and
                          full-stack development. Participated in numerous
                          hackathons and coding competitions, developing a
                          passion for collaborative problem-solving.
                        </p>
                        <div className="mt-4 p-4 bg-slate-800/80 rounded-lg border border-slate-700">
                          <p className="italic text-sm text-slate-300">
                            "My undergraduate years were transformative. I
                            arrived with curiosity about technology and left
                            with the skills and confidence to build solutions
                            that could impact people's lives. This period shaped
                            not just my technical abilities, but my approach to
                            teamwork and innovation."
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="experience">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={activeTab === "experience" ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-slate-900 to-slate-800">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-700 p-3 rounded-full">
                        <Briefcase className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge className="bg-cyan-500 hover:bg-cyan-600">
                            Current
                          </Badge>
                          <h3 className="text-xl font-bold text-white">
                            Freelance Full-Stack Developer
                          </h3>
                        </div>
                        <p className="text-slate-300 mt-2">
                          As an independent developer, I partner with startups
                          and established businesses to bring their digital
                          visions to life. My work spans from concept to
                          deployment, encompassing everything from user
                          experience design to backend architecture and DevOps.
                        </p>
                        <div className="mt-4 grid gap-3">
                          <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700">
                            <h4 className="font-medium flex items-center gap-2 text-white">
                              <ExternalLink className="h-4 w-4 text-cyan-400" />
                              E-commerce Platform Redesign
                            </h4>
                            <p className="text-sm text-slate-300 mt-1">
                              Completely revamped an outdated e-commerce system,
                              implementing modern architecture patterns and
                              improving conversion rates by 35% through enhanced
                              user experience and performance optimizations.
                            </p>
                          </div>
                          <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700">
                            <h4 className="font-medium flex items-center gap-2 text-white">
                              <ExternalLink className="h-4 w-4 text-cyan-400" />
                              SaaS Application Development
                            </h4>
                            <p className="text-sm text-slate-300 mt-1">
                              Built a comprehensive SaaS solution for project
                              management from the ground up, incorporating
                              real-time collaboration features and integrations
                              with popular productivity tools.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-slate-900 to-slate-800">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-700 p-3 rounded-full">
                        <Briefcase className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge className="bg-cyan-500 hover:bg-cyan-600">
                            2022 - 2023
                          </Badge>
                          <h3 className="text-xl font-bold text-white">
                            Developer at TCS
                          </h3>
                        </div>
                        <p className="text-slate-300 mt-2">
                          At Tata Consultancy Services, I was part of a dynamic
                          team responsible for developing and maintaining
                          enterprise-level applications for global clients. This
                          role honed my skills in collaborative development,
                          large-scale system architecture, and agile
                          methodologies.
                        </p>
                        <div className="mt-4 grid gap-3">
                          <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700">
                            <h4 className="font-medium flex items-center gap-2 text-white">
                              <ExternalLink className="h-4 w-4 text-cyan-400" />
                              Financial Services Platform
                            </h4>
                            <p className="text-sm text-slate-300 mt-1">
                              Led the frontend development for a major banking
                              client's customer portal, serving over 2 million
                              users. Implemented accessibility improvements and
                              responsive design principles that significantly
                              enhanced user satisfaction metrics.
                            </p>
                          </div>
                          <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700">
                            <h4 className="font-medium flex items-center gap-2 text-white">
                              <ExternalLink className="h-4 w-4 text-cyan-400" />
                              Internal Tools Modernization
                            </h4>
                            <p className="text-sm text-slate-300 mt-1">
                              Spearheaded an initiative to modernize legacy
                              internal tools, transitioning from monolithic
                              architecture to microservices. This effort reduced
                              deployment times by 70% and improved system
                              reliability across the organization.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-sm text-slate-500"></footer>
    </div>
  );
}
