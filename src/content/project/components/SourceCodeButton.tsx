import { RxGithubLogo as GitHubIcon } from 'react-icons/rx';

import { ButtonLink } from '~/components/ButtonLink';

type Props = {
  href: string;
};

export function SourceCodeButton({ href }: Props) {
  return (
    <ButtonLink
      href={href}
      aria-label="View the source code"
      className="inline-flex items-center gap-2"
    >
      <GitHubIcon aria-hidden="true" size={16} />
      Source
    </ButtonLink>
  );
}
