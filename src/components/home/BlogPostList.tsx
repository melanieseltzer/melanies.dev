import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { Paragraph } from '~/components/Paragraph';
import { Spacer } from '~/components/Spacer';
import { TagsList } from '~/components/TagsList';

type Props = {
  posts: {
    slug: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
  }[];
};

export function BlogPostList({ posts }: Props) {
  if (!posts.length) {
    return <Paragraph>No posts.</Paragraph>;
  }

  return (
    <ul>
      {posts.map(({ slug, title, summary, date, tags }) => (
        <li key={slug} className="border-t py-6">
          <article className="grid md:grid-cols-4">
            <div className="order-2 md:order-1 md:col-span-3">
              <Heading as="h3" className="mb-2">
                <Link href={slug} className="hover:underline">
                  {title}
                </Link>
              </Heading>

              <TagsList compact tags={tags} />

              <Spacer size="4" />

              <Paragraph>{summary}</Paragraph>

              <Link
                href={slug}
                className="font-medium text-primary-700 transition-colors hover:text-primary-800"
              >
                Read more <span className="sr-only">, {title}</span> &rarr;
              </Link>
            </div>

            <div className="order-1 md:order-2 md:text-right">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="mb-2 whitespace-nowrap text-base leading-6 text-gray-500 dark:text-gray-400 md:mb-0">
                  <time dateTime={date}>December 27, 2022</time>
                </dd>
              </dl>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
