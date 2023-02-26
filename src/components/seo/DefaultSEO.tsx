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
            // TODO: social banner https://github.com/melanieseltzer/melanies.dev/issues/4
            url: 'https://www.test.ie/images/cover.jpg',
            width: 850,
            height: 650,
            alt: 'Photo of text',
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
