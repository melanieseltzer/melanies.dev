import Balancer from 'react-wrap-balancer';

import { GradientText } from '~/components/GradientText';
import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';

export function HeroSection() {
  return (
    <header className="py-32">
      <Heading className="text-5xl tracking-tight md:text-6xl lg:text-7xl">
        <Balancer>
          Crafting <GradientText>delightful experiences</GradientText> for the
          web
        </Balancer>
      </Heading>
      <Paragraph className="md:text-xl">
        <Balancer>
          Hello 👋 I&apos;m{' '}
          <GradientText className="font-semibold">Melanie Seltzer</GradientText>
          , a Software Engineer based in Portland, Oregon, making stuff and
          things with JavaScript. Welcome to my little digital home.
        </Balancer>
      </Paragraph>
    </header>
  );
}
