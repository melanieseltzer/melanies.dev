import { allPages } from 'contentlayer/generated';

import type { Page, PageName } from '~/types/content';

export const getPageContent = (name: PageName): Page =>
  allPages.find(page => page.slug === name) as Page;
