"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { GitHubProject } from "@/lib/types";

interface ProjectCardProps {
  project: GitHubProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div variants={item}>
      <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-500 border-border bg-slate-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold tracking-tight group-hover:text-purple-500 transition-colors text-white">
            {project.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-slate-300 mb-4 line-clamp-3">
            {project.description || "No description provided."}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.topics.slice(0, 5).map((topic) => (
              <Badge key={topic} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
            {project.topics.length > 5 && (
              <Badge variant="outline" className="text-xs bg-slate-200">
                +{project.topics.length - 5} more
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="pt-2 border-t">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-2 hover:text-purple-500 transition-colors bg-slate-300"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span>View Repository</span>
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
