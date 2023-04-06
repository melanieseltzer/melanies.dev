import { RxDividerVertical as Separator } from 'react-icons/rx';

import { Card } from '~/components/Card';
import { GradientText } from '~/components/GradientText';
import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { Paragraph } from '~/components/Paragraph';
import { Spacer } from '~/components/Spacer';
import { TechStack } from '~/components/TechStack';

import { DemoButton } from '~/content/project/components/DemoButton';
import { SourceCodeButton } from '~/content/project/components/SourceCodeButton';
import type { Project } from '~/content/project/types';

type Props = {
  projects: Project[];
};

export function ProjectsList({ projects }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {projects.map(project => {
        const { slug, title, techStack, summary, repoUrl, demoUrl, body } =
          project;
        const hasMoreContent = !!body.raw;

        return (
          <li key={title}>
            <Card
              as="article"
              className="h-full hover:border-gray-300 hover:transition-colors hover:duration-300 dark:hover:border-gray-700"
            >
              <Heading size="sm" as="h3" className="mb-2">
                {title}
              </Heading>

              <Paragraph>{summary}</Paragraph>

              <div className="flex flex-wrap items-center gap-2">
                <TechStack list={techStack} />

                {hasMoreContent ? (
                  <>
                    <Separator
                      aria-hidden="true"
                      size={15}
                      className="text-gray-400"
                    />

                    <Link href={`/projects/${slug}`} className="font-medium">
                      <GradientText>
                        Read more
                        <span className="sr-only">about the project</span>{' '}
                        <span aria-hidden="true">&rarr;</span>{' '}
                      </GradientText>
                    </Link>
                  </>
                ) : null}
              </div>

              <Spacer size="6" />

              <div className="flex flex-wrap gap-2">
                {demoUrl && <DemoButton href={demoUrl} />}

                <SourceCodeButton href={repoUrl} />
              </div>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
