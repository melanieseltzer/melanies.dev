import type { ButtonProps } from '~/components/Button';
import { Button } from '~/components/Button';
import type { LinkProps } from '~/components/Link';
import { Link } from '~/components/Link';

type Props = ButtonProps & Partial<Omit<LinkProps, 'as'>>;

export function ButtonLink(props: Props) {
  return <Button as={Link} {...props} />;
}
