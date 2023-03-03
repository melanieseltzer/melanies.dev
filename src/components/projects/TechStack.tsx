import { IconType } from 'react-icons';
import {
  SiCss3 as CSSIcon,
  SiJavascript as JSIcon,
  SiNextdotjs as NextJSIcon,
  SiReact as ReactIcon,
  SiTailwindcss as TailwindIcon,
  SiTypescript as TSIcon,
} from 'react-icons/si';

import { Badge } from '~/components/Badge';

const techIconMap: Record<string, IconType> = {
  React: ReactIcon,
  TypeScript: TSIcon,
  JavaScript: JSIcon,
  CSS: CSSIcon,
  'Tailwind CSS': TailwindIcon,
  'Next.js': NextJSIcon,
};

type Props = {
  tech: string[];
};

export function TechStackDisplay({ tech }: Props) {
  return (
    <>
      <span className="sr-only">Built with</span>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        {tech.map(name => {
          if (name in techIconMap) {
            const Icon = techIconMap[name];

            return (
              <span key={name}>
                <Icon size={20} className="text-gray-700 dark:text-white" />
                <span className="sr-only">{name}</span>
              </span>
            );
          }

          return (
            <Badge key={name} size="sm">
              {name}
            </Badge>
          );
        })}
      </div>
    </>
  );
}
