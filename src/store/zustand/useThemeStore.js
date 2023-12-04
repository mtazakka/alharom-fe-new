import { create } from 'zustand';

const themeSchemes = ['light', 'dark', 'system'];
const getThemeScheme = () => {
  const themeScheme = localStorage.getItem('theme');
  return themeSchemes.find((item) => item === themeScheme) || 'light';
};

const initialState = {
  menu: localStorage.getItem('menu') || 'vertical',
  semidark: localStorage.getItem('semidark') || false
};

const useThemeSchemeStore = create((set) => ({
  theme: localStorage.getItem('theme') === null ? 'light' : getThemeScheme(),
  isDarkMode: false,
  setThemeScheme: (scheme) => {
    localStorage.setItem('theme', scheme);
    set({ theme: scheme });
    const isDarkMode =
      scheme === 'dark' || (scheme === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    set({ isDarkMode });
    if (isDarkMode) {
      document.querySelector('body')?.classList.add('dark');
    } else {
      document.querySelector('body')?.classList.remove('dark');
    }
  },
  sidebar: localStorage.getItem('sidebar') || false,
  setSidebar: (value) => set({ sidebar: value }),
  menu: initialState.menu,
  setMenu: (value) => {
    localStorage.setItem('menu', value);
    set({ menu: value });
  },
  semidark: initialState.semidark === 'true' ? true : false,
  setSemidark: (value) => {
    const result = value.toString();
    localStorage.setItem('semidark', result);
    set({ semidark: value });
  },
  scrumboard: [],
  setScrumboard: (value) => set({ scrumboard: value })
}));

export default useThemeSchemeStore;
