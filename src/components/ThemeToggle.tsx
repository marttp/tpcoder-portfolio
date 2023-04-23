import { createSignal, createEffect } from 'solid-js';

const initializeTheme: () => string = () => {
  let theme;
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme') as 'light' | 'dark';
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  return theme;
};

const SunIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width={1.5}
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
};

const MoonIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width={1.5}
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
};

const ThemeToggle = () => {
  const [theme, setTheme] = createSignal<string>(initializeTheme());

  createEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme() === 'light') {
      root.classList.remove('dark');
      localStorage.theme = 'light';
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#2E2E2E';
      setTimeout(() => {
        body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
      }, 50);
    } else {
      localStorage.theme = 'dark';
      root.classList.add('dark');
      body.style.backgroundColor = '#2E2E2E';
      body.style.color = '#ffffff';
      setTimeout(() => {
        body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
      }, 50);
    }
  });

  return (
    <div class="flex items-center p-2">
      <button
        onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
      >
        {theme() === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
