import { makeSource } from 'contentlayer/source-files';

import { siteMetadata } from './src/config/metadata';
import * as documentTypes from './src/content/config';
import { rehypePlugins, remarkPlugins } from './src/content/config/plugins';

export default makeSource({
  contentDirPath: 'content',
  documentTypes,
  date: {
    timezone: siteMetadata.timezone,
  },
  mdx: {
    remarkPlugins,
    rehypePlugins,
  },
});
