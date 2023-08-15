import type { DocumentGen } from 'contentlayer/core';

import { getFileLastModified } from '~/lib/git';

import { CONTENT_DIR_PATH } from './constants';

export const getSlugFromFileName = (doc: DocumentGen) =>
  doc._raw.sourceFileName.replace(/\.mdx$/, '');

export const getLastModifiedFromGit = (doc: DocumentGen) => {
  const fullFilePath = `${CONTENT_DIR_PATH}/${doc._raw.sourceFilePath}`;
  return getFileLastModified(fullFilePath);
};
