import { slug } from 'github-slugger';

export const kebabCase = (str: string) => slug(str);

export const getSlugFromMdxFileName = (filename: string) =>
  filename.replace(/\.mdx$/, '');
