import type { Project as CLProject } from 'contentlayer/generated';

import type {
  ProjectComputedFields,
  ProjectSourceFields,
} from '../config/document/Project';

export type Project = CLProject;

export type ProjectMetadata = Pick<
  Project,
  ProjectSourceFields | ProjectComputedFields
>;
