import { ThemeId, themes } from '../themes';
import { clsx } from 'clsx';
import { Sun, Moon, Github, Code } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeSwitcher() {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) return <div className="h-8 w-24"></div>;

  return (
    <div className="flex bg-black/10 dark:bg-black/40 p-1 rounded-full border border-black/5 dark:border-white/5 shadow-inner backdrop-blur-sm">
      {themes.map((t) => {
        let Icon = Code;
        if (t.id === 'monokai') Icon = Code;
        if (t.id === 'dracula') Icon = Moon;
        if (t.id === 'github-dark') Icon = Github;
        if (t.id === 'nord') Icon = Sun;

        const isActive = theme === t.id;

        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={clsx(
              'px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all duration-200',
              isActive
                ? 'bg-white dark:bg-[#32344a] text-black dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5'
            )}
          >
            <Icon
              size={12}
              className={isActive ? 'opacity-100' : 'opacity-70'}
            />
            {t.name}
          </button>
        );
      })}
    </div>
  );
}
