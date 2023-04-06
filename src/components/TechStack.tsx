import { IconType } from 'react-icons';
import {
  SiCss3 as CSSIcon,
  SiJavascript as JSIcon,
  SiNextdotjs as NextJSIcon,
  SiReact as ReactIcon,
  SiTailwindcss as TailwindIcon,
  SiTypescript as TSIcon,
  SiVisualstudiocode as VSCodeIcon,
} from 'react-icons/si';

import { Badge } from '~/components/Badge';

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
    <div className={clsxm(showLabel && 'flex items-center gap-2', className)}>
      <span
        className={clsxm(
          showLabel
            ? 'font-sm inline-block text-gray-500 dark:text-gray-400'
            : 'sr-only'
        )}
      >
        {label}
      </span>

      <ul className="flex flex-wrap items-center gap-2">
        {list.map(techName => {
          if (techName in techIconMap) {
            const { icon: Icon, color } = techIconMap[techName];

            return (
              <li key={techName} className="flex items-center">
                <Icon
                  aria-hidden="true"
                  size={size === 'sm' ? 20 : 24}
                  className={`text-gray-700 hover:transition-colors hover:duration-300 dark:text-gray-300 ${color}`}
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

const techIconMap: Record<string, { icon: IconType; color: string }> = {
  React: {
    icon: ReactIcon,
    color: 'hover:text-[#0B7EA3] hover:dark:text-[#61DAFB]',
  },
  TypeScript: {
    icon: TSIcon,
    color: 'hover:text-[#3178c6] hover:dark:text-[#3178c6]',
  },
  JavaScript: {
    icon: JSIcon,
    color: 'hover:text-[#f1e05a] hover:dark:text-[#f1e05a]',
  },
  CSS: {
    icon: CSSIcon,
    color: 'hover:text-[#2566F1] hover:dark:text-[#2566F1]',
  },
  'Tailwind CSS': {
    icon: TailwindIcon,
    color: 'hover:text-[#06B6D4] hover:dark:text-[#06B6D4]',
  },
  'Next.js': {
    icon: NextJSIcon,
    color: 'hover:text-[#000] hover:dark:text-white',
  },
  VSCode: {
    icon: VSCodeIcon,
    color: 'hover:text-[#007ACC] hover:dark:text-[#007ACC]',
  },
};
