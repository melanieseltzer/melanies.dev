import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllProjects, getProjectBySlug } from '~/entities/project';

import { ProjectPage } from '../components/ProjectPage';

interface Props {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata | undefined> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return;
  }

  const { title, summary } = project;
  const parentOpenGraph = (await parent).openGraph || {};

  return {
    title,
    description: summary,
    openGraph: {
      ...parentOpenGraph,
      title,
      description: summary,
    },
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
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}
