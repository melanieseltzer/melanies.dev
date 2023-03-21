import { allPages } from 'contentlayer/generated';

import type { ConfiguredMDXPages, Page } from '~/types/page';

import { findBySlug } from './content';

export const getPage = (slug: ConfiguredMDXPages): Page =>
  findBySlug<Page>(allPages, slug);
