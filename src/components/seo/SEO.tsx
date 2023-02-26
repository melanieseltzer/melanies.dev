import type { NextSeoProps } from 'next-seo';
import { NextSeo } from 'next-seo';

import { siteMetadata } from '~/config/metadata';

export function SEO(props: NextSeoProps) {
  return (
    <NextSeo titleTemplate={`%s | ${siteMetadata.metaTitle}`} {...props} />
  );
}
