import { twMerge } from 'tailwind-merge';

type Props = {
  size: keyof typeof spacerSizes;
  className?: string;
};

// We have to generate this manually, unfortunately :(
// ref: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const spacerSizes = {
  '2': 'h-2',
  '4': 'h-4',
  '5': 'h-5',
  '6': 'h-6',
  '7': 'h-7',
  '8': 'h-8',
  '9': 'h-9',
  '10': 'h-10',
  '11': 'h-11',
  '12': 'h-12',
  '14': 'h-14',
  '16': 'h-16',
  '20': 'h-20',
  '24': 'h-24',
  '28': 'h-28',
  '32': 'h-32',
  '36': 'h-36',
  '40': 'h-40',
  '44': 'h-44',
  '48': 'h-48',
  '52': 'h-52',
  '56': 'h-56',
  '60': 'h-60',
  '64': 'h-64',
  '72': 'h-72',
  '80': 'h-80',
  '96': 'h-96',
};

export function Spacer({ size, className = '' }: Props) {
  const classes = twMerge(spacerSizes[size], className);
  return <div className={classes} />;
}
