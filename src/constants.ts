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

type TechInfo = {
  icon: IconType;
  displayName: string;
  bg: string;
  hover: string;
};

// Language colors from https://github.com/ozh/github-colors/blob/master/colors.json
// Would be nice to fetch it automatically, but I need full control for Tailwind classes
// and dark mode variations.
export const techMap: Record<string, TechInfo> = {
  react: {
    icon: ReactIcon,
    displayName: 'React',
    bg: 'bg-[#0B7EA3] dark:bg-[#61DAFB]',
    hover: 'hover:text-[#0B7EA3] hover:dark:text-[#61DAFB]',
  },
  typescript: {
    icon: TSIcon,
    displayName: 'TypeScript',
    bg: 'bg-[#3178c6]',
    hover: 'hover:text-[#3178c6] hover:dark:text-[#3178c6]',
  },
  javascript: {
    icon: JSIcon,
    displayName: 'JavaScript',
    bg: 'bg-[#f1e05a]',
    hover: 'hover:text-[#f1e05a] hover:dark:text-[#f1e05a]',
  },
  css: {
    icon: CSSIcon,
    displayName: 'CSS',
    bg: 'bg-[#563d7c]',
    hover: 'hover:text-[#563d7c] hover:dark:text-[#563d7c]',
  },
  tailwind: {
    icon: TailwindIcon,
    displayName: 'Tailwind CSS',
    bg: 'bg-[#06B6D4]',
    hover: 'hover:text-[#06B6D4] hover:dark:text-[#06B6D4]',
  },
  nextjs: {
    icon: NextJSIcon,
    displayName: 'Next.js',
    bg: 'bg-[#000] dark:bg-white',
    hover: 'hover:text-[#000] hover:dark:text-white',
  },
  vscode: {
    icon: VSCodeIcon,
    displayName: 'VSCode',
    bg: 'bg-[#007ACC]',
    hover: 'hover:text-[#007ACC] hover:dark:text-[#007ACC]',
  },
};
