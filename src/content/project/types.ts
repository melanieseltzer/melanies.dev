import type { Project as CLProject } from 'contentlayer/generated';

import type { ProjectComputedFields, ProjectSourceFields } from './schema';

export type Project = CLProject;

export type ProjectMetadata = Pick<
  Project,
  ProjectSourceFields | ProjectComputedFields
>;
