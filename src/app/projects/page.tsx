import type { Metadata } from 'next';

import { PageIntro } from '~/components/PageIntro';
import { Section } from '~/components/Section';
import { Spacer } from '~/components/Spacer';

import {
  getAllProjects,
  getProjectsByCategory,
} from '~/content/project/client';
import { ProjectsList } from '~/content/project/components/ProjectsList';

import { siteMetadata } from '~/config/metadata';

export const metadata: Metadata = {
  title: `Projects | ${siteMetadata.metaTitle}`,
  description:
    'A small showcase of my open-source work and side projects that I am tinkering on.',
};

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
