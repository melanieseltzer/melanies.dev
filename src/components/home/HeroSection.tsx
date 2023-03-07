import Balancer from 'react-wrap-balancer';

import { GradientText } from '~/components/GradientText';
import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';
import { Spacer } from '~/components/Spacer';

import { TerminalPrompt } from '../TerminalPrompt';

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="flex flex-col gap-4 lg:flex-row lg:items-center"
    >
      <header className="flex-auto">
        <Heading
          id="hero-title"
          className="text-5xl tracking-tight md:text-6xl lg:text-8xl"
        >
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
      </header>

      <div className="hidden lg:block">
        <TerminalPrompt />
      </div>
    </section>
  );
}
