import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { Paragraph } from '~/components/Paragraph';

type Props = {
  posts: {
    slug: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
  }[];
};

export function CompactPostList({ posts }: Props) {
  if (!posts.length) {
    return <Paragraph>No posts.</Paragraph>;
  }

  return (
    <ul className="divide-y">
      {posts.map(({ slug, title, date }) => (
        <li key={slug}>
          <article>
            <Link
              href={slug}
              className="group flex flex-col py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <Heading size="sm" as="h3" className="mb-0 group-hover:underline">
                {title}
              </Heading>

              <dl>
                <dt className="sr-only">Published on:</dt>
                <dd className="whitespace-nowrap text-base leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>December 27, 2022</time>
                </dd>
              </dl>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
