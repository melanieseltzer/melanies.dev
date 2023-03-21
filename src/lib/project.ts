import { allProjects } from 'contentlayer/generated';

import type { Project } from '~/types/project';

import { findBySlug } from './content';

export const getProject = (slug: string): Project =>
  findBySlug<Project>(allProjects, slug);

export const getAllProjects = (): Project[] => allProjects;
