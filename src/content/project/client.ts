import { allProjects } from 'contentlayer/generated';

import type { CLProject, Project } from './types';

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
