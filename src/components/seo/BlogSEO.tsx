import { ArticleJsonLd } from 'next-seo';

import { authorMetadata } from '~/config/metadata';

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
        // TODO: social banner https://github.com/melanieseltzer/melanies.dev/issues/4
        images={['https://example.com/photos/1x1/photo.jpg']}
        datePublished={publishedTime}
        dateModified={modifiedTime}
        authorName={authorMetadata.name}
        description={description}
      />
    </>
  );
}
