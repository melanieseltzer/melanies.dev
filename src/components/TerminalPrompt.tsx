import { clsx } from 'clsx';

import { Spacer } from '~/components/Spacer';

export function TerminalPrompt() {
  return (
    <div
      role="img"
      aria-label="Illustration of my terminal window using Sindre Sorhus' Pure prompt"
      className="h-72 w-96 rounded-md bg-gray-900 p-4 font-mono font-semibold shadow-2xl"
    >
      <div className="flex gap-2 pb-4">
        <WindowButton color="red" />
        <WindowButton color="yellow" />
        <WindowButton color="green" />
      </div>

      <Spacer size="4" />

      <div className="text-xl text-sky-500">&#126;/melanies.dev</div>

      <div
        className={clsx(
          'flex items-center text-3xl text-primary-600',
          // cursor portion
          "after:ml-2 after:mt-[3px] after:h-[20px] after:w-[10px] after:bg-gray-300 after:content-['']",
          // only blink if reduce motion is off
          'motion-safe:after:animate-[cursorBlink_1.5s_steps(2)_infinite]'
        )}
      >
        &#10095;
      </div>
    </div>
  );
}

const colorMap: Record<string, string> = {
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
};

function WindowButton({ color }: { color: string }) {
  return <span className={`h-3 w-3 rounded-full ${colorMap[color]}`} />;
}
