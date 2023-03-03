import Balancer from 'react-wrap-balancer';

import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';
import { Spacer } from '~/components/Spacer';

type Props = {
  heading: string;
  subheading?: string;
  reverse?: boolean;
  compact?: boolean;
};

export function PageIntro({
  heading,
  subheading,
  reverse = false,
  compact = false,
}: Props) {
  let tags = (
    <>
      <Heading>{heading}</Heading>
      {subheading ? (
        <Paragraph lead>
          <Balancer>{subheading}</Balancer>
        </Paragraph>
      ) : null}
    </>
  );

  if (reverse) {
    tags = (
      <>
        {subheading ? (
          <Paragraph lead>
            <Balancer>{subheading}</Balancer>
          </Paragraph>
        ) : null}
        <Heading>{heading}</Heading>
      </>
    );
  }

  return (
    <>
      <Spacer size={compact ? '8' : '16'} />

      {tags}

      <Spacer size={compact ? '8' : '16'} />
    </>
  );
}
