import { ArticleJsonLd } from 'next-seo';

import { authorMetadata, siteMetadata } from '~/config/metadata';

import { SEO } from './SEO';

type BlogSEOProps = {
  title: string;
  description: string;
  canonicalUrl: string;
  article: {
    publishedTime: string;
    modifiedTime: string;
    tags: string[];
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
        titleTemplate={undefined} // not needed since the blog post title will be used
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
            tags,
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
