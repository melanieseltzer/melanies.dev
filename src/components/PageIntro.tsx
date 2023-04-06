import Balancer from 'react-wrap-balancer';

import { Heading as BaseHeading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';
import { Spacer } from '~/components/Spacer';

type Props = {
  heading: string;
  subheading?: string;
  reverse?: boolean;
};

export function PageIntro({ heading, subheading, reverse = false }: Props) {
  return (
    <>
      <Spacer size="8" />

      {reverse ? (
        <>
          <Subheading text={subheading} />
          <Heading text={heading} />
        </>
      ) : (
        <>
          <Heading text={heading} />
          <Subheading />
        </>
      )}

      <Spacer size="8" />
    </>
  );
}

function Heading({ text }: { text: string }) {
  return (
    <BaseHeading>
      <Balancer>{text}</Balancer>
    </BaseHeading>
  );
}

function Subheading({ text }: { text?: string }) {
  return text ? (
    <Paragraph lead>
      <Balancer>{text}</Balancer>
    </Paragraph>
  ) : null;
}
