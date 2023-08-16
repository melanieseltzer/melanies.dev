import type { Metadata, ResolvingMetadata } from 'next';

import { PageIntro } from '~/components/PageIntro';
import { Section } from '~/components/Section';
import { Spacer } from '~/components/Spacer';

import {
  getAllProjects,
  getProjectsByCategory,
} from '~/documents/Project/selectors';
import { ProjectsList } from '~/documents/Project/components/ProjectsList';

import { siteConfig } from '~/config/site';

export async function generateMetadata(
  // @ts-ignore throwaway
  _,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentOpenGraph = (await parent).openGraph || {};

  const metaTitle = 'Dev projects';
  const metaDesc =
    'A small showcase of my open-source work and side projects that I am tinkering on.';

  return {
    title: `${metaTitle} | ${siteConfig.defaultMetaTitle}`,
    description: metaDesc,
    openGraph: {
      ...parentOpenGraph,
      title: `${metaTitle}`,
      description: metaDesc,
    },
  };
}

export default function ProjectsIndexPage() {
  const projects = getAllProjects();

  const ossProjects = getProjectsByCategory(projects, 'oss');
  const sideProjects = getProjectsByCategory(projects, 'sideproject');

  return (
    <>
      <PageIntro
        heading="Projects"
        subheading="A small showcase of my open-source work and side projects that I am tinkering on."
      />

      {/* Since there's only two categories it is simpler to just hardcode it like this,
        rather than doing some convoluted mapping of categories. */}
      <Section id="oss" heading="OSS">
        <ProjectsList projects={ossProjects} />
      </Section>

      <Spacer size="16" />

      <Section id="sideprojects" heading="Side Projects">
        <ProjectsList projects={sideProjects} />
      </Section>
    </>
  );
}
