import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { Paragraph } from '~/components/Paragraph';

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
          <article className="border-t py-6">
            <Heading size="sm" as="h3" className="mb-1">
              <Link href={`/blog/${slug}`} className="hover:underline">
                {title}
              </Link>
            </Heading>

            <PublishedAndReadTime
              className="mb-4"
              date={date}
              readingTime={readingTime}
            />

            <Paragraph>{summary}</Paragraph>

            <dl>
              <dt className="sr-only">Related tags</dt>
              <dd>
                <TagsList className="" compact tags={tags} />
              </dd>
            </dl>
          </article>
        </li>
      ))}
    </ul>
  );
}
