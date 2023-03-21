import type { Project as CLProject } from 'contentlayer/generated';

import { projectFieldDefs } from '../../contentlayer.config';

export type Project = CLProject;

/** Frontmatter fields that are read from the source `.mdx` file. */
export type ProjectSourceFields = keyof (typeof projectFieldDefs)['fields'];

/** Frontmatter fields that are computed later on (not read from the `.mdx` file). */
export type ProjectComputedFields =
  keyof (typeof projectFieldDefs)['computedFields'];
