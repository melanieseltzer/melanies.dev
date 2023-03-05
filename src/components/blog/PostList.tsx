import { PostTagsList } from '~/components/blog/PostTagsList';
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

export function PostList({ posts }: Props) {
  if (!posts.length) {
    return <Paragraph>No posts.</Paragraph>;
  }

  return (
    <ul>
      {posts.map(({ slug, title, summary, date, tags }) => (
        <li key={slug}>
          <article className="flex flex-col justify-between gap-4 border-t py-6 md:flex-row">
            <div>
              <Heading size="sm" as="h3" className="mb-2">
                {title}
              </Heading>

              <Paragraph>{summary}</Paragraph>

              <Link
                href={slug}
                className="font-medium text-primary-700 transition-colors hover:text-primary-800"
              >
                Read more <span className="sr-only">, {title}</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <dl className="mt-4 flex flex-col gap-2 md:mt-0 md:items-end">
              <dt className="sr-only">Published on:</dt>
              <dd className="whitespace-nowrap text-base leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>December 27, 2022</time>
              </dd>

              <dt className="sr-only">Related tags:</dt>
              <dd>
                <PostTagsList className="md:justify-end" compact tags={tags} />
              </dd>
            </dl>
          </article>
        </li>
      ))}
    </ul>
  );
}