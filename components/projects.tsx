"use client";

import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FaGithub } from "react-icons/fa";

// GraphQL query to get pinned projects
const GET_PINNED_PROJECTS = gql`
  query {
    user(login: "JainCK") {
      pinnedItems(first: 5, types: REPOSITORY) {
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

// Component to list the pinned projects
const ProjectsList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PINNED_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pinnedProjects = data.user.pinnedItems.edges;

  return (
    <BentoGrid className="max-w-7xl mx-auto bg-slate-950">
      {pinnedProjects.map((project: any, i: any) => (
        <BentoGridItem
          key={project.node.id}
          title={project.node.name.toUpperCase()}
          description={project.node.description}
          header={
            <div className="mb-1">
              {project.node.repositoryTopics.edges.map((topicEdge: any) => (
                <span
                  key={topicEdge.node.topic.name}
                  className="inline-block bg-slate-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                >
                  {topicEdge.node.topic.name.toUpperCase()}
                </span>
              ))}
            </div>
          }
          icon={
            <a
              href={project.node.url}
              target="__blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xl font-normal text-white"
            >
              <FaGithub className="" />
            </a>
          }
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};

// Component to show project description with expandable text
const ProjectDescription: React.FC<{ description: string | null }> = ({
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!description) {
    return <p className="text-sm mb-4">No description available.</p>;
  }

  const words = description.split(" ");
  const shortDescription = words.slice(0, 10).join(" ");

  return (
    <p className="text-sm mb-4">
      {isExpanded ? description : `${shortDescription}...`}
      {words.length > 10 && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          {isExpanded ? " Show less" : " Read more"}
        </span>
      )}
    </p>
  );
};

// Main Projects component
export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-10 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">
          Projects
        </h2>
        <ProjectsList />
      </div>
    </section>
  );
};
