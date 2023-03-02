import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function GradientText({ children, className = '' }: Props) {
  const classes = twMerge(
    'bg-gradient-to-r from-primary-700 to-secondary-700 bg-clip-text text-transparent',
    className
  );

  return <span className={classes}>{children}</span>;
}
