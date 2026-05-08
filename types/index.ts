export type ProjectStatus = 'public' | 'private';

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
}
