import { makeSource } from 'contentlayer/source-files';

import * as documentTypes from './src/config/content';
import { CONTENT_DIR_PATH } from './src/config/content/constants';
import { rehypePlugins, remarkPlugins } from './src/config/content/plugins';
import { siteMetadata } from './src/config/metadata';

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
