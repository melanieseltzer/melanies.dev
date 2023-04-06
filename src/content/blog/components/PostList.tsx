import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { Paragraph } from '~/components/Paragraph';
import { Spacer } from '~/components/Spacer';

import type { BlogPostMetadata } from '../types';

import { PublishedAndReadTime } from './PublishedAndReadTime';
import { TagsList } from './TagsList';

type Props = {
  posts: BlogPostMetadata[];
};

export function PostList({ posts }: Props) {
  if (!posts.length) {
    return <Paragraph>No posts.</Paragraph>;
  }

  return (
    <ul>
      {posts.map(({ slug, title, summary, date, tags, readingTime }) => (
        <li key={slug}>
          <article className="border-t py-6 dark:border-gray-800">
            <Heading size="sm" as="h3" className="mb-1">
              <Link href={`/blog/${slug}`} className="hover:underline">
                {title}
              </Link>
            </Heading>

            <div className="flex flex-wrap items-center gap-4">
              <PublishedAndReadTime date={date} readingTime={readingTime} />

              <dl>
                <dt className="sr-only">Related tags</dt>
                <dd>
                  <TagsList compact tags={tags} />
                </dd>
              </dl>
            </div>

            <Spacer size="4" />

            <Paragraph>{summary}</Paragraph>
          </article>
        </li>
      ))}
    </ul>
  );
}
