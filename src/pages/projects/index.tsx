import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { PageIntro } from '~/components/PageIntro';
import { Section } from '~/components/Section';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';

import {
  getAllProjects,
  getProjectsByCategory,
} from '~/content/project/client';
import { ProjectsList } from '~/content/project/components/ProjectsList';
import type { Project } from '~/content/project/types';

export default function ProjectsIndexPage({
  ossProjects,
  sideProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO
        title="Projects"
        description="A small showcase of my open-source work and side projects that I am tinkering on."
      />

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

export const getStaticProps: GetStaticProps<{
  ossProjects: Project[];
  sideProjects: Project[];
}> = () => {
  const projects = getAllProjects();

  return {
    props: {
      ossProjects: getProjectsByCategory(projects, 'oss'),
      sideProjects: getProjectsByCategory(projects, 'sideproject'),
    },
  };
};
