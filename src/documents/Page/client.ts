import { allPages } from 'contentlayer/generated';

import type { ConfiguredMDXPages, Page } from './types';

export const getPageContent = (slug: ConfiguredMDXPages) =>
  // This will only ever be called with known slugs (ConfiguredMDXPages)
  // aka pages we actually have content for, so it's safe to assert that
  // we'll always find a page in this case (it can't potentially be undefined).
  allPages.find(page => page.slug === slug) as Page;
