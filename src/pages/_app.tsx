import { Provider as ReactWrapBalancerProvider } from 'react-wrap-balancer';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import ProgressBar from 'nextjs-progressbar';

import { PageLayout } from '~/components/layout/PageLayout';
import { DefaultSEO } from '~/components/seo';

import '~/styles/nprogress.css';
import '@fontsource/inter/variable-full.css';
import '~/styles/globals.css';
import '@code-hike/mdx/dist/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSEO />

      <ProgressBar
        options={{ showSpinner: false }}
        // Necessary to minify the CSS :/
        // ref: https://github.com/apal21/nextjs-progressbar/pull/85
        transformCSS={() => <></>}
      />

      <ReactWrapBalancerProvider>
        <ThemeProvider attribute="class">
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ThemeProvider>
      </ReactWrapBalancerProvider>
    </>
  );
}
