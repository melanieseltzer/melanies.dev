import { IconType } from 'react-icons';
import {
  SiCss3 as CSSIcon,
  SiJavascript as JSIcon,
  SiNextdotjs as NextJSIcon,
  SiReact as ReactIcon,
  SiTailwindcss as TailwindIcon,
  SiTypescript as TSIcon,
} from 'react-icons/si';
import clsx from 'clsx';

import { Badge } from '~/components/Badge';

const techIconMap: Record<string, { icon: IconType; accentColor: string }> = {
  React: { icon: ReactIcon, accentColor: 'hover:text-[#61DAFB]' },
  TypeScript: { icon: TSIcon, accentColor: 'hover:text-[#3178c6]' },
  JavaScript: { icon: JSIcon, accentColor: 'hover:text-[#f1e05a]' },
  CSS: { icon: CSSIcon, accentColor: 'hover:text-[#563d7c]' },
  'Tailwind CSS': { icon: TailwindIcon, accentColor: 'hover:text-[#06B6D4]' },
  'Next.js': { icon: NextJSIcon, accentColor: 'hover:text-[#000000]' },
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
    <>
      <span
        className={clsx(
          showLabel
            ? 'font-sm mb-1 inline-block text-gray-600 dark:text-white'
            : 'sr-only'
        )}
      >
        {label}
      </span>

      <ul
        className={clsx(
          'mb-4 flex flex-wrap items-center',
          size === 'sm' ? 'gap-2' : 'gap-3'
        )}
      >
        {tech.map(name => {
          if (name in techIconMap) {
            const { icon: Icon, accentColor } = techIconMap[name];

            return (
              <li key={name}>
                <Icon
                  aria-hidden={true}
                  size={size === 'sm' ? 20 : 24}
                  className={`text-gray-500 transition-colors dark:text-white ${accentColor}`}
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
    </>
  );
}
