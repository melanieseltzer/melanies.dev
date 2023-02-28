import type { AppProps } from 'next/app';

import { PageLayout } from '~/components/layout/PageLayout';
import { DefaultSEO } from '~/components/seo';

import '@fontsource/inter/variable-full.css';
import '~/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSEO />

      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
