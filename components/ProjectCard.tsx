'use client';

import { Project } from '@/types';

export default function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group cursor-pointer rounded-xl border border-stone-200 bg-white transition-all duration-300 hover:shadow-lg hover:shadow-stone-200/60 hover:-translate-y-0.5"
    >
      <div className="relative overflow-hidden rounded-t-xl bg-stone-50">
        <div className="relative w-full overflow-hidden" style={{ paddingBottom: '72%' }}>
          <img
            src={project.mainPhoto}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <span
          className={`absolute right-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium tracking-tight ${
            project.status === 'public'
              ? 'bg-emerald-500 text-white'
              : project.status === 'in-progress'
                ? 'bg-amber-400 text-black'
                : 'bg-red-500 text-white'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              project.status === 'public'
                ? 'bg-white'
                : project.status === 'in-progress'
                  ? 'bg-black'
                  : 'bg-white'
            }`}
          />
          {project.status === 'public'
            ? 'Público'
            : project.status === 'in-progress'
              ? 'En progreso'
              : 'Privado'}
        </span>
      </div>
      <div className="space-y-1.5 p-4">
        <h3 className="truncate text-sm font-semibold text-stone-800">
          {project.title}
        </h3>
        <p className="truncate text-xs text-stone-400">
          {project.company}
        </p>
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <img
                key={tech.name}
                src={tech.icon}
                alt={tech.name}
                title={tech.name}
                className="h-4 w-4 opacity-60 grayscale transition-opacity group-hover:opacity-100"
              />
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] text-stone-300 leading-4">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
