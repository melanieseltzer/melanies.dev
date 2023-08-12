import { Provider as ReactWrapBalancerProvider } from 'react-wrap-balancer';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

import { PageLayout } from '~/components/layout/PageLayout';
import { RouteProgressBar } from '~/components/navigation/RouteProgressBar';
import { DefaultSEO } from '~/components/seo';

import { fontSans } from '../app/fonts';

import '~/styles/nprogress.css';
import '@fontsource/inter/variable-full.css';
import '~/styles/globals.css';
import '@code-hike/mdx/dist/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Migration compat
    <div className={`${fontSans.variable} font-sans`}>
      <DefaultSEO />
      <Analytics />
      <RouteProgressBar />

      <ReactWrapBalancerProvider>
        <ThemeProvider attribute="class">
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ThemeProvider>
      </ReactWrapBalancerProvider>
    </div>
  );
}
