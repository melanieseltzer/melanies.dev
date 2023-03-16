import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { DocumentTypes } from 'contentlayer/generated';
import type { MDXComponents } from 'mdx/types';

import { Image } from '~/components/Image';

const defaultMDXComponents: MDXComponents = {
  Image,
};

interface MDXComponentProps {
  source: DocumentTypes;
  components?: MDXComponents;
}

export const MDXComponent = ({ source, components }: MDXComponentProps) => {
  const RenderMDXComponent = useMDXComponent(source.body.code);

  return (
    <RenderMDXComponent
      components={{
        ...defaultMDXComponents,
        ...components,
      }}
    />
  );
};
