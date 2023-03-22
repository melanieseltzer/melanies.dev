import { allProjects } from 'contentlayer/generated';

import { findBySlug } from '~/lib/content';

import type { Project } from './types';

export const getProject = (slug: string): Project =>
  findBySlug<Project>(allProjects, slug);

export const getAllProjects = (): Project[] => allProjects;
