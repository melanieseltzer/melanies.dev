import { ParsedUrlQuery } from 'querystring';

import { RxDividerVertical as Separator } from 'react-icons/rx';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { MDXComponent } from '~/components/MDXComponent';
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
          <h1 className="mb-4">{title}</h1>

          <p className="lead">{summary}</p>

          <div className="not-prose mt-4 flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {demoUrl && <DemoButton href={demoUrl} />}

              <SourceCodeButton href={repoUrl} />
            </div>

            <Separator aria-hidden="true" size={15} className="text-gray-400" />

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
