import Balancer from 'react-wrap-balancer';

import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';
import { Spacer } from '~/components/Spacer';

type Props = {
  title: string;
  description?: string;
};

export function PageIntro({ title, description }: Props) {
  return (
    <>
      <Spacer size="16" />

      <Heading>{title}</Heading>

      {description ? (
        <Paragraph lead>
          <Balancer>{description}</Balancer>
        </Paragraph>
      ) : null}

      <Spacer size="16" />
    </>
  );
}
