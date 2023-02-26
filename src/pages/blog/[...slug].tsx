import { BlogSEO } from '~/components/seo';

import { siteMetadata } from '~/config/metadata';

export default function Blog() {
  return (
    <>
      <BlogSEO
        // TODO: replace mocked content
        title="This is an example blog post title"
        description="This is an example blog post summary."
        canonicalUrl={`${siteMetadata.siteUrl}/blog/article-title`}
        article={{
          publishedTime: '2017-06-21T23:04:13Z',
          modifiedTime: '2018-01-21T18:04:43Z',
          tags: ['Tag A', 'Tag B', 'Tag C'],
        }}
      />

      <div>Blog page</div>
    </>
  );
}
