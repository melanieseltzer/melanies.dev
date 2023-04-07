import { Card } from '~/components/Card';
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
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {posts.map(({ slug, title, summary, date, tags, readingTime }) => (
        <li key={slug}>
          <Card as="article" className="h-full">
            <Heading size="sm" as="h3" className="mb-1">
              <Link href={`/blog/${slug}`} className="hover:underline">
                {title}
              </Link>
            </Heading>

            <div className="flex flex-wrap items-center gap-3">
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
          </Card>
        </li>
      ))}
    </ul>
  );
}
