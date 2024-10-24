"use client"

import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';


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

const ProjectsList = () => {
  const { loading, error, data } = useQuery(GET_PINNED_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const pinnedProjects = data.user.pinnedItems.edges;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pinnedProjects.map((project: any) => (
        <div key={project.node.id} className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
          <div className='flex justify-between'>
          <h3 className="text-xl font-bold mb-2">{project.node.name.toUpperCase()}</h3>
          <a href={project.node.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
          </a>
          </div>
          <ProjectDescription description={project.node.description} />
          <div className="mb-4">
            {project.node.repositoryTopics.edges.map((topicEdge: any) => (
              <span key={topicEdge.node.topic.name} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {topicEdge.node.topic.name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProjectDescription = ({ description }: { description: string | null }) => {
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

export const Projects = () => {
  return (
      <section id="projects" className="py-10 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Projects</h2>
          <ProjectsList />
        </div>
      </section>
  );
};