import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { MDXComponent } from '~/components/MDXComponent';
import { Prose } from '~/components/Prose';
import { BlogSEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';

import { getBlogPost, getBlogPosts } from '~/content/blog/client';
import { PublishedAndReadTime } from '~/content/blog/components/PublishedAndReadTime';
import { TagsList } from '~/content/blog/components/TagsList';
import type { BlogPost } from '~/content/blog/types';

import { siteMetadata } from '~/config/metadata';
import { formatDate } from '~/utils/date';

export default function BlogPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, summary, date, lastModified, tags, slug, readingTime } = post;

  const shouldShowUpdated = formatDate(date) !== formatDate(lastModified);

  return (
    <>
      <BlogSEO
        title={title}
        description={summary}
        canonicalUrl={`${siteMetadata.siteUrl}/blog/${slug}`}
        article={{
          publishedTime: date,
          modifiedTime: lastModified,
          tags: tags.map(tag => tag.displayName),
        }}
      />

      <Spacer size="16" />

      <Prose as="article" className="relative mx-auto pt-10">
        <header className="mb-12 border-b dark:border-gray-700">
          <h1>{title}</h1>

          <PublishedAndReadTime
            className="absolute top-0"
            date={date}
            readingTime={readingTime}
          />

          <dl className="not-prose -mt-4">
            <dt className="sr-only">Related tags</dt>
            <dd>
              <TagsList tags={tags} />
            </dd>
          </dl>

          <p className="lead">{summary}</p>
        </header>

        <MDXComponent source={post.body.code} />

        {shouldShowUpdated && (
          <>
            <hr />
            <dl>
              <dt className="text-base">Last Updated</dt>
              <dd className="text-lg text-gray-900 dark:text-gray-400">
                <time dateTime={lastModified}>{formatDate(lastModified)}</time>
              </dd>
            </dl>
          </>
        )}
      </Prose>
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
