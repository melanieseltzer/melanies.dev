import { Provider as ReactWrapBalancerProvider } from 'react-wrap-balancer';
import type { AppProps } from 'next/app';

import { PageLayout } from '~/components/layout/PageLayout';
import { DefaultSEO } from '~/components/seo';

import '@fontsource/inter/variable-full.css';
import '~/styles/globals.css';
import '@code-hike/mdx/dist/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSEO />

      <ReactWrapBalancerProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ReactWrapBalancerProvider>
    </>
  );
}
