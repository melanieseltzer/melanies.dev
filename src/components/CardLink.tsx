import type { CardProps } from '~/components/Card';
import { Card } from '~/components/Card';
import type { LinkProps } from '~/components/Link';
import { Link } from '~/components/Link';

type Props = CardProps & Partial<Omit<LinkProps, 'as'>>;

export function CardLink(props: Props) {
  return (
    <Card
      as={Link}
      className="transition-all hover:scale-105 hover:border-gray-300 hover:bg-neutral-50"
      {...props}
    />
  );
}
