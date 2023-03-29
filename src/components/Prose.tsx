import { clsxm } from '~/utils/clsxm';

type Props = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  autoLinkHeadings?: boolean;
};

export function Prose({
  as: Tag = 'div',
  className = '',
  children,
  autoLinkHeadings = false,
}: Props) {
  const classes = clsxm(
    'prose prose-lg dark:prose-invert dark:prose-dark',
    className,
    !autoLinkHeadings && 'no-autolink-headings'
  );

  return <Tag className={classes}>{children}</Tag>;
}
