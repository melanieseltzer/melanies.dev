import { FiArrowUpRight as ExternalIcon } from 'react-icons/fi';
import { RiWindowFill as DemoIcon } from 'react-icons/ri';

import { ButtonLink } from '~/components/ButtonLink';

type Props = {
  href: string;
};

export function DemoButton({ href }: Props) {
  return (
    <ButtonLink
      href={href}
      aria-label="View the demo"
      className="inline-flex items-center gap-2"
    >
      <DemoIcon aria-hidden="true" size={20} />
      Demo
      <ExternalIcon aria-hidden="true" />
    </ButtonLink>
  );
}
