import { Badge } from '~/components/Badge';

import { techMap } from '~/constants';
import { clsxm } from '~/utils/clsxm';

type Props = {
  className?: string;
  list: string[];
  size?: 'sm' | 'lg';
  label?: string;
  showLabel?: boolean;
};

export function TechStack({
  className = '',
  list,
  size = 'sm',
  label = 'Built with:',
  showLabel = false,
}: Props) {
  return (
    <div className={clsxm(showLabel && 'flex items-center gap-4', className)}>
      <span
        className={clsxm(
          showLabel
            ? 'font-sm inline-block text-gray-500 dark:text-gray-400'
            : 'sr-only'
        )}
      >
        {label}
      </span>

      <ul className="flex flex-wrap items-center gap-3">
        {list.map(techName => {
          if (techName in techMap) {
            const { icon: Icon, hover } = techMap[techName];

            return (
              <li key={techName} className="flex items-center">
                <Icon
                  aria-hidden="true"
                  size={size === 'sm' ? 20 : 24}
                  className={`text-gray-700 hover:transition-colors hover:duration-300 dark:text-gray-300 ${hover}`}
                />
                <span className="sr-only">{techName}</span>
              </li>
            );
          }

          return (
            <li key={techName} className="flex items-center">
              <Badge size="sm">{techName}</Badge>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
