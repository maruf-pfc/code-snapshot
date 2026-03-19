import { useState, useEffect } from 'react';
import { ThemeId, defaultTheme } from '../themes';

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeId>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('cs-theme') as ThemeId;
    if (saved) {
      setThemeState(saved);
      document.documentElement.dataset.theme = saved;
    } else {
      document.documentElement.dataset.theme = defaultTheme;
    }
  }, []);

  const setTheme = (t: ThemeId) => {
    setThemeState(t);
    localStorage.setItem('cs-theme', t);
    document.documentElement.dataset.theme = t;
  };

  return { theme, setTheme, mounted };
}
