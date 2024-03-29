import Balancer from 'react-wrap-balancer';

import { GradientText } from '~/components/GradientText';
import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';
import { Spacer } from '~/components/Spacer';

import { TerminalWindow } from './TerminalWindow';

export function HeroSection() {
  return (
    <section
      aria-label="Hero intro"
      className="mt-8 mb-20 flex flex-col justify-between gap-4 lg:my-28 lg:flex-row lg:items-center lg:gap-10"
    >
      <div className="lg:max-w-lg">
        <Heading className="text-5xl tracking-tight md:text-6xl lg:text-7xl">
          <Balancer>
            Crafting <GradientText>delightful experiences</GradientText> for the
            web
          </Balancer>
        </Heading>

        <Spacer size="4" />

        <Paragraph lead>
          <Balancer>
            Hello 👋 I&apos;m{' '}
            <GradientText className="font-semibold">
              Melanie Seltzer
            </GradientText>
            , a Software Engineer based in Portland, Oregon, making stuff and
            things with JavaScript. Welcome to my little digital home.
          </Balancer>
        </Paragraph>
      </div>

      <div className="max-w-md flex-auto">
        <TerminalWindow />
      </div>
    </section>
  );
}
