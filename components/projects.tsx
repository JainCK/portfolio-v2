"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gql } from "@apollo/client";
import { ProjectCard } from "./customui/project-card";
import type { GitHubProject } from "@/lib/types";
import client from "@/lib/apollo-client";

const GET_PINNED_PROJECTS = gql`
  query {
    user(login: "JainCK") {
      pinnedItems(first: 6, types: REPOSITORY) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
              repositoryTopics(first: 10) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function Projects() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await client.query({
          query: GET_PINNED_PROJECTS,
        });

        const pinnedProjects = data.user.pinnedItems.edges.map(
          ({ node }: any) => ({
            id: node.id,
            name: node.name,
            description: node.description,
            url: node.url,
            topics: node.repositoryTopics.edges.map(
              ({ node }: any) => node.topic.name
            ),
          })
        );

        setProjects(pinnedProjects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold tracking-tight mb-4 text-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-slate-400 max-w-2xl mx-auto text-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of my pinned repositories from GitHub showcasing my
            skills and interests.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
