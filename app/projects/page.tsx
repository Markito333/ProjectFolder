'use client';

import { useState, useMemo } from 'react';
import { Project, ProjectStatus } from '@/types';
import { projects as allProjects } from '@/data/projects';
import Header from '@/components/Header';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectModal from '@/components/ProjectModal';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectStatus | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      filter === 'all'
        ? allProjects
        : allProjects.filter((p) => p.status === filter),
    [allProjects, filter]
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/imgs/profile.jpg"
              alt=""
              className="w-7 h-7 rounded-full object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-black">
                Marcos <span className="text-yellow-500">David</span> - Proyectos
              </h1>
              <p className="mt-0.5 text-gray-500">
                Todos mis trabajos organizados en un solo lugar.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">
              {filteredProjects.length} proyecto
              {filteredProjects.length !== 1 && 's'}
            </span>
            <div className="relative">
              <select
                value={filter}
                onChange={(e) =>
                  setFilter(e.target.value as ProjectStatus | 'all')
                }
                className="appearance-none pl-3.5 pr-9 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-medium focus:outline-none focus:ring-1 focus:ring-black focus:border-black cursor-pointer"
              >
                <option value="all">Todos</option>
                <option value="public">Públicos</option>
                <option value="private">Privados</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <ProjectGrid
            projects={filteredProjects}
            onSelect={setSelectedProject}
          />
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No hay proyectos {filter === 'public' ? 'públicos' : 'privados'}{' '}
              aún.
            </p>
          </div>
        )}
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
