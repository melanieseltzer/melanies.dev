import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllProjects, getProject } from '~/content/project/client';

import { ProjectPage } from './ProjectPage';

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata | undefined {
  const project = getProject(params.slug);

  if (!project) {
    return;
  }

  const { title, summary } = project;

  return {
    title: {
      absolute: title,
    },
    description: summary,
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  const projects = getAllProjects();

  return projects
    .filter(project => !!project.body.raw)
    .map(({ slug }) => ({ slug }));
}

export default function Page({ params }: Props) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}
