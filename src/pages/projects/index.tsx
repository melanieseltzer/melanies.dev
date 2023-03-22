import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { PageIntro } from '~/components/PageIntro';
import { Paragraph } from '~/components/Paragraph';
import { Section } from '~/components/Section';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';
import { TechStack } from '~/components/TechStack';

import { getAllProjects } from '~/content/project/client';
import { DemoButton } from '~/content/project/components/DemoButton';
import { SourceCodeButton } from '~/content/project/components/SourceCodeButton';
import type { Project } from '~/content/project/types';

export default function ProjectsIndexPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO
        title="Projects"
        description="A showcase of my open-source side projects and everything I am tinkering on."
      />

      <PageIntro
        heading="Projects"
        subheading="A showcase of my open-source side projects and everything I am tinkering on."
      />

      <Section id="oss" heading="OSS">
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map(
            ({ slug, title, techStack, summary, repoUrl, demoUrl, body }) => {
              const hasMoreContent = !!body.raw;

              return (
                <li key={title}>
                  <Card
                    as="article"
                    className="h-full transition-all hover:border-gray-300"
                  >
                    <Heading size="sm" as="h3" className="mb-2">
                      {title}
                    </Heading>

                    <TechStack tech={techStack} />

                    <Spacer size="4" />

                    <Paragraph>{summary}</Paragraph>

                    {hasMoreContent ? (
                      <>
                        <Link
                          href={`/projects/${slug}`}
                          className="font-medium text-primary-700 transition-colors hover:text-primary-800"
                        >
                          Read more{' '}
                          <span className="sr-only">about the project</span>{' '}
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                        <Spacer size="4" />
                      </>
                    ) : null}

                    <div className="flex flex-wrap gap-2">
                      {demoUrl && <DemoButton href={demoUrl} />}

                      <SourceCodeButton href={repoUrl} />
                    </div>
                  </Card>
                </li>
              );
            }
          )}
        </ul>
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ projects: Project[] }> = () => {
  const projects = getAllProjects();

  return {
    props: { projects },
  };
};
