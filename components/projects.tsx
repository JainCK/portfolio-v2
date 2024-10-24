"use client";

import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";

// GraphQL query to get pinned projects
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

// Component to list the pinned projects
const ProjectsList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PINNED_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pinnedProjects = data.user.pinnedItems.edges;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pinnedProjects.map((project: any) => (
        <motion.div 
          key={project.node.id} 
          className="bg-gray-800 p-6 rounded-lg shadow-md text-white"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <div className='flex justify-between'>
            <h3 className="text-xl font-bold mb-2">{project.node.name.toUpperCase()}</h3>
            <a href={project.node.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xl">
              <FaGithub />
            </a>
          </div>
          <ProjectDescription description={project.node.description} />
          <div className="mb-4">
            {project.node.repositoryTopics.edges.map((topicEdge: any) => (
              <span key={topicEdge.node.topic.name} className="inline-block bg-slate-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {topicEdge.node.topic.name.toUpperCase()}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Component to show project description with expandable text
const ProjectDescription: React.FC<{ description: string | null }> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!description) {
    return <p className="text-sm mb-4">No description available.</p>;
  }

  const words = description.split(' ');
  const shortDescription = words.slice(0, 10).join(' ');

  return (
    <p className="text-sm mb-4">
      {isExpanded ? description : `${shortDescription}...`}
      {words.length > 10 && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          {isExpanded ? ' Show less' : ' Read more'}
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
        <h2 className="text-2xl font-bold text-center mb-8 text-white">Projects</h2>
        <ProjectsList />
      </div>
    </section>
  );
};
