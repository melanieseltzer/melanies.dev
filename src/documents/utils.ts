import type { DocumentGen } from 'contentlayer/core';

import { contentConfig } from '../config/content';
import { getFileLastModified } from '../lib/git';

export const getSlugFromFileName = (doc: DocumentGen) =>
  doc._raw.sourceFileName.replace(/\.mdx$/, '');

export const getLastModifiedFromGit = (doc: DocumentGen) => {
  const fullFilePath = `${contentConfig.dirPath}/${doc._raw.sourceFilePath}`;
  return getFileLastModified(fullFilePath);
};
