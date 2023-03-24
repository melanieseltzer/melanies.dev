import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { MDXComponent } from '~/components/MDXComponent';
import { BlogSEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';

import { getBlogPost, getBlogPosts } from '~/content/blog/client';
import { TagsList } from '~/content/blog/components/TagsList';
import type { BlogPost } from '~/content/blog/types';

import { siteMetadata } from '~/config/metadata';
import { formatDate } from '~/utils/date';

export default function BlogPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, summary, date, lastmod, tags, slug } = post;

  return (
    <>
      <BlogSEO
        title={title}
        description={summary}
        canonicalUrl={`${siteMetadata.siteUrl}/blog/${slug}`}
        article={{
          publishedTime: date,
          modifiedTime: lastmod || date,
          tags: tags.map(tag => tag.displayName),
        }}
      />

      <Spacer size="16" />

      <article className="prose prose-lg prose-slate relative mx-auto pt-10">
        <header className="mb-12 border-b">
          <h1>{title}</h1>

          <div className="absolute top-0 text-base leading-6">
            <dl>
              <dt className="sr-only">Published on:</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                <time dateTime={date}>{formatDate(date)}</time>
              </dd>
            </dl>
          </div>

          <dl className="not-prose -mt-4">
            <dt className="sr-only">Related tags:</dt>
            <dd>
              <TagsList tags={tags} />
            </dd>
          </dl>

          <p className="lead">{summary}</p>
        </header>

        <MDXComponent source={post.body.code} />
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getBlogPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  post: BlogPost;
};

export const getStaticProps: GetStaticProps<Props, Params> = context => {
  const slug = context.params!.slug;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};
