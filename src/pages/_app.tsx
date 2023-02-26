import type { AppProps } from 'next/app';

import { DefaultSEO } from '~/components/seo';

import '~/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSEO />
      <Component {...pageProps} />
    </>
  );
}
