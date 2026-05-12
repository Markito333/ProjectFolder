export type ProjectStatus = 'public' | 'private' | 'in-progress';

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  mainPhoto: string;
  photos: string[];
  status: ProjectStatus;
  link?: string;
  duration: string;
  technologies: Technology[];
  role: string;
}
