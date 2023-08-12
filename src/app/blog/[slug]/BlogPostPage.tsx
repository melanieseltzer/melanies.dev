'use client';

import { ArticleJsonLd } from 'next-seo';

import { MDXComponent } from '~/components/MDXComponent';
import { Prose } from '~/components/Prose';
import { Spacer } from '~/components/Spacer';

import { BlogPost } from '~/content/blog';
import { PublishedAndReadTime } from '~/content/blog/components/PublishedAndReadTime';
import { TagsList } from '~/content/blog/components/TagsList';

import { authorMetadata, siteMetadata } from '~/config/metadata';
import { formatDate } from '~/utils/date';

interface Props {
  post: BlogPost;
}

export function BlogPostPage({ post }: Props) {
  const {
    title,
    summary,
    date,
    lastModified,
    showLastModified,
    tags,
    slug,
    readingTime,
  } = post;

  return (
    <>
      <ArticleJsonLd
        type="BlogPosting"
        useAppDir
        authorName={{
          name: authorMetadata.name,
        }}
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        title={title}
        description={summary}
        datePublished={date}
        dateModified={lastModified}
        images={[siteMetadata.images.socialBanner]}
      />

      <Spacer size="8" />

      <Prose autoLinkHeadings as="article" className="relative mx-auto pt-10">
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

        {showLastModified && formatDate(date) !== formatDate(lastModified) && (
          <>
            <hr />
            <dl className="font-semibold">
              <dt className="text-sm uppercase text-gray-500 dark:text-gray-400">
                Last Updated
              </dt>
              <dd className="text-xl text-gray-900 dark:text-gray-300">
                <time dateTime={lastModified}>{formatDate(lastModified)}</time>
              </dd>
            </dl>
          </>
        )}
      </Prose>
    </>
  );
}
