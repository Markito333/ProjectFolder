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
      <Header filter={filter} setFilter={setFilter} projectCount={filteredProjects.length} />

      <main
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '40px 24px',
          display: 'flex',
          gap: '40px',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            width: '300px',
            flexShrink: 0,
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#f5f5f4',
          }}
        >
          <img
            src="/imgs/projectimg.png"
            alt="Proyectos"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover',
            }}
          />
        </div>
        <div style={{ flex: 1, maxHeight: 'calc(100vh - 140px)', overflowY: 'auto' }}>
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
        </div>
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
