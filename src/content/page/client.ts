import { allPages } from 'contentlayer/generated';

import { findBySlug } from '~/lib/content';

import type { ConfiguredMDXPages, Page } from './types';

export const getPage = (slug: ConfiguredMDXPages): Page =>
  findBySlug<Page>(allPages, slug);
