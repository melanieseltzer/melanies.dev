import type { DocumentGen } from 'contentlayer/core';

export const getSlugFromFileName = (doc: DocumentGen): string =>
  doc._raw.sourceFileName.replace(/\.mdx$/, '');
