'use client';

import { Heading } from '~/components/Heading';
import { MDXComponent } from '~/components/MDXComponent';
import { Paragraph } from '~/components/Paragraph';
import { Prose } from '~/components/Prose';
import { Spacer } from '~/components/Spacer';
import { TechStack } from '~/components/TechStack';

import type { Project } from '~/content/project';
import { DemoButton } from '~/content/project/components/DemoButton';
import { SourceCodeButton } from '~/content/project/components/SourceCodeButton';

interface Props {
  project: Project;
}

export function ProjectPage({ project }: Props) {
  const { title, summary, demoUrl, repoUrl, tech } = project;

  return (
    <>
      <Spacer size="8" />

      <Prose autoLinkHeadings as="article" className="mx-auto">
        <header className="mb-12 border-b pb-8 dark:border-gray-700">
          <div className="not-prose">
            <Heading>{title}</Heading>

            <Paragraph lead>{summary}</Paragraph>
          </div>

          <div className="not-prose flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {demoUrl && <DemoButton href={demoUrl} />}

              <SourceCodeButton href={repoUrl} />
            </div>

            <TechStack list={tech} size="lg" showLabel />
          </div>
        </header>

        <MDXComponent source={project.body.code} />
      </Prose>
    </>
  );
}
