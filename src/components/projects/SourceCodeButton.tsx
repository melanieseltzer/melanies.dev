import { FiArrowUpRight as ExternalIcon } from 'react-icons/fi';
import { SiGithub as GitHubIcon } from 'react-icons/si';

import { ButtonLink } from '~/components/ButtonLink';

type Props = {
  href: string;
};

export function SourceCodeButton({ href }: Props) {
  return (
    <ButtonLink href={href} className="inline-flex items-center gap-2">
      <GitHubIcon aria-hidden={true} size={20} />
      Source
      <ExternalIcon aria-hidden={true} />
    </ButtonLink>
  );
}
