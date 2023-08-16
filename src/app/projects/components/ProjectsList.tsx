import { Card } from '~/components/Card';
import { GradientText } from '~/components/GradientText';
import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { Paragraph } from '~/components/Paragraph';
import { Spacer } from '~/components/Spacer';

import type { Project } from '~/entities/project/types';

import { DemoButton } from './DemoButton';
import { RepoLanguage } from './RepoLanguage';
import { SourceCodeButton } from './SourceCodeButton';

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
            <Card as="article" className="flex h-full flex-col justify-between">
              <div>
                <Heading size="sm" as="h3" className="mb-2">
                  {title}
                </Heading>

                <Paragraph className="whitespace-break-spaces mb-2">
                  {summary}
                </Paragraph>

                {hasProjectArticle && (
                  <Paragraph>
                    <Link
                      href={`/projects/${slug}`}
                      className="font-semibold hover:underline"
                    >
                      <GradientText>
                        Read more <span aria-hidden="true">&rarr;</span>
                        <span className="sr-only">about this project</span>
                      </GradientText>
                    </Link>
                  </Paragraph>
                )}

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
