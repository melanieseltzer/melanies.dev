import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { PageIntro } from '~/components/PageIntro';
import { Paragraph } from '~/components/Paragraph';
import { DemoButton } from '~/components/projects/DemoButton';
import { SourceCodeButton } from '~/components/projects/SourceCodeButton';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';
import { TechStack } from '~/components/TechStack';

const projects = [
  {
    slug: 'some-test-project',
    title: 'Some Test Project',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    techStack: ['React', 'JavaScript', 'Next.js', 'HTML'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://test.com',
    body: 'asdf',
  },
  {
    slug: 'some-test-project',
    title: 'Some Test Project',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo cursus turpis, vel consectetur orci tempus nec.',
    techStack: ['React', 'CSS', 'React Query'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://test.com',
  },
  {
    slug: 'some-test-project',
    title: 'Some Test Project',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo cursus turpis, vel consectetur orci tempus nec.',
    techStack: ['React', 'TypeScript'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://test.com',
  },
  {
    slug: 'some-test-project',
    title: 'Some Test Project',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo cursus turpis, vel consectetur orci tempus nec.',
    techStack: ['React', 'Tailwind CSS'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://test.com',
    body: 'asdf',
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
          {projects.map(
            ({ slug, title, techStack, summary, repoUrl, demoUrl, body }) => (
              <Card key={title}>
                <Heading as="h3" className="mb-2">
                  {title}
                </Heading>

                <TechStack tech={techStack} />

                <Paragraph className="text-base">{summary}</Paragraph>

                {body ? (
                  <>
                    <Link
                      href={`/projects/${slug}`}
                      className="font-medium text-primary-700 transition-colors hover:text-primary-800"
                    >
                      Read more{' '}
                      <span className="sr-only">about the project</span>{' '}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                    <Spacer size="4" />
                  </>
                ) : null}

                <div className="flex flex-wrap gap-2">
                  <DemoButton href={demoUrl} />

                  <SourceCodeButton href={repoUrl} />
                </div>
              </Card>
            )
          )}
        </div>
      </section>
    </>
  );
}
