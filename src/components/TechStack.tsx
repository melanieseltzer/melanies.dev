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
import clsx from 'clsx';

import { Badge } from '~/components/Badge';

const techIconMap: Record<string, { icon: IconType; accentColor: string }> = {
  React: {
    icon: ReactIcon,
    accentColor: 'hover:text-[#61DAFB] dark:hover:text-[#61DAFB]',
  },
  TypeScript: {
    icon: TSIcon,
    accentColor: 'hover:text-[#3178c6] dark:hover:text-[#3178c6]',
  },
  JavaScript: {
    icon: JSIcon,
    accentColor: 'hover:text-[#f1e05a] dark:hover:text-[#f1e05a]',
  },
  CSS: {
    icon: CSSIcon,
    accentColor: 'hover:text-[#563d7c] dark:hover:text-[#563d7c]',
  },
  'Tailwind CSS': {
    icon: TailwindIcon,
    accentColor: 'hover:text-[#06B6D4] dark:hover:text-[#06B6D4]',
  },
  'Next.js': {
    icon: NextJSIcon,
    accentColor: 'hover:text-[#000] dark:hover:text-[#fff]',
  },
  VSCode: {
    icon: VSCodeIcon,
    accentColor: 'hover:text-[#007ACC] dark:hover:text-[#007ACC]',
  },
};

type Props = {
  tech: string[];
  size?: 'sm' | 'lg';
  label?: string;
  showLabel?: boolean;
};

export function TechStack({
  tech,
  size = 'sm',
  label = 'Built with:',
  showLabel = false,
}: Props) {
  return (
    <div>
      <span
        className={clsx(
          showLabel
            ? 'font-sm mb-1 inline-block text-gray-600 dark:text-gray-400'
            : 'sr-only'
        )}
      >
        {label}
      </span>

      <ul
        className={clsx(
          'flex flex-wrap items-center',
          size === 'sm' ? 'gap-2' : 'gap-3'
        )}
      >
        {tech.map(name => {
          if (name in techIconMap) {
            const { icon: Icon, accentColor } = techIconMap[name];

            return (
              <li key={name}>
                <Icon
                  aria-hidden="true"
                  size={size === 'sm' ? 20 : 24}
                  className={`text-gray-500 transition-colors duration-300 dark:text-gray-400 ${accentColor}`}
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
