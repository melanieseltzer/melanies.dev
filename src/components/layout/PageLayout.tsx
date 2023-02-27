import { ReactNode } from 'react';

import { MaxWidthWrapper } from '~/components/MaxWidthWrapper';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};

export function PageLayout({ children }: Props) {
  return (
    <>
      <Header />

      <main>
        <MaxWidthWrapper>
          {children}
          <div className="h-[1300px] ">{/* simulate scroll for testing */}</div>
        </MaxWidthWrapper>
      </main>

      <Footer />
    </>
  );
}
