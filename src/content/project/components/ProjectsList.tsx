import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { Paragraph } from '~/components/Paragraph';
import { Spacer } from '~/components/Spacer';

import { DemoButton } from '~/content/project/components/DemoButton';
import { SourceCodeButton } from '~/content/project/components/SourceCodeButton';
import type { Project } from '~/content/project/types';

import { RepoLanguage } from './RepoLanguage';

type Props = {
  projects: Project[];
};

export function ProjectsList({ projects }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {projects.map(project => {
        const { slug, title, summary, repoUrl, demoUrl, body, repoLang } =
          project;
        const hasProjectArticle = !!body.raw;

        return (
          <li key={title}>
            <Card
              as="article"
              className="flex h-full flex-col justify-between hover:border-gray-300 hover:transition-colors hover:duration-300 dark:hover:border-gray-700"
            >
              <div>
                <Heading size="sm" as="h3" className="mb-2">
                  {hasProjectArticle ? (
                    <Link
                      href={`/projects/${slug}`}
                      className="hover:underline"
                    >
                      {title} <span aria-hidden="true">&rarr;</span>{' '}
                    </Link>
                  ) : (
                    title
                  )}
                </Heading>

                <Paragraph className="whitespace-break-spaces">
                  {summary}
                </Paragraph>

                <Spacer size="4" />
              </div>

              <div className="flex flex-wrap justify-between gap-4">
                <RepoLanguage name={repoLang} />

                <div className="flex gap-2">
                  {demoUrl && <DemoButton href={demoUrl} />}

                  <SourceCodeButton href={repoUrl} />
                </div>
              </div>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
