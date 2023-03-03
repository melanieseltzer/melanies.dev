import {
  SiCss3 as CSSIcon,
  SiJavascript as JSIcon,
  SiNextdotjs as NextJSIcon,
  SiReact as ReactIcon,
  SiTailwindcss as TailwindIcon,
  SiTypescript as TSIcon,
} from 'react-icons/si';

import { Badge } from '~/components/Badge';

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
            return (
              <span key={name}>
                {techIconMap[name]}
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

const sharedProps = {
  size: 20,
  className: 'text-gray-700 dark:text-white',
};

const techIconMap: Record<string, JSX.Element> = {
  React: <ReactIcon {...sharedProps} />,
  TypeScript: <TSIcon {...sharedProps} />,
  JavaScript: <JSIcon {...sharedProps} />,
  CSS: <CSSIcon {...sharedProps} />,
  'Tailwind CSS': <TailwindIcon {...sharedProps} />,
  'Next.js': <NextJSIcon {...sharedProps} />,
};
