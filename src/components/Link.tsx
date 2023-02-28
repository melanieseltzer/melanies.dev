/* eslint-disable jsx-a11y/anchor-has-content */
import { AnchorHTMLAttributes } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { siteMetadata } from '~/config/metadata';

type LinkProps = Omit<NextLinkProps, 'href'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
  };

export function Link({
  href: hrefOrig,
  as,
  legacyBehavior,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  ...htmlAnchorProps
}: LinkProps) {
  // Assume urls that start with our site domain are accidental,
  // and treat them as internal links to use `NextLink`.
  const href = trimSameDomain(hrefOrig);

  const isInternalLink = href.startsWith('/');
  const isExternalLink = href.startsWith('http');

  if (isInternalLink) {
    return (
      <NextLink
        {...{
          href,
          as,
          legacyBehavior,
          passHref,
          prefetch,
          replace,
          scroll,
          shallow,
          locale,
        }}
        {...htmlAnchorProps}
      />
    );
  }

  return (
    <a
      href={href}
      {...(isExternalLink && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
      {...htmlAnchorProps}
    />
  );
}

const trimSameDomain = (url: string) =>
  url.replace(siteMetadata.siteUrl, '') || '/';
