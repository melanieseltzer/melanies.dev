import type { Metadata, ResolvingMetadata } from 'next';

import { Image } from '~/components/Image';
import { MDXComponent } from '~/components/MDXComponent';
import { PageIntro } from '~/components/PageIntro';
import { Prose } from '~/components/Prose';
import SocialLinks from '~/components/SocialLinks';
import { TechStack } from '~/components/TechStack';

import { getPageContent } from '~/entities/page';

import { siteConfig } from '~/config/site';

import Avatar from '../../../public/images/avatar.jpg';

export async function generateMetadata(
  // @ts-ignore throwaway
  _,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentOpenGraph = (await parent).openGraph || {};

  return {
    title: `About | ${siteConfig.defaultMetaTitle}`,
    description:
      'Software Engineer and perpetual tinkerer specializing in front-end JavaScript development.',
    openGraph: {
      ...parentOpenGraph,
      title: 'About Me',
    },
  };
}

export default function AboutPage() {
  const content = getPageContent('about');

  return (
    <>
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
