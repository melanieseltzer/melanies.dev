import { CardLink } from '~/components/CardLink';
import { Heading } from '~/components/Heading';
import { PageIntro } from '~/components/PageIntro';
import { Paragraph } from '~/components/Paragraph';
import { TechStack } from '~/components/projects/TechStack';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';

const projects = [
  {
    title: 'Some Test Project with a longer title',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    techStack: ['React', 'JavaScript', 'Next.js', 'HTML'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://test.com',
  },
  {
    title: 'Some Test Project',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo cursus turpis, vel consectetur orci tempus nec.',
    techStack: ['React', 'CSS', 'React Query'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://test.com',
  },
  {
    title: 'Some Test Project',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo cursus turpis, vel consectetur orci tempus nec.',
    techStack: ['React', 'TypeScript'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://test.com',
  },
  {
    title: 'Some Test Project',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo cursus turpis, vel consectetur orci tempus nec.',
    techStack: ['React', 'Tailwind CSS'],
    repoUrl: 'https://github.com',
  },
];

export default function ProjectsIndex() {
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

      <section aria-labelledby="oss-projects">
        <header className="relative">
          <Heading id="oss-projects" as="h2">
            OSS
          </Heading>
        </header>

        <Spacer size="4" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map(({ title, techStack, summary }) => (
            <CardLink key={title} href="/projects/asdf">
              <Heading as="h3">{title}</Heading>

              <Paragraph>{summary}</Paragraph>

              <TechStack tech={techStack} />
            </CardLink>
          ))}
        </div>
      </section>
    </>
  );
}
