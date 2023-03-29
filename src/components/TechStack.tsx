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

const techIconMap: Record<string, { icon: IconType; color: string }> = {
  React: {
    icon: ReactIcon,
    color: 'text-[#0B7EA3] dark:text-[#61DAFB]',
  },
  TypeScript: {
    icon: TSIcon,
    color: 'text-[#3178c6] dark:text-[#3178c6]',
  },
  JavaScript: {
    icon: JSIcon,
    color: 'text-[#f1e05a] dark:text-[#f1e05a]',
  },
  CSS: {
    icon: CSSIcon,
    color: 'text-[#563d7c] dark:text-[#563d7c]',
  },
  'Tailwind CSS': {
    icon: TailwindIcon,
    color: 'text-[#06B6D4] dark:text-[#06B6D4]',
  },
  'Next.js': {
    icon: NextJSIcon,
    color: 'text-[#000] dark:text-[#fff]',
  },
  VSCode: {
    icon: VSCodeIcon,
    color: 'text-[#007ACC] dark:text-[#007ACC]',
  },
};

type Props = {
  className?: string;
  tech: string[];
  size?: 'sm' | 'lg';
  label?: string;
  showLabel?: boolean;
};

export function TechStack({
  className = '',
  tech,
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

      <ul
        className={clsxm(
          'flex flex-wrap items-center',
          size === 'sm' ? 'gap-2' : 'gap-3'
        )}
      >
        {tech.map(name => {
          if (name in techIconMap) {
            const { icon: Icon, color } = techIconMap[name];

            return (
              <li key={name}>
                <Icon
                  aria-hidden="true"
                  size={size === 'sm' ? 20 : 24}
                  className={`transition-colors duration-300 ${color}`}
                />
                <span className="sr-only">{name}</span>
              </li>
            );
          }

          return (
            <li key={name}>
              <Badge size="sm">{name}</Badge>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
