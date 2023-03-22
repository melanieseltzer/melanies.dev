import { allProjects } from 'contentlayer/generated';

import type { Project } from './types';

export const getAllProjects = (): Project[] => allProjects;

export const getProject = (slug: string) =>
  getAllProjects().find(project => project.slug === slug);
