import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { Paragraph } from '~/components/Paragraph';

import { formatDate } from '~/utils/date';

import type { BlogPostMetadata } from '../types';

type Props = {
  posts: BlogPostMetadata[];
};

export function PostListCompact({ posts }: Props) {
  if (!posts.length) {
    return <Paragraph>No posts.</Paragraph>;
  }

  return (
    <ul className="divide-y">
      {posts.map(({ slug, title, date }) => (
        <li key={slug}>
          <article>
            <Link
              href={`/blog/${slug}`}
              className="group flex flex-col py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <Heading size="sm" as="h3" className="mb-0 group-hover:underline">
                {title}
              </Heading>

              <dl>
                <dt className="sr-only">Published on:</dt>
                <dd className="whitespace-nowrap text-base leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date)}</time>
                </dd>
              </dl>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
