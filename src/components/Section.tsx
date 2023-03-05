import { Heading } from './Heading';
import { Paragraph } from './Paragraph';

type Props = {
  children: React.ReactNode;
  id: string;
  heading: string;
  subheading?: string;
};

export function Section({ id, heading, subheading, children }: Props) {
  return (
    <section aria-labelledby={id}>
      <header>
        <Heading id={id} size="md" as="h2">
          {heading}
        </Heading>
        {subheading ? <Paragraph lead>{subheading}</Paragraph> : null}
      </header>

      {children}
    </section>
  );
}
