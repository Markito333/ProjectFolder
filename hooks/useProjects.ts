'use client';

import { useState, useMemo } from 'react';
import { Project, ProjectStatus } from '@/types';
import { projects as mockProjects } from '@/data/projects';

export function useProjects() {
  const [projects] = useState<Project[]>(mockProjects);
  const [filter, setFilter] = useState<ProjectStatus | 'all'>('all');

  const filteredProjects = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((p) => p.status === filter),
    [projects, filter]
  );

  return { projects: filteredProjects, filter, setFilter };
}
