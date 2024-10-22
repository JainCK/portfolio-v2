"use client"

import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo-client';

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
        <div key={project.node.id} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-2">{project.node.name}</h3>
          <p className="text-lg mb-4">{project.node.description}</p>
          <a href={project.node.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

export const Projects = () => {
  return (
    <ApolloProvider client={client}>
      <section id="projects" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Pinned Projects</h2>
          <ProjectsList />
        </div>
      </section>
    </ApolloProvider>
  );
};