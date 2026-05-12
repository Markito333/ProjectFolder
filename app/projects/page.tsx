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
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Header />

      <main
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '40px 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '14px', color: '#a8a29e' }}>
              {filteredProjects.length} proyecto
              {filteredProjects.length !== 1 && 's'}
            </span>
            <div style={{ position: 'relative' }}>
              <select
                value={filter}
                onChange={(e) =>
                  setFilter(e.target.value as ProjectStatus | 'all')
                }
                style={{
                  appearance: 'none',
                  padding: '8px 36px 8px 14px',
                  backgroundColor: '#e5e5e5',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#444',
                  cursor: 'pointer',
                  outline: 'none',
                  minWidth: '120px',
                }}
              >
                <option value="all">Todos</option>
                <option value="public">Públicos</option>
                <option value="private">Privados</option>
                <option value="in-progress">En progreso</option>
              </select>
              <svg
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '16px',
                  height: '16px',
                  color: '#a8a29e',
                  pointerEvents: 'none',
                }}
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
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ color: '#a8a29e', fontSize: '18px' }}>
              No hay proyectos{' '}
              {filter === 'public'
                ? 'públicos'
                : filter === 'in-progress'
                  ? 'en progreso'
                  : 'privados'}{' '}
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
