'use client';

import * as React from 'react';
import { Provider as ReactWrapBalancerProvider } from 'react-wrap-balancer';
import { ThemeProvider } from 'next-themes';

interface Props {
  children: React.ReactNode;
}

export function RootProviders({ children }: Props) {
  return (
    <ReactWrapBalancerProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </ReactWrapBalancerProvider>
  );
}
