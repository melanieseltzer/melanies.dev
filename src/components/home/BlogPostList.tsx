import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { Paragraph } from '~/components/Paragraph';

type Props = {
  posts: {
    slug: string;
    title: string;
    summary: string;
    date: string;
  }[];
};

export function BlogPostList({ posts }: Props) {
  if (!posts.length) {
    return <Paragraph>No posts.</Paragraph>;
  }

  return (
    <>
      {posts.map(({ slug, title, summary, date }) => (
        <article key={slug} className="grid border-t py-6 sm:grid-cols-4">
          <div className="order-2 sm:order-1 sm:col-span-3">
            <Heading as="h3">
              <Link href={slug} className="hover:underline">
                {title}
              </Link>
            </Heading>

            <Paragraph>{summary}</Paragraph>

            <Link
              href={slug}
              className="font-medium text-primary-700 transition-colors hover:text-primary-800"
            >
              Read more &rarr;
            </Link>
          </div>

          <div className="order-1 sm:order-2 sm:text-right">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="mb-2 whitespace-nowrap text-base leading-6 text-gray-500 dark:text-gray-400 sm:mb-0">
                <time dateTime={date}>December 27, 2022</time>
              </dd>
            </dl>
          </div>
        </article>
      ))}
    </>
  );
}
