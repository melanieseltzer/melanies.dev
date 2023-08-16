import type { Project as CLProject } from 'contentlayer/generated';

import { KeysUndefinedToNull } from '~/types/utils';

import type { ProjectComputedFields, ProjectSourceFields } from './schema';

export type { CLProject };

export type CLProjectMetadata = Pick<
  CLProject,
  ProjectSourceFields | ProjectComputedFields
>;

// ==============================
// Serialized types
// ==============================

export type Project = KeysUndefinedToNull<CLProject>;

export type ProjectMetadata = KeysUndefinedToNull<CLProjectMetadata>;

export type ProjectCategory = 'oss' | 'sideproject';
