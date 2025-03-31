"use client";

import type React from "react";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { TECHNOLOGIES } from "@/lib/skill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerRef = useRef<HTMLHeadingElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  // Background animation values
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.1, 0.3, 0.1]
  );

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-gray-900 to-slate-700/20"
          style={{
            y: backgroundY,
            opacity: backgroundOpacity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          ref={headerRef}
          className="text-4xl font-bold text-center mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Technical Skills
        </motion.h2>

        <motion.p
          className="text-md text-center max-w-2xl mx-auto mb-10 text-slate-400"
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          I work with the following technologies and tools to build robust,
          scalable applications:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {TECHNOLOGIES.map((tech, categoryIndex) => (
            <TechCategoryCard
              key={tech.category}
              tech={tech}
              index={categoryIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechCategoryCard = ({
  tech,
  index,
}: {
  tech: (typeof TECHNOLOGIES)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        ease: [0.21, 1.02, 0.73, 1], // Spring-like easing
      }}
    >
      <Card className="h-full border bg-slate-950 backdrop-blur(10px) hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-200">
            {tech.category}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {tech.items.map((item, itemIndex) => (
              <TechItem
                key={item.name}
                item={item}
                index={itemIndex}
                isVisible={isCardInView}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TechItem = ({
  item,
  index,
  isVisible,
}: {
  item: { name: string; icon: React.ComponentType };
  index: number;
  isVisible: boolean;
}) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.4,
        delay: 0.3 + 0.05 * index,
        ease: "easeOut",
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="relative p-3 rounded-full bg-background/80 border border-border/50 shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300">
          <span className="text-2xl text-primary">
            {item.icon && <item.icon />}
          </span>

          {/* Tooltip */}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-10">
            <Badge variant="secondary" className="whitespace-nowrap shadow-lg">
              {item.name}
            </Badge>
          </span>
        </div>
      </div>
    </motion.div>
  );
};
