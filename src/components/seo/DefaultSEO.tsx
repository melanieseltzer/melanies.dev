import type { DefaultSeoProps } from 'next-seo';
import { DefaultSeo as NextDefaultSeo } from 'next-seo';

import { authorMetadata, siteMetadata } from '~/config/metadata';

export function DefaultSEO(props: DefaultSeoProps) {
  return (
    <NextDefaultSeo
      title={siteMetadata.metaTitle}
      description={siteMetadata.metaDescription}
      openGraph={{
        type: 'website',
        locale: siteMetadata.locale,
        url: siteMetadata.siteUrl,
        siteName: siteMetadata.siteName,
        images: [
          {
            url: siteMetadata.images.socialBanner,
            width: 1200,
            height: 600,
            alt: 'melanies.dev',
          },
        ],
      }}
      twitter={{
        handle: `@${authorMetadata.social.twitter}`,
        site: `@${authorMetadata.social.twitter}`,
        cardType: 'summary_large_image',
      }}
      {...props}
    />
  );
}
