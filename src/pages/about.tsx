import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Image } from '~/components/Image';
import { MDXComponent } from '~/components/MDXComponent';
import { PageIntro } from '~/components/PageIntro';
import { SEO } from '~/components/seo';
import { TechStack } from '~/components/TechStack';

import { getPageContent } from '~/lib/content';
import { Page } from '~/types/content';

import Avatar from '../../public/images/avatar.jpg';

export default function About({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO
        title="About"
        description="Software engineer and perpetual tinkerer specializing in front-end JavaScript development."
      />

      <PageIntro
        heading="About Melanie Seltzer"
        subheading="Software engineer and perpetual tinkerer specializing in front-end JavaScript development."
      />

      <div className="flex flex-wrap justify-between gap-8">
        <div className="mb-12">
          <div className="sticky top-28 flex flex-col items-center gap-8">
            <Image
              src={Avatar}
              className="rounded-full p-1 ring-4 ring-secondary-600"
              alt="Portrait photo of Melanie"
              placeholder="blur"
              width={192}
            />

            <TechStack
              size="lg"
              label="Current fave tech/tools:"
              showLabel
              tech={[
                'React',
                'TypeScript',
                'Next.js',
                'Tailwind CSS',
                'VSCode',
              ]}
            />
          </div>
        </div>

        <div className="prose prose-lg prose-slate">
          <MDXComponent source={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ content: Page }> = () => {
  const content = getPageContent('about');

  return {
    props: {
      content,
    },
  };
};
