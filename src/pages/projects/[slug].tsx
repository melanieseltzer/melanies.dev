import { ParsedUrlQuery } from 'querystring';

import { RxDividerVertical as Separator } from 'react-icons/rx';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { MDXComponent } from '~/components/MDXComponent';
import { DemoButton } from '~/components/projects/DemoButton';
import { SourceCodeButton } from '~/components/projects/SourceCodeButton';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';
import { TechStack } from '~/components/TechStack';

import { getAllProjects, getProject } from '~/lib/content';
import type { Project } from '~/types/content';

export default function ProjectPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, summary, demoUrl, repoUrl, techStack } = project;

  return (
    <>
      <SEO titleTemplate="%s" title={title} description={summary} />

      <Spacer size="16" />

      <article className="prose prose-lg prose-slate mx-auto">
        <header className="mb-12 border-b pb-8">
          <h1>{title}</h1>

          <p className="lead">{summary}</p>

          <div className="not-prose flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {demoUrl && <DemoButton href={demoUrl} />}

              <SourceCodeButton href={repoUrl} />
            </div>

            <Separator aria-hidden="true" size={15} className="text-gray-400" />

            <TechStack tech={techStack} />
          </div>
        </header>

        <MDXComponent source={project} />
      </article>
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

  return {
    props: { project },
  };
};
