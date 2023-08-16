import { makeSource } from 'contentlayer/source-files';

import { contentConfig } from './src/config/content';
import { siteConfig } from './src/config/site';
import * as documentTypes from './src/documents/bootstrap';
import { rehypePlugins } from './src/lib/rehype';
import { remarkPlugins } from './src/lib/remark';

export default makeSource({
  documentTypes,
  contentDirPath: contentConfig.dirPath,
  date: {
    timezone: siteConfig.timezone,
  },
  mdx: {
    remarkPlugins,
    rehypePlugins,
  },
});
