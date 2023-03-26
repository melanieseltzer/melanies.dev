import { makeSource } from 'contentlayer/source-files';

import { siteMetadata } from './src/config/metadata';
import * as documentTypes from './src/content/config';
import { CONTENT_DIR_PATH } from './src/content/config/constants';
import { rehypePlugins, remarkPlugins } from './src/content/config/plugins';

export default makeSource({
  contentDirPath: CONTENT_DIR_PATH,
  documentTypes,
  date: {
    timezone: siteMetadata.timezone,
  },
  mdx: {
    remarkPlugins,
    rehypePlugins,
  },
});
