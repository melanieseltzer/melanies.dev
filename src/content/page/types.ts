import type { Page as CLPage } from 'contentlayer/generated';

import { PageComputedFields } from './schema';

export type ConfiguredMDXPages = 'about';

export type Page = CLPage;

export type PageMetadata = Pick<Page, PageComputedFields>;
