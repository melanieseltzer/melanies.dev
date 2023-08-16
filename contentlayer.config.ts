import { makeSource } from 'contentlayer/source-files';

import * as documentTypes from './src/config/content';
import { CONTENT_DIR_PATH } from './src/config/content/constants';
import { rehypePlugins, remarkPlugins } from './src/config/content/plugins';
import { siteConfig } from './src/config/site';

export default makeSource({
  contentDirPath: CONTENT_DIR_PATH,
  documentTypes,
  date: {
    timezone: siteConfig.timezone,
  },
  mdx: {
    remarkPlugins,
    rehypePlugins,
  },
});
