import { allProjects } from 'contentlayer/generated';

import type { CLProject, Project, ProjectCategory } from './types';

// ==============================
// Internal helpers
// ==============================

const serialize = (project: CLProject): Project => ({
  ...project,
  demoUrl: project.demoUrl || null,
});

// ==============================
// Client selectors
// ==============================

export const getAllProjects = (): Project[] => allProjects.map(serialize);

export const getProject = (slug: string) =>
  getAllProjects().find(project => project.slug === slug);

export const getProjectsByCategory = (
  projects: Project[],
  category: ProjectCategory
): Project[] => projects.filter(project => project.category === category);
