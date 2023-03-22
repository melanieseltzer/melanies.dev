import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';

import { Image } from '~/components/Image';
import { Link } from '~/components/Link';

interface MDXComponentProps {
  source: string;
  components?: MDXComponents;
}

export const MDXComponent = ({ source, components }: MDXComponentProps) => {
  const RenderMDXComponent = useMDXComponent(source);

  return (
    <RenderMDXComponent
      components={{
        // This is an icky but essentially harmless type assertion due to conflicting `href` types.
        // `href` will NEVER be undefined in our custom `Link` component (we've ensured that),
        // but `MDXComponents` says it could be so it's conflicting.
        ...(defaultMDXComponents as MDXComponents),
        ...components,
      }}
    />
  );
};

const defaultMDXComponents = {
  Image,
  a: Link,
};
