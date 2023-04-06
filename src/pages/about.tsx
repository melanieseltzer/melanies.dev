import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Image } from '~/components/Image';
import { MDXComponent } from '~/components/MDXComponent';
import { PageIntro } from '~/components/PageIntro';
import { Prose } from '~/components/Prose';
import { SEO } from '~/components/seo';
import SocialLinks from '~/components/SocialLinks';
import { TechStack } from '~/components/TechStack';

import { getPageContent } from '~/content/page/client';
import type { Page } from '~/content/page/types';

import Avatar from '../../public/images/avatar.jpg';

export default function AboutPage({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO
        title="About Melanie Seltzer"
        description="Software Engineer and perpetual tinkerer specializing in front-end JavaScript development."
      />

      <PageIntro
        heading="Hey there 👋 I'm Melanie"
        subheading="Software Engineer, perpetual tinkerer, and relentlessly curious."
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

            <SocialLinks />
          </div>
        </div>

        <Prose>
          <MDXComponent source={content.body.code} components={{ TechStack }} />
        </Prose>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ content: Page }> = () => {
  const content = getPageContent('about');

  return {
    props: { content },
  };
};
