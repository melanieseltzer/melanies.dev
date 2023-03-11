import NextImage, { ImageProps as NextImageProps } from 'next/image';

type ImageProps = NextImageProps;

export function Image(props: ImageProps) {
  return <NextImage {...props} />;
}
