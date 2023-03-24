import { ArticleJsonLd } from 'next-seo';

import { Tag } from '~/content/blog/types';

import { authorMetadata, siteMetadata } from '~/config/metadata';

import { SEO } from './SEO';

type BlogSEOProps = {
  title: string;
  description: string;
  canonicalUrl: string;
  article: {
    publishedTime: string;
    modifiedTime: string;
    tags: Tag[];
  };
};

export function BlogSEO({
  title,
  description,
  canonicalUrl,
  article: { publishedTime, modifiedTime, tags },
}: BlogSEOProps) {
  return (
    <>
      <SEO
        titleTemplate="%s"
        title={title}
        description={description}
        openGraph={{
          type: 'article',
          title,
          description,
          url: canonicalUrl,
          article: {
            publishedTime,
            modifiedTime,
            tags: tags.map(tag => tag.displayName),
          },
        }}
      />

      <ArticleJsonLd
        type="BlogPosting"
        url={canonicalUrl}
        title={title}
        images={[siteMetadata.images.socialBanner]}
        datePublished={publishedTime}
        dateModified={modifiedTime}
        authorName={authorMetadata.name}
        description={description}
      />
    </>
  );
}
