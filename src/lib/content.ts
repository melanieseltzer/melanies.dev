import type { DocumentTypes } from '~/types/content';

export const findBySlug = <T extends DocumentTypes>(arr: T[], slug: string) =>
  arr.find(doc => doc.slug === slug) as T;
