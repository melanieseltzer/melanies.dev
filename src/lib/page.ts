import { allPages } from 'contentlayer/generated';

import type { ConfiguredMDXPage, Page } from '~/types/page';

import { findBySlug } from './content';

export const getPage = (slug: ConfiguredMDXPage): Page =>
  findBySlug<Page>(allPages, slug);
