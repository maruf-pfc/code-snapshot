export type ThemeId = 'monokai' | 'dracula' | 'github-dark' | 'nord';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  shikiTheme: string;
}

export const themes: ThemeConfig[] = [
  {
    id: 'monokai',
    name: 'Monokai',
    shikiTheme: 'monokai',
  },
  {
    id: 'dracula',
    name: 'Dracula',
    shikiTheme: 'dracula',
  },
  {
    id: 'github-dark',
    name: 'GitHub Dark',
    shikiTheme: 'github-dark',
  },
  {
    id: 'nord',
    name: 'Nord',
    shikiTheme: 'nord',
  },
];

export const defaultTheme: ThemeId = 'monokai';
