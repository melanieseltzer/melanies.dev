'use client';

import { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { MaxWidthContainer } from './MaxWidthContainer';

type Props = {
  children: ReactNode;
};

export function PageLayout({ children }: Props) {
  return (
    <>
      <Header />

      <MaxWidthContainer as="main">{children}</MaxWidthContainer>

      <Footer />
    </>
  );
}
