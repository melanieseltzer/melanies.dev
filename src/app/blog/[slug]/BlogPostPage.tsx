'use client';

import { MDXComponent } from '~/components/MDXComponent';
import { Prose } from '~/components/Prose';
import { Spacer } from '~/components/Spacer';

import { BlogPost } from '~/content/blog';
import { PublishedAndReadTime } from '~/content/blog/components/PublishedAndReadTime';
import { TagsList } from '~/content/blog/components/TagsList';

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
    readingTime,
  } = post;

  return (
    <>
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
