'use client';

import { useState, useMemo } from 'react';
import { Project, ProjectStatus } from '@/types';
import { projects as allProjects } from '@/data/projects';
import Header from '@/components/Header';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectModal from '@/components/ProjectModal';

type View = 'folders' | 'grid';

const folderConfig: { status: ProjectStatus; label: string; desc: string }[] = [
  { status: 'public', label: 'Públicos', desc: 'Proyectos finalizados y publicados' },
  { status: 'private', label: 'Privados', desc: 'Proyectos personales o internos' },
  { status: 'in-progress', label: 'En progreso', desc: 'Proyectos en desarrollo activo' },
];

function FolderIcon() {
  return (
    <svg viewBox="0 0 40 32" className="h-10 w-10" fill="none">
      <path
        d="M2 6a4 4 0 014-4h8.4a2 2 0 011.6.8l3.4 4.4a2 2 0 001.6.8H34a4 4 0 014 4v14a4 4 0 01-4 4H6a4 4 0 01-4-4V6z"
        fill="#fbbf24"
        stroke="#f59e0b"
        strokeWidth="1.2"
      />
      <path
        d="M2 10a4 4 0 014-4h8.4a2 2 0 011.6.8l3.4 4.4a2 2 0 001.6.8H34a4 4 0 014 4v2H6a4 4 0 01-4-4v-4z"
        fill="#fcd34d"
      />
    </svg>
  );
}

export default function ProjectsPage() {
  const [view, setView] = useState<View>('folders');
  const [filter, setFilter] = useState<ProjectStatus | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const counts = useMemo(() => ({
    public: allProjects.filter((p) => p.status === 'public').length,
    private: allProjects.filter((p) => p.status === 'private').length,
    'in-progress': allProjects.filter((p) => p.status === 'in-progress').length,
  }), []);

  const filteredProjects = useMemo(
    () =>
      filter === 'all'
        ? allProjects
        : allProjects.filter((p) => p.status === filter),
    [filter]
  );

  const handleFolderClick = (status: ProjectStatus) => {
    setFilter(status);
    setView('grid');
  };

  const handleBackToFolders = () => {
    setFilter('all');
    setView('folders');
  };

  const handleFilterChange = (f: ProjectStatus | 'all') => {
    setFilter(f);
    if (f === 'all') {
      setView('folders');
    } else {
      setView('grid');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header filter={filter} setFilter={handleFilterChange} projectCount={filteredProjects.length} />

      <main className="mx-auto max-w-7xl px-6 py-12">
        {view === 'folders' ? (
          <div className="flex flex-col items-center gap-10 pt-16">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-stone-900 tracking-tight">PROYECTOS</h1>
              <p className="mt-1.5 text-sm text-stone-400">
                Selecciona una categoría para explorar
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {folderConfig.map((folder) => (
                <button
                  key={folder.status}
                  onClick={() => handleFolderClick(folder.status)}
                  className="group flex w-48 flex-col items-center gap-4 rounded-2xl bg-stone-50 p-8 transition-all duration-300 hover:shadow-lg hover:shadow-stone-200/60 hover:-translate-y-1"
                >
                  <div className="relative transition-transform duration-300 group-hover:scale-110">
                    <FolderIcon />
                    <span className="absolute -right-3 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1.5 text-[10px] font-medium text-black shadow-sm">
                      {counts[folder.status]}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-stone-700">{folder.label}</p>
                    <p className="mt-0.5 text-xs text-stone-400">{folder.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={handleBackToFolders}
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-stone-400 transition-colors hover:text-stone-700"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Todas las categorías
            </button>

            {filteredProjects.length > 0 ? (
              <ProjectGrid
                projects={filteredProjects}
                onSelect={setSelectedProject}
              />
            ) : (
              <div className="py-20 text-center">
                <p className="text-lg text-stone-400">
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
