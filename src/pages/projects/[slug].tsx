import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { Heading } from '~/components/Heading';
import { MDXComponent } from '~/components/MDXComponent';
import { Paragraph } from '~/components/Paragraph';
import { Prose } from '~/components/Prose';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';
import { TechStack } from '~/components/TechStack';

import { getAllProjects, getProject } from '~/content/project/client';
import { DemoButton } from '~/content/project/components/DemoButton';
import { SourceCodeButton } from '~/content/project/components/SourceCodeButton';
import type { Project } from '~/content/project/types';

export default function ProjectPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, summary, demoUrl, repoUrl, tech } = project;

  return (
    <>
      <SEO titleTemplate="%s" title={title} description={summary} />

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

export const getStaticPaths: GetStaticPaths = () => {
  const projects = getAllProjects();

  return {
    paths: projects
      .filter(project => !!project.body.raw)
      .map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  project: Project;
};

export const getStaticProps: GetStaticProps<Props, Params> = context => {
  const slug = context.params!.slug;
  const project = getProject(slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
};
