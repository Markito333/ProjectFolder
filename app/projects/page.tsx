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
            width: '200px',
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          <h2
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#44403c',
              marginBottom: '12px',
              textDecoration: 'underline',
              textDecorationColor: '#fde68a',
              textUnderlineOffset: '4px',
              textDecorationThickness: '2px',
              textAlign: "center",
            }}
          >
            ProjectFolder
          </h2>
          <img
            src="/imgs/projectimgg.png"
            alt="Proyectos"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover',
            }}
          />
          <p
            style={{
              marginTop: '16px',
              fontSize: '13px',
              lineHeight: '1.6',
              color: '#78716c',
              fontStyle: 'italic',
            }}
          >
            Portfolio personal donde muestro mis proyectos de desarrollo web,
            junto a todos los detalles.
          </p>
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
