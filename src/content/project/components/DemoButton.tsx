import { RxRocket as DemoIcon } from 'react-icons/rx';

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
      <DemoIcon aria-hidden="true" />
      Demo
    </ButtonLink>
  );
}
