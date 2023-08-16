import { allPages } from 'contentlayer/generated';

import type { ConfiguredMDXPages, Page } from './types';

export const getPageContent = (slug: ConfiguredMDXPages) =>
  // Will never be called with a slug that doesn't exist (isn't a configured page),
  // so we can safely assert a Page will always be found here.
  allPages.find(page => page.slug === slug) as Page;

export const getAboutPageContent = () => getPageContent('about');
