import type { Page as CLPage } from 'contentlayer/generated';

import { pageFieldDefs } from '../../contentlayer.config';

export type Page = CLPage;

export type ConfiguredMDXPage = 'about';

/** Frontmatter fields that are computed later on (not read from the `.mdx` file). */
export type PageComputedField = keyof (typeof pageFieldDefs)['computedFields'];
