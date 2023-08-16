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

export const getProjectBySlug = (slug: string) =>
  getAllProjects().find(project => project.slug === slug);

export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
  getAllProjects().filter(project => project.category === category);

export const getAllOssProjects = () => getProjectsByCategory('oss');

export const getAllSideProjects = () => getProjectsByCategory('sideproject');
