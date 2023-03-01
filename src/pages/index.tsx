import { Heading } from '~/components/Heading';
import { HeroSection } from '~/components/home/HeroSection';
import { SEO } from '~/components/seo';
import { Spacer } from '~/components/Spacer';

export default function Home() {
  return (
    <>
      <SEO />

      <Spacer size="32" />

      <HeroSection />

      <Spacer size="32" />

      <Heading>Latest Posts</Heading>
    </>
  );
}
