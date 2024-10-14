"use client"

import React, { useEffect, useState } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
